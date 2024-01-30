import React, { useState } from "react";
import pauseicon from "../staticimage/icons/pause.svg";
import playicon from "../staticimage/icons/play.svg";
import styles from "./VideoControler.module.css";
import { useVideo } from "../contexts/VideoProvider";

export default function VideoControler() {
  const {handlePause} = useVideo();
  const [pause, setPause] = useState(false);
  const handleClick = () => {
    setPause(pre => !pre)
    handlePause();
  }

  return (
    <div className={styles.controler} onClick={handleClick}>
      {pause ? (
        <img className={styles.icon} src={playicon} alt="play" />
      ) : (
        <img className={styles.icon} src={pauseicon} alt="pause" />
      )}
    </div>
  );
}
