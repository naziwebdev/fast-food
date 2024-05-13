import styles from "./Details.module.css";
import Image from "next/image";

export default async function Details({ article }) {
  return (
    <div className={styles.details_content}>
      <h1 className={styles.details_title}>{article.title}</h1>
      <p className={styles.details_text}>{article.description}</p>
      <h4 >  نویسنده : {article.author?.name}</h4>
      <img
        src={article.img}
        alt="fast-food"
        width={800}
        height={800}
        className={styles.details_img}
      />
    </div>
  );
}
