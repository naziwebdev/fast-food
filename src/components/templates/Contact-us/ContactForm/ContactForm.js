"use client";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import contactValidation from "@/validations/contact";
import swal from "sweetalert";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const addContact = async (event) => {
    event.preventDefault();

    try {
      await contactValidation.validate({
        name,
        email,
        phone,
        company,
        message,
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, company, message }),
    });

    if (res.status === 201) {
      (await res).json();

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          setName("");
          setEmail("");
          setPhone("");
          setCompany("");
          setMessage("");
        }
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
    <div className={styles.contactForm}>
      <p className={styles.contactForm_text}>فرم تماس با ما</p>
      <h3 className={styles.contactForm_title}>
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </h3>
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
          <label htmlFor="conpany">نام شرکت</label>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            id="company"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={`${styles.input_wrapper} ${styles.textarea_wrapper}`}>
          <label htmlFor="body">درخواست شما </label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            id="body"
            className={styles.textarea}
          ></textarea>
        </div>
        <button onClick={addContact} className={styles.form_btn}>
          ارسال
        </button>
      </form>
    </div>
  );
}
