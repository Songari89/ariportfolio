import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
import VideoControler from "./VideoControler";
import { useScroll } from "../contexts/ScrollProvider";

export default function Header() {
  const { inView, viewportHeight } = useScroll();

  return (
    <header className={`${styles.container} ${inView ? styles.inview : ""}`}>
      <div
        className={`${styles.navcontainer} ${inView ? styles.navinview : ""}`}
      >
        <nav className={`${styles.menu} ${inView ? styles.menuinview : ""}`}>
          <Link
            to="main"
            className={styles.link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HOME
          </Link>
          <Link
            to="aboutme"
            className={styles.link}
            activeClass={styles.active}
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT ME
          </Link>
          <Link
            to="webcoding"
            className={styles.link}
            activeClass={styles.active}
            spy={true}
            smooth={true}
            duration={500}
          >
            WEB CODING
          </Link>
        </nav>
        <VideoControler />
      </div>
    </header>
  );
}
