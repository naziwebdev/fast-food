import styles from "./ProductCard.module.css";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

export default function ProductCard() {
  return (
    <div className={styles.card}>
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
            <FaSearch/>
            <FaRegHeart/>
           </div>
           <div className={styles.card_addBtn}>
            <SlBasket className={styles.card_icon}/>
            <p className={styles.card_addText}>انتخاب گزینه ها</p>
           </div>
        </div>
      </div>
      <div className={styles.card_details}>
        <p className={styles.card_title}>
            پیتزا مخلوط مخصوص
        </p>
        <div className={styles.card_score_box}>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
        </div>
        <p className={styles.card_price}>3000000 تومان</p>
      </div>
    </div>
  );
}
