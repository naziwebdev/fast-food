import styles from "./Promote.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

export default function Promote() {
  return (
    <div className={styles.promote_wrapper}>
      <div data-aos="fade-up-right" className={styles.promote_section}>
        <div className={styles.contact}>
          <h2 className={styles.promote_title}>
            خرید فست فود , به سبک حرفه ای ها
          </h2>
          <p className={styles.promote_text}>
            زیبایی امروز را با فست فود تست کنید
          </p>
          <Link href="/contact" className={styles.promote_link}>
            تماس با ما
          </Link>
          <Image
            src="/images/sandwich.png"
            alt="sadwich"
            className={styles.contact_img}
            width={1000}
            height={400}
          />
        </div>
        <div className={styles.club}>
          <Image
            src="/images/banner-3.jpg"
            alt="sadwich"
            className={styles.club_img}
            width={1000}
            height={500}
          />
          <div className={styles.club_details}>
            <h2 className={styles.promote_title}>
              خرید فست فود , به سبک حرفه ای ها
            </h2>
            <p className={styles.promote_text}>باشگاه مشتریان فست فود</p>
            <Link href="/contact" className={styles.promote_link}>
              اطلاعات بیش تر
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.promote_section}>
        <Image
          data-aos="flip-right"
          className={styles.introduce_img}
          src="/images/banner-6.jpg"
          alt="banner-1"
          width={1000}
          height={500}
        />
        <div data-aos="fade-up" className={styles.introduce_details}>
          <FaHamburger className={styles.introduce_icon} />
          <h2 className={styles.introduce_title}>چرا فست فود ما؟</h2>
          <p className={styles.introduce_text}>
            برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان راهنمای
            ما در برآورده ساختن نیاز مشتریان تخصصی (موج سوم) است .تجربه ای به
            قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این ویژگیها است.
          </p>
          <div className={styles.introduce_btns}>
            <button className={styles.introduce_btn_1}>بیشتر بخوانید</button>
            <button className={styles.introduce_btn_2}>فروشگاه</button>
          </div>
        </div>
      </div>
    </div>
  );
}
