"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Modal from "@/components/modules/Modal/Modal";
import { useState } from "react";
import offValidation from "@/validations/off";

export default function DataTable({ offs }) {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [percent, setPercent] = useState(0);
  const [maxUsage, setMaxUsage] = useState(0);
  const [offID, setOffID] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const editHandler = (off) => {
    setShowModal(true);
    setCode(off.code);
    setPercent(off.percent);
    setMaxUsage(off.maxUsage);
    setOffID(off._id);
  };

  const editOff = async (event) => {
    event.preventDefault();

    setShowModal(false)

    const discount = {
      code,
      percent,
      maxUsage,
    };

    try {
      await offValidation.validate(discount);
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch(`/api/offs/${offID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(discount),
    });

    if (res.status === 200) {
      await res.json();

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          setCode("");
          setMaxUsage(0);
          setPercent(0);
          router.refresh();
        }
      });
    } else {
      swal({
        title:await res.status,
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

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
                  onClick={() => editHandler(item)}
                  className={`${styles.btn} ${styles.edit_btn}`}
                >
                  ویرایش
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeOff(item._id)}
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {showModal && (
          <Modal onClose={closeModal}>
            <form className={styles.form}>
              <div className={styles.input_wrapper}>
                <label htmlFor="code">کد تخفیف</label>
                <input
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  id="code"
                  type="text"
                  placeholder="کد تخفیف"
                  className={styles.input}
                />
              </div>
              <div className={styles.input_wrapper}>
                <label htmlFor="percent">درصد تخفیف</label>
                <input
                  value={percent}
                  onChange={(event) => setPercent(event.target.value)}
                  id="percent"
                  type="number"
                  placeholder="درصد تخفیف "
                  className={styles.input}
                />
              </div>
              <div className={styles.input_wrapper}>
                <label htmlFor="maxUsage">حداکثر استفاده</label>
                <input
                  value={maxUsage}
                  onChange={(event) => setMaxUsage(event.target.value)}
                  id="maxUsage"
                  type="number"
                  placeholder="حداکثر استفاده"
                  className={styles.input}
                />
              </div>

              <button onClick={editOff} className={styles.form_btn}>
                آپدیت
              </button>
            </form>
          </Modal>
        )}
      </table>
    </div>
  );
}
