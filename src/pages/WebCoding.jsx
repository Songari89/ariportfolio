import React from "react";
import styles from "./WebCoding.module.css";
import leef from "../staticimage/leef(W).gif";
import WorkList from "../coponents/WorkList";


export default function WebCoding() {
  return (
    <section className={styles.container}>
      <div className={styles.webcoding}>
        <img src={leef} alt="leef" />
        <p>WEB CODING</p>
      </div>
      <div className={styles.contentscontainer}>
        <div className={styles.contents}>
          <WorkList/>
        </div>
      </div>
    </section>
  );
}
