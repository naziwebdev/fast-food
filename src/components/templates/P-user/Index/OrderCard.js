import styles from "./OrderCard.module.css";
export default function OrderCard({ order }) {
  return (
    <div className={styles.order}>
      <div className={styles.order_content}>
        <p className={styles.order_msg}>
          {" "}
          {order.products.map((product) => (
            <span key={product._id}>
              {product.title} {" , "}
            </span>
          ))}
        </p>
        <span className={styles.order_date}>
          {new Date(order.createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
      <div className={styles.order_content}>
        <div className={styles.order_support}> کد : {order.code} </div>
        <span className={styles.order_status}>
          {order.price.toLocaleString("fa-IR")} تومان
        </span>
      </div>
    </div>
  );
}
