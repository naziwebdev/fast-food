import styles from "./TicketCard.module.css";
import Link from "next/link";

export default function TicketCard({ ticket }) {
  return (
    <Link href={`/p-user/tickets/answer/${ticket._id}`} className={styles.ticket_link}>
      <div className={styles.ticket}>
        <div className={styles.ticket_content}>
          <p className={styles.ticket_msg}>{ticket.body}</p>
          <span className={styles.ticket_date}>
            {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <div className={styles.ticket_content}>
          <div className={styles.ticket_support}>
            {ticket.department?.title}
          </div>
          <span className={`${ticket.hasAnswer === true ? styles.ticket_status : styles.ticket_status_yellow}`}>
            {ticket.hasAnswer === true ? "پاسخ داده شده " : "پاسخ داده نشده"}
          </span>
        </div>
      </div>
    </Link>
  );
}
