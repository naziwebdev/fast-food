import styles from "@/styles/p-admin/Users.module.css";
import DataTable from "@/components/templates/P-admin/Users/DataTable";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import connectTodb from "@/configs/db";
import userModel from "@/models/user";


export default async function Index() {
connectTodb()
const users = await userModel.find({}).lean()

  return (
    <AdminPanelLayout>
      <div className={styles.users}>
        <h2 className={styles.users_title}>کاربر ها</h2>
        <DataTable users={JSON.parse(JSON.stringify(users))} />
      </div>
    </AdminPanelLayout>
  );
}
