export default function Header() {
  return (
    <header className="bg-slate-200/75 h-16 z-10 fixed top-0 w-full">
      <nav className="mx-auto flex max-w-7xl  justify-center  p-2 px-8">
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
          <a href="#" className="text-sm ">
            Контакты
          </a>
          <a href="#" className="text-sm ">
            Страницы
          </a>
        </div>
      </nav>
    </header>
  );
}
