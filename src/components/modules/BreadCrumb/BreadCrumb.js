import styles from './‌BreadCrumb.module.css'
import Link from 'next/link'

export default function BreadCrumb({route}) {
  return (
    <div className={styles.breadCrumb_container}>
     <h2 className={styles.breadCrumb_title}>
      {route}
     </h2>
     <div className={styles.breadCrumb_route}>
        <Link href={"/"}>خانه</Link>
        <span>/</span>
        <p>{route}</p>
      </div>
  
    </div>
  )
}
