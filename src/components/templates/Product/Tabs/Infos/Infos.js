import styles from "./Infos.module.css";

export default function Infos({product}) {
  return (
    <ul className={styles.info}>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          نام
        </div>
        <div className={styles.info_text}>{product.title}</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          وزن
        </div>
        <div className={styles.info_text}>{product.weight} گرم</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
          مواد به کار رقته
        </div>
        <div className={styles.info_text}>
        {product.materials.map((item) => item).join(" , ")}
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
        <div className={styles.info_text}>{product.tast}</div>
      </li>
      <li className={styles.info_item}>
        <div className={styles.info_title}>
        اندازه
        </div>
        <div className={styles.info_text}> {product.size} سانتی متر</div>
      </li>
    </ul>
  );
}
