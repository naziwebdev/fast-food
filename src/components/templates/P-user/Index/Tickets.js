import styles from "./Tickets.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import TicketCard from "./TicketCard";

export default function Tickets({ tickets }) {
  return (
    <div className={styles.tickets}>
      <div className={styles.tickets_titleBox}>
        <h4 className={styles.tickets_title}>تیکت های اخیر</h4>
        <Link href="/p-user/tickets" className={styles.tickets_link}>
          همه تیکت ها
          <FaArrowLeft />
        </Link>
      </div>
      <div className={styles.tickets_wrapper}>
        {tickets?.map((item) => (
          <TicketCard key={item._id} ticket={item} />
        ))}

        {tickets?.length === 0 && (
          <h2 className={styles.empty_title}>تیکتی ثبت نشده</h2>
        )}
      </div>
    </div>
  );
}
