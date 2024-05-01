import styles from "@/styles/p-user/Index.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/templates/P-user/Index/Box";
import Tickets from "@/components/templates/P-user/Index/Tickets";
import Orders from "@/components/templates/P-user/Index/Orders";
export default function Index() {
  return (
    <UserPanelLayout>
      <div className={styles.index_wrapper}>
        <div className={styles.box_container}>
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        <div className={styles.user_details}>
          <Tickets/>
          <Orders/>
        </div>
      </div>
    </UserPanelLayout>
  );
}
