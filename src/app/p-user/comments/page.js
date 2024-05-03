import styles from "@/styles/p-user/Comments.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import DataTable from "@/components/templates/P-user/Comments/DataTable";
import connectTodb from "@/configs/db";
import { authUser } from "@/utils/serverHelper";
import commentModel from "@/models/comment";

export default async function Comments() {
  const user = await authUser();
  connectTodb();
  const comments = await commentModel
    .find({ user: user.id })
    .lean()
    .populate("productID", "title");

  return (
    <UserPanelLayout>
      <div className={styles.comments}>
        <h2 className={styles.comments_title}>کامنت ها</h2>
        <DataTable comments={JSON.parse(JSON.stringify(comments))} />
      </div>
    </UserPanelLayout>
  );
}
