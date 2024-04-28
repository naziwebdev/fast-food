import styles from './‌BreadCrumb.module.css'
import Link from 'next/link'

export default function BreadCrumb({route}) {
  return (
    <div className={styles.breadCrumb_container}>
     <h2 className={styles.breadCrumb_title}>
      {route[0]?.title}
     </h2>
    
     <div className={styles.breadCrumb_route}>
        <Link href={"/"}>خانه</Link>
        <span>/</span> 
        {route?.map(item => (
          <>
          <Link key={item.id} href={item.href} >{item.title}</Link>
          {item.id != route.length && <span>/</span> }
          </>
        ))}
      </div>
  
    </div>
  )
}
