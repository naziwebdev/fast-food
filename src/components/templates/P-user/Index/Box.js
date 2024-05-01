import styles from './Box.module.css'
import { IoStatsChart } from "react-icons/io5";

export default function Box() {
  return (
    <div className={styles.box}>
        <span className={styles.box_num}>
            20
        </span>
        <div className={styles.box_title}>
            <h4 className={styles.title}>
                مجموع تیکت ها
            </h4>
            <IoStatsChart className={styles.box_icon} />
        </div>

    </div>
  )
}
