import React, { useState } from "react";
import pauseicon from "../image/icons/pause.svg";
import playicon from "../image/icons/play.svg";

export default function VideoControler() {
  const [pause, setPause] = useState(false);

  return (
    <div className={}>
      {pause ? <img src={playicon} alt="play" /> : <img src={pauseicon} alt="pause" />}
    </div>
  );
}
