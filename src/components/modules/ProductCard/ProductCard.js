import styles from "./ProductCard.module.css";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import FavoriteBtn from "@/components/modules/FavoriteBtn/FavoriteBtn";
import RemoveFavoriteBtn from "../RemoveFavoriteBtn/RemoveFavoriteBtn";


export default function ProductCard({ remove ,isfull, product}) {

  return (
    <div className={`${styles.card} ${isfull && styles.full_card} `}>
      <div className={styles.card_head}>
        <Image
          src="/images/p-4.jpg"
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
          <div className={styles.card_addBtn}>
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
