import styles from "./SendTicket.module.css";

export default function SendTicket() {
  return (
    <form className={styles.form}>
      <div className={styles.input_wrapper}>
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input id="name" type="text" placeholder="نام و نام خانوادگی" className={styles.input} />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="priority">سطح الویت</label>

        <select className={styles.select} id="priority">
          <option value={-1}>یک گزینه را انتخاب کنید</option>
          <option value={3}>بالا</option>
          <option value={2}>متوسط</option>
          <option value={1}>کم</option>
        </select>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="department">دپارتمان </label>

        <select className={styles.select} id="department">
          <option value={-1}>یک گزینه را انتخاب کنید</option>
          <option value={3}>بالا</option>
          <option value={2}>متوسط</option>
          <option value={1}>کم</option>
        </select>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="subDepartment">ساب دپارتمان </label>

        <select className={styles.select} id="subDepartment">
          <option value={-1}>یک گزینه را انتخاب کنید</option>
          <option value={3}>بالا</option>
          <option value={2}>متوسط</option>
          <option value={1}>کم</option>
        </select>
      </div>
      <div className={styles.textarea_wrapper}>
        <label htmlFor="body">متن تیکت را وارد نمایید </label>

        <textarea className={styles.textarea} id="body"></textarea>
      </div>

      <button className={styles.form_btn}>ارسال</button>
    </form>
  );
}
