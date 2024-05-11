"use client";
import React, { useState } from "react";
import Offcanvas from "@/components/ui/Offcanvas";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
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
            <button
              onClick={openOffcanvas}
              className="text-sm focus:outline-none"
            >
              Контакты
            </button>
          </div>
          <a href="#" className="text-sm ">
            Страницы
          </a>
        </div>
      </nav>

      {isOpen && <Offcanvas onClose={closeOffcanvas} />}
    </header>
  );
};

export default Header;
