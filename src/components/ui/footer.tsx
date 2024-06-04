/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "@/components/styles/Footer.scss";

export default function Footer() {
  return (
    <section className="relative bg-black h-50 text-white">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold">СИНЕРГИЯ</h2>
          <p className="text-sm mt-2">
            Фонд развития культурно-делового сотрудничества городов-побратимов Санкт-Петербурга «СИНЕРГИЯ»
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:col-span-2">
          <div>
            <p className="text-xl font-bold pb-2">Карта сайта</p>
            <p>Главная</p>
            <p>Новости</p>
            <p>Партнеры</p>
          </div>
          <div>
            <p className="text-xl font-bold pb-2">Фонд</p>
            <p>Цели и задачи</p>
            <p>Отчеты</p>
            <p>Реквизиты</p>
          </div>
          <div>
            <p className="text-xl font-bold pb-2">Информация</p>
            <p>История</p>
            <p>О нас</p>
            <p>Документы</p>
          </div>
        </div>
      </div>

      <hr className="bg-white/50 h-0.5" />

      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2023 Фонд "СИНЕРГИЯ"</p>
        <p className="text-sm">
          Все права на сайт защищены и охраняются законодательством РФ
        </p>
        <p className="text-sm">Дизайн и разработка</p>
      </div>

      <div className="image-container lg:absolute top-0 right-0 mt-8 lg:mt-4 mr-8 lg:mr-12 z-1">
        <Image src="./atom.svg" alt="atom" width={300} height={300} className="atom-image2 pulsate" />
      </div>
    </section>
  );
}