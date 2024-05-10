"use client";
import Image from "next/image";
import styles from "./Gallery.module.css";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";

export default function Gallery({product}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div data-aos="zoom-in-left"  className={styles.gallery}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        zoom={true}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className={styles.mySwiper2}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={product}
              width={400}
              height={400}
              alt="product"
              className={styles.gallery_img}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={product}
              width={400}
              height={400}
              alt="product"
              className={styles.gallery_img}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${styles.mySwiper} mySwiper `}
        breakpoints={{
          100:{
            spaceBetween:10
          },
          400:{
            spaceBetween:30
          }
        }}
      >
        <SwiperSlide className={styles.slide}>
          <img
            src={product}
            width={150}
            height={150}
            alt="product"
            className={styles.gallery_img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src={product}
            width={150}
            height={150}
            alt="product"
            className={styles.gallery_img}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
