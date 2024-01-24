import React from "react";
import styles from "./Main.module.css";
import Greeting from "./Greeting";

export default function Main() {
  return (
    <div className={styles.container}>
      Main
      <Greeting />
    </div>
  );
}
