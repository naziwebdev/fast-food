import styles from "@/styles/p-user/Index.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/modules/BoxInfo/Box";
import Tickets from "@/components/templates/P-user/Index/Tickets";
import Orders from "@/components/templates/P-user/Index/Orders";
import connectTodb from "@/configs/db";
import ticketModel from "@/models/ticket";
import commentModel from "@/models/comment";
import wishlistModel from "@/models/wishlist";
import orderModel from '@/models/order'
import { authUser } from "@/utils/serverHelper";

export default async function Index() {
  connectTodb()

  const user = await authUser();
 
  const Allticket = await ticketModel.find({ user: user._id });
  const comments = await commentModel.find({ user: user._id });
  const wishlists = await wishlistModel.find({ user: user._id });
  const orders = await orderModel.find({userID:user._id});

  const tickets = await ticketModel.find({ user: user._id })
    .lean()
    .populate("user", "name")
    .populate("department","title")
    .limit(3)
    .sort({ _id: -1 });

  return (
    <UserPanelLayout>
      <div className={styles.index_wrapper}>
        <div className={styles.box_container}>
          <Box title={"مجموع تیکت ها"} count={Allticket.length} />
          <Box title={"مجموع کامنت ها"} count={comments.length} />
          <Box title={"مجموع سفارش ها"} count={orders.length} />
          <Box title={"مجموع علاقه مندی ها"} count={wishlists.length} />
        </div>
        <div className={styles.user_details}>
          <Orders />
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))}/>
        </div>
      </div>
    </UserPanelLayout>
  );
}
