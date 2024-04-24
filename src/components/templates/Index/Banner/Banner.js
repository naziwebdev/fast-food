"use client";

import styles from "./Banner.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";


export default function Banner() {
  return (
    <div className={styles.slider_wrapper}>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className={styles.slider}
      >
        <SwiperSlide className={styles.slider_item}>
          <Image
            className={styles.banner_img}
            src="/images/banner-2.jpg"
            alt="banner-1"
            width={1000}
            height={1000}
          />
          <h2 className={styles.banner_title}>طعمی به یاد ماندنی</h2>
          <h4 className={styles.banner_subtitle}>انواع فست فود</h4>
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <Image
            className={styles.banner_img}
            src="/images/banner-7.jpg"
            alt="banner-1"
            width={1000}
            height={1000}
          />
          <h2 className={`${styles.banner_title} ${styles.banner_title_2}`}>
            {" "}
            برگر کبابی
          </h2>
          <h4 className={styles.banner_subtitle_box}> پیشنهاد ویژه امشب</h4>
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <Image
            className={styles.banner_img}
            src="/images/banner-4.jpg"
            alt="banner-1"
            width={1000}
            height={1000}
          />
          <h2 className={styles.banner_title_3}>
            فضایی عالی برای لذت بردن از غذاهای فوق العاده
          </h2>
          <h4 className={styles.banner_subtitle_2}>تخفیف های باور نکردنی</h4>
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <Image
            className={styles.banner_img}
            src="/images/banner-5.jpg"
            alt="banner-1"
            width={1000}
            height={1000}
          />
          <h2 className={`${styles.banner_title} ${styles.banner_title_4}`}>پیتزا لذیذ و داغ</h2>
          <h4 className={styles.banner_subtitle_4}>
            {" "}
            این معامله را از دست ندهید
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.banner_img}
            src="/images/banner-8.jpg"
            alt="banner-1"
            width={1000}
            height={1000}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
