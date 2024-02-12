import React from "react";
import mailicon from "../staticimage/icons/mail.svg";
import styles from "./Mail.module.css";

export default function Mail() {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={mailicon} alt="mail" />
    </div>
  );
}
