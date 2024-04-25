"use client";

import styles from "./Login.module.css";
import React, { useState } from "react";
import Sms from "../Sms/Sms";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="ایمیل / شماره موبایل"
          className={styles.input}
        />
        <input type="text" placeholder="رمز عبور" className={styles.input} />
        <div className={styles.checkbox_wrapper}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.checkbox_text}>مرا به یاد داشته باش</span>
        </div>
        <button className={styles.login_btn}>ورود</button>
        <Link href={"/forget-password"} className={styles.forgot_pass}>
          رمز عبور را فراموش کرده اید؟
        </Link>
        <button className={styles.login_btn}>ورود با کد یکبار مصرف</button>
        <span className={styles.register_text}>آیا حساب کاربری ندارید ؟</span>
        <button className={styles.register_btn}>ثبت نام</button>
      </form>
      <Link href="/" className={styles.back_home}>
        لغو
      </Link>
    </div>
  );
};

export default Login;
