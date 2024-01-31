import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ScrollContext = createContext();

export default function ScrollProvider({ children }) {
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    function handleScroll(){
      const headerRect = document.querySelector('.header').getBoundingClientRect();
      const mainElements = document.querySelector(".mainele");
      let above = false;
      mainElements.forEach((mainElement) => {
        const mainRect = mainElement.getBoundingClientRect();
        if ()
      })
    }
  });


  return (
    <ScrollContext.Provider value={{isAbove }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
