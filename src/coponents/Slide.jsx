import React, { useState } from "react";
import styles from "./Slide.module.css";
import pre from "../staticimage/icons/toback.svg";
import next from "../staticimage/icons/toforward.svg";

export default function Slide({ imageslide }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [style, setStyle] = useState({});

  const preImage = () => {
    if (currentImage > 0) {
      const newCurrentImage = currentImage - 1;
      setCurrentImage(newCurrentImage);
      setStyle({ transform: `translateX(-${newCurrentImage * 100}%)`, transition: "all 0.4s ease-in-out" });
    }
  };

  const nextImage = () => {
    if( currentImage === imageslide.length -1){
      const newCurrentImage = 0;
      setCurrentImage(newCurrentImage);
      setStyle({
        transform: `translateX(-${newCurrentImage * 100}%)`,
        transition: "all 0.4s ease-in-out",
      });
    }
    if (currentImage < imageslide.length - 1) {
      const newCurrentImage = currentImage + 1;
      setCurrentImage(newCurrentImage);
      setStyle({
        transform: `translateX(-${newCurrentImage * 100}%)`,
        transition: "all 0.4s ease-in-out",
      });
    }
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.prebtn}
        src={pre}
        alt="prebutton"
        onClick={preImage}
      />
      <div className={styles.imagecontainer} style={style}>
        {imageslide &&
          imageslide.length !== 0 &&
          imageslide.map((slide) => (
            <img
              className={styles.image}
              key={slide.id}
              src={slide.imagesrc}
              alt={slide.imagealt}
            />
          ))}
      </div>
      <img
        className={styles.nextbtn}
        src={next}
        alt="nextbutton"
        onClick={nextImage}
      />
    </div>
  );
}
