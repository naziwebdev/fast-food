"use client";

import styles from "./SendTicket.module.css";
import { useState, useEffect } from "react";
import ticketValidation from "@/validations/ticket";
import swal from "sweetalert";

export default function SendTicket() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [departments, setDepartments] = useState([]);
  const [subDepartments, setSubDepartments] = useState([]);
  const [priority, setPriority] = useState(-1);
  const [departmentID, setDepartmentID] = useState(-1);
  const [subDepartmentID, setSubDepartmentID] = useState(-1);

  useEffect(() => {
    const getDepartment = async () => {
      const res = await fetch("/api/deprtments");

      if (res.status == 200) {
        const data = await res.json();

        setDepartments(data);
      }
    };

    getDepartment();
  }, []);

  useEffect(() => {
    const getSubDepartment = async () => {
      const res = await fetch(`/api/deprtments/sub/${departmentID}`);

      if (res.status == 200) {
        const data = await res.json();

        setSubDepartments(data);
      }
    };

    getSubDepartment();
  }, [departmentID]);

  const SendTicketHandler = async (event) => {
    event.preventDefault();
    if (priority !== -1) {
      const ticket = {
        title,
        body,
        department: departmentID,
        subDepartment: subDepartmentID,
        priority,
      };

      try {
        await ticketValidation.validate(ticket);
      } catch (err) {
        return swal({
          title: err,
          icon: "error",
          buttons: "تلاش دوباره",
        });
      }

      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ticket),
      });

      if (res.status === 201) {
        (await res).json();

        swal({
          title: " با موفقیت ثبت شد",
          icon: "success",
          buttons: "بستن",
        }).then((value) => {
          if (value) {
            setTitle("");
            setBody("");
            setPriority(-1);
            setDepartmentID(-1);
            setSubDepartmentID(-1);
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
    } else {
      swal({
        title: "سطح الویت را انتخاب کنید",
        icon: "warning",
        buttons: "تلاش دوباره",
      });
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.input_wrapper}>
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          id="name"
          type="text"
          placeholder="نام و نام خانوادگی"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="priority">سطح الویت</label>

        <select
          onChange={(event) => setPriority(event.target.value)}
          className={styles.select}
          id="priority"
        >
          <option value={-1}>یک گزینه را انتخاب کنید</option>
          <option value={3}>بالا</option>
          <option value={2}>متوسط</option>
          <option value={1}>کم</option>
        </select>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="department">دپارتمان </label>
        <select
          onChange={(event) => setDepartmentID(event.target.value)}
          className={styles.select}
          id="department"
        >
          <option value={-1}>یک گزینه را انتخاب کنید</option>
          {departments.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="subDepartment">ساب دپارتمان </label>

        <select
          onChange={(event) => setSubDepartmentID(event.target.value)}
          className={styles.select}
          id="subDepartment"
        >
          <option value={-1}>یک گزینه را انتخاب کنید</option>
          {subDepartments.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.textarea_wrapper}>
        <label htmlFor="body">متن تیکت را وارد نمایید </label>

        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className={styles.textarea}
          id="body"
        ></textarea>
      </div>

      <button onClick={SendTicketHandler} className={styles.form_btn}>
        ارسال
      </button>
    </form>
  );
}
