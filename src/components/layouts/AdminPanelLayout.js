import styles from "./AdminPanelLayout.module.css";
import Sidebar from "../modules/p-admin/Sidebar/Sidebar";
import Topbar from "../modules/p-admin/Topbar/Topbar";
import { authUser } from "@/utils/serverHelper";
import { redirect } from "next/navigation";

export default async function AdminPanelLayout({ children }) {
  
  const user = await authUser();

  if (user) {
    if (user.role != "ADMIN") {
      redirect("/login-register");
    }
  } else {
    redirect("/login-register");
  }

  return (
    <div className={styles.aPanel_container}>
      <Sidebar />
      <div className={styles.aPanel_wrapper}>
        <Topbar user={user} />
        {children}
      </div>
    </div>
  );
}
