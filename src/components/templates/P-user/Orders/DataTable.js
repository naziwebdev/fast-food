"use client";
import styles from "./DataTable.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import swal from "sweetalert";

export default function DataTable({ orders }) {
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_head}>
            <th className={styles.table_title}>شناسه</th>
            <th className={styles.table_title}>محصولات</th>
            <th className={styles.table_title}>مبلغ</th>
            <th className={styles.table_title}>تاریخ</th>
            <th className={styles.table_title}>شهر</th>
            <th className={styles.table_title}>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {orders.length != 0 ? (
            orders.map((item) => (
              <tr key={item._id} className={styles.table_row}>
                <td className={styles.table_col}>
                  {item.code}
                </td>

                <td>{item.products.map(product => (
                    <span key={product._id}>{product.title} {" , "}</span>
                ))}</td>
                <td>{item.price}</td>
                <td>{new Date(item.createdAt).toLocaleDateString("fa-IR")}</td>

                <td>{item.city}</td>
                <td>
                  <span className={styles.status_accept}>سفارش ثبت شده</span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.empty_comment}>هنوز سفارشی ثبت نکردید</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
