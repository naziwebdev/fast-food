import styles from "@/styles/Article.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import { authUser } from "@/utils/serverHelper";
import Details from "@/components/templates/Article/Details";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import MoreArticle from "@/components/templates/Article/MoreArticle/MoreArticle";
import connectTodb from "@/configs/db";
import articleModel from "@/models/article";
import articleComment from "@/models/articleComment";
import Comments from "@/components/templates/Article/Comments/Comments";

export default async function page({ params }) {
  const user = await authUser();
  connectTodb();
  const article = await articleModel
    .findOne({ _id: params.id })
    .populate("comments")
    .populate("author", "name");

  // const word = product.title.slice(0, 5);

  // const relatedProduct = await productModel.find({
  //   title: { $regex: word, $options: "i" },
  // });

  let route = [{ id: 1, title: "مقاله", href: `/article/${params.id}` }];
  return (
    <div>
      <Navbar />
      <BreadCrumb route={route} />
      <div data-aos="fade-up" className={styles.article_container}>
        <div className={styles.article_main}>
          <Details article={JSON.parse(JSON.stringify(article))} />
        </div>
        <Comments  />
        <MoreArticle />
      </div>
      <Footer />
    </div>
  );
}
