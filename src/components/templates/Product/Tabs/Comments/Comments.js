import styles from "./Comments.module.css";
import CommentCard from "@/components/modules/CommentCard/CommentCard";
export default function Comments({product}) {
  return (
    <div className={styles.comments}>
      <div className={styles.comment_container}>
        {product.comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </div>
      <form className={styles.comment_form}>
        <input
          type="text"
          className={styles.comment_input}
          placeholder="نام و نام خانوادگی"
        />
        <input
          type="email"
          className={styles.comment_input}
          placeholder=" ایمیل"
        />
        <input
          type="text"
          className={styles.comment_input}
          placeholder="عنوان نظر"
        />
        <textarea
          className={styles.comment_textarea}
          placeholder="نظر خود را بنویسید ..."
        ></textarea>
      </form>
    </div>
  );
}
