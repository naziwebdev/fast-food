import styles from "./Register.module.css";
import Sms from "../Sms/Sms";
import Link from "next/link";
import { useState } from "react";
import swal from "sweetalert";
import registerValidator from "@/validations/register";

export default function Register({ show }) {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async () => {
    const user = {
      name,
      email,
      phone,
      password,
    };

    try {
     await registerValidator.validate(user);
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      (await res).json();

      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
        }
      })
    } else {
      swal({
        title: "ثبت نام با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  const registerWithPassHandler = (event) => {
    event.preventDefault();

    if (isRegisterWithPass) {
      registerHandler();
    } else {
      setIsRegisterWithPass(true);
    }
  };
  const registerWithOtpHandler = (event) => {
    event.preventDefault();
    setIsRegisterWithOtp(true);
  };

  return (
    <div className={styles.form_wrapper}>
      {!isRegisterWithOtp ? (
        <form className={styles.form}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="نام"
            className={styles.input}
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={styles.input}
            type="text"
            placeholder="شماره موبایل *"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder=" ایمیل (دلخواه)"
            className={styles.input}
          />
          {isRegisterWithPass && (
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
