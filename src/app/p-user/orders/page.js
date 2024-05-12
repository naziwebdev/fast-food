import styles from "@/styles/p-user/Order.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import DataTable from "@/components/templates/P-user/Orders/DataTable";
import connectTodb from "@/configs/db";
import { authUser } from "@/utils/serverHelper";
import orderModel from '@/models/order'

export default async function Comments() {
  const user = await authUser();
  connectTodb();
  const orders = await orderModel
    .find({ userID: user.id })
    .lean()
    .populate("products", "title");


  return (
    <UserPanelLayout>
      <div className={styles.orders}>
        <h2 className={styles.orders_title}>سفارش ها</h2>
        <DataTable orders={JSON.parse(JSON.stringify(orders))} />
      </div>
    </UserPanelLayout>
  );
}
