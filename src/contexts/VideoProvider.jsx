import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export default function VideoProvider({children}) {
  const [isVideoPlay, setIsVideoPlay] = useState(true);

  const handlePause = () => {
    setIsVideoPlay((pre) => !pre);
  };
  


  return (
    <VideoContext.Provider value={{isVideoPlay, handlePause}}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}
