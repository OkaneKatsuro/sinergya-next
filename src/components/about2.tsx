'use client';
import "@/components/styles/About2.scss";

import React, { useEffect } from 'react';

export default function About2() {
  useEffect(() => {
    const images = document.querySelectorAll('.image-container img') as NodeListOf<HTMLImageElement>;

    images.forEach((image: HTMLImageElement) => {
      image.classList.add('pulsate');
    });
  }, []);

  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    target.classList.add('hovered');
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    target.classList.remove('hovered');
  };

  return (
    <section className="about2 relative flex">
      <div className="relative bg-white my-8 mx-4 border border-slate-500/20">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <p className="text-4xl font-bold pb-4 ml-2">
              Фонд развития культурно-делового сотрудничества городов-побратимов
              Санкт-Петербурга «СИНЕРГИЯ»
            </p>
            <p className="text-xl pb-8 ml-2">
              Фонд развития культурно-делового сотрудничества городов-побратимов
              Санкт-Петербурга «СИНЕРГИЯ» (Фонд «СИНЕРГИЯ») - является СО НКО
              России, учрежденной юридическими лицами и преследующая социальные
              общественно-полезные цели, глав.цель - развитие международного,
              внешнеэкономического и межрегионального сотрудничества
              Санкт-Петербурга с зарубежными странами и субъектами РФ, укрепление
              межнационального согласия.
            </p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <div
              className="image-container col-span-2 rounded-lg overflow-hidden transition-transform transform scale-110 -rotate-6"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <img className="rounded-lg" src="/culture/Anichkov.jpeg" alt="" width={400} height={267} loading="lazy" />
            </div>
            <div
              className="image-container col-span-2 rounded-lg overflow-hidden transition-transform transform scale-75 rotate-6 translate-x-2 translate-y-15"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <img className="rounded-lg" src="/culture/Anichkov.jpeg" alt="" width={400} height={267} />
            </div>
            <div
              className="image-container relative rounded-lg overflow-hidden transition-transform transform scale-150 translate-y-11"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <div className="rounded-lg overflow-hidden transform">
                <img className="rounded-lg" src="/culture/Anichkov.jpeg" alt="" width={200} height={133} />
              </div>
            </div>
            <div
              className="image-container rounded-lg overflow-hidden transition-transform "
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <img className="rounded-lg" src="/culture/Anichkov.jpeg" alt="" width={200} height={133} />
            </div>
            <div
              className="image-container rounded-lg overflow-hidden transition-transform transform translate-x-20 translate-y-4"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <img className="rounded-lg" src="/culture/Anichkov.jpeg" alt="" width={200} height={133} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
