import React from 'react'
import Navbar from '@/components/modules/Navbar/Navbar'
import { authUser } from '@/utils/auth'
import styles from '@/styles/About-us.module.css'
import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'

export default async function AboutUs() {

 const user = await authUser()
  return (
    <>
        <Navbar isLogin={user ? true : false} />
        <BreadCrumb route={'درباره ما'}/>
        <div className={styles.about_wrapper}>
            test
        </div>
    </>
  )
}
