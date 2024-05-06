"use client";
import styles from "./DataTable.module.css";

export default function DataTable({ tickets }) {
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
            <tr key={item.id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.user.name}</td>
              <td>{item.title}</td>
              <td>{item.department.title}</td>
              <td>
                <button className={`${styles.btn} ${styles.seen_btn}`}>
                  مشاهده
                </button>
              </td>
              <td>
                <button className={`${styles.btn} ${styles.answer_btn}`}>
                  پاسخ
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
