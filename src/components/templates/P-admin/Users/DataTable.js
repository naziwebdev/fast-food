"use client";
import styles from "./DataTable.module.css";

export default function DataTable({ users }) {
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
          {users.map((item, index) => (
            <tr key={item.id} className={styles.table_row}>
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
                <button className={`${styles.btn} ${styles.remove_btn}`}>
                  حذف
                </button>
              </td>
              <td>
                <button className={`${styles.btn} ${styles.role_control_btn}`}>
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
