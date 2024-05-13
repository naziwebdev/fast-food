import styles from "@/styles/p-admin/Articles.module.css";
import AddArticle from "@/components/templates/P-admin/Artiles/AddArticle";
import { authUser } from "@/utils/serverHelper";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";

export default async function Page() {
  const user = await authUser();

  return (
    <AdminPanelLayout>
      <div className={styles.articles}>
        <h2 className={styles.articles_title}>مقاله ها</h2>
        <AddArticle userID={JSON.parse(JSON.stringify(user._id))} />
      </div>
    </AdminPanelLayout>
  );
}
