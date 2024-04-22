import styles from "./Article.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Article() {
  return (
    <Link href="/" className={styles.footer_article}>
      <Image
        src="/images/p-3.jpg"
        alt="logo"
        className={styles.footer_logo}
        width={200}
        height={100}
      />
      <div className={styles.footer_article_content}>
        <h4 className={styles.footer_article_title}>فواید پیتزا</h4>
        <p className={styles.footer_article_text}>
          ۳ اردیبهشت ۱۴۰۳{" "}
          <span className={styles.footer_article_text2}>بدون دیدگاه</span>
        </p>
      </div>
    </Link>
  );
}
