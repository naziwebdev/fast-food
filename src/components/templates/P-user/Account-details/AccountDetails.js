"use client";

import styles from "./AccountDetails.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import UserValidator from "@/validations/editUser";
import { UserPasswordValidator } from "@/validations/editUser";
import { useRouter } from "next/navigation";

export default function AccountDetails() {

  
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const getMeHandler = async () => {
      const res = await fetch("/api/auth/me");

      if (res.status === 200) {
        const data = await res.json();
        setName(data?.name);
        setEmail(data?.email);
        setPhone(data?.phone);
        setUserID(data?._id);
      }
    };

    getMeHandler();
  }, []);

  const updateUser = async (event) => {
    event.preventDefault();

    try {
      await UserValidator.validate({
        name,
        email,
        phone,
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch(`/api/user/${userID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });

    if (res.status === 200) {
      (await res).json();

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        router.refresh()
      });
    } else {
      swal({
        title: "  با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  const updatePassword = async (event) => {
    event.preventDefault();

    try {
      await UserPasswordValidator.validate({
       password
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch(`/api/user/${userID}/password`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.status === 200) {
      (await res).json();

      swal({
        title: " با موفقیت  تغییر کرد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        router.refresh()
        setPassword("")
      });
    } else {
      swal({
        title: "  با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  return (
    <>
      <Image
        src="/images/avatar.jpg"
        width={300}
        height={200}
        alt="avatar"
        className={styles.account_img}
      />
      <form className={styles.form}>
        <div className={styles.input_wrapper}>
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="name"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="email">آدرس ایمیل </label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="email"
            type="email"
            className={styles.input}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="phone"> شماره تماس</label>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id="phone"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="file">تغییر آواتار </label>
          <input id="file" type="file" className={styles.input} />
        </div>
        <button onClick={updateUser} className={styles.form_btn}>
          ثبت تغییرات
        </button>
        <div className={`${styles.input_wrapper} ${styles.input_center}`}>
          <label htmlFor="password">پسورد</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            type="password"
            className={styles.input}
          />
        </div>
        <button onClick={updatePassword}
        className={styles.form_btn}>تغییر پسورد</button>
      </form>
    </>
  );
}
