"use client";

import styles from "./Login.module.css";
import React, { useState } from "react";
import Sms from "../Sms/Sms";
import Link from "next/link";
import loginValidation from "@/validations/backend/login";

const Login = ({ show }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const loginWithOtpHandler = (event) => {
    setIsLoginWithOtp(true);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    const user = { identifier, password };

    try {
      await loginValidation.validate(user);
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      (await res).json();

      swal({
        title: " لاگین با موفقیت انجام شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          setIdentifier("");
          setPassword("");
        }
      });
    } else {
      swal({
        title: " لاگین با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  return (
    <div className={styles.form_wrapper}>
      {!isLoginWithOtp ? (
        <form className={styles.form}>
          <input
            type="text"
            placeholder="ایمیل / شماره موبایل"
            className={styles.input}
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
          />
          <input
            type="text"
            placeholder="رمز عبور"
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className={styles.checkbox_wrapper}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.checkbox_text}>مرا به یاد داشته باش</span>
          </div>
          <button className={styles.login_btn} onClick={loginHandler}>
            ورود
          </button>
          <Link href={"/forget-password"} className={styles.forgot_pass}>
            رمز عبور را فراموش کرده اید؟
          </Link>
          <button className={styles.login_btn} onClick={loginWithOtpHandler}>
            ورود با کد یکبار مصرف
          </button>
          <span className={styles.register_text}>آیا حساب کاربری ندارید ؟</span>
          <button className={styles.register_btn} onClick={() => show()}>
            ثبت نام
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
};

export default Login;
