import styles from "@/styles/p-user/Wishlist.module.css";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import ProductCard from "@/components/modules/ProductCard/ProductCard";
import { authUser } from "@/utils/serverHelper";
import connectTodb from "@/configs/db";
import wishlistModel from "@/models/wishlist";

export default async function page() {
  const user = await authUser();
  connectTodb();

  const wishlists = await wishlistModel
    .find({ user: user._id })
    .populate("product");

  return (
    <UserPanelLayout>
      <div className={styles.wishlist}>
        <h2 className={styles.wishlist_title}>علاقه مندی ها</h2>
        <div className={styles.wishlist_wrapper}>
          {/* <ProductCard isfull={false} remove={true} />
          <ProductCard isfull={false} remove={true} />
          
          <ProductCard isfull={false} remove={true} /> */}

          {wishlists.map((item) => (
            <ProductCard key={item._id} isfull={false} remove={true} product={JSON.parse(JSON.stringify(item.product))} />
          ))}
        </div>
      </div>
    </UserPanelLayout>
  );
}
