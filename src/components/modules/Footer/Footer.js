import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Article from "./Article";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_section_1}>
          <Image
            src="/images/logo.png"
            alt="logo"
            className={styles.footer_logo}
            width={200}
            height={100}
          />
          <p className={styles.contact_text}>
            شرکت صنایع غذایی خوارزمی، فروشگاه اینترنتی فست فود دلیشز
          </p>
          <p className={styles.contact_text}>
            تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان. خیابان
            ماگنولیا بلوک آ117
          </p>
          <div className={styles.contact_info}>
            <MdOutlinePhoneIphone className={styles.contact_icon} />
            <p className={styles.contact_text}>پیگیری سفارشات : 02188305827</p>
          </div>
          <div className={styles.contact_info}>
            <MdOutlineMailOutline className={styles.contact_icon} />
            <p className={styles.contact_text}>support [at] set-coffee.com</p>
          </div>
        </div>
        <div className={styles.footer_section_2}>
          <h4 className={styles.footer_title}>جدید ترین نوشته ها</h4>
          <div className={styles.article_wrapper}>
            <Article />
            <Article />
          </div>
        </div>
        <div className={styles.footer_section_2}>
          <h4 className={styles.footer_title}>دسترسی سریع</h4>
          <ul className={styles.footer_nvigation}>
            <li>
              <Link href="/">حفظ حریم شخصی</Link>
            </li>
            <li>
              <Link href="/">ثبت شکایات</Link>
            </li>
            <li>
              <Link href="/">درباره ما</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_section_2}>
          <h4 className={styles.footer_title}>منوی فوتر</h4>
          <ul className={styles.footer_nvigation}>
            <li>
              <Link href="/">شرایط و قوانین </Link>
            </li>
            <li>
              <Link href="/"> شرایط و هزینه ارسال</Link>
            </li>
            <li>
              <Link href="/"> ثبت شکایات</Link>
            </li>
            <li>
              <Link href="/"> حفظ حریم شخصی</Link>
            </li>
            <li>
              <Link href="/"> دیکشنری فست فود</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_section_3}>
          <Image
            src="/images/inamad.png"
            alt="logo"
            className={styles.footer_img}
            width={200}
            height={100}
          />
          <Image
            src="/images/united.png"
            alt="logo"
            className={styles.footer_img}
            width={200}
            height={100}
          />
          <Image
            src="/images/payment.png"
            alt="logo"
            className={styles.footer_img}
            width={200}
            height={100}
          />
          <Image
            src="/images/kasbokar.webp"
            alt="logo"
            className={styles.footer_img}
            width={200}
            height={100}
          />
        </div>
      </div>
      <div className={styles.footer_licence}>
        <p  className={styles.footer_licence_text}>
          تمام حقوق متعلق است به فست فود دلیشز | @ رعایت حقوق کپی رایت الزامی
          است
        </p>
      </div>
    </div>
  );
}
