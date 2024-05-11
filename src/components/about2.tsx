import Image from "next/image";
import "@/components/styles/About2.scss";

export default function About2() {
  return (
    <section className="   about2 relative flex  ">
      <div className=" relative bg-white   my-20 mx-12 border border-slate-500/20 ">
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/2 mx-7   my-5  ">
            <p className="text-4xl font-bold pb-6 ">
              Фонд развития культурно-делового сотрудничества городов-побратимов
              Санкт-Петербурга «СИНЕРГИЯ»
            </p>
            <p className="text-base w-3/4 ">
              Фонд развития культурно-делового сотрудничества городов-побратимов
              Санкт-Петербурга «СИНЕРГИЯ» (Фонд «СИНЕРГИЯ») - является СО НКО
              России, учрежденной юридическими лицами и преследующая социальные
              общественно-полезные цели, глав.цель - Развитие международного,
              внешнеэкономического и межрегионального сотрудничества
              Санкт-Петербурга с зарубежными странами и субъектами РФ,
              укрепление межнационального согласия.
            </p>
          </div>
          <Image
            className=" absolute top-0 right-0"
            src="./about-image.svg"
            alt="shape3"
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
