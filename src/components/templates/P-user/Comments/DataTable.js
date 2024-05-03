"use client";
import styles from "./DataTable.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function DataTable({ comments }) {
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_head}>
            <th className={styles.table_title}>شناسه</th>
            <th className={styles.table_title}>تاریخ</th>
            <th className={styles.table_title}>محصول</th>
            <th className={styles.table_title}>امتیاز</th>
            <th className={styles.table_title}>وضعیت</th>
            <th className={styles.table_title}>مشاهده</th>
          </tr>
        </thead>
        <tbody>
          {comments.length != 0 ? (
            comments.map((item, index) => (
              <tr key={item.id} className={styles.table_row}>
                <td className={styles.table_col}>{index + 1}</td>
                <td>{new Date(item.date).toLocaleDateString("fa-IR")}</td>
                <td>pizaa</td>
                <td>
                  {new Array(item.score).fill(0).map((rate) => (
                    <FaStar className={styles.table_icon} />
                  ))}

                  {new Array(5 - item.score).fill(0).map((rate) => (
                    <FaRegStar className={styles.table_icon} />
                  ))}
                </td>
                <td>
                  <span className={styles.status}>تایید شده</span>
                </td>
                <td>
                  <button className={styles.seen}>مشاهده</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.empty_comment}>هنوز کامنتی ثبت نکردید</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
