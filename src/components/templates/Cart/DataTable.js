import styles from "./DataTable.module.css";
import Image from "next/image";

export default function DataTable() {
  return (
    <div className={styles.container}>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table_head}>
              <th className={styles.table_title}>محصول</th>
              <th className={styles.table_title}>قیمت </th>
              <th className={styles.table_title}>تعداد</th>
              <th className={styles.table_title}>جمع جز</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.table_row}>
              <td className={`${styles.table_col} ${styles.product_wrapper}`}>
                <button className={styles.remove_product}>✕</button>
                <Image
                  src="/images/p-7.jpg"
                  width={60}
                  height={60}
                  alt="product"
                  className={styles.product_img}
                />
                پیتزا تستی
              </td>
              <td>۲۰۰۰۰۰ تومان</td>
              <td className={styles.count_wrapper}>
                <button className={styles.count_btn}>+</button>
                <span className={styles.count}>1</span>
                <button className={styles.count_btn}>-</button>
              </td>
              <td>۴۰۰۰۰۰۰۰۰</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.discount_wrapper}>
          <input
            type="text"
            placeholder="کد تخفیف را وارد کنید"
            className={styles.discount_input}
          />
          <button className={styles.discount_btn}>اعمال کوپن</button>
        </div>
      </div>
      <div className={styles.factor}>
        <h3 className={styles.factor_title}>جمع کل سبد خرید</h3>
        <div className={styles.factor_part}>
          <h5 className={styles.factor_text}>جمع جز</h5>
          <p className={styles.factor_text2}>۱۲۰۰۰۰ تومان</p>
        </div>
        <div className={styles.factor_part}>
          <h5 className={styles.factor_text}>حمل و نقل </h5>
          <div className={styles.factor_part2}>
            <p className={styles.factor_text}>پیک موتوری : ۵۰۰۰۰ تومان</p>
            <p className={styles.factor_text2}>حمل و نقل به تهران</p>
            <h5 className={`${styles.factor_text} ${styles.factor_address}`}>تغییر آدرس</h5>
          </div>
        </div>
        <div className={`${styles.factor_part} ${styles.factor_part3} `}>
          <h3 className={styles.factor_total}>مجموع</h3>
          <h3 className={styles.factor_total}>۳۶۵۰۰۰ تومان</h3>
        </div>
        <button className={styles.pay_btn}>ادامه جهت تسویه حساب</button>
      </div>
    </div>
  );
}
