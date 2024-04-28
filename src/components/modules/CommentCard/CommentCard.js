import styles from "./CommentCard.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
export default function CommentCard({ comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_wrapper}>
        <div className={styles.comment_head}>
          <Image
            src="/images/user.png"
            className={styles.comment_avatar}
            alt="user"
            width={200}
            height={200}
          />
          <p className={styles.comment_username}>{comment.username}</p>
          <span className={styles.comment_date}>
          {new Date(comment?.date).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                calendar: "persian",
              })}
          </span>
        </div>
        <div className={styles.comment_score}>
          {new Array(comment.score).fill(0).map(() => (
            <FaStar className={styles.comment_icon} key={crypto.randomUUID()} />
          ))}
          {new Array(5 - comment.score).fill(0).map(() => (
            <FaRegStar
              className={styles.comment_icon}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
      <div className={styles.comment_body}>
        <h4 className={styles.comment_title}>{comment.title}</h4>
        <p className={styles.comment_text}>{comment.body}</p>
      </div>
    </div>
  );
}
