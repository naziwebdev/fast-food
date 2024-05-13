"use client";
import styles from "./AddArticle.module.css";
import articleValidation from "@/validations/article";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddArticle({ userID }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState({});
  const [author, setAthor] = useState(userID);
  const router = useRouter();

  const articleHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", img);
    formData.append("author", author);

    try {
      await articleValidation.validate({
        title,
        description,
        author,
        img,
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/articles", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      await res.json();

      swal({
        title: " با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          router.refresh();
          setTitle("")
          setDescription("")
          setImg("")
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

  return (
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
        <label htmlFor="text">محتوا</label>
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
      <button onClick={articleHandler} className={styles.form_btn}>
        افزودن
      </button>
    </form>
  );
}
