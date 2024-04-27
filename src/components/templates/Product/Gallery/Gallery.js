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

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.gallery}>
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
            <Image
              src="/images/p-1.jpg"
              width={400}
              height={400}
              alt="product"
              className={styles.gallery_img}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              src="/images/p-3.jpg"
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
      >
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/p-1.jpg"
            width={150}
            height={150}
            alt="product"
            className={styles.gallery_img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/p-3.jpg"
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