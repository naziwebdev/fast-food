"use client";

import styles from "./RemoveFavoriteBtn.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function RemoveFavoriteBtn({ product }) {
  
  const router = useRouter();
  const removeWishlist = async () => {
    const res = await fetch(`http://localhost:3000/api/wishlist/${product}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      await res.json();
      swal({
        title: "با موفقیت حذف شد",
        icon: "success",
        buttons: "بستن",
      }).then((result) => {
        if (result) {
          router.refresh()
        }
      });
    } else {
      swal({
        title: "عملیات با شکست روبرو شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }
  };

  return (
    <RiDeleteBin5Fill onClick={removeWishlist} className={styles.remove_icon} />
  );
}
