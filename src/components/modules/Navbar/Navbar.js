import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <main>
        <div>
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              className={styles.logo}
              width={200}
              height={90}
            />
          </Link>
        </div>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/category">فروشگاه</Link>
          </li>
          <li>
            <Link href="/blog">وبلاگ</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/rules">قوانین</Link>
          </li>
          {/* <li>
            <Link href="/login-register">ورود / عضویت</Link>
          </li> */}
          <div className={styles.dropdown}>
            <div className={styles.dropdown_title}>
              <IoIosArrowDown className={styles.dropdown_icon} />
              <Link href="/p-user">حساب کاربری</Link>
            </div>

            <div className={styles.dropdown_content}>
              <Link href="/p-user/orders">سفارشات </Link>
              <Link href="/p-user/tickets"> تیکت های پشتیبانی</Link>
              <Link href="/p-user/comments">کامنت ها </Link>
              <Link href="/p-user/wishlist"> علاقه مندی ها</Link>
              <Link href="/p-user/account-details"> جزییات اکانت</Link>
            </div>
          </div>
        </ul>
        <GiHamburgerMenu className={styles.hamberger_menu}/>
        <div className={styles.nav_icons}>
          <Link href="/cart" className={styles.nav_basket}>
            <SlBasket className={styles.nav_icon} />
            <span className={styles.nav_badge}>1</span>
          </Link>
          <Link href="/wishlist" className={styles.nav_wishlist}>
            <FaRegHeart className={styles.nav_icon} />
            <span className={styles.nav_badge}>0</span>
          </Link>
        </div>
      </main>
    </nav>
  );
}


