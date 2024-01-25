import React, { useState } from "react";
import pauseicon from "../image/icons/pause.svg";
import playicon from "../image/icons/play.svg";
import styles from "./VideoControler.module.css";

export default function VideoControler() {
  const [pause, setPause] = useState(false);

  return (
    <div className={styles.controler}>
      {pause ? (
        <img className={styles.icon} src={playicon} alt="play" />
      ) : (
        <img className={styles.icon} src={pauseicon} alt="pause" />
      )}
    </div>
  );
}
