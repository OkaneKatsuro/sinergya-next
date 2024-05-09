import Image from "next/image";
import "./About2.scss";

export default function About2() {
  return (
    <section className="   about2 relative flex  ">
      <div className=" relative bg-white   my-20 mx-12 border border-slate-500/20 ">
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/2 mx-7   my-5  ">
            <p className="text-4xl font-bold pb-6 ">
            Дружба народов в цифрах
            </p>
            <p className="text-base w-3/4 ">
            Важное место во внешних связях Санкт-Петербурга занимает сотрудничество с зарубежными городами и регионами, начало которым было положено в 1953 году, когда были установлены связи с финским городом Турку. В настоящее время 93 зарубежных города и 30 зарубежных регионов имеют двусторонние документы о сотрудничестве с Санкт-Петербургом.
            </p>
          </div>
          <Image
  className="absolute top-0 right-0"
  src=""
  alt="shape3"
  width={600}
  height={800} 
/>

        </div>
      </div>
    </section>
  );
}