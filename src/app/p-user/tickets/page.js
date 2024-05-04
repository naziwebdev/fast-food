import styles from "@/styles/p-user/Tickets.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Tickets from "@/components/templates/P-user/Tickets/Tickets";
import { authUser } from "@/utils/serverHelper";
import connectTodb from "@/configs/db";
import ticketModel from "@/models/ticket";
import Link from "next/link";

export default async function page() {
  connectTodb();
  const user = await authUser();

  const tickets = await ticketModel.find({ user: user._id }).lean().populate("department", "title");

  return (
    <UserPanelLayout>
      <div className={styles.tickets}>
        <div className={styles.tickets_titles}>
          <h2 className={styles.tickets_title}>همه تیکت ها</h2>
          <Link
            href="/p-user/tickets/sendTicket"
            className={styles.tickets_link}
          >
            ارسال تیکت جدید
          </Link>
        </div>

        <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
      </div>
    </UserPanelLayout>
  );
}
