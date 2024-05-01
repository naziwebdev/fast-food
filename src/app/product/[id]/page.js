import styles from "@/styles/Product.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import { authUser } from "@/utils/serverHelper";
import Gallery from "@/components/templates/Product/Gallery/Gallery";
import Details from "@/components/templates/Product/Details/Details";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Tabs from "@/components/templates/Product/Tabs/Tabs";
import MoreProducts from "@/components/templates/Product/MoreProducts/MoreProducts";
import connectTodb from "@/configs/db";
import productModel from "@/models/product";

export default async function Product({ params }) {
  const user = await authUser();
  connectTodb();
  const product = await productModel
    .findOne({ _id: params.id })
    .populate("comments");

  const word = product.title.slice(0, 5);

  const relatedProduct = await productModel.find({
    title: { $regex: word, $options: "i" },
  });

  let route = [{ id: 1, title: "جزییات محصول", href: `/product/${params.id}` }];
  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <BreadCrumb route={route} />
      <div data-aos="fade-up" className={styles.product_container}>
        <div className={styles.Product_main}>
          <Gallery />
          <Details product={JSON.parse(JSON.stringify(product))} />
        </div>
        <Tabs product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts product={JSON.parse(JSON.stringify(relatedProduct))} />
      </div>
      <Footer />
    </div>
  );
}
