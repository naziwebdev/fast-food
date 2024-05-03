"use client";

import styles from "./AccountDetails.module.css";
import { useState } from "react";
import Image from "next/image";

export default function AccountDetails() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [company, setCompany] = useState("");
  // const [message, setMessage] = useState("");

  // const addContact = async (event) => {
  //   event.preventDefault();

  //   try {
  //     await contactValidation.validate({
  //       name,
  //       email,
  //       phone,
  //       company,
  //       message,
  //     });
  //   } catch (err) {
  //     return swal({
  //       title: err,
  //       icon: "error",
  //       buttons: "تلاش دوباره",
  //     });
  //   }

  //   const res = await fetch("/api/contact-us", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, phone, company, message }),
  //   });

  //   if (res.status === 201) {
  //     (await res).json();

  //     swal({
  //       title: " با موفقیت ثبت شد",
  //       icon: "success",
  //       buttons: "بستن",
  //     }).then((value) => {
  //       if (value) {
  //         setName("");
  //         setEmail("");
  //         setPhone("");
  //         setCompany("");
  //         setMessage("");
  //       }
  //     });
  //   } else {
  //     swal({
  //       title: "  با شکست مواجه شد",
  //       icon: "error",
  //       buttons: "تلاش دوباره",
  //     });
  //     console.log(await res);
  //   }
  // };

  return (
    <>
    <Image src='/images/avatar.jpg' width={300} height={200} alt="avatar" 
    className={styles.account_img} />
    <form className={styles.form}>
      <div className={styles.input_wrapper}>
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input id="name" type="text" className={styles.input} />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="email">آدرس ایمیل </label>
        <input id="email" type="email" className={styles.input} />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="phone"> شماره تماس</label>
        <input id="phone" type="text" className={styles.input} />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="file">تغییر آواتار </label>
        <input id="file" type="file" className={styles.input} />
      </div>
      <button className={styles.form_btn}>ثبت تغییرات</button>
      <div className={`${styles.input_wrapper} ${styles.input_center}`}>
        <label htmlFor="password">پسورد</label>
        <input id="password" type="password" className={styles.input} />
      </div>
      <button className={styles.form_btn}>تغییر پسورد</button>
    </form>
    </>
  );
}
