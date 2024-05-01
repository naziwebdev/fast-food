import styles from "./UserPanelLayout.module.css";
import Sidebar from "../modules/p-user/Sidebar/Sidebar";
import Topbar from "../modules/p-user/Topbar/Topbar";
import { authUser } from "@/utils/serverHelper";
import { redirect } from "next/navigation";

export default async function UserPanelLayout({ children }) {

  const user = await authUser()

  if(!user){
    redirect('/login-register')
  }
  return (
    <div className={styles.uPanel_container}>
      <Sidebar />
      <div className={styles.uPanel_wrapper}>
        <Topbar />
        {children}
      </div>
    </div>
  );
}
