import React from "react";
import styles from "./Greeting.module.css";

export default function Greeting() {
  return (
    <section className={styles.container}>
      <div className={styles.contents}>
      <p className={styles.line1}>안녕하세요.</p>
      <p className={styles.line2}>
        흐르는 강물처럼 멈추지 않고 앞으로 나아가는
      </p>
      <p className={styles.line2}>
        웹 디자이너, <span className={styles.name}>송가람입니다.</span>
      </p></div>
    </section>
  );
}
