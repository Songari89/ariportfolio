import React, { useEffect } from "react";
import styles from "./Main.module.css";
import Greeting from "./Greeting";
import AboutMe from "./AboutMe";
import WebCoding from "./WebCoding";

import { useScroll } from "../contexts/ScrollProvider";



export default function Main() {
   const { ref } =useScroll();
  return (

      <div className={styles.container} ref={ref} id="main">
       
          <Greeting />
      
          <AboutMe />
      
          <WebCoding />
   
      </div>

  );
}
