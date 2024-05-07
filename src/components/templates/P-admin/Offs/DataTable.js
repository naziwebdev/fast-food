"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";

export default function DataTable({ offs }) {
  const showComment = (message) => {
    swal({
      title: message,
      buttons: "بستن",
    });
  };

  const answerComment = async (comment) => {
    swal({
      title: "پاسخ را وارد نمایید ",
      content: "input",
      buttons: "ارسال",
    }).then(async (value) => {
      if (value) {
        const answer = {
          ...comment,
          productID: comment.productID._id,
          body: value,
          mainCommentID: comment._id,
        };
        const res = await fetch(`/api/comments/answer`, {
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

  const acceptComment = async (commentID) => {
    swal({
      title: " از تایید کامنت اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/comments/accept/${commentID}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "  با موفقیت انجام شد",
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

  const rejectComment = async (commentID) => {
    swal({
      title: " از رد کامنت اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/comments/reject/${commentID}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "  با موفقیت انجام شد",
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

  const removeComment = async (commentID) => {
    swal({
      title: " از حذف کامنت اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/comments/${commentID}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "  با موفقیت انجام شد",
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
            <th className={styles.table_title}>کد </th>
            <th className={styles.table_title}>درصد</th>
            <th className={styles.table_title}>حداکثر استفاده</th>
            <th className={styles.table_title}>استفاده شده</th>
            <th className={styles.table_title}>ویرایش</th>
            <th className={styles.table_title}>حذف</th>
          </tr>
        </thead>
        <tbody>
          {offs.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.code}</td>
              <td>{item.percent}</td>
              <td>{item.maxUsage}</td>
              <td>{item.usage}</td>
              <td>
                <button
                  onClick={() => showComment(item.body)}
                  className={`${styles.btn} ${styles.edit_btn}`}
                >
                  ویرایش
                </button>
              </td>
              <td>
                <button onClick={() => removeComment(item._id)}
                className={`${styles.btn} ${styles.remove_btn}`}>
                  حذف
                </button>
              </td>
              
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
