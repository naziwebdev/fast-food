import styles from "./CommentCard.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
export default function CommentCard() {
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
          <p className={styles.comment_username}>ساسان راد</p>
          <span className={styles.comment_date}>1403/2/9</span>
        </div>
        <div className={styles.comment_score}>
          {Array(5)
            .fill(0)
            .map(() => (
              <FaStar className={styles.comment_icon} key={crypto.randomUUID()} />
            ))}
          {/* {Array(5 - 1)
            .fill(0)
            .map(() => (
              <FaRegStar key={crypto.randomUUID()} />
            ))} */}
        </div>
      </div>
      <div className={styles.comment_body}>
        <h4 className={styles.comment_title}>عالی </h4>
        <p className={styles.comment_text}>خیلی خوب بود ممنون</p>
      </div>
    </div>
  );
}
