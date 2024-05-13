import styles from "./ArticleCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { TbShare } from "react-icons/tb";

export default function Article({ article }) {
  return (
    <div className={styles.article}>
      <img
        src={article.img}
        alt="article"
        className={styles.article_img}
        width={440}
        height={450}
      />
      <div className={styles.article_content}>
        <div className={styles.article_date}>
          {new Date(article.createdAt).toLocaleDateString('fa-IR')}
        </div>
        <div className={styles.article_details}>
          <p className={styles.article_tag}>پیتزا</p>
          <Link href={`/article/${article._id}`}>
            <h3 className={styles.article_title}>{article.title}</h3>
          </Link>
          <div className={styles.article_info}>
            <div className={styles.article_author}>
              <span>نویسنده</span>
              <FaUserCircle className={styles.article_icon} />
              <span>{article.author?.name}</span>
            </div>

            <div className={styles.article_actions}>
              <div className={styles.article_comment}>
                <FaRegCommentAlt className={styles.article_icon2} />
                <span className={styles.article_badge}>{article.comments?.length}</span>
              </div>

              <TbShare className={styles.article_icon3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
