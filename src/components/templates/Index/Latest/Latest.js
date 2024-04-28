import styles from './Latest.module.css'
import ProductCard from '@/components/modules/ProductCard/ProductCard'
import { FaChevronLeft } from "react-icons/fa6";
import Link from 'next/link';
export default function Latest() {
  return (
    <div className={styles.Latest_wrapper}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>آخرین محصولات</h2>
        <Link className={styles.link} href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </div>
       <div data-aos="fade-up" className={styles.card_container}>
        <ProductCard isfull={false}/>
        <ProductCard isfull={false}/>
        <ProductCard isfull={false}/>
        <ProductCard isfull={false}/>
        <ProductCard isfull={false}/>
        <ProductCard isfull={false}/>  
       </div>
        
    </div>
  )
}
