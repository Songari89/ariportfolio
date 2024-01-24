import React from "react";
import styles from "./Greeting.module.css";

export default function Greeting() {
  return (
    <section className={styles.container}>
      <p>안녕하세요.</p>
    </section>
  );
}
