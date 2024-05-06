"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";

export default function DataTable({ tickets }) {

const showTicket = (message) => {
    swal({
        title:message,
        buttons:'بستن'
    })
}

const banUser = async (phone) => {
  swal({
    title: "آیا از بن اطمینان دارید",
    icon: "warning",
    buttons: ["خیر", "بله"],
  }).then(async (value) => {
    if (value) {
      const res = await fetch(`/api/user/ban`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      if (res.status === 200) {
        await res.json();

        swal({
          title: " کاربر با موفقیت بن شد",
          icon: "success",
          buttons: "بستن",
        }).then((value) => {
          if (value) {
            location.reload();
          }
        });
      } else {
        swal({
          title: "عملیات با شکست روبرو شد ",
          icon: "error",
          buttons: "بستن",
        });
        console.log(await res.json());
      }
    }
  });
};


  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_head}>
            <th className={styles.table_title}>شناسه</th>
            <th className={styles.table_title}>کاربر </th>
            <th className={styles.table_title}>عنوان</th>
            <th className={styles.table_title}>دپارتمان</th>
            <th className={styles.table_title}>مشاهده</th>
            <th className={styles.table_title}>پاسخ</th>
            <th className={styles.table_title}>بن</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.user.name}</td>
              <td>{item.title}</td>
              <td>{item.department.title}</td>
              <td>
                <button onClick={() => showTicket(item.body)} className={`${styles.btn} ${styles.seen_btn}`}>
                  مشاهده
                </button>
              </td>
              <td>
                <button className={`${styles.btn} ${styles.answer_btn}`}>
                  پاسخ
                </button>
              </td>
              <td>
                <button onClick={() => banUser(item.user.phone)} className={`${styles.btn} ${styles.ban_btn}`}>
                  بن
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
