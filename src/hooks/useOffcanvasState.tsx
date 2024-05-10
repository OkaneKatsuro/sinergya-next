'use client'

import { useState } from 'react';

const useOffcanvasState = () => {
  // Проверяем, выполняется ли код на стороне клиента перед использованием useState
  const [isOffcanvasOpen, setIsOffcanvasOpen] = typeof window !== 'undefined' ? useState(false) : [false, () => {}];

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return { isOffcanvasOpen, toggleOffcanvas };
}

export default useOffcanvasState;
