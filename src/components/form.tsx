"use client";
import Input from "./ui/inputs/forminput";
import "@/components/styles/Form.scss";

export default function Form() {
  return (
    <section className=" section relative  h-max ">
      <div className=" flex flex-row w-full z-1 ">
        <div className="basis-2/3 flex justify-start items-center">
          <div className=" container w-max  rounded flex flex-col ">
            <div className="m-9 text-5xl">Свяжитесь с нами</div>
            <div className="flex flex-row m-9 pt-14 space-x-10">
              <div className="container flex flex-col">
                <p className="text-xl pb-3">Наше расположение</p>
                <p>улица Славянская, дом 3</p>
              </div>
              <div className="container flex flex-col">
                <div className="container flex flex-col">
                  <p className="text-xl pb-3">Как мы можем помочь?</p>
                  <p>fond.synergy@mail.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-1/3 flex justify-center items-center py-28">
          <div className=" bg-white drop-shadow-lg container w-max   rounded  py-8">
            <div className="m-9 ">
              <form>
                <div className="">
                  <h2 className="text-3xl font-semibold">
                    Отправте нам письмо
                  </h2>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 ">
                  <div className="col-span-4">
                    <div className="space-y-10">
                      <Input name="Имя" placeholder="Ваше имя" />
                      <Input name="Почта" placeholder="example@yourmail.com" />
                      <Input name="Телефон" placeholder="+7(XXX)-XXX-XX-XX" />
                      <div className=" flex justify-center items-center">
                        <button
                          type="button"
                          className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Отправить письмо
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
