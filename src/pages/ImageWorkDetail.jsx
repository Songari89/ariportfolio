import React, { useContext } from 'react';
import styles from './ImageWorkDetail.module.css'
import { useNavigate, Link} from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import Notfound from "./Notfound";
import homeicon from "../staticimage/icons/home(w).svg";
import arrow from "../staticimage/icons/arrow.svg";
import { getImageWork } from "../apls/firebase";
import { ModalContext } from "../contexts/ModalProvider";


export default function ImageWorkDetail() {
  const {isLoding, error, data:images} = useQuery({
    queryKey:["images"],
    queryFn: getImageWork
  })
  const navigate = useNavigate();
  const {openModal} = useContext(ModalContext);
  return (
    <div className={styles.section}>
      {error && <Notfound />}
      <div
        className={styles.homeiconcontainer}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={homeicon} className={styles.homeicon} alt="home" />
        <p className={styles.hometext}>홈으로</p>
      </div>
      <ul>
        {images &&
          images.map((image) => (
            <li className={styles.list} key={image.id}>
              <div className={styles.imagecontainer} onClick={() => openModal(image.image)}>
                <div className={styles.imagehover}>
                  <p>크게 보기</p>
                </div>
                <img
                  className={styles.image}
                  src={image.previewimage}
                  alt={image.title}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.title}>{image.title}</p>
                <p>{image.tool}</p>
                <p>{image.description[0] ?? ""}</p>
                <p>{image.description[1] ?? ""}</p>
                <p>{image.description[2] ?? ""}</p>
                <Link className={styles.btn} to={image.homepage} target="blank">
                  원본보기{" "}
                  <img className={styles.arrow} src={arrow} alt="arrow" />
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

