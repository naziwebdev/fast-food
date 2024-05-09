"use client"
import * as React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

export default function Modal({ children , onClose}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const closeModal = () => {
    onClose()
  }
  return mounted
    ? createPortal(
        <div className={styles.modal}>
          <div className={styles.modal_wrapper}>
            <span onClick={closeModal}
            className={styles.modal_close}>✕</span>
            <div className={styles.modal_content}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
}
