import styles from "@/styles/Rules.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import { authUser } from "@/utils/auth";
export default async function page() {
  const user = await authUser();
  const route = [{ id: 1, title: "شرایط و قوانین", href: "/rules" }];
  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <BreadCrumb route={route} />
      <main className={styles.rules_wrapper}>
        <h2 className={styles.rules_title}>شرایط و قوانین استفاده</h2>
        <p className={styles.rules_text}>
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و کاربردی
          فست‌فود به دقت ملاحظه فرمایید. ورود کاربران به فست‌فود هنگام
          استفاده از پروفایل شخصی، تشویقی، ویدئوهای رسانه تصویری فست‌فود و
          سایر خدمات ارائه شده توسط فست‌فود به معنای آگاه بودن و پذیرفتن شرایط
          و قوانین و همچنین نحوه استفاده از و خدمات فست‌فود است. توجه داشته
          باشید که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و
          قوانین فست‌فود از سوی کاربر است. لازم به ذکر است شرایط و قوانین
          مندرج، جایگزین کلیه قبلی محسوب .
        </p>
        <h2 className={styles.rules_title}> قوانین عمومی</h2>
        <p className={styles.rules_text}>
          توجه داشته باشید کلیه اصول و فست‌فود منطبق با قوانین جمهوری اسلامی
          ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و
          متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در صورتی که
          در قوانین مندرج، و فست‌فود تغییراتی در آینده ایجاد شود، در همین صفحه
          منتشر و به روز رسانی می شود و شما توافق که استفاده مستمر شما از سایت
          به معنی پذیرش هرگونه تغییر است.
        </p>
        <h2 className={styles.rules_title}> تعریف مشتری یا کاربر </h2>
        <p className={styles.rules_text}>
          مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم
          ثبت‌نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات
          فست‌فود اقدام کند. همچنین از آنجا که فست‌فود یک وب‌سایت خرده‌فروشی
          آنلاین است، طبق قانون تجارت الکترونیک مشتری یا مصرف کننده هر شخصی است
          که به منظوری جز تجارت یا شغل حرفه‌ای به خرید فود یا خدمات اقدام
          می‌کند.
        </p>
        <h2 className={styles.rules_title}> رعایت حریم شخصی </h2>
        <p className={styles.rules_text}>
          فست‌فود به اطلاعات خصوصی اشخاصی که از خدمات سایت استفاده احترام
          گذاشته و از آن محافظت . فست‌فود متعهد در حد توان از حریم شخصی شما
          دفاع کند و در این راستا، تکنولوژی مورد نیاز برای هرچه و شدن استفاده
          شما از سایت را، توسعه دهد. در واقع با استفاده از سایت فست‌فود، شما
          رضایت خود را از این سیاست نشان .
        </p>
        <h2 className={styles.rules_title}> ثبت، پردازش و ارسال سفارش </h2>
        <p className={styles.rules_text}>
          - روز کاری به معنی روز شنبه تا پنج شنبه هر هفته، به استثنای تعطیلات
          عمومی در ایران است و کلیه ثبت شده در طول روزهای کاری و اولین روز پس از
          تعطیلات پردازش . فست‌فود به مشتریان خود در 7 روز هفته و 24 ساعت در
          روز امکان . - کلیه ثبت شده در سایت فست‌فود به وسیله ارسال کد سفارش
          از طریق پیام کوتاه و پیش فاکتور از طریق ایمیل، در صف پردازش قرار .
          فست‌فود همواره در ارسال و تحویل کلیه ثبت شده، نهایت دقت و تلاش خود
          را انجام می‌دهد. با وجود این، در صورتی که موجودی محصولی در فست‌فود
          به پایان برسد، حتی پس از اقدام مشتری به حق کنسل کردن آن سفارش و یا
          استرداد وجه سفارش برای فست‌فود محفوظ است و یا مشتری به جای فودی به
          اتمام رسیده، محصول دیگری را جایگزین کند. - در صورت بروز مشکل در پردازش
          نهایی سبد خرید مانند اتمام موجودی فود یا انصراف مشتری، مبلغ پرداخت
          شده طی 24 الی 48 ساعت کاری به حساب مشتری واریز خواهد شد.
        </p>
      </main>
      <Footer />
    </div>
  );
}
