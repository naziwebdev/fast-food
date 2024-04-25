import styles from "@/styles/Login-register.module.css";
import Login from "@/components/templates/Login-Register/Login/Login";
import Register from "@/components/templates/Login-Register/Register/Register";
import Image from "next/image";

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
        <Login />‍
      </div>
    </div>
  );
}
