import React from "react";

import styles from "./Header.module.css"
import VideoControler from "./VideoControler";
import { useScroll } from "../contexts/ScrollProvider";


export default function Header() {
  const{isAbove} =useScroll();

  return (
    <header className={`header ${styles.container}`}>
     
        <nav className={`${styles.menu} ${isAbove? styles.above : ''}`}>
          <p>HOME</p>
          <p>ABOUT ME</p>
          <p>WEB CODING</p>
        </nav>
        <VideoControler />
 
    </header>
  );
}
