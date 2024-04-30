import styles from './FavoriteBtn.module.css'
import { FaRegHeart , FaHeart } from "react-icons/fa";

export default function FavoriteBtn() {
  return (
    <di className={styles.favorite}>
    افزودن به علاقه مندی ها
    <FaRegHeart className={styles.favorite_icon} />
  </di>
  )
}
