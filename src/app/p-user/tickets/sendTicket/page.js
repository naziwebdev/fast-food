import styles from '@/styles/p-user/SendTicket.module.css'
import UserPanelLayout from "@/components/layouts/UserPanelLayout"
import SendTicket from '@/components/templates/P-user/Tickets/SendTicket'
import Link from 'next/link'



export default function page() {

  return (
    <UserPanelLayout>
       <div className={styles.sendTicket}>
       <div className={styles.sendTicket_titles}>
          <h2 className={styles.sendTicket_title}>ارسال تیکت جدید</h2>
          <Link href="/p-user/tickets" className={styles.sendTicket_link}>همه تیکت ها</Link>
        </div>
       <SendTicket />
       </div>
    </UserPanelLayout>
  )
}
