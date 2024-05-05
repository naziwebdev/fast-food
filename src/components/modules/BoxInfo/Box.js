import styles from './Box.module.css'
import { IoStatsChart } from "react-icons/io5";

export default function Box({title,count}) {
  return (
    <div className={styles.box}>
        <span className={styles.box_num}>
            {count}
        </span>
        <div className={styles.box_title}>
            <h4 className={styles.title}>
                {title}
            </h4>
            <IoStatsChart className={styles.box_icon} />
        </div>

    </div>
  )
}
