"use client";

import styles from "./AddForm.module.css";
import { useState } from "react";
import offValidation from "@/validations/off";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function SendTicket() {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState(0);
  const [maxUsage, setMaxUsage] = useState(0);

  const router = useRouter();

  const SendOffHandler = async (event) => {
    event.preventDefault();

    const discount = {
      code,
      percent,
      maxUsage,
    };

    try {
      await offValidation.validate(discount);
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/offs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(discount),
    });

    if (res.status === 201) {
      (await res).json();

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          setCode("");
          setMaxUsage(0);
          setPercent(0);
          router.refresh();
        }
      });
    } else {
      swal({
        title: "  با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.input_wrapper}>
        <label htmlFor="code">کد تخفیف</label>
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          id="code"
          type="text"
          placeholder="کد تخفیف"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="percent">درصد تخفیف</label>
        <input
          value={percent}
          onChange={(event) => setPercent(event.target.value)}
          id="percent"
          type="number"
          placeholder="درصد تخفیف "
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="maxUsage">حداکثر استفاده</label>
        <input
          value={maxUsage}
          onChange={(event) => setMaxUsage(event.target.value)}
          id="maxUsage"
          type="number"
          placeholder="حداکثر استفاده"
          className={styles.input}
        />
      </div>

      <button onClick={SendOffHandler} className={styles.form_btn}>
        افزودن
      </button>
    </form>
  );
}
