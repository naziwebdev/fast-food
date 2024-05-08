"use client";

import styles from "./Details.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import FavoriteBtn from "@/components/modules/FavoriteBtn/FavoriteBtn";
import { useState } from "react";
import swal from "sweetalert";

export default function Details({ product }) {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const addBasket = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length) {
      const isInCart = cart.some((item) => item.id == product._id);

      if (isInCart) {
        cart.forEach((item) => {
          if (item.id == product._id) {
            item.count += counter;
          }
        });
      } else {
        const mainProduct= {
          id: product._id,
          title: product.title,
          count: counter,
          price: product.price,
        };

        cart.push(mainProduct);

        localStorage.setItem("cart", JSON.stringify(cart));
        swal({
          title: "محصول با موفقیت به سبد خرید افزوده شد",
          icon: "success",
          buttons: "بستن",
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      swal({
        title: "محصول با موفقیت به سبد خرید افزوده شد",
        icon: "success",
        buttons: "بستن",
      });
    } else {
      const mainProduct = {
        id: product._id,
        title: product.title,
        count: counter,
        price: product.price,
      };

      cart.push(mainProduct);

      localStorage.setItem("cart", JSON.stringify(cart));
      swal({
        title: "محصول با موفقیت به سبد خرید افزوده شد",
        icon: "success",
        buttons: "بستن",
      });
    }
  };

  return (
    <div className={styles.details}>
      <div className={styles.review}>
        <span
          className={`${
            product.countAvailable != 0
              ? styles.review_text
              : styles.review_text_red
          }`}
        >
          {product.countAvailable != 0 ? (
            <>
              موجود <span className={styles.review_text_icon}>✓</span>
            </>
          ) : (
            <>
              نا موجود <span className={styles.review_text_icon}>✕</span>
            </>
          )}
        </span>
        <div className={styles.review_icons}>
          {new Array(product.score).fill(0).map((star) => (
            <FaStar key={crypto.randomUUID()} className={styles.review_icon} />
          ))}
          {new Array(5 - product.score).fill(0).map((star) => (
            <FaRegStar
              key={crypto.randomUUID()}
              className={styles.review_icon}
            />
          ))}
        </div>
        <p className={styles.review_count}>
          (تعداد کامنت{" "}
          {product.comments
            .filter((item) => item.isAccept != 0)
            .length.toLocaleString("fa")}
          )
        </p>
      </div>
      <div className={styles.details_title}>{product.title}</div>
      <h4 className={styles.details_price}>
        {product.price.toLocaleString("fa")}
        <span className={styles.details_price2}>تومان</span>
      </h4>
      <h4 className={styles.details_text2}>مخلفات این محصول شامل :</h4>
      <p className={styles.details_text3}>
        {product.materials.map((item) => item).join(" , ")}
      </p>
      <div className={styles.buy}>
        <div className={styles.counterBtn}>
          <div className={styles.plusBtn} onClick={increaseCounter}>
            +
          </div>
          <div className={styles.showCount}>{counter}</div>
          <div className={styles.minusBtn} onClick={decreaseCounter}>
            -
          </div>
        </div>
        <button className={styles.addBtn} onClick={addBasket}>
          افزودن به سبد خرید
        </button>
      </div>
      <div className={styles.favorite}>
        افزودن به علاقه مندی ها
        <FavoriteBtn product={product?._id} />
      </div>
      <div className={styles.tags}>
        <span className={styles.tag}> برچسب ها :</span>
        <p className={styles.details_text3}>
          {product.tags.map((item) => item).join(" , ")}
        </p>
      </div>
      <div className={styles.tags}>
        <span className={styles.tag}> دسته بندی</span>
        <p className={styles.details_text3}>فست فود , پیتزا </p>
      </div>
    </div>
  );
}
