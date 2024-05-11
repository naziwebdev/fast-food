"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/components/modules/Modal/Modal";
import UserValidator from "@/validations/editUser";

export default function DataTable({ users }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const editHandler = (user) => {
    setShowModal(true);
    setName(user.name);
    setPhone(user.phone);
    setEmail(user?.email);
    setUserID(user._id);
  };

  const removeUser = async (userID) => {
    swal({
      title: "آیا از حذف اطمینان دارید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/user/${userID}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "کاربر با موفقیت حذف شد",
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
        }
      }
    });
  };

  const changeRole = async (id) => {
    swal({
      title: "آیا از تغییر اطمینان دارید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/user/role`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: "نقش کاربر با موفقیت تغییر یافت",
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
  const editUser = async (event) => {
    event.preventDefault();
    setShowModal(false);
    const newUser = {
      name,
      phone,
      email,
    };

    try {
      await UserValidator.validate(newUser);
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch(`/api/user/${userID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.status === 200) {
      (await res).json();

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          router.refresh();
        }
      });
    } else {
      swal({
        title: "  با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  const banUser = async (phone, email) => {
    swal({
      title: "آیا از بن اطمینان دارید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/user/ban`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ phone, email }),
        });

        if (res.status === 200) {
          await res.json();

          swal({
            title: " کاربر با موفقیت بن شد",
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
          {users?.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.role === "ADMIN" ? "مدیر" : "کاربر"}</td>
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
                  onClick={() => removeUser(item._id)}
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
                  حذف
                </button>
              </td>
              <td>
                <button
                  onClick={() => changeRole(item._id)}
                  className={`${styles.btn} ${styles.role_control_btn}`}
                >
                  تغییر سطح
                </button>
              </td>
              <td>
                <button
                  onClick={() => banUser(item.phone, item?.email)}
                  className={`${styles.btn} ${styles.ban_btn}`}
                >
                  بن
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal onClose={closeModal}>
          <form className={styles.form}>
            <div className={styles.input_wrapper}>
              <label htmlFor="name">نام و نام خانوادگی </label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="phone">شماره همراه</label>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                id="phone"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="email"> ایمیل </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                type="email"
                className={styles.input}
              />
            </div>

            <button onClick={editUser} className={styles.form_btn}>
              آپدیت
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
