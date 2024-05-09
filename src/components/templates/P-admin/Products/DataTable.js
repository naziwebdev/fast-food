"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function DataTable({ products }) {
  const router = useRouter();

  const removeProduct = async (productID) => {
    swal({
      title: " از حذف محصول اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/products/${productID}`, {
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
              router.refresh();
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
            <th className={styles.table_title}>عنوان</th>
            <th className={styles.table_title}>مبلغ</th>
            <th className={styles.table_title}>موجودی</th>
            <th className={styles.table_title}>امتیاز</th>
            <th className={styles.table_title}>ویرایش</th>
            <th className={styles.table_title}>حذف</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price.toLocaleString("fa-IR")}</td>
              <td>{item.countAvailable}</td>
              <td>{item.score}</td>
              <td>
                <button className={`${styles.btn} ${styles.seen_btn}`}>
                  ویرایش
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeProduct(item._id)}
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
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
