import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export default function ModalProvider({children}) {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState(null);

  const openModal = (image) => {
    setIsOpen(true)
    setImage(image)
  }

  const closeModal = () => {
    setImage(null)
    setIsOpen(false)
  }
  return (
    <ModalContext.Provider value={{openModal, closeModal, isOpen, image}}>
      {children}
    </ModalContext.Provider>
  );
}

