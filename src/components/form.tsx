import Input from "./ui/inputs/forminput";

export default function Form() {
  return (
    <section className=" relative  h-max ">
      <div className="bg-white flex flex-row w-full ">
        <div className="basis-2/3 flex justify-center items-center">
          <div className="container w-max  bg-gray-400/30 rounded ">
            <div className="m-9">dfsdf</div>
          </div>
        </div>
        <div className="basis-1/3 bg-white flex justify-center items-center">
          <div className="container w-max  bg-gray-400/30 rounded  py-8">
            <div className="m-9">
              <form>
                <div className="">
                  <h2 className="text-3xl font-semibold">
                    Отправте нам письмо
                  </h2>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 ">
                  <div className="col-span-4">
                    <div className="space-y-6">
                      <Input name="Имя" placeholder="Ваше имя" />
                      <Input name="Почта" placeholder="example@yourmail.com" />
                      <Input name="Телефон" placeholder="+7(XXX)-XXX-XX-XX" />
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
