'use client'
import React from 'react';
import "@/components/FondPages.scss"; // импорт стилей

const FondPages = () => {
  const submenuItems = [
    { label: 'История', href: 'about.html' },
    { label: 'Цели и задачи', href: 'pricing.html' },
    { label: 'Новости', href: 'blog.html' },
    { label: 'Партнеры', href: 'blog-details.html' },
    { label: 'Отчеты', href: '404.html' },
    { label: 'Реквизиты', href: '404.html' }
  ];

  return (
    <div className="relative">
      <ul className="ud-submenu">
        {submenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="ud-submenu-link">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FondPages;
