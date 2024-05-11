import Input from "./ui/inputs/forminput";
import "@/components/styles/Form.scss";

export default function Table() {
  return (
    <div className="overflow-x-auto mt-16">
      {/* Контейнер с текстом и изображением */}
      {/* Таблица */}
      <div className="shadow-md rounded-lg p-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
              >
                Флаг
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
              >
                Страна
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
              >
                Город-побратим
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
              >
                Год установления связи
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Jordan.svg"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Иордания
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Акаба
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2003
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_Egypt.webp"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Египет
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Александрия
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2005
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Kazakhstan.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Казахстан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Алма-Ата
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1996
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Belgium_(civil).svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Бельгия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Антверпен
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1958
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Kazakhstan.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Казахстан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Нур-Султан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2008
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Azerbaijan.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Азербайджан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Баку
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1998
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Thailand.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Таиланд
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Бангкок
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Spain.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Испания
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Барселона
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1984
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_France.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Франция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Бордо
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1991
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_Argentina.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Аргентина
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Буэнос-Айрес
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2010
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Poland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Польша
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Варшава
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Italy.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Италия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Венеция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2006
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Palestine.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Палестинская национальная администрация
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Вифлеем
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2003
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Russia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Россия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Воркута
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1942
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Cuba.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Республика Куба
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Гавана
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2000
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_France.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Франция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Гавр
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1965
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Germany.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Германия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Гамбург
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1957
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Poland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Польша
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Гданьск
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1961
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Italy.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Италия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Генуя
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2002
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Sweden.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Швеция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Гётеборг
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1962
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Austria.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Австрия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Грац
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2001
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Latvia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Латвия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Даугавпилс
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1965
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Germany.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Германия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Дрезден
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1961
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Tajikistan.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Таджикистан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Душанбе
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1991
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Armenia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Армения
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Ереван
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Croatia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Хорватия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Загреб
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1968
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Иматра (как регион Южная Карелия)
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2007
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Iran.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Иран
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Исфахан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1999
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_South_Africa.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                ЮАР
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Йоханнесбург
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2009
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Lithuania.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Литва
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Каунас{" "}
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2007
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_Canada.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Канада
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Квебек
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2002
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_South_Africa.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                ЮАР
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Кейптаун
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2001
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_Canada.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Канада
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Квебек
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2002
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Sri_Lanka.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Шри-Ланка
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Коломбо
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1968
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Romania.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Румыния
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Констанца
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2007
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Котка
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Slovakia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Словакия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Кошице
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1995
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Poland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Польша
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Краков
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2006
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Лаппеенранта (как регион Южная Карелия){" "}
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2007
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_France.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Франция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Лион
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1993
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_United_States.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                США
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Лос-Анджелес
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1990
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_the_United_Kingdom.webp"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Великобритания
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Манчестер
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1962
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_Argentina.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Аргентина
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Мар-дель-Плата
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2009
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Slovenia.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Словения
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Марибор
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2001{" "}
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Australia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Австралия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Мельбурн{" "}
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1989
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Миккели
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1996
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Belarus.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Белоруссия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Минск
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2000
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Uruguay.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Уругвай
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Монтевидео{" "}
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1998
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_India.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Индия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Мумбаи
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1963
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Russia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Россия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Нижний Новгород
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2016
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_France.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Франция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Ницца
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Russia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Россия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Омск
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1943
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Denmark.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Дания
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Орхус
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1989
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Japan_(geometric).png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Япония
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Осака
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1979
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Kyrgyzstan_(1992-2023).png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Киргизия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Ош
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2004
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_France.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Франция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Париж(Город-Партнер)
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1991
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_People's_Republic_of_China.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                КНР
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Пекин
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2009
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Russia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Россия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Туапсе
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1998
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Greece.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Греция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Пирей
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1965
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Bulgaria.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Болгария
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Пловдив
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1980
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_South_Korea.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Республика Корея
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Пусан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2008
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/720px-Flag_of_Brazil.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Бразилия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Рио-де-Жанейро
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1986
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Latvia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Латвия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Рига
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_the_Netherlands.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Нидерланды
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Роттердам
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1966
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Greece.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Греция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Салоники
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2002
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_United_States.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                США
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Сент-Питерсберг
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2002
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Cuba.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Республика Куба
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Сантьяго-де-Куба
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1974
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Russia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Россия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Севастополь
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2000
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Norway.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Норвегия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Ставангер
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2008
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Turkey.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Турция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Стамбул
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1990
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Sweden.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Швеция
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Стокгольм
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1992
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Estonia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Эстония
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Таллин
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1999
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Тампере
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1993
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Estonia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Эстония
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Тарту
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2006
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_Georgia.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Грузия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Тбилиси
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1999
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Турку{" "}
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1953
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_South_Korea.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Республика Корея{" "}
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Тэгу
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1997
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/660px-Flag_of_Israel.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Израиль
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Хайфа
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2008
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Vietnam.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Вьетнам
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Хайфон
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2006
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Sudan.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Судан
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Хартум
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2002
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Finland.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Финляндия
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Хельсинки
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1993
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_Vietnam.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Вьетнам
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Хошимин
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1977
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_United_States.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                США
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Чикаго
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1992
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_People's_Republic_of_China.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                КНР
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Чэнду
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1998
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_People's_Republic_of_China.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                КНР
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Циндао
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                2007
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/Flag_of_the_People's_Republic_of_China.svg.png"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                КНР
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Шанхай
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1988
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <img
                  src="flags/800px-Flag_of_the_United_Kingdom.webp"
                  alt="Флаг страны 1"
                  className="w-8 h-auto"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Великобритания
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                Эдинбург
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                1995
              </td>
            </tr>

            {/* Добавьте остальные строки */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
