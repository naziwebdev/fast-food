import styles from "./Answer.module.css";
import Image from "next/image";

export default function Answer({ type, ticket, answer }) {
  return (
    <div className={styles.answer}>
      {type === "user"
        ? ticket.map((item) => (
            <div key={item._id} className={styles.user_box}>
              <div className={styles.box_head}>
                <div className={styles.box_info}>
                  <Image
                    src="/images/avatar.jpg"
                    width={100}
                    height={100}
                    alt="avatar"
                    className={styles.box_img}
                  />
                  <p className={styles.box_name}>
                    {item?.user?.name}
                    <span>کاربر</span>
                  </p>
                </div>
                <span className={styles.box_date}>
                  {new Date(item?.createdAt).toLocaleString("fa-IR")}
                </span>
              </div>
              <p className={styles.box_text}>{item?.body}</p>
            </div>
          ))
        : answer.map((item) => (
            <div key={item._id} className={styles.admin_box}>
              <div className={styles.box_head}>
                <div className={styles.box_info}>
                  <Image
                    src="/images/avatar.jpg"
                    width={100}
                    height={100}
                    alt="avatar"
                    className={styles.box_img}
                  />
                  <p className={styles.box_name}>
                    {item?.user?.name}
                    <span>کاربر</span>
                  </p>
                </div>
                <span className={styles.box_date}>
                  {new Date(item?.createdAt).toLocaleString("fa-IR")}
                </span>
              </div>
              <p className={styles.box_text}>{item?.body}</p>
            </div>
          ))}
    </div>
  );
}
