import styles from "@/styles/Blog.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import ArticleCard from "@/components/modules/ArticleCard/ArticleCard";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import connectTodb from "@/configs/db";
import articleModel from "@/models/article";

export default async function page() {
  connectTodb();
  const articles = await articleModel.find({}).populate("author", "name");

  let route = [{ id: 1, title: "مقاله ها", href: `/blog` }];
  return (
    <div>
      <Navbar />
      <BreadCrumb route={route} />
      <div data-aos="fade-up" className={styles.blog_container}>
        <div className={styles.blog_main}>
          {articles.map((item) => (
            <ArticleCard article={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
