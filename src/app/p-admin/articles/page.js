import styles from "@/styles/p-admin/Articles.module.css";
import AddArticle from "@/components/templates/P-admin/Artiles/AddArticle";
import { authUser } from "@/utils/serverHelper";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import articleModel from "@/models/article";
import connectTodb from "@/configs/db";
import DataTable from "@/components/templates/P-admin/Artiles/DataTable";

export default async function Page() {
  const user = await authUser();
  connectTodb();
  const articles = await articleModel
    .find({})
    .populate("author", "name")
    .lean();

  return (
    <AdminPanelLayout>
      <div className={styles.articles}>
        <h2 className={styles.articles_title}>مقاله ها</h2>
        <AddArticle userID={JSON.parse(JSON.stringify(user._id))} />
        <DataTable articles={JSON.parse(JSON.stringify(articles))} />
      </div>
    </AdminPanelLayout>
  );
}
