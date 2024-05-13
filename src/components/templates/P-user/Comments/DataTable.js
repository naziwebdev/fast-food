"use client";
import styles from "./DataTable.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import swal from "sweetalert";

export default function DataTable({ comments, articleComments }) {
  const showCommentHandler = (message) => {
    swal({
      title: message,
      buttons: "بستن",
    });
  };

  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_head}>
            <th className={styles.table_title}>شناسه</th>
            <th className={styles.table_title}>تاریخ</th>
            <th className={styles.table_title}>مقاله/محصول</th>
            <th className={styles.table_title}>امتیاز</th>
            <th className={styles.table_title}>وضعیت</th>
            <th className={styles.table_title}>مشاهده</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((item, index) => (
              <tr key={item._id} className={styles.table_row}>
                <td className={styles.table_col}>{index + 1}</td>
                <td>{new Date(item.date).toLocaleDateString("fa-IR")}</td>
                <td>{item.productID?.title}</td>
                <td>
                  {new Array(item.score).fill(0).map((rate) => (
                    <FaStar className={styles.table_icon} />
                  ))}

                  {new Array(5 - item.score).fill(0).map((rate) => (
                    <FaRegStar className={styles.table_icon} />
                  ))}
                </td>
                <td>
                  {item.isAccept ? (
                    <span className={styles.status_accept}>تایید شده</span>
                  ) : (
                    <span className={styles.status}>تایید نشده</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => showCommentHandler(item.body)}
                    className={styles.seen}
                  >
                    مشاهده
                  </button>
                </td>
              </tr>
            ))
          }
          {articleComments.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{new Date(item.date).toLocaleDateString("fa-IR")}</td>
              <td>{item.articleID?.title}</td>
              <td>
                {new Array(item.score).fill(0).map((rate) => (
                  <FaStar className={styles.table_icon} />
                ))}

                {new Array(5 - item.score).fill(0).map((rate) => (
                  <FaRegStar className={styles.table_icon} />
                ))}
              </td>
              <td>
                {item.isAccept ? (
                  <span className={styles.status_accept}>تایید شده</span>
                ) : (
                  <span className={styles.status}>تایید نشده</span>
                )}
              </td>
              <td>
                <button
                  onClick={() => showCommentHandler(item.body)}
                  className={styles.seen}
                >
                  مشاهده
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
