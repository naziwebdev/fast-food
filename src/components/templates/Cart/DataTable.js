"use client";
import styles from "./DataTable.module.css";
import Image from "next/image";
import Select from "react-select";
import stateData from "@/utils/StateData";
import { useState, useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import orderValidation from "@/validations/order";
import { FaShoppingBasket } from "react-icons/fa";

const stateOptions = stateData();

export default function DataTable({ userID }) {
  const [changeAddress, setChangeAddress] = useState(false);
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalTotalPrice, setFinalTotalPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    setProducts(cart);
  }, []);

  const removeProduct = (productID) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const indexToRemove = cart.findIndex((item) => item.id == productID);
    cart.splice(indexToRemove, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setProducts(cart);
    swal({
      title: "با موفقیت حذف شد",
      icon: "success",
      buttons: "بستن",
    }).then((value) => {
      if (value) {
        location.reload();
      }
    });
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [products]);

  const calculateTotalPrice = () => {
    let price = 0;

    if (products.length) {
      price = products.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
      setTotalPrice(price);
      setFinalTotalPrice(price + 50000);
    }

    setTotalPrice(price);
  };

  const ckeckDiscount = async () => {
    const res = await fetch("/api/offs/use", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ code: discount }),
    });

    if (res.status === 404) {
      return swal({
        title: "کد تخفیف یافت نشد",
        icon: "warning",
        buttons: "بستن",
      });
    } else if (res.status === 422) {
      return swal({
        title: "کد تخفیف  منقضی شده",
        icon: "warning",
        buttons: "بستن",
      });
    } else if (res.status === 200) {
      const data = await res.json();
      const finalPrice = totalPrice - (totalPrice * data.percent) / 100;
      setTotalPrice(finalPrice);
      setFinalTotalPrice(finalPrice + 50000);
      setDiscount("");
      return swal({
        title: "کد تخفیف با وفقیت اعمال شد",
        icon: "success",
        buttons: "بستن",
      });
    }
  };

  const addOrder = async (event) => {
    event.preventDefault();

    if (!userID) {
      swal({
        title: "ابتدا لاگین کنید",
        icon: "warning",
        buttons: ["بستن ", "ورود به حساب"],
      }).then((value) => {
        if (value) {
          router.replace("/login-register");
        }
      });
    } else {
      swal({
        title: "از ثبت سفارش اطمینان دارید؟",
        icon: "warning",
        buttons: ["خیر", "بله"],
      }).then(async (value) => {
        if (value) {
          if (!address || !stateSelectedOption) {
            return swal({
              title: "ابتدا آدرس را وارد کنید",
              icon: "warning",
              buttons: "بستن",
            });
          }

          const productsID = products.map((item) => item.id);

          const order = {
            userID,
            products: productsID,
            price: finalTotalPrice,
            city: stateSelectedOption.label,
            address,
          };

          try {
            await orderValidation.validate(order);
          } catch (err) {
            return swal({
              title: err,
              icon: "error",
              buttons: "تلاش دوباره",
            });
          }

          const res = await fetch("/api/orders", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(order),
          });

          if (res.status === 201) {
            await res.json();

            swal({
              title: " با موفقیت ثبت شد",
              icon: "success",
              buttons: "بستن",
            }).then((value) => {
              if (value) {
                setAddress("");
                setTotalPrice(0);
                setFinalTotalPrice(0);
                setProducts([]);
                localStorage.removeItem("cart");
                router.refresh();
              }
            });
          } else {
            swal({
              title: await res.status,
              icon: "error",
              buttons: "تلاش دوباره",
            });
            console.log(await res.json());
          }
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table_head}>
              <th className={styles.table_title}>محصول</th>
              <th className={styles.table_title}>قیمت </th>
              <th className={styles.table_title}>تعداد</th>
              <th className={styles.table_title}>جمع جز</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className={styles.table_row}>
                <td className={`${styles.table_col} ${styles.product_wrapper}`}>
                  <button
                    onClick={() => removeProduct(item.id)}
                    className={styles.remove_product}
                  >
                    <RiDeleteBin6Fill />
                  </button>
                  <Image
                    src="/images/p-7.jpg"
                    width={60}
                    height={60}
                    alt="product"
                    className={styles.product_img}
                  />
                  <p className={styles.product_title}>{item.title}</p>
                </td>
                <td> {item.price.toLocaleString("fa-IR")} تومان</td>
                <td className={styles.count_wrapper}>
                  {item.count.toLocaleString("fa-IR")} ✕
                </td>
                <td>{(item.price * item.count).toLocaleString("fa-IR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className={styles.empety_cart}>
            <FaShoppingBasket className={styles.cart_icon} />
            سبد خرید خالی است
          </div>
        )}
        {products.length !== 0 && (
          <div className={styles.discount_wrapper}>
            <input
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              type="text"
              placeholder="کد تخفیف را وارد کنید"
              className={styles.discount_input}
            />
            <button onClick={ckeckDiscount} className={styles.discount_btn}>
              اعمال کوپن
            </button>
          </div>
        )}
      </div>

      <div className={styles.factor}>
        <h3 className={styles.factor_title}>جمع کل سبد خرید</h3>
        <div className={styles.factor_part}>
          <h5 className={styles.factor_text}>جمع جز</h5>
          <p className={styles.factor_text2}>
            {totalPrice.toLocaleString("fa-IR")} تومان
          </p>
        </div>
        <div className={`${styles.factor_part} ${styles.factor_part5}`}>
          <h5 className={styles.factor_text}>حمل و نقل </h5>
          <div className={styles.factor_part2}>
            <p className={styles.factor_text}>پیک موتوری : ۵۰۰۰۰ تومان</p>
            <p className={styles.factor_text2}>حمل و نقل به تهران</p>
            <h5
              onClick={() => setChangeAddress((prev) => !prev)}
              className={`${styles.factor_text} ${styles.factor_address}`}
            >
              تغییر آدرس
            </h5>
            {changeAddress && (
              <div className={styles.address_details}>
                <Select
                  defaultValue={stateSelectedOption}
                  onChange={setStateSelectedOption}
                  isClearable={true}
                  placeholder={"استان"}
                  isRtl={true}
                  isSearchable={true}
                  options={stateOptions}
                />
                <textarea
                  className={styles.address_input}
                  placeholder="آدرس"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                ></textarea>
                <input
                  className={styles.address_input}
                  type="text"
                  placeholder="کد پستی"
                />
                <button
                  className={styles.update_btn}
                  onClick={() => setChangeAddress(false)}
                >
                  بروزرسانی
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={`${styles.factor_part} ${styles.factor_part3} `}>
          <h3 className={styles.factor_total}>مجموع</h3>
          <h3 className={styles.factor_total}>
            {finalTotalPrice.toLocaleString("fa-IR")} تومان
          </h3>
        </div>
        <button onClick={addOrder} className={styles.pay_btn}>
          ادامه جهت تسویه حساب
        </button>
      </div>
    </div>
  );
}
