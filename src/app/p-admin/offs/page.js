import styles from "@/styles/p-admin/Offs.module.css";
import DataTable from "@/components/templates/P-admin/Offs/DataTable";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import connectTodb from "@/configs/db";
// import ticketModel from "@/models/ticket";

export default async function Page() {
  // connectTodb();
  // const comments = await commentModel
  //   .find({isAnswer:false})
  //   .populate("user", "name phone email")
  //   .populate("productID", "title")
  //   .lean();



  return (
    <AdminPanelLayout>
      <div className={styles.offs}>
        <h2 className={styles.offs_title}>تخفیف ها</h2>
        <DataTable />
      </div>
    </AdminPanelLayout>
  );
}
