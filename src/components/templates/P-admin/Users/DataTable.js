"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";

export default function DataTable({ users }) {
  const removeUser = async (userID) => {
    swal({
      title: "آیا از حذف اطمینان دارید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/user/${userID}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "کاربر با موفقیت حذف شد",
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
        }
      }
    });
  };
  const changeRole = async (id) => {
    swal({
      title: "آیا از تغییر اطمینان دارید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/user/role`, {
          method: "PUT",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({id})
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "نقش کاربر با موفقیت تغییر یافت",
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
          console.log(await res.json())
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
            <th className={styles.table_title}>نام و نام خانوادگی</th>
            <th className={styles.table_title}>شماره موبایل</th>
            <th className={styles.table_title}>نقش</th>
            <th className={styles.table_title}>ویرایش</th>
            <th className={styles.table_title}>حذف</th>
            <th className={styles.table_title}>تغییر سطح</th>
            <th className={styles.table_title}>بن</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.role === "ADMIN" ? "مدیر" : "کاربر"}</td>
              <td>
                <button className={`${styles.btn} ${styles.edit_btn}`}>
                  ویرایش
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeUser(item._id)}
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
                  حذف
                </button>
              </td>
              <td>
                <button onClick={() => changeRole(item._id)} className={`${styles.btn} ${styles.role_control_btn}`}>
                  تغییر سطح
                </button>
              </td>
              <td>
                <button className={`${styles.btn} ${styles.ban_btn}`}>
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
