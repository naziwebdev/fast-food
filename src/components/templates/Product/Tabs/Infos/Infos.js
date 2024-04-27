import styles from "./Infos.module.css";

export default function Infos() {
  return (
    <ul className={styles.info}>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          نام
        </div>
        <div className={styles.info_text}>پیتزا مخلوط</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          وزن
        </div>
        <div className={styles.info_text}>۵۰۰گرم</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          مواد به کار رقته
        </div>
        <div className={styles.info_text}>
          سوسیس , قارچ , سیب زمینی , سیر
        </div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          سس
        </div>
        <div className={styles.info_text}>دارد</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          طعم
        </div>
        <div className={styles.info_text}>تند</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
        اندازه
        </div>
        <div className={styles.info_text}>۲۳ سانت</div>
      </li>
    </ul>
  );
}
