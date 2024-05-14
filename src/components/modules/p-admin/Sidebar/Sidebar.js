"use client";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { IoBagHandle } from "react-icons/io5";
import { HiTicket } from "react-icons/hi2";
import { MdInsertComment } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { PiTicketFill } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import { PiArticleNyTimesFill } from "react-icons/pi";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { useEffect , useState} from "react";

export default function Sidebar() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter()


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
          router.replace('/login-register')
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

  useEffect(() => {

    const isLoginHandler = async () => {
      const res = await fetch(`/api/auth/refresh`, {
        method: "POST",
      });

      if (res.status === 200) {
        setIsLogin(true)
      } else if (res.status === 401) {
        router.replace("/login-register");
      } else {
       setIsLogin(false)
      }
    };

    if(!isLogin){
       isLoginHandler();
    }
    

    setInterval(() => setIsLogin(false),50000)
  },[isLogin]);

  return (
    <div className={styles.sidebar}>
      <h4 className={styles.sidebar_title}>کاربر عزیز به پنل خوش آمدید</h4>
      <ul className={styles.sidebar_nav}>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin" className={styles.sidebar_link}>
            <HiHome className={styles.sidebar_icon} />
            <p className={styles.list_text}>پیشخوان</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin/products" className={styles.sidebar_link}>
            <IoBagHandle className={styles.sidebar_icon} />
            <p className={styles.list_text}>محصولات </p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin/users" className={styles.sidebar_link}>
            <FaUserFriends  className={styles.sidebar_icon} />
            <p className={styles.list_text}>کاربران</p>{" "}
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin/comments" className={styles.sidebar_link}>
            <MdInsertComment className={styles.sidebar_icon} />
            <p className={styles.list_text}>کامنت ها</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin/tickets" className={styles.sidebar_link}>
          <HiTicket className={styles.sidebar_icon} />
            <p className={styles.list_text}>تیکت ها</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin/offs" className={styles.sidebar_link}>
            <PiTicketFill className={styles.sidebar_icon} />
            <p className={styles.list_text}> تخفیف ها</p>
          </Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/p-admin/articles" className={styles.sidebar_link}>
            <PiArticleNyTimesFill className={styles.sidebar_icon} />
            <p className={styles.list_text}> مقاله ها</p>
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
