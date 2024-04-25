import styles from "./Sms.module.css";
import Link from "next/link";
export default function Sms() {
  return (
  
      <form className={styles.form}>
        <h4 className={styles.form_title}>کد تایید</h4>
        <span>
          لطفاً کد تأیید ارسال شده را تایپ کنید
        </span>
        <span className={styles.form_text}>09100721852</span>
        <input type="text" className={styles.input} />

        <button className={styles.login_btn}>ثبت کد تایید</button>
        <button className={styles.resend_btn}>ارسال مجدد کد یکبار مصرف</button>
      </form>
  );
}
