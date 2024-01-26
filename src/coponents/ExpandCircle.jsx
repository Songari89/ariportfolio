import React, { useState } from "react";
import styles from "./ExpandCircle.module.css";

export default function ExpandCircle({ onMouseOver }) {
  const [expand, setExpand] = useState(false);
  const handleMouseOver = () => {
    setExpand(true);
    setTimeout(() => {
      onMouseOver()
    }, 2000)
    
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.circle1}${expand ? styles.expand : ""}`}
        onMouseOver={handleMouseOver}
      ></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
    </div>
  );
}


