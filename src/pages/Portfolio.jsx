import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { useNavigate, Link } from "react-router-dom";
import homeicon from "../staticimage/icons/home.svg";
import Slide from "../coponents/Slide";

export default function Portfolio() {
  const location = useLocation();
  const { title, imageslide, url, figma,github, description, concept } =
    location.state;
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div
          className={styles.homeiconcontainer}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={homeicon} className={styles.homeicon} alt="home" />
          <p className={styles.hometext}>홈으로</p>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.slide}>
          <Slide imageslide={imageslide} />
        </div>
        <div className={styles.buttoncontainer}>
          <Link
            className={styles.link}
            to={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            웹 사이트
          </Link>
          <Link
            className={styles.link}
            to={figma}
            target="_blank"
            rel="noopener noreferrer"
          >
            피그마
          </Link>
          <Link
            className={styles.link}
            to={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            깃허브
          </Link>
        </div>
        {concept.length !== 0 && (
          <div className={styles.contentscontainer}>
            <p className={styles.subtitle}>Concept</p>
            <div className={styles.contents}>
              <ul>
                {concept.map((list, index) => (
                  <li key={index}>
                    <p className={styles.list}>
                      <span className={styles.dot}>•</span> {list}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className={styles.contentscontainer}>
          <p className={styles.subtitle}>Skill</p>
          <div className={styles.contents}>
            {description.length !== 0 && (
              <ul>
                {description.map((list, index) => (
                  <li key={index}>
                    <p className={styles.list}>
                      <span className={styles.dot}>•</span> {list}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
