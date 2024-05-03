import styles from '@/styles/p-user/Comments.module.css'
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import DataTable from '@/components/templates/P-user/Comments/DataTable';
import connectTodb from '@/configs/db';
import { authUser } from '@/utils/serverHelper';
import commentModel from '@/models/comment'

export default async function Comments() {
const user = await authUser()

  return (
    <UserPanelLayout>
      <div className={styles.comments}>
      <h2 className={styles.comments_title}>کامنت ها</h2>
      <DataTable/>
      </div>
    </UserPanelLayout>
  );
}
