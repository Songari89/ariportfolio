import React from "react";
import kakao from "../staticimage/icons/kakaotalk.png";
import styles from "./Mail.module.css";
import {Link} from "react-router-dom";

export default function Mail() {
  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to="http://pf.kakao.com/_axoxkLG"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.icon} src={kakao} alt="kakao" />
      </Link>
    </div>
  );
}
