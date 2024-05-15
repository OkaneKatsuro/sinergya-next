"use client";
import React, { useState } from "react";
import Offcanvas from "@/components/ui/Offcanvas";
import Dropdown from "./FondPages";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Products",
    children: [
      {
        title: "История",
        route: "/history",
      },
      {
        title: "Цели и задачи",
        route: "/goalsandtasks",
      },
      {
        title: "Новости",
        route: "/news",
      },
      {
        title: "Услуги в сфере миграции",
        route: "/partners",
      },
      {
        title: "Экономика Сaнкт-Петербурга",
        route: "/reports",
      },
      {
        title: "Культура Сaнкт-Петербурга",
        route: "/culture",
      },
      {
        title: "Экономика Сaнкт-Петербурга",
        route: "/reports",
      },
      {
        title: "Духовно-нравственные ценности",
        route: "/reports",
      },
      {
        title: "Реквизиты",
        route: "/requisites",
      },
    ],
  },
];
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
          <p className="text-4xl font-bold text-violet-600">СИНЕРГИЯ</p>
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
          <div className="flex gap-8 items-center text-sm justify-center">
            {menuItems.map((item) => {
              return item.hasOwnProperty("children") ? (
                <Dropdown item={item} />
              ) : (
                <Link className="hover:text-blue-500" href={item?.route || ""}>
                  {item.title}d
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {isOpen && <Offcanvas onClose={closeOffcanvas} />}
    </header>
  );
};

export default Header;
