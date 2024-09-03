import React from 'react';
import styles from './ImageWork.module.css'
import {Link} from 'react-router-dom';
import bibigo from '../staticimage/imagework/bibigo_naverstore.jpg'
import crown from "../staticimage/imagework/crown_naverstore.jpg";
import issac from "../staticimage/imagework/issactoast_naverstore.jpg";

export default function ImageWork() {
  return (
    <>
      <p className={styles.title}>이미지 작업</p>
      <Link to="/portfolio/imagework">
        <button className={styles.btn}>더보기</button>
      </Link>
      <div className={styles.imagebox}>
        <img className={styles.image} src={bibigo} alt="bibigo" />
        <img className={styles.image} src={issac} alt="issac" />
        <img className={styles.image} src={crown} alt="crown" />
      </div>
    </>
  );
}

