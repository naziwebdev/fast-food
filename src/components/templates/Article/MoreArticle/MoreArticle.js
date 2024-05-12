"use client";

import styles from "./MoreArticle.module.css";
import ArticleCard from '@/components/modules/ArticleCard/ArticleCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function MoreProducts() {

  return (
    <div className={styles.related_wrapper}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.related_title}>مقالات مرتبط</h2>
      </div>
      <div data-aos="fade-up" className={styles.related_container}>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 0,
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
          className={styles.related_slider}
        >
 <SwiperSlide ><ArticleCard/></SwiperSlide>
 <SwiperSlide ><ArticleCard/></SwiperSlide>
 <SwiperSlide ><ArticleCard/></SwiperSlide>
          {/* {product?.map(item => (
            <SwiperSlide key={item._id}>
            <ProductCard remove={false} isfull={true} product={item}/>
          </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
}
