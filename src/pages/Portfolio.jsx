import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { useNavigate } from "react-router-dom";
import homeicon from "../staticimage/icons/home.svg";

export default function Portfolio() {
  const location = useLocation();
  const {title} = location.state;
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <div className={styles.homeiconcontainer} onClick={() => {
        navigate('/')
      }}>
        <img src={homeicon} className={styles.homeicon} alt="home" />
        <p>홈으로</p>
      </div>
      <p className={styles.title}>{title}</p>
    </section>
  );
}
