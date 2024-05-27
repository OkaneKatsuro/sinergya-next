/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Footer() {
  return (
    <section className=" relative bg-black h-80  ">
      <div className=" pl-8 flex">
        <div className="grid grid-cols-4 gap-4 text-white px-7 pt-7 basis-4/5  size-fit z-20">
          <div className="text-xl pl-5 grid-rows-subgrid-3 gap-4  w-40 ">
            <p className="text-3xl font-bold pb-4 ">СИНЕРГИЯ</p>
            <p className=" text-sm ">
              Фонд развития культурно-делового сотрудничества городов-побратимов
              Санкт-Петербурга «СИНЕРГИЯ»
            </p>
          </div>

          <div className=" hidden md:flex text-xl  grid-rows-subgrid-3 gap-4 pl-7 ">
            <div>
              <p className=" pb-4">Карта сайта</p>
              <p>Главная</p>
              <p>Новости</p>
              <p>Партнеры</p>
            </div>
          </div>
          <div className=" hidden md:flex text-xl  grid-rows-subgrid-3 gap-4 pl-7 ">
            <div>
              <p className=" pb-4">Фонд</p>
              <p>Цели и задачи</p>
              <p>Отчеты</p>
              <p>Реквизиты</p>
            </div>
          </div>
          <div className=" hidden md:flex text-xl  grid-rows-subgrid-3 gap-4 pl-7 ">
            <div>
              <p className=" pb-4">Информация</p>
              <p>История</p>
              <p>О нас</p>
              <p>Документы</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex px-12 py-8">
        <hr className="w-full h-0.5 border-0 bg-white/50 place-self-center   " />
      </div>
      <div className="hidden md:flex flex-row justify-between gap-6 px-12 ">
        <p className="text-white">2023 Фонд "СИНЕРГИЯ"</p>
        <p className="text-white">
          Все права на сайт защищены и охраняются законодательством РФ
        </p>
        <p className="text-white">Дизайн и разработка</p>
      </div>

      <div className="absolute top-0 right-0 mb-8 mr-8 z-1">
        <Image src="./atom.svg" alt="atom" width={200} height={200} />
      </div>
      <div className="absolute bottom-0 right-0  z-0">
        <Image src="./shape-3.svg" alt="shape3" width={300} height={300} />
      </div>
    </section>
  );
}
