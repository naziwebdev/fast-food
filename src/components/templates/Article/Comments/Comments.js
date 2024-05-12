"use client";

import styles from "./Comments.module.css";
import CommentCard from "@/components/modules/CommentCard/CommentCard";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import commentValidation from "@/validations/comment";
import swal from "sweetalert";
import Link from "next/link";


export default function Comments() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [score, setScore] = useState(5);



  const starRatingHandler = (rate) => {
    setScore(rate);
  };

  const addCommentHandler = async (event) => {
    event.preventDefault();

    // const comment = {
    //   user:userID,
    //   username,
    //   email,
    //   title,
    //   body,
    //   productID,
    //   score,
    // };

    // try {
    //   await commentValidation.validate(comment);
    // } catch (err) {
    //   return swal({
    //     title: err,
    //     icon: "error",
    //     buttons: "تلاش دوباره",
    //   });
    // }

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (res.status === 201) {
      (await res).json();

      swal({
        title: " کامنت با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          setUsername("");
          setEmail("");
          setTitle("");
          setBody("");
          setScore(0);
        }
      });
    } else {
      swal({
        title: "ثبت کامنت با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };


 

  return (
    <div className={styles.comments}>
      {/* <div className={styles.comment_container}>
        {comments.length != 0 ? comments.map(
          (comment) =>
            comment.isAccept != 0 && (
              <CommentCard key={comment._id} comment={comment} />
            )
        ):
        <div className={styles.empty_comment}>
          هنوز کامنتی ثبت نشده
          </div>
      }
      </div> */}
      <form className={styles.comment_form}>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          className={styles.comment_input}
          placeholder="نام و نام خانوادگی"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          className={styles.comment_input}
          placeholder=" ایمیل"
        />
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          className={styles.comment_input}
          placeholder="عنوان نظر"
        />
        <div className={styles.comment_score}>
          <span>امتیاز دهید :</span>

          {score === 0 ? (
            <>
              <FaRegStar
                onClick={() => starRatingHandler(1)}
                className={styles.comment_icon}
              />
              <FaRegStar
                onClick={() => starRatingHandler(2)}
                className={styles.comment_icon}
              />
              <FaRegStar
                onClick={() => starRatingHandler(3)}
                className={styles.comment_icon}
              />
              <FaRegStar
                onClick={() => starRatingHandler(4)}
                className={styles.comment_icon}
              />
              <FaRegStar
                onClick={() => starRatingHandler(5)}
                className={styles.comment_icon}
              />
            </>
          ) : (
            <>
              {new Array(score).fill(0).map(() => (
                <FaStar
                  className={styles.comment_icon}
                  key={crypto.randomUUID()}
                />
              ))}
              {new Array(5 - score).fill(0).map(() => (
                <FaRegStar
                  className={styles.comment_icon}
                  key={crypto.randomUUID()}
                />
              ))}
            </>
          )}
        </div>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className={styles.comment_textarea}
          placeholder="نظر خود را بنویسید ..."
        ></textarea>
        {/* {userID ? (
          <button onClick={addCommentHandler} className={styles.addBtn}>
            ثبت{" "}
          </button>
        ) : (
          <Link href='/login-register' className={styles.addBtn}>
            ابتدا لاگین کنید
          </Link>
        )} */}
      </form>
    </div>
  );
}
