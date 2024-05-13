import styles from "@/styles/p-admin/Comments.module.css";
import DataTable from "@/components/templates/P-admin/Comments/DataTable";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import connectTodb from "@/configs/db";
import commentModel from "@/models/comment";
import articleCommentModel from "@/models/articleComment";

export default async function Page() {
  connectTodb();
  const comments = await commentModel
    .find({ isAnswer: false })
    .populate("user", "name phone email")
    .populate("productID", "title")
    .lean();
  const articleComments = await articleCommentModel
    .find({ isAnswer: false })
    .populate("user", "name phone email")
    .populate("articleID", "title")
    .lean();

  return (
    <AdminPanelLayout>
      <div className={styles.comments}>
        <h2 className={styles.comments_title}>کامنت ها</h2>
        {comments.length != 0 ? (
          <DataTable
            comments={JSON.parse(JSON.stringify(comments))}
            articleComments={JSON.parse(JSON.stringify(articleComments))}
          />
        ) : (
          <div className={styles.comments_empty}>کامنتی یافت نشد</div>
        )}
      </div>
    </AdminPanelLayout>
  );
}
