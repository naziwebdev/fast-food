import styles from "@/styles/Product.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import { authUser } from "@/utils/auth";
import Gallery from "@/components/templates/Product/Gallery/Gallery";
import Details from "@/components/templates/Product/Details/Details";

export default async function Product() {
  const user = await authUser();

  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <div data-aos="fade-up" className={styles.product_container}>
        <div className={styles.Product_main}>
            <Gallery/>
            <Details/>
        </div>

      </div>
      <Footer/>
    </div>
  );
}
