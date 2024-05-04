"use client";

import styles from "./Tickets.module.css";
import { useState } from "react";
import TicketCard from "./TicketCard";

export default function Tickets({ tickets }) {
  const [btnActive, setBtnActive] = useState("all");
  return (
    <div className={styles.tickets}>
      <div className={styles.btns}>
        <button
          onClick={() => setBtnActive("all")}
          className={`${styles.btn}  ${btnActive === "all" && styles.btn2}`}
        >
          همه
        </button>
        <button
          onClick={() => setBtnActive("answerd")}
          className={`${styles.btn}  ${btnActive === "answerd" && styles.btn2}`}
        >
          پاسخ داده شده
        </button>
        <button
          onClick={() => setBtnActive("noAnswer")}
          className={`${styles.btn} ${btnActive === "noAnswer" && styles.btn2}`}
        >
          پاسخ داده نشده
        </button>
      </div>
      <div className={styles.tickets_wrapper}>
        {tickets.length === 0 && (
          <div className={styles.tickets_empty}>هنوز تیکتی ثبت نکردید</div>
        )}

        {btnActive === "all" &&
          tickets.map((item) => <TicketCard key={item._id} ticket={item} />)}
        {btnActive === "answerd" &&
          tickets
            .filter((item) => item.hasAnswer === true)
            .map((item) => <TicketCard key={item._id} ticket={item} />)}
        {btnActive === "noAnswer" &&
          tickets
            .filter((item) => item.hasAnswer === false)
            .map((item) => <TicketCard key={item._id} ticket={item} />)}
      </div>
    </div>
  );
}
