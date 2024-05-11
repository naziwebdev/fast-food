import styles from "@/styles/Cart.module.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Footer from "@/components/modules/Footer/Footer";
import DataTable from "@/components/templates/Cart/DataTable";

export default async function page() {
  const route = [{ id: 1, title: "سبد خرید", href: "/cart" }];
  return (
    <div>
      <Navbar />
      <BreadCrumb route={route} />
      <main className={styles.cart_wrapper}>
        <DataTable/>
      </main>
      <Footer />
    </div>
  );
}
