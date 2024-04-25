"use client";
import styles from "@/styles/ScrollToTop.module.css";
import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibleBtn = (event) => {
      event.preventDefault();

      const currentScroll = window.scrollY;

      if (currentScroll > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibleBtn);

    return () => window.removeEventListener("scroll", toggleVisibleBtn);
  }, []);

  const goToUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${isVisible ? styles.toUpBtn : styles.toUpBtn_hidden}`}
      onClick={goToUpHandler}
    >
      <RiArrowUpSLine className={styles.toUpBtn_icon} />
    </button>
  );
}
