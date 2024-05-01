import styles from "./TicketCard.module.css";
export default function TicketCard() {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket_content}>
        <p className={styles.ticket_msg}>سلام سفارش ارسال نشده</p>
        <span className={styles.ticket_date}>1403/2/12</span>
      </div>
      <div className={styles.ticket_content}>
        <div className={styles.ticket_support}>واحد پشتیبانی</div>
        <span className={styles.ticket_status}>پاسخ داده شده</span>
      </div>
    </div>
  );
}
