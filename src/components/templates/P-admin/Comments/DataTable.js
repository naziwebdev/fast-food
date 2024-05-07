"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";

export default function DataTable({ comments }) {
  const showTicket = (message) => {
    swal({
      title: message,
      buttons: "بستن",
    });
  };

  const banUser = async (phone , email) => {
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
          body: JSON.stringify({ phone , email }),
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

  const answerTicket = async (ticket) => {
    swal({
      title: "پاسخ را وارد نمایید ",
      content: "input",
      buttons: "ارسال",
    }).then(async (value) => {
      if (value) {
        const answer = {
          ...ticket,
          department:ticket.department._id,
          body: value,
          ticketID: ticket._id,
        };
        const res = await fetch(`/api/tickets/answer`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(answer),
        });

        if (res.status === 201) {
          await res.json();

          swal({
            title: " پاسخ با موفقیت ارسال شد",
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
            <th className={styles.table_title}>شماره همراه</th>
            <th className={styles.table_title}>امتیاز</th>
            <th className={styles.table_title}>محصول</th>
            <th className={styles.table_title}>تاریخ ثبت</th>
            <th className={styles.table_title}>مشاهده</th>
            <th className={styles.table_title}>حذف</th>
            <th className={styles.table_title}>تایید/رد</th>
            <th className={styles.table_title}>پاسخ</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.user.name}</td>
              <td>{item.user.phone}</td>
              <td>{item.score}</td>
              <td>{item.productID.title}</td>
              <td>{new Date(item.date).toLocaleDateString('fa-IR')}</td>
              <td>
                <button
                  onClick={() => showTicket(item.body)}
                  className={`${styles.btn} ${styles.seen_btn}`}
                >
                  مشاهده
                </button>
              </td>
              <td>
                <button
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
                  حذف
                </button>
              </td>
              <td>
                <button
                  onClick={() => showTicket(item.body)}
                  className={`${styles.btn} ${styles.accept_btn}`}
                >
                  {item.isAccept === 0 ? 'تایید' : 'رد'}
                </button>
              </td>
              <td>
                <button
                  onClick={() => answerTicket(item)}
                  className={`${styles.btn} ${styles.answer_btn}`}
                >
                  پاسخ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
