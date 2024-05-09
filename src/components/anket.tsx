import Input from "./ui/inputs/forminput";
import "./Anket.scss";

export default function Anket() {
  return (
    <section className="section relative h-max">
      <div className="flex flex-row w-full z-1">
        <div className="basis-2/3 flex justify-start items-center">
          <div className="container w-max rounded flex flex-col">
            <div className="m-9 text-5xl">Примите участие в нашем опросе</div>
            <div className="flex flex-row m-9 pt-14 space-x-10">
              <div className="container flex flex-col">
                <p className="text-xl pb-3">Выберите свой город</p>
                <select className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500">
                  <option value="Санкт-Петербург">Санкт-Петербург</option>
                  <option value="Москва">Москва</option>
                  <option value="Киев">Минск</option>
                  <option value="Астана">Астана</option>
                  <option value="Тбилиси">Тбилиси</option>
                  <option value="Ереван">Ереван</option>
                  <option value="Душанбе">Душанбе</option>
                  <option value="Каракол">Каракол</option>
                  <option value="Кишинев">Кишинев</option>
                  <option value="Ашхабат">Ашхабат</option>
                  <option value="Ташкент">Ташкент</option>
                  <option value="Рига">Рига</option>
                  <option value="Таллин">Таллин</option>
                  <option value="Вильнюс">Вильнюс</option>
                </select>
              </div>
              <div className="container flex flex-col">
                <p className="text-xl pb-3">Ваше мнение о культурном обмене с городами-побратимами</p>
                <textarea className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500" rows={4} placeholder="Напишите ваше мнение"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center items-center py-28">
          <div className="bg-white drop-shadow-lg container w-max rounded py-8">
            <div className="m-9">
              <form>
                <div className="">
                  <h2 className="text-3xl font-semibold">Отправьте свой ответ</h2>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8">
                  <div className="col-span-4">
                    <div className="space-y-10">
                      <Input name="Имя" placeholder="Ваше имя" />
                      <Input name="Почта" placeholder="example@yourmail.com" />
                      <div className="flex justify-center items-center">
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Отправть ответ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
