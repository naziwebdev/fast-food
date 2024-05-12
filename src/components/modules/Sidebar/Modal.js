"use client";
import * as React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

export default function Modal() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(<div className={styles.modal}></div>, document.body)
    : null;
}
