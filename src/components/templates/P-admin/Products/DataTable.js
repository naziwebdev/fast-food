"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Modal from "@/components/modules/Modal/Modal";
import { useState } from "react";
import productValidation from "@/validations/detailsProduct";
import Image from "next/image";

export default function DataTable({ products }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [countAvailable, setCountAvailable] = useState(0);
  const [weight, setWeight] = useState(0);
  const [materials, setMaterals] = useState([]);
  const [tast, setTast] = useState("");
  const [size, setSize] = useState(0);
  const [img, setImg] = useState({});
  const [productID,setProductID] = useState("")

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };


  const editHandler = (product) => {
    setShowModal(true)
    setTitle(product.title)
    setPrice(product.price)
    setTags(product.tags)
    setDescription(product.description)
    setCountAvailable(product.countAvailable)
    setWeight(product.weight)
    setMaterals(product.materials)
    setTast(product.tast)
    setSize(product.size)
    setProductID(product._id)

  }

  const editProduct = async (event) => {
 
    event.preventDefault();
    setShowModal(false)
    const formData = new FormData();
    
    formData.append("title", title);
    formData.append("price", price);
    formData.append("tags", tags);
    formData.append("description", description);
    formData.append("countAvailable", countAvailable);
    formData.append("weight", weight);
    formData.append("materials", materials);
    formData.append("tast", tast);
    formData.append("size", size);
    formData.append("img", img);

    try {
      await productValidation.validate({
        title,
        price,
        tags,
        description,
        countAvailable,
        weight,
        materials,
        tast,
        size,
        img,
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch(`/api/products/${productID}`, {
      method: "PUT",
      body: formData,
    });

    if (res.status === 200) {

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
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
  };

  const removeProduct = async (productID) => {
    swal({
      title: " از حذف محصول اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/products/${productID}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "  با موفقیت انجام شد",
            icon: "success",
            buttons: "بستن",
          }).then((value) => {
            if (value) {
              router.refresh();
            }
          });
        } else {
          swal({
            title: "عملیات با شکست روبرو شد ",
            icon: "error",
            buttons: "بستن",
          });
          console.log(await res.json());
        }
      }
    });
  };

  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_head}>
            <th className={styles.table_title}>شناسه</th>
            <th className={styles.table_title}>عکس</th>
            <th className={styles.table_title}>عنوان</th>
            <th className={styles.table_title}>مبلغ</th>
            <th className={styles.table_title}>موجودی</th>
            <th className={styles.table_title}>امتیاز</th>
            <th className={styles.table_title}>ویرایش</th>
            <th className={styles.table_title}>حذف</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>
                <img
                  src={item?.img}
                  width={90}
                  height={60}
                  alt="product"
                  className={styles.table_img}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price.toLocaleString("fa-IR")}</td>
              <td>{item.countAvailable}</td>
              <td>{item.score}</td>
              <td>
                <button
                  onClick={() => editHandler(item)}
                  className={`${styles.btn} ${styles.seen_btn}`}
                >
                  ویرایش
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeProduct(item._id)}
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal onClose={closeModal}>
          <form className={styles.form}>
            <div className={styles.input_wrapper}>
              <label htmlFor="title">عنوان </label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                id="title"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="price">قیمت</label>
              <input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                id="price"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="tags">تگ ها </label>
              <input
                value={tags}
                onChange={(event) => setTags(event.target.value.split(","))}
                id="tags"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="description">توضیحات</label>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                id="description"
                className={styles.textarea}
              ></textarea>
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="countAvailable">موجودی </label>
              <input
                value={countAvailable}
                onChange={(event) => setCountAvailable(event.target.value)}
                id="countAvailable"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="weight">وزن </label>
              <input
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                id="weight"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="materials">مواد تشکیل دهنده</label>
              <input
                value={materials}
                onChange={(event) => setMaterals(event.target.value.split(","))}
                id="materials"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="tast">مزه </label>
              <input
                value={tast}
                onChange={(event) => setTast(event.target.value)}
                id="tast"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="size">اندازه</label>
              <input
                value={size}
                onChange={(event) => setSize(event.target.value)}
                id="size"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="img">عکس </label>
              <input
                onChange={(event) => setImg(event.target.files[0])}
                id="img"
                type="file"
                className={styles.input}
              />
            </div>

            <button onClick={editProduct} className={styles.form_btn}>
              آپدیت
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
