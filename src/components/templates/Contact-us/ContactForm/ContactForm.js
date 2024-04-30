"use client"

import styles from './ContactForm.module.css'
export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
        <p className={styles.contactForm_text}>فرم تماس با ما</p>
        <h3 className={styles.contactForm_title}>
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
        </h3>
        <form className={styles.form}>
            <div className={styles.input_wrapper}>
                <label htmlFor='name'>نام و نام خانوادگی</label>
                <input id='name' type='text' className={styles.input}/>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='email'>آدرس ایمیل  </label>
                <input id='email' type='email' className={styles.input}/>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='phone'> شماره تماس</label>
                <input id='phone' type='text' className={styles.input}/>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='conpany'>نام  شرکت</label>
                <input id='company' type='text' className={styles.input}/>
            </div>
            <div className={`${styles.input_wrapper} ${styles.textarea_wrapper}`}>
                <label htmlFor='body'>درخواست شما  </label>
                <textarea id='body' className={styles.textarea}></textarea>
            </div>
            <button className={styles.form_btn}>ارسال</button>
         
        </form>
    </div>
  )
}
