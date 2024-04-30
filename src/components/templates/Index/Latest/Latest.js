import styles from './Latest.module.css'
import ProductCard from '@/components/modules/ProductCard/ProductCard'
import { FaChevronLeft } from "react-icons/fa6";
import Link from 'next/link';
import connectTodb from '@/configs/db';
import productModel from '@/models/product'

export default async function Latest() {

connectTodb()
const products = await productModel.find({},'-__v').lean()
const mainProduct = JSON.parse(JSON.stringify(products))

  return (
    <div className={styles.Latest_wrapper}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>آخرین محصولات</h2>
        <Link className={styles.link} href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </div>
       <div data-aos="fade-up" className={styles.card_container}>

        {mainProduct.map(item => (
          <ProductCard key={item._id} remove={false} isfull={false} product={item}/>
        ))}
       </div>
        
    </div>
  )
}
