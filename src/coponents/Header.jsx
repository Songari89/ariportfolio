import React from "react";
import bgvideo from "../image/river.mp4";
import styles from "./Header.module.css"
import VideoControler from "./VideoControler";


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.videocontainer}>
        <video
          autoPlay
          muted
          loop
          controlsList="nodownload nofullscreen noremoteplayback noduration"
          className={styles.videocontent}
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <p>HOME</p>
          <p>ABOUT ME</p>
          <p>WEB CODING</p>
        </nav>
        <VideoControler />
      </div>
    </header>
  );
}
