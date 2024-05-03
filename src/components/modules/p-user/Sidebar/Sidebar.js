"use client";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { IoBagHandle } from "react-icons/io5";
import { HiTicket } from "react-icons/hi2";
import { MdInsertComment } from "react-icons/md";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import swal from "sweetalert";

export default function Sidebar() {
  const logoutHandler = async () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
        });

        if (res.status === 200) {
          await res.json();
          location.replace('/login-register')
        } else {
          swal({
            title: "مشکلی پیش اومده",
            icon: "error",
            buttons: "تلاش دوباره",
          });
        }
      }
    });
  };

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
          <Link href="/p-user/comments" className={styles.sidebar_link}>
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
          <Link href="/p-user/account-details" className={styles.sidebar_link}>
            <RiAccountPinBoxFill className={styles.sidebar_icon} />
            <p className={styles.list_text}>جزییات اکانت</p>
          </Link>
        </li>
      </ul>
      <button onClick={logoutHandler} className={styles.logout}>
        <IoMdLogOut className={styles.logout_icon} />
        <span className={styles.logout_text}> خروج</span>
      </button>
    </div>
  );
}
