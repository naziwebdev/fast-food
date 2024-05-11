import styles from "@/styles/p-admin/Tickets.module.css";
import DataTable from "@/components/templates/P-admin/Tickets/DataTable";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import connectTodb from "@/configs/db";
import ticketModel from "@/models/ticket";

export default async function Index() {
  connectTodb();
  const tickets = await ticketModel
    .find({isAnswer:false,hasAnswer:false})
    .populate("user", "name phone email")
    .populate("department", "title")
    .lean();

  return (
    <AdminPanelLayout>
      <div className={styles.tickets}>
        <h2 className={styles.tickets_title}>تیکت ها</h2>
        {tickets.length != 0 ? (
          <DataTable tickets={JSON.parse(JSON.stringify(tickets))} />
        ) : (
          <div className={styles.tickets_empty}>تیکتی یافت نشد</div>
        )}
      </div>
    </AdminPanelLayout>
  );
}
