"use client";
import React, { useEffect } from "react";
import "@/components/styles/About2.scss";

export default function About2() {
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    target.classList.add("hovered");
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    target.classList.remove("hovered");
  };

  return (
    <section className="relative flex bg-white h-max z-1">
      <div className="grid gap-8 m-10">
        <div className="text-container m-10">
          <p className="text-4xl font-bold pb-4 ml-2 pt-2">
            Фонд развития культурно-делового сотрудничества городов-побратимов
            Санкт-Петербурга «СИНЕРГИЯ»
          </p>
          <p className="text-xl ml-2 pt-5">
            Фонд развития культурно-делового сотрудничества городов-побратимов
            Санкт-Петербурга «СИНЕРГИЯ» (Фонд «СИНЕРГИЯ») - является СО НКО
            России, учрежденной юридическими лицами и преследующая социальные
            общественно-полезные цели, глав.цель - развитие международного,
            внешнеэкономического и межрегионального сотрудничества
            Санкт-Петербурга с зарубежными странами и субъектами РФ, укрепление
            межнационального согласия.
          </p>
        </div>

        <div className="image-grid grid grid-cols-3 gap-8">
          <div
            className="image-container"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              className="rounded-lg large-image hover:scale-105"
              src="culture/Kazan.jpeg"
              alt="Kazan Image"
              loading="lazy"
            />
          </div>

          <div
            className="image-container"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              className="rounded-lg large-image hover:scale-105"
              src="culture/Kazan.jpeg"
              alt="Kazan Image"
              loading="lazy"
            />
          </div>

          <div
            className="image-container"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              className="rounded-lg large-image hover:scale-105"
              src="culture/Kazan.jpeg"
              alt="Kazan Image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
