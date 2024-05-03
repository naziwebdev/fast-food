"use client";
import styles from "./DataTable.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";


export default function DataTable() {
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
          <th  className={styles.table_title}>مشاهده</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.table_row}>
          <td className={styles.table_col}>۱</td>
          <td>1403/2/14</td>
          <td>pizaa</td>
          <td>
            <FaStar className={styles.table_icon}/>
            <FaStar className={styles.table_icon}/>
            <FaStar className={styles.table_icon}/>
            <FaRegStar className={styles.table_icon}/>
            <FaRegStar className={styles.table_icon}/>
          </td>
          <td>
            <span className={styles.status}>تایید شده</span>
          </td>
          <td>
            <button className={styles.seen}>مشاهده</button>
          </td>
        </tr>
        <tr className={styles.table_row}>
          <td className={styles.table_col}>۱</td>
          <td>1403/2/14</td>
          <td>pizaa</td>
          <td>
            <FaStar className={styles.table_icon}/>
            <FaStar className={styles.table_icon}/>
            <FaStar className={styles.table_icon}/>
            <FaRegStar className={styles.table_icon}/>
            <FaRegStar className={styles.table_icon}/>
          </td>
          <td>
            <span className={styles.status}>تایید شده</span>
          </td>
          <td>
            <button className={styles.seen}>مشاهده</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
