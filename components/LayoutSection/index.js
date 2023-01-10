import React from "react";
import styles from "./LayoutSection.module.scss";

function index({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default index;
