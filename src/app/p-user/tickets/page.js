import styles from "@/styles/p-user/Tickets.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Tickets from "@/components/templates/P-user/Tickets/Tickets";
import Link from "next/link";

export default function page() {
  return (
    <UserPanelLayout>
      <div className={styles.tickets}>
        <div className={styles.tickets_titles}>
          <h2 className={styles.tickets_title}>همه تیکت ها</h2>
          <Link href="/p-user/tickets/sendTicket" className={styles.tickets_link}>ارسال تیکت جدید</Link>
        </div>

        <Tickets />
      </div>
    </UserPanelLayout>
  );
}
