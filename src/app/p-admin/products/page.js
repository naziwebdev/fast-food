import styles from "@/styles/p-admin/Products.module.css";
import DataTable from "@/components/templates/P-admin/Products/DataTable";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import connectTodb from "@/configs/db";
import productModel from "@/models/product";
import AddForm from '@/components/templates/P-admin/Products/AddForm'

export default async function Index() {
  connectTodb();
  const products = await productModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <div className={styles.products}>
        <h2 className={styles.products_title}>محصولات</h2>
        <AddForm/>
        {products.length != 0 ? (
          <DataTable products={JSON.parse(JSON.stringify(products))} />
        ) : (
          <div className={styles.products_empty}>محصولی یافت نشد</div>
        )}
      </div>
    </AdminPanelLayout>
  );
}
