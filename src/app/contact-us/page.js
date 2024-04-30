import styles from "@/styles/Contact-us.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import ContactForm from "@/components/templates/Contact-us/ContactForm/ContactForm";
import Information from "@/components/templates/Contact-us/Information/Information";
import { authUser } from "@/utils/auth";

export default async function page() {
  const user = await authUser();
  const route = [{ id: 1, title: " تماس با ما", href: "/contact-us" }];
  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <BreadCrumb route={route} />
      <main className={styles.contact_wrapper}>
        <div className={styles.map_container}></div>
        <div className={styles.contact_container}>
          <Information />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
