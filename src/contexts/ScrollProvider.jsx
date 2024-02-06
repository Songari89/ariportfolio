import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {useInView} from 'react-intersection-observer'

const ScrollContext = createContext();


export default function ScrollProvider({ children }) {
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight < 600 ? 0.28 : viewportHeight > 1200 ? 0.32 : 0.31;  
  const {ref, inView, entry} = useInView({
    root:null,
    threshold: threshold
  });


  return (
    <ScrollContext.Provider value={{ inView, ref, viewportHeight }}>
      {children}
    </ScrollContext.Provider>
  );
}


export function useScroll() {
  return useContext(ScrollContext);
}
