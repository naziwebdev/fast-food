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
import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function Sidebar({ onClose }) {
  const router = useRouter();

  const closeSidebar = () => onClose();

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
          router.replace("/login-register");
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
    <>
      <Modal />
      <div className={styles.sidebar}>
        <h4 className={styles.sidebar_title}>فست فود دلیشز</h4>
        <span onClick={closeSidebar} className={styles.sidebar_close}>
          ✕
        </span>
        <ul className={styles.sidebar_nav}>
          <li className={styles.sidebar_item}>
            <Link href="/" className={styles.sidebar_link}>
              <HiHome className={styles.sidebar_icon} />
              <p className={styles.list_text}>خانه</p>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/blogs" className={styles.sidebar_link}>
              <IoBagHandle className={styles.sidebar_icon} />
              <p className={styles.list_text}>وبلاگ</p>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/contact-us" className={styles.sidebar_link}>
              <HiTicket className={styles.sidebar_icon} />
              <p className={styles.list_text}>ارتباط با ما</p>{" "}
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/about-us" className={styles.sidebar_link}>
              <MdInsertComment className={styles.sidebar_icon} />
              <p className={styles.list_text}> درباره ما</p>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/rules" className={styles.sidebar_link}>
              <BiSolidCalendarHeart className={styles.sidebar_icon} />
              <p className={styles.list_text}>قوانین</p>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/p-user" className={styles.sidebar_link}>
              <RiAccountPinBoxFill className={styles.sidebar_icon} />
              <p className={styles.list_text}>حساب کاربری</p>
            </Link>
          </li>
        </ul>
        <button onClick={logoutHandler} className={styles.logout}>
          <IoMdLogOut className={styles.logout_icon} />
          <span className={styles.logout_text}> خروج</span>
        </button>
      </div>
    </>
  );
}
