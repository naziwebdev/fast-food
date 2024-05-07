import styles from "@/styles/p-admin/Offs.module.css";
import DataTable from "@/components/templates/P-admin/Offs/DataTable";
import AddForm from '@/components/templates/P-admin/Offs/AddForm'
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import connectTodb from "@/configs/db";
import offModel from "@/models/off";

export default async function Page() {
  connectTodb();
  const offs = await offModel.find({})  .lean();

  

  return (
    <AdminPanelLayout>
      <div className={styles.offs}>
        <h2 className={styles.offs_title}>تخفیف ها</h2>
        <AddForm/>
        {offs.length != 0 ? (
          <DataTable offs={JSON.parse(JSON.stringify(offs))} />
        ) : (
          <div className={styles.offs_empty}>تخفیفی یافت نشد</div>
        )}
      </div>
    </AdminPanelLayout>
  );
}
