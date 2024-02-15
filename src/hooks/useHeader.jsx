import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

export default function useHeader() {
  const {pathname} = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if(pathname !== '/'){
      setIsVisible(false)
      return;
    }
    setIsVisible(true)
  }, [pathname])

  return {isVisible}
}

