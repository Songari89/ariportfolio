import React from "react";

import styles from "./Header.module.css"
import VideoControler from "./VideoControler";


export default function Header() {
  return (
    <header className={styles.container}>
     
        <nav className={styles.menu}>
          <p>HOME</p>
          <p>ABOUT ME</p>
          <p>WEB CODING</p>
        </nav>
        <VideoControler />
 
    </header>
  );
}
