"use client";

import styles from "./FavoriteBtn.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function FavoriteBtn({ product }) {
  const [user, setUser] = useState(null);

  const addWishlish = async () => {
    if (!user._id) {
      return swal({
        title: "برای افزودن علاقه مندی ابتدا لاگین کنید",
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: user._id, product }),
    });

    if (res.status === 201) {
      (await res).json();

      swal({
        title: "  با موفقیت انجام شد",
        icon: "success",
        buttons: "بستن",
      });
    } else {
      swal({
        title: "  با شکست مواجه شد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
      console.log(await res);
    }
  };

  useEffect(() => {
    async function authUser() {
      const res = await fetch("/api/auth/me");

      if (res.status === 200) {
        const data = await res.json();

        setUser(data);
      }
    }

    authUser();
  }, []);

  return (
    <>
      <FaRegHeart className={styles.favorite_icon} onClick={addWishlish} />
    </>
  );
}
