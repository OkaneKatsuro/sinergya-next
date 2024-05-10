'use client'
import React from 'react';
import useOffcanvasState from '../../hooks/useOffcanvasState';
import Offcanvas from './Offcanvas';

const Header = () => {
  const { isOffcanvasOpen, toggleOffcanvas } = useOffcanvasState();

  // Используем 'useClient' для обеспечения корректной работы на стороне клиента
  const isClient = typeof window !== 'undefined';

  // Проверяем, открыты ли контакты, и рендерим компонент Offcanvas, если это так
  const renderOffcanvas = () => {
    if (isOffcanvasOpen) {
      const OffcanvasComponent = isClient ? require('./Offcanvas').default : null; // Ленивая загрузка Offcanvas
      return OffcanvasComponent && <OffcanvasComponent />;
    }
    return null;
  };

  return (
    <header className="bg-slate-200/75 h-16 z-10 fixed top-0 w-full">
      <nav className="mx-auto flex max-w-7xl justify-center p-2 px-8">
      <div className=" flex gap-x-12 items-end  ">
          <a href="#" className="text-sm ">
            Главная
          </a>
          <a href="#" className="text-sm ">
            O нас
          </a>
          <a href="#" className="text-sm ">
            Новости
          </a>
          <p className="text-3xl text-violet-600">Синергия</p>
          <a href="#" className="text-sm ">
            Города-побратимы
          </a>
          <div className="flex gap-x-12 items-end">
          <button onClick={toggleOffcanvas} className="text-sm focus:outline-none">Контакты</button>
        </div>
          <a href="#" className="text-sm ">
            Страницы
          </a>
        </div>
      </nav>
      {renderOffcanvas()}
    </header>
  );
}

export default Header;
