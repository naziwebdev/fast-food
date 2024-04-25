import styles from "@/styles/Forget-password.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.auth}>
      <div className={styles.auth_bg}>
        <Image
          src="/images/login.jpg"
          alt="fast-food"
          width={700}
          height={500}
          className={styles.auth_img}
        />
      </div>

      <div className={styles.auth_form}>
        <div className={styles.form_wrapper}>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="شماره موبایل / ایمیل"
            />
            <button className={styles.login_btn}>باز نشانی رمز عبور </button>

            <span className={styles.register_text}>
              {" "}
              آیا حساب کاربری دارید ؟
            </span>
            <Link href="/login-register" className={styles.register_btn}>
              ورود{" "}
            </Link>
          </form>

          <Link href="/" className={styles.back_home}>
            لغو
          </Link>
        </div>
      </div>
    </div>
  );
}
