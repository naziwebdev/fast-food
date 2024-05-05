import styles from "./UserPanelLayout.module.css";
import Sidebar from "../modules/p-admin/Sidebar/Sidebar";
import Topbar from "../modules/p-user/Topbar/Topbar";
import { authUser } from "@/utils/serverHelper";
import { redirect } from "next/navigation";

export default async function UserPanelLayout({ children }) {

  const user = await authUser()

  if(!user){
    redirect('/login-register')
  }
  return (
    <div className={styles.aPanel_container}>
      <Sidebar />
      <div className={styles.aPanel_wrapper}>
        <Topbar user={user}/>
        {children}
      </div>
    </div>
  );
}
