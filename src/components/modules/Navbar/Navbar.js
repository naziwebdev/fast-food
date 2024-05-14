"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import Sidebar from "../Sidebar/Sidebar";


export default function Navbar() {
  const [fixNavbar, setFixNavbar] = useState(false);
  const [carts, setCarts] = useState([]);
  const [wishlist,setWishlist] = useState([])
  const [isLogin, setIsLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);


  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    setCarts(cart);
  }, []);

  const onClose = () => setShowSidebar(false);

  useEffect(() => {

    const isLoginHandler = async () => {
      const res = await fetch(`/api/auth/refresh`, {
        method: "POST",
      });

      if (res.status === 200) {
        setIsLogin(true)
      } else if (res.status === 401) {
        router.replace("/login-register");
      } else {
       setIsLogin(false)
      }
    };

    if(!isLogin){
       isLoginHandler();
    }
    

    setInterval(() => setIsLogin(false),50000)
  },[isLogin]);

  useEffect(() => {
    const fixNavbarToTop = (event) => {
      event.preventDefault();
      const currentScrollY = window.scrollY;

      if (currentScrollY > 105) {
        setFixNavbar(true);
      } else {
        setFixNavbar(false);
      }
    };

    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);



  const logoutHandler = async () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
        });

        if (res.status === 200) {
          await res.json();
          router.replace("/login-register");
        } else {
          swal({
            title: "مشکلی پیش اومده",
            icon: "error",
            buttons: "تلاش دوباره",
          });
        }
      }
    });
  };

  useEffect(() => {
    const getWishlist = async () => {
      const res = await fetch('/api/wishlist')
      if(res.status === 200){
        const data = await res.json()
        setWishlist(data)
      }
    }

    getWishlist()
  })

  return (
    <nav className={`${fixNavbar ? styles.nav_fixed : styles.nav}`}>
      {showSidebar && <Sidebar onClose={onClose} />}
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
          {!isLogin ? (
            <li>
              <Link href="/login-register">ورود / عضویت</Link>
            </li>
          ) : (
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
                <button onClick={logoutHandler} className={styles.logout}>
                  خروج
                </button>
              </div>
            </div>
          )}
        </ul>
        <GiHamburgerMenu
          onClick={() => setShowSidebar((prev) => !prev)}
          className={styles.hamberger_menu}
        />
        <div className={styles.nav_icons}>
          <Link href="/cart" className={styles.nav_basket}>
            <SlBasket className={styles.nav_icon} />
            <span className={styles.nav_badge}>{carts.length}</span>
          </Link>
          <Link href="/wishlist" className={styles.nav_wishlist}>
            <FaRegHeart className={styles.nav_icon} />
            <span className={styles.nav_badge}>{wishlist.length}</span>
          </Link>
        </div>
      </main>
    </nav>
  );
}
