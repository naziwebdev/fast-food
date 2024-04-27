import React from "react";
import Navbar from "@/components/modules/Navbar/Navbar";
import { authUser } from "@/utils/auth";
import Image from "next/image";
import styles from "@/styles/Not-Found.module.css";
import { BsSearchHeart } from "react-icons/bs";
import Footer from "@/components/modules/Footer/Footer";


export default async function NotFound() {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <div className={styles.notFound_wrapper}>
      <Image
        src="/images/not-found.png"
        width={1000}
        height={1000}
        alt="404 err"
        className={styles.notFound_img}
      />
      <h1 className={styles.notFound_title}>یافت نشد</h1>
      <h2 className={styles.notFound_title}>
        صفحه ای که به دنبال آن هستید، موجود نیست
      </h2>
      <p className={styles.notFound_text}>
        ممکن است با جست و جو داخل سایت صفحه ای که دنبال ان هستید را بیابید
      </p>
      <div className={styles.notFound_search}>
        <input
          type="text"
          placeholder="جست و جوی نوشته ها"
          className={styles.notFound_input}
        />
        <BsSearchHeart className={styles.notFound_icon} />
      </div>
      </div>
      <Footer/>
    </>
  );
}
