import styles from "./UserPanelLayout.module.css";
import Sidebar from "../modules/p-user/Sidebar/Sidebar";
import Topbar from "../modules/p-user/Topbar/Topbar";

export default function UserPanelLayout({ children }) {
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
