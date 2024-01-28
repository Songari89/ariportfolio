import React from "react";
import styles from "./ExpandCircle.module.css";

export default function ExpandCircle() {

  return (
    <div className={styles.container}>
      <div
        className={styles.circle1}
      ></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
    </div>
  );
}
