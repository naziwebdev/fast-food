import styles from "./ArticleCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { TbShare } from "react-icons/tb";

export default function Article() {
  return (
    <div className={styles.article} >
      <Image
        src="/images/p-7.jpg"
        alt="article"
        className={styles.article_img}
        width={440}
        height={450}
      />
      <div className={styles.article_content}>
        <div className={styles.article_date}>
          <span>24</span>
          <span>بهمن</span>
        </div>
        <div className={styles.article_details}>
          <p className={styles.article_tag}>پیتزا</p>
          <Link href="/">
             <h3 className={styles.article_title}>بهترین زمان خوردن پیتزا</h3>
          </Link>
          <div className={styles.article_info}>
            <div className={styles.article_author}>
              <span>نویسنده</span>
              <FaUserCircle className={styles.article_icon} />
               <span>sasan</span>
            </div>  
        
          <div className={styles.article_actions}>
            <div className={styles.article_comment}>
              <FaRegCommentAlt className={styles.article_icon2} />
            <span className={styles.article_badge}>2</span>
            </div>
            
              <TbShare className={styles.article_icon3} />
          </div>       
        </div>
        </div>
      </div>
    </div>
  );
}
