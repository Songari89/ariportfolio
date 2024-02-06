import React from 'react';
import Main from "../pages/Main";
import styles from "./MainScrollWrap.module.css";
import {useInView} from 'react-intersection-observer'

export default function MainScrollWrap() {
  const {ref, inView} = useInView({
    threshold:0.9
  })

  console.log(inView)

  return (
    <div className={styles.wrapcontainer}>
   
    </div>
  );
}

