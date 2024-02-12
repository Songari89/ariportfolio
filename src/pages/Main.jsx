import React, { useEffect } from "react";
import styles from "./Main.module.css";
import Greeting from "./Greeting";
import AboutMe from "./AboutMe";
import WebCoding from "./WebCoding";


export default function Main() {

  return (
    <div className={styles.container}  id="main">
      <Greeting />

      <AboutMe />

      <WebCoding />
    </div>
  );
}
