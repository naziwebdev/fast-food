import styles from "./Register.module.css";
import Sms from "../Sms/Sms";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <input type="text" placeholder="نام" className={styles.input} />
        <input
          className={styles.input}
          type="text"
          placeholder="شماره موبایل *"
        />
        <input
          type="email"
          placeholder=" ایمیل (دلخواه)"
          className={styles.input}
        />
        <button className={styles.login_btn}>ثبت نام با کد تایید</button>
        <button className={styles.login_btn}> ثبت نام با رمز عبور</button>
        <span className={styles.register_text}> آیا حساب کاربری دارید ؟</span>
        <button className={styles.register_btn}>  ورود </button>
      </form>
      <Link href="/" className={styles.back_home}>
        لغو
      </Link>
    </div>
  );
}
