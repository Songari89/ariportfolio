import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import ExpandCircle from "../coponents/ExpandCircle";

export default function AboutMe() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const handleMouseOver = () => {
    setShowAboutMe(true);
  };
  const handleMouseOut = () => {
    setShowAboutMe(false);
  };

  return (
    <section className={styles.container}>
      {!showAboutMe && <ExpandCircle onMouseOver={handleMouseOver} />}
      <div
        className={`${styles.aboutme} ${showAboutMe ? styles.show : ""}`}
        onMouseOut={handleMouseOut}
      >
  
      </div>
    </section>
  );
}
