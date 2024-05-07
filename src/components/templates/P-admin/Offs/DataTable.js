"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function DataTable({ offs }) {

  const router = useRouter();

  const removeOff = async (offID) => {
    swal({
      title: " از حذف تخفیف اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/offs/${offID}`, {
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
             router.refresh()
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
                  className={`${styles.btn} ${styles.edit_btn}`}
                >
                  ویرایش
                </button>
              </td>
              <td>
                <button onClick={() => removeOff(item._id)}
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
