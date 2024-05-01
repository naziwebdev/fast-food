import styles from "./Sidebar.module.css";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { IoBagHandle } from "react-icons/io5";
import { HiTicket } from "react-icons/hi2";
import { MdInsertComment } from "react-icons/md";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { RiAccountPinBoxFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h4 className={styles.sidebar_title}>کاربر عزیز به پنل خوش آمدید</h4>
      <ul className={styles.sidebar_nav}>
        <li className={styles.sidebar_item}>
          <Link href="/p-user" className={styles.sidebar_link}>
            <HiHome className={styles.sidebar_icon} />
            <p className={styles.list_text}>پیشخوان</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/" className={styles.sidebar_link}>
            <IoBagHandle className={styles.sidebar_icon} />
            <p className={styles.list_text}>سفارش ها</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/" className={styles.sidebar_link}>
            <HiTicket className={styles.sidebar_icon} />
            <p className={styles.list_text}>تیکت ها</p>{" "}
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/" className={styles.sidebar_link}>
            <MdInsertComment className={styles.sidebar_icon} />
            <p className={styles.list_text}>کامنت ها</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-user/wishlist" className={styles.sidebar_link}>
            <BiSolidCalendarHeart className={styles.sidebar_icon} />
            <p className={styles.list_text}>علاقه مندی ها</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/" className={styles.sidebar_link}>
            <RiAccountPinBoxFill className={styles.sidebar_icon} />
            <p className={styles.list_text}>جزییات اکانت</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
