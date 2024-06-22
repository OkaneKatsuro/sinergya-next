"use client";
import Input from "./ui/inputs/forminput";
import "@/components/styles/Form.scss";

export default function Form() {
  return (
    <section className="section flex justify-center">
      <div className="flex flex-col z-1 w-full">
        {/* Contact Information - Hidden on small screens */}
        <div className="hidden md:flex flex-col items-center mt-20 mx-4 md:mx-0 md:ml-40 md:mr-auto">
        </div>
        {/* Form */}
        <div className="flex justify-center items-center py-28 w-full">
          <div className="bg-white drop-shadow-lg container w-full md:w-1/2 lg:w-1/3 rounded py-8 mx-auto">
            <div className="m-9">
              <form>
                <div className="justify-center items-center text-center">
                  <h2 className="text-3xl font-semibold">Отправьте нам письмо</h2>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8">
                  <div className="col-span-4">
                    <div className="space-y-10">
                      <Input name="Имя" placeholder="Ваше имя" />
                      <Input name="Почта" placeholder="example@yourmail.com" />
                      <Input name="Телефон" placeholder="+7(XXX)-XXX-XX-XX" />
                      <div className="flex items-center space-x-3 mt-4">
                        <input
                          type="checkbox"
                          id="consent"
                          className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-700">
                          Я подтверждаю, что ознакомлен(-а) с Политикой обработки персональных данных,<br />
                          а также даю согласие на обработку своих персональных данных в соответствии<br />
                          с Федеральным законом от 27.07.2006 № 152-ФЗ "О персональных данных".<br />
                          Настоящее согласие даётся мною бессрочно.
                        </label>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <button
                          type="submit"
                          className="text-white bg-purple-600 hover:bg-purple-600 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-600 focus:outline-none dark:focus:ring-purple-600"
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
