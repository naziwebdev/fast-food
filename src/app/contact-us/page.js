import styles from "@/styles/Contact-us.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import ContactForm from "@/components/templates/Contact-us/ContactForm/ContactForm";
import Information from "@/components/templates/Contact-us/Information/Information";
import Map from "@/components/templates/Contact-us/Map/Map";
import Link from "next/link";

export default async function page() {
  const route = [{ id: 1, title: " تماس با ما", href: "/contact-us" }];
  return (
    <div>
      <Navbar />
      <BreadCrumb route={route} />
      <main className={styles.contact_wrapper}>
        <div className={styles.contact_container2}>
          <Map
            position={[35.72021225108499, 51.42222691580869]}
            center={[35.72021225108499, 51.42222691580869]}
          >
            <div className={styles.map_details}>
              <span className={styles.map_subTitle}>فروشاه ما</span>
              <h3 className={styles.map_title}>
                آدرس فروشگاه حضوری فست فود دلیشز (شعبه میرداماد)
              </h3>
              <p className={styles.map_text}>
                تهران میرداماد خیابان شقایق کوچه بنفشه پلاک 22
              </p>
              <p className={styles.map_text}>021-36479228</p>
              <Link href="/about-us" className={styles.map_link}>
                درباره فروشگاه
              </Link>
            </div>
          </Map>
          <Map
            position={[35.70153474690238, 51.41497422314844]}
            center={[35.70153474690238, 51.41497422314844]}
          >
            <div className={styles.map_details}>
              <span className={styles.map_subTitle}>فروشاه ما</span>
              <h3 className={styles.map_title}>
                آدرس فروشگاه حضوری فست فود دلیشز (شعبع کریمخان)
              </h3>
              <p className={styles.map_text}>
                تهران خ کریمخان زند خ قائم مقام فراهانی ابتدای خ فجر شماره ۳۰{" "}
              </p>
              <p className={styles.map_text}>021-36479228</p>
              <Link href="/about-us" className={styles.map_link}>
                درباره فروشگاه
              </Link>
            </div>
          </Map>
        </div>
        <div className={styles.contact_container}>
          <Information />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
