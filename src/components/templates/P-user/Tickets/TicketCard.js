import styles from "./TicketCard.module.css";
export default function TicketCard({ ticket }) {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket_content}>
        <p className={styles.ticket_msg}>{ticket.body}</p>
        <span className={styles.ticket_date}>
          {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
      <div className={styles.ticket_content}>
        <div className={styles.ticket_support}>{ticket.department?.title}</div>
        <span className={styles.ticket_status}>
          {ticket.hasAnswer === true ? "پاسخ داده شده " : "پاسخ داده نشده"}
        </span>
      </div>
    </div>
  );
}
