import styles from "./Details.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Details() {
  return (
    <div className={styles.details}>
      <div className={styles.review}>
        <span className={styles.review_text}>
          موجود <span className={styles.review_text_icon}>✓</span>
        </span>
        <div className={styles.review_icons}>
          <FaStar className={styles.review_icon} />
          <FaStar className={styles.review_icon} />
          <FaStar className={styles.review_icon} />
          <FaStar className={styles.review_icon} />
          <FaStar className={styles.review_icon} />
        </div>
        <p className={styles.review_count}>(تعداد کامنت ۴)</p>
      </div>
      <div className={styles.details_title}>پیتزا مخلوط با سس سیر تند</div>
      <h4 className={styles.details_price}>
        1000000
        <span className={styles.details_price2}>تومان</span>
      </h4>
      <h4 className={styles.details_text2}>مخلفات این محصول شامل :</h4>
      <p className={styles.details_text3}>
        مرغ , قارچ , سوسیس , سس , ادویه مخصوص
      </p>
      <div className={styles.buy}>
        <div className={styles.counterBtn}>
          <div className={styles.plusBtn}>+</div>
          <div className={styles.showCount}>1</div>
          <div className={styles.minusBtn}>-</div>
        </div>
        <div className={styles.addBtn}>افزودن به سبد خرید</div>
      </div>
      <di className={styles.favorite}>
        افزودن به علاقه مندی ها
        <FaRegHeart className={styles.favorite_icon} />
      </di>
      <div className={styles.tags}>
        <span className={styles.tag}> برچسب ها :</span>
        <p className={styles.details_text3}>
          فست فود , پیتزا , برگر , ساندویچ , پپرونی , چیز برگر
        </p>
      </div>
      <div className={styles.tags}>
        <span className={styles.tag}> دسته بندی</span>
        <p className={styles.details_text3}>فست فود , پیتزا </p>
      </div>
    </div>
  );
}
