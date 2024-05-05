import styles from "@/styles/p-user/Index.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/templates/P-user/Index/Box";
import Tickets from "@/components/templates/P-user/Index/Tickets";
import Orders from "@/components/templates/P-user/Index/Orders";
import connectTodb from "@/configs/db";
import ticketModel from '@/models/ticket'
import commentModel from '@/models/comment'
import wishlistModel from '@/models/wishlist'
import { authUser } from "@/utils/serverHelper";


export default async function Index() {

  const user = await authUser()
  const tickets = await ticketModel.find({user:user._id})
  const comments = await commentModel.find({user:user._id})
  const wishlists = await wishlistModel.find({user:user._id})

  return (
    <UserPanelLayout>
      <div className={styles.index_wrapper}>
        <div className={styles.box_container}>
          <Box  title={'مجموع تیکت ها'} count={tickets.length}/>
          <Box  title={'مجموع کامنت ها'} count={comments.length}/>
          <Box title={'مجموع سفارش ها'} count={20}/>
          <Box title={'مجموع علاقه مندی ها'} count={wishlists.length}/>
        </div>
        <div className={styles.user_details}>
          <Orders/>
          <Tickets/>
        </div>
      </div>
    </UserPanelLayout>
  );
}
