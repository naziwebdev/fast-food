"use client"

import styles from "./ProductCard.module.css";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import FavoriteBtn from "@/components/modules/FavoriteBtn/FavoriteBtn";
import RemoveFavoriteBtn from "../RemoveFavoriteBtn/RemoveFavoriteBtn";
import swal from "sweetalert";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductCard({ remove ,isfull, product}) {
  const [counter, setCounter] = useState(1);
  const router = useRouter()
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
      }).then((value) => {
        if(value){
            router.refresh()
        }
      });
    }
  };
  return (
    <div className={`${styles.card} ${isfull && styles.full_card} `}>
      <div className={styles.card_head}>
        <img
          src={product.img}
          alt="product"
          className={styles.card_img}
          width={320}
          height={250}
        />
        <div className={styles.card_actions}>
          <div className={styles.card_actions_icons}>
            {remove ? <RemoveFavoriteBtn product={product._id} /> :
            <FavoriteBtn product={product._id} />
  }
          </div>
          <div onClick={addBasket}  className={styles.card_addBtn}>
            <SlBasket className={styles.card_icon} />
            <p className={styles.card_addText}>افزودن به سبد خرید</p>
          </div>
        </div>
      </div>
      <div className={styles.card_details}>
        <Link href={`/product/${product?._id}`} className={styles.card_title}>{product?.title}</Link>
        <div className={styles.card_score_box}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>
      <p className={styles.card_price}>
        {product?.price?.toLocaleString("fa-IR")} {" "} تومان
      </p>
    </div>
  );
}
