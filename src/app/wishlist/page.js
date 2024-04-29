import styles from "@/styles/Wishlist.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import ProductCard from "@/components/modules/ProductCard/ProductCard";
import connectTodb from "@/configs/db";
import wishlistModel from "@/models/wishlist";
import { authUser } from "@/utils/auth";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

export default async function page() {
  const route = [{ id: 1, title: "علاقه مندی ها", href: "/wishlist" }];
  connectTodb();
  const user = await authUser();
  let wishlist = [];
  if (user) {
    wishlist = await wishlistModel
      .find({ user: user._id })
      .populate("product", "title price score")
      .lean();
  }

  const mainWishlist = JSON.parse(JSON.stringify(wishlist));

  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <BreadCrumb route={route} />
      <h3 className={styles.wishlist_title}>محصولات مورد علاقه شما :</h3>
      <div data-aos="fade-up" className={styles.wishlist_container}>
        {mainWishlist.length != 0 &&
          mainWishlist.map((item) => (
            <ProductCard key={item._id} isfull={false} product={item.product} />
          ))}

        {mainWishlist.length === 0 && (
          <div className={styles.wishlist_empty}>
            <FaRegHeart className={styles.wishlist_icon} />
            <h2 className={styles.empty_title}>لیست مورد علاقه ها خالی است</h2>
            <p className={styles.empty_text}>
              شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید. در صفحه
              "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.
            </p>
            <Link href="/">
              <button className={styles.empty_btn}>بازگشت به فروشگاه</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
