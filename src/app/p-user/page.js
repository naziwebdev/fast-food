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
          <Box  title={'مجموع تیکت ها'} count={10}/>
          <Box  title={'مجموع کامنت ها'} count={0}/>
          <Box title={'مجموع سفارش ها'} count={20}/>
          <Box title={'مجموع علاقه مندی ها'} count={5}/>
        </div>
        <div className={styles.user_details}>
          <Orders/>
          <Tickets/>
        </div>
      </div>
    </UserPanelLayout>
  );
}
