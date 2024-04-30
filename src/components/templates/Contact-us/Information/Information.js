import styles from "./Information.module.css";
import { MdFastfood } from "react-icons/md";
import { FaStaylinked } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";

export default function Information() {
  return (
    <div className={styles.info}>
      <p className={styles.info_text2}> تماس با ما</p>
      <h3 className={styles.info_title}>اطلاعات تماس</h3>
      <div className={styles.info_content}>
        <MdFastfood className={styles.info_icon} />
        <p className={styles.info_text}>فست فود دلیشز</p>
      </div>
      <div className={styles.info_content}>
        <FaStaylinked className={styles.info_icon} />
        <p className={styles.info_text}>فست فود دلیشز</p>
      </div>
      <div className={styles.info_content}>
        <SiGooglestreetview className={styles.info_icon} />
        <p className={styles.info_text}>
          تهران میرداماد خیابان شقایق کوچه بنفشه پلاک 22
        </p>
      </div>
      <div className={styles.info_content}>
        <FaPhone className={styles.info_icon} />
        <p className={styles.info_text}>۰۲۱ - ۲۲۵۴۶۷۸۵</p>
      </div>
      <div className={styles.info_content}>
        <MdEmail className={styles.info_icon} />
        <p className={styles.info_text}>delicaous@gmail.com</p>
      </div>
      <div className={styles.info_content}>
        <PiInstagramLogoFill className={styles.info_icon} />
        <p className={styles.info_text}>@delicaous-food</p>
      </div>
      <div className={styles.info_content}>
        <FaTelegram className={styles.info_icon} />
        <p className={styles.info_text}>۰۹۳۵۸۷۶۵۳۴۵</p>
      </div>
    </div>
  );
}
