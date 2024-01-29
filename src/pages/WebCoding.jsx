import React from "react";
import styles from "./WebCoding.module.css";
import leef from "../image/leef(W).gif";

export default function WebCoding() {
  return (
    <section className={styles.container}>
      <div className={styles.webcoding}>
          <img src={leef} alt="leef" />
          <p>WEB CODING</p>
        </div>
      <div className={styles.contents}>
        
        <div className={styles.content}>
          <p>아리아리랑</p>
        </div>
        <div className={styles.content}>
          <p>아리아리랑</p>
        </div>
        <div className={styles.content}>
          <p>아리아리랑</p>
        </div>
      </div>
    </section>
  );
}
