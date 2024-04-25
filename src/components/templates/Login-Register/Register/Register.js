import styles from "./Register.module.css";
import Sms from "../Sms/Sms";
import Link from "next/link";
import { useState } from "react";

export default function Register({ show }) {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);

  const registerWithPassHandler = (event) => {
    event.preventDefault();
    setIsRegisterWithPass(true);
  };
  const registerWithOtpHandler = (event) => {
    event.preventDefault();
    setIsRegisterWithOtp(true);
  };

  return (
    <div className={styles.form_wrapper}>
      {!isRegisterWithOtp ? (
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
          {isRegisterWithPass && (
            <input
              type="password"
              placeholder="رمز عبور"
              className={styles.input}
            />
          )}
          {!isRegisterWithPass && (
            <button
              className={styles.login_btn}
              onClick={registerWithOtpHandler}
            >
              ثبت نام با کد تایید
            </button>
          )}
          <button
            className={styles.login_btn}
            onClick={registerWithPassHandler}
          >
            {" "}
            ثبت نام با رمز عبور
          </button>
          <span className={styles.register_text}> آیا حساب کاربری دارید ؟</span>
          <button className={styles.register_btn} onClick={() => show()}>
            {" "}
            ورود{" "}
          </button>
        </form>
      ) : (
        <Sms />
      )}
      <Link href="/" className={styles.back_home}>
        لغو
      </Link>
    </div>
  );
}
