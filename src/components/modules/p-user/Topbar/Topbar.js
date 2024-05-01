import styles from "./Topbar.module.css";
import { BiSolidBell } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_search}>
        <input
          type="text"
          className={styles.topbar_input}
          placeholder="جست و جو ..."
        />
        <FaSearch className={styles.topbar_icon} />
      </div>
      <div className={styles.topbar_left}>
      <div className={styles.topbar_notif} >
          <BiSolidBell  className={styles.notif_icon}/>
          <ul className={styles.notif_list}>
            <li className={styles.notif_item}>
              سفارش در حال ارسال است
            </li>
            <li className={styles.notif_item}>
              تیکت پاسخ داده شد
            </li>
          </ul>

        </div>
        <div className={styles.profile}>
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            width={70}
            height={70}
            className={styles.topbar_img}
          />
          <div className={styles.topbar_user}>
            <p>شیما رستگار</p>
            <span className={styles.user_phone}>09127645878</span>
          </div>
        </div>
      
      </div>
    </div>
  );
}
