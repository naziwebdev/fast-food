"use client";

import styles from "./Articles.module.css";
import ArticleCard from "../../../modules/ArticleCard/ArticleCard";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch("/api/articles");
      if (res.status === 200) {
        const data = await res.json();
        setArticles(data);
      }
    };

    getArticles();
  }, []);

  return (
    <div className={styles.articles_wrapper}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.articles_title}>مقالات ما</h2>
        <Link className={styles.articles_link} href={"/blog"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </div>
      <div data-aos="fade-up" className={styles.article_container}>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            700: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className={styles.articles_slider}
        >
          {articles?.map((item) => (
            <SwiperSlide key={item._id}>
              <ArticleCard article={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
