import React, { useEffect, useRef } from "react";
import bgvideo from "../staticimage/river.mp4";
import styles from "./VideoPlayer.module.css";
import { useVideo } from "../contexts/VideoProvider";

export default function VideoPlayer() {
  const { isVideoPlay } = useVideo();
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef &&
      (isVideoPlay ? videoRef.current.play() : videoRef.current.pause());
  }, [isVideoPlay]);

  return (
    <div className={styles.videocontainer}>
      <video
        ref={videoRef}
        autoPlay={isVideoPlay}
        muted
        loop
        controlsList="nodownload nofullscreen noremoteplayback noduration"
        className={styles.videocontent}
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
  );
}
