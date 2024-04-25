"use client";
import { useState } from "react";
import styles from "@/styles/Login-register.module.css";
import Login from "@/components/templates/Login-Register/Login/Login";
import Register from "@/components/templates/Login-Register/Register/Register";
import Image from "next/image";

export default function page() {
  const [showForm, setShowForm] = useState("login");

  const setShowFormLogin = () => setShowForm("login");
  const setShowFormRegister = () => setShowForm("register");

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
        {showForm === "login" ? (
          <Login show={setShowFormRegister} />
        ) : (
          <Register show={setShowFormLogin} />
        )}
      </div>
    </div>
  );
}
