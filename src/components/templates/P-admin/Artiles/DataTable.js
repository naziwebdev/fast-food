"use client";
import styles from "./DataTable.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Modal from "@/components/modules/Modal/Modal";
import { useState } from "react";
import productValidation from "@/validations/detailsProduct";
import Image from "next/image";
import articleValidation from "@/validations/article";

export default function DataTable({ articles }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState({});
  const [articleID, setArticleID] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const showText = (text) => {
    swal({
      text: text,
      buttons: "بستن",
    });
  };

  const editHandler = (article) => {
    setShowModal(true);
    setTitle(article.title);
    setDescription(article.description);
    setArticleID(article._id);
  };

  const editArticle = async (event) => {
    event.preventDefault();
    setShowModal(false);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", img);

    try {
      await articleValidation.validate({
        title,
        description,
        img,
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch(`/api/articles/${articleID}`, {
      method: "PUT",
      body: formData,
    });

    if (res.status === 200) {
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
        title: await res.status,
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res.json());
    }
  };

  const removeArticle = async (articleID) => {
    swal({
      title: " از حذف محصول اطمینان دارید؟",
      content: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        const res = await fetch(`/api/articles/${articleID}`, {
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
            <th className={styles.table_title}>عکس</th>
            <th className={styles.table_title}>عنوان</th>
            <th className={styles.table_title}>متن</th>
            <th className={styles.table_title}>نویسنده</th>
            <th className={styles.table_title}>مشاهده</th>
            <th className={styles.table_title}>ویرایش</th>
            <th className={styles.table_title}>حذف</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((item, index) => (
            <tr key={item._id} className={styles.table_row}>
              <td className={styles.table_col}>{index + 1}</td>
              <td>
                <img
                  src={item?.img}
                  width={90}
                  height={60}
                  alt="product"
                  className={styles.table_img}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description.substr(0, 50)}</td>
              <td>{item.author.name}</td>
              <td>
                <button
                  onClick={() => editHandler(item)}
                  className={`${styles.btn} ${styles.seen_btn}`}
                >
                  ویرایش
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeArticle(item._id)}
                  className={`${styles.btn} ${styles.remove_btn}`}
                >
                  حذف
                </button>
              </td>
              <td>
                <button
                  onClick={() => showText(item.description)}
                  className={`${styles.btn} ${styles.answer_btn}`}
                >
                  مشاهده
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
              <label htmlFor="title">عنوان </label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                id="title"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="description">توضیحات</label>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                id="description"
                className={styles.textarea}
              ></textarea>
            </div>

            <div className={styles.input_wrapper}>
              <label htmlFor="img">عکس </label>
              <input
                onChange={(event) => setImg(event.target.files[0])}
                id="img"
                type="file"
                className={styles.input}
              />
            </div>

            <button onClick={editArticle} className={styles.form_btn}>
              آپدیت
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
