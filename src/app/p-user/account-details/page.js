import styles from '@/styles/p-user/Account-details.module.css'
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import AccountDetails from "@/components/templates/P-user/Account-details/AccountDetails";

export default function page() {
  return (
    <UserPanelLayout>
    <div className={styles.account}>
      <h2 className={styles.account_title}>جزییات اکانت</h2>
     <AccountDetails/>
    </div>
  </UserPanelLayout>
  )
}
