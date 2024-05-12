import styles from "./Orders.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import TicketCard from "./TicketCard";
import OrderCard from "./OrderCard";

export default function Orders({ orders }) {
  return (
    <div className={styles.orders}>
      <div className={styles.orders_titleBox}>
        <h4 className={styles.orders_title}> سفارش های اخیر</h4>
        <Link href="/p-user/orders" className={styles.orders_link}>
          همه سفارشات
          <FaArrowLeft />
        </Link>
      </div>
      <div className={styles.orders_wrapper}>
        {orders.map((item) => (
          <OrderCard key={item._id} order={item}/>
        ))}

        {orders?.length === 0 && (
          <h2 className={styles.empty_title}>سفارشی ثبت نشده</h2>
        )}
      </div>
    </div>
  );
}
