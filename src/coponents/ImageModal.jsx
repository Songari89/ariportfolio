import React, { useContext } from 'react';
import styles from './ImageModal.module.css'
import { ModalContext } from "../contexts/ModalProvider";

export default function ImageModal() {
  const {isOpen, image, closeModal} = useContext(ModalContext);
  return (
    <>
      {isOpen && (
        <div className={styles.container} onClick={closeModal}>
          <img src={image} className={styles.image} alt="modalimage"/>
        </div>
      )}
    </>
  );
}

