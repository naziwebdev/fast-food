"use client";

import styles from "./AddForm.module.css";
import { useState } from "react";
import productValidation from "@/validations/detailsProduct";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function SendTicket() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [countAvailable, setCountAvailable] = useState(0);
  const [weight, setWeight] = useState(0);
  const [materials, setMaterals] = useState([]);
  const [tast, setTast] = useState("");
  const [size, setSize] = useState(0);
  const [img, setImg] = useState({});

  const router = useRouter();

  const productHandler = async (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    
    formData.append("title", title);
    formData.append("price", price);
    formData.append("tags", tags);
    formData.append("description", description);
    formData.append("countAvailable", countAvailable);
    formData.append("weight", weight);
    formData.append("materials", materials);
    formData.append("tast", tast);
    formData.append("size", size);
    formData.append("img", img);

    try {
      await productValidation.validate({
        title,
        price,
        tags,
        description,
        countAvailable,
        weight,
        materials,
        tast,
        size,
        img,
      });
    } catch (err) {
      return swal({
        title: err,
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/products", {
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
        <label htmlFor="price">قیمت</label>
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          id="price"
          type="number"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="tags">تگ ها </label>
        <input
          value={tags}
          onChange={(event) => setTags(event.target.value.split(","))}
          id="tags"
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
        <label htmlFor="countAvailable">موجودی </label>
        <input
          value={countAvailable}
          onChange={(event) => setCountAvailable(event.target.value)}
          id="countAvailable"
          type="number"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="weight">وزن </label>
        <input
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
          id="weight"
          type="number"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="materials">مواد تشکیل دهنده</label>
        <input
          value={materials}
          onChange={(event) => setMaterals(event.target.value.split(","))}
          id="materials"
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="tast">مزه </label>
        <input
          value={tast}
          onChange={(event) => setTast(event.target.value)}
          id="tast"
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="size">اندازه</label>
        <input
          value={size}
          onChange={(event) => setSize(event.target.value)}
          id="size"
          type="number"
          className={styles.input}
        />
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

      <button onClick={productHandler} className={styles.form_btn}>
        افزودن
      </button>
    </form>
  );
}
