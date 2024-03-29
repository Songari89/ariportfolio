import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import ExpandCircle from "../coponents/ExpandCircle";
import leef from "../staticimage/leef(G).gif";
import Profile from "../coponents/Profile";
import { useScroll } from "../contexts/ScrollProvider";

export default function AboutMe() {
  // const {aboutmeRef} = useScroll();
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleMouseEnter = () => {
    setExpand(true);

    setTimeout(() => {
      setShowAboutMe(true);
      setExpand(false);
    }, 1000);
  };
  const handleMouseOut = () => {
    setTimeout(() => {
      setShowAboutMe(false);
    }, 500);
  };
  return (
    <section className={styles.container} id="aboutme">
      {!showAboutMe && <ExpandCircle />}
      <div className={styles.expandcontainer}>
        <div
          className={`${styles.expandcircle} ${expand ? styles.expand : ""}`}
          onMouseEnter={handleMouseEnter}
        ></div>
      </div>
      <div
        className={`${styles.aboutmecontainer} ${
          showAboutMe ? styles.show : ""
        }`}
        onMouseOut={handleMouseOut}
      >
        {/* <div
        className={`${styles.aboutmecontainer} ${
          styles.show 
        }`}
        onMouseOut={handleMouseOut}
      > */}
        <div className={styles.aboutme}>
          <img src={leef} alt="leef" />
          <p>About Me</p>
        </div>
        <div className={styles.contents}>
          <Profile title="Profile" />
          <Profile title="Certificate" />
          <Profile title="Experiences" />
          <Profile title="Skill" />
        </div>
      </div>
    </section>
  );
}
