import React, { useState } from 'react';

const useOpen = () => {
const[isOpen, setIsOpen]= useState(false)

const onOpen = ()=>{
    setIsOpen(!isOpen)
}
const onClose = ()=>{
    setIsOpen(false)
}

  return [
      isOpen,
      onClose,
      onOpen
  ]
  
};

export default useOpen;