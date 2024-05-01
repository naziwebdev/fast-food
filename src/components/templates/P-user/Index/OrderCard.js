import styles from "./OrderCard.module.css";
export default function OrderCard() {
  return (
    <div className={styles.order}>
      <div className={styles.order_content}>
        <p className={styles.order_msg}>سلام سفارش ارسال نشده</p>
        <span className={styles.order_date}>1403/2/12</span>
      </div>
      <div className={styles.order_content}>
        <div className={styles.order_support}>واحد پشتیبانی</div>
        <span className={styles.order_status}>پاسخ داده شده</span>
      </div>
    </div>
  );
}
