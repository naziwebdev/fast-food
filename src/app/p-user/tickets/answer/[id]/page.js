import styles from "@/styles/p-user/Answer.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Answer from "@/components/templates/P-user/Tickets/Answer";
import connectTodb from "@/configs/db";
import ticketModel from "@/models/ticket";
import Link from "next/link";

export default async function page({ params }) {
  connectTodb();

  const ticket = await ticketModel
    .find({ _id: params.id })
    .lean()
    .populate("user", "name")
    .sort({ _id: -1 });
  const answerTicket = await ticketModel
    .find({ mainTicketID: params.id })
    .populate("user", "name")
    .lean()
    .sort({ _id: -1 });

  console.log(answerTicket);

  return (
    <UserPanelLayout>
      <div className={styles.answer}>
        <div className={styles.answer_titles}>
          <h2 className={styles.answer_title}> تیکت</h2>
          <Link href="/p-user/tickets/sendTicket" className={styles.answer_link}>
            ارسال تیکت جدید
          </Link>
        </div>
        <Answer type="user" ticket={JSON.parse(JSON.stringify(ticket))} />
        {answerTicket?.length != 0 ? (
          <Answer
            type="admin"
            answer={JSON.parse(JSON.stringify(answerTicket))}
          />
        ) : (
          <div className={styles.answer_empty}>هنوز پاسخی داده نشده</div>
        )}
      </div>
    </UserPanelLayout>
  );
}
