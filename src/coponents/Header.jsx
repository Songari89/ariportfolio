import React from "react";
import styles from "./Header.module.css"
import VideoControler from "./VideoControler";

export default function Header() {
  return <header className={styles.container}>
    <p>HOME</p>
    <p>ABOUT ME</p>
    <p>WEB CODING</p>
    <VideoControler/>
  </header>;
}
