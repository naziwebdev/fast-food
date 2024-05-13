import styles from "@/styles/p-user/Comments.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import DataTable from "@/components/templates/P-user/Comments/DataTable";
import connectTodb from "@/configs/db";
import { authUser } from "@/utils/serverHelper";
import commentModel from "@/models/comment";
import articleCommentModel from "@/models/articleComment";

export default async function Comments() {
  const user = await authUser();
  connectTodb();
  const comments = await commentModel
    .find({ user: user._id })
    .lean()
    .populate("productID", "title");

  const articleComments = await articleCommentModel
    .find({ user: user._id })
    .lean()
    .populate("articleID", "title");

  return (
    <UserPanelLayout>
      <div className={styles.comments}>
        <h2 className={styles.comments_title}>کامنت ها</h2>
        <DataTable
          comments={JSON.parse(JSON.stringify(comments))}
          articleComments={JSON.parse(JSON.stringify(articleComments))}
        />
        {comments.length === 0 &&
          articleComments.length === 0 && (
            <div>هنوز کامنتی ثبت نشده</div>
          )}
      </div>
    </UserPanelLayout>
  );
}
