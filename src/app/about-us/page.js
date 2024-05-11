import React from "react";
import Navbar from "@/components/modules/Navbar/Navbar";
import styles from "@/styles/About-us.module.css";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Image from "next/image";
import Footer from "@/components/modules/Footer/Footer";

export default async function AboutUs() {


  let route = [{ id: 1, title: "درباره ما", href: "/about-us" }];
  return (
    <>
      <Navbar />
      <BreadCrumb route={route} />
      <div className={styles.about_wrapper}>
        <div className={styles.about_content}>
          <h1 className={styles.about_title}>درباره فست فود دلیشز</h1>
          <p className={styles.about_text}>
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه واردات مواد اولیه راسا به وسیله
            مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید بهترین فست فود ها
            است.
          </p>
          <p className={styles.about_text}>
            مجموعه فست فود ست اولین مجموعه مرتبط با فست فود در ایران است که در
            سال 2007 به عضویت انجمن تخصصی فست فود اروپا (Speciality coffee
            association of Europe) در آمده است و بسیاری از دوره‌های مربوط به
            فرآوری فست فود را مدیریت این مجموعه به صورت تخصصی در کارگاه‌های
            آموزشی این انجمن و همچنین کارگاه‌های تخصصی فرآوری فست فود به خصوص در
            زمینه بو دادن فست فود(Roasting) را در کشور آمریکا که از پیشگامان این
            صنعت است را گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و
            تکنولوژی روز دنیا وارد مرحله تولید فست فود به صورت صنعتی و گسترده
            شده‌ایم و مفتخریم اعلام کنیم که «فست فود ست» از این پس یک نام تجاری
            صنعتی در صنعت فست فود ایران است.{" "}
          </p>
          <p className={styles.about_text}>
            مسیری را که بنیان‌گذاران «فست فود ست» در دهه 20 شمسی آغاز کرده‌اند
            اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
            موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
            سازمان غذا دارو شده‌ایم و تولید سنتی و محدود فست فود را تبدیل به
            تولید صنعتی و انبوه کرده‌ایم.
          </p>
          <p className={styles.about_text}>
            از دیگر افتخارات مجموعه «فست فود ست» اخذ مدرک دیپلم دانش فست فود از
            انجمن فست فود تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee
            Diploma) امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و
            تنوع محصول در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
          </p>
          <Image
            src="/images/item-2.png"
            alt="fast-food"
            width={800}
            height={800}
            className={styles.about_img}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
