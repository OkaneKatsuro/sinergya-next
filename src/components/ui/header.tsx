'use client'
import React, { useState } from 'react';
import useOffcanvasState from '../../hooks/useOffcanvasState';
import Offcanvas from './Offcanvas';
import FondPages from './FondPages'; // Импортируем компонент FondPages

const Header = () => {
  const { isOffcanvasOpen, toggleOffcanvas } = useOffcanvasState();
  const [isFondPagesOpen, setIsFondPagesOpen] = useState(false); // Добавляем состояние для управления видимостью FondPages

  // Функция для переключения состояния видимости FondPages
  const toggleFondPages = () => {
    setIsFondPagesOpen(!isFondPagesOpen);
  };

  const isClient = typeof window !== 'undefined';

  const renderOffcanvas = () => {
    if (isOffcanvasOpen) {
      const OffcanvasComponent = isClient ? require('./Offcanvas').default : null;
      return OffcanvasComponent && <OffcanvasComponent />;
    }
    return null;
  };

  return (
    <header className="bg-slate-200/75 h-16 z-10 fixed top-0 w-full">
      <nav className="mx-auto flex max-w-7xl justify-center p-2 px-8">
        <div className="flex gap-x-12 items-end">
          <a href="#" className="text-sm">
            Главная
          </a>
          <a href="#" className="text-sm">
            O нас
          </a>
          <a href="#" className="text-sm">
            Новости
          </a>
          <p className="text-3xl text-violet-600">Синергия</p>
          <a href="#" className="text-sm">
            Города-побратимы
          </a>
          <div className="flex gap-x-12 items-end">
          <button onClick={toggleOffcanvas} className="text-sm focus:outline-none">Контакты</button>
        </div>
          <div className="relative inline-block">
            {/* Добавляем кнопку для открытия/закрытия FondPages */}
            <button onClick={toggleFondPages} className="text-sm focus:outline-none">Фонд</button>
            {/* Рендерим компонент FondPages если isFondPagesOpen равен true */}
            {isFondPagesOpen && <FondPages />}
          </div>
        </div>
      </nav>
      {/* Рендерим компонент Offcanvas */}
      {renderOffcanvas()}
    </header>
  );
}

export default Header;
