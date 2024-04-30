import styles from './RemoveFavoriteBtn.module.css'
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function RemoveFavoriteBtn() {
  return (
    <RiDeleteBin5Fill className={styles.remove_icon}/>
  )
}
