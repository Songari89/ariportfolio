import React from "react";
import styles from "./Main.module.css";
import Greeting from "./Greeting";
import AboutMe from "./AboutMe";

export default function Main() {
  return (
    <div className={styles.container}>
      <Greeting />
      <AboutMe/>
    </div>
  );
}
