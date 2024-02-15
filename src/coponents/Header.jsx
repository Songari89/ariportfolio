import React, { useState } from "react";
import { Link} from "react-scroll";
import styles from "./Header.module.css";
import VideoControler from "./VideoControler";
import Mail from "./Mail";
import useHeader from "../hooks/useHeader";


export default function Header() {
  const {isVisible} = useHeader();

  const [active, setActive] = useState(false);
  const handleSetActive = () => {
    setActive(true);
  };
  const handleSetInactive = () => {
    setActive(false);
  };

  return (
    <>
      {isVisible && (
        <header
          className={`${styles.container} ${active ? styles.inview : ""}`}
        >
          <div className={styles.navcontainer}>
            <nav
              className={`${styles.menu} ${active ? styles.menuinview : ""}`}
            >
              <Link
                to="main"
                className={styles.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                HOME
              </Link>
              <Link
                to="greet"
                className={styles.greet}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
              ></Link>
              <Link
                to="aboutme"
                className={styles.link}
                activeClass={styles.active}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
              >
                ABOUT ME
              </Link>
              <Link
                to="webcoding"
                className={styles.link}
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.active}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
              >
                WEB CODING
              </Link>
            </nav>
            <div className={styles.iconcontainer}>
              <VideoControler />
              <Mail />
            </div>
          </div>
        </header>
      )}
    </>
  );
}
