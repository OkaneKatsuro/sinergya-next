'use client'
import React, { useState } from 'react';
import "@/components/Offcanvas.module.scss"

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`offcanvas-animation offcanvas offcanvas-end bg-black text-white absolute h-screen top-0 right-0 ${isOpen ? 'show' : ''}`} tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close text-white" onClick={toggleOffcanvas} aria-label="Закрыть"></button>
      </div>
      <div className={`offcanvas-body ${isOpen ? 'show' : ''}`}> {/* Добавляем класс 'show' при открытии */}
        <div className="col-12 flex flex-col justify-center items-center" id="offcanvas-text-block">
          <p className="text-xl font-bold">Контактная информация или информация про организацию</p>
          <h3 className="text-2xl font-semibold">Контакты</h3>
          <p className="text-base">+7 (812) 123-45-67</p>
          <p className="text-base">+7 (911) 123-45-67</p>
          <p id="offcanvas-super-text" className="text-base">Новоостровский проспект, дом 36 лит.С</p>
          <h3 className="text-2xl font-semibold">Режим работы</h3>
          <p className="text-base">C 10:00 до 21:00 (Пн-Пт)</p>
          <p className="text-base">С 11:00 до 20:00 (Сб-Вс)</p>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
