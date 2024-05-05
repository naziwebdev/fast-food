import styles from "@/styles/p-admin/Index.module.css";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Box from "@/components/modules/BoxInfo/Box";
import SaleChart from "@/components/templates/P-admin/Index/SaleChart";
import GrowthChart from "@/components/templates/P-admin/Index/GrowthChart";
import connectTodb from "@/configs/db";
import ticketModel from "@/models/ticket";
import userModel from "@/models/user";
import { authUser } from "@/utils/serverHelper";

export default async function Index() {
  connectTodb();
  const user = await authUser();
  const Allticket = await ticketModel.find({ user: user._id });
  const users = await userModel.find({ user: user._id });

  return (
    <AdminPanelLayout>
      <div className={styles.index_wrapper}>
        <div className={styles.box_container}>
          <Box title={"مجموع تیکت ها"} count={Allticket.length} />
          <Box title={"مجموع محصولات"} count={32} />
          <Box title={"مجموع سفارش ها"} count={20} />
          <Box title={"مجموع کاربر ها"} count={users.length} />
        </div>
        <div className={styles.charts_wrapper}>
          <div className={styles.chart}>
            <h5>آمار فروش</h5>
            <SaleChart />
          </div>
          <div className={styles.chart}>
            <h5>نرخ رشد</h5>
            <GrowthChart />
          </div>
        </div>
      </div>
    </AdminPanelLayout>
  );
}
