/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "@/components/styles/About1.scss";

export default function About1() {
  return (
    <section className=" relative flex  bg-white h-max z-1 w-    py-32 ">
      <div className=" mx-20  flex flex-col space-y-7">
        <div className="flex-col w-3/5 space-y-9">
          <p className="text-5xl font-bold  ">Мы – То, Что Мы Делаем</p>
          <p className="text-xl pb-10 ">
            Фонд "СИНЕРГИЯ" больше, чем превосходство группы над индивидами! Это
            проектная деятельность и сверхаддитивный эффект! Это раскрытые
            таланты, насыщенная жизнь, творчество, лидерство, социальная
            активность, международное сотрудничество! Это пространство, в
            котором живут все признаки команды: целеустремленность;
            коммуникация; планирование; совместная работа; синергия: 1+1=3
          </p>
        </div>
        <div className="flex flex-row space-x-20">
          <div className="grid ">
            <div className="space-y-4 ">
              <div className="relative">
                <div className="flex justify-center items-center bg-fuchsia-700 h-16 w-16 rounded-xl  relative">
                  <Image src="./planet.svg" alt="atom" width={32} height={34} />
                </div>
                <div className="w-16 h-16 bg-fuchsia-700/20 rotate-45 absolute inset-x-0 top-0 rounded-xl hover:rotate-12 transition-all duration-300"></div>
              </div>
              <p className="font-bold">
                Организует свою работу в тесном взаимодействии с органами
                исполнительной власти
              </p>
              <p className="text-gray-400">
                C государственными, общественными и коммерческими организациями
                РФ, а также с учреждениями и организациями стран ЕАЭС и стран
                БРИКС+.
              </p>
            </div>
          </div>
          <div className="grid  ">
            <div className="space-y-4">
              <div className="relative">
                <div className="flex justify-center items-center bg-fuchsia-700 h-16 w-16 rounded-xl  relative">
                  <Image src="./planet.svg" alt="atom" width={32} height={34} />
                </div>
                <div className="w-16 h-16 bg-fuchsia-700/20 rotate-45 absolute inset-x-0 top-0 rounded-xl hover:rotate-12 transition-all duration-300"></div>
              </div>
              <p className="font-bold">
              Организация культурных мероприятий и 
              фестивалей для популяризации культурных ценностей
              </p>
              <p className="text-gray-400">
              Поддержка научных и научно-образовательных проектов для повышения инновационного потенциала города.
              </p>
            </div>
          </div>
          <div className="grid ">
            <div className="space-y-4">
              <div className="relative">
                <div className="flex justify-center items-center bg-fuchsia-700 h-16 w-16 rounded-xl  relative">
                  <Image src="./planet.svg" alt="atom" width={32} height={34} />
                </div>
                <div className="w-16 h-16 bg-fuchsia-700/20 rotate-45 absolute inset-x-0 top-0 rounded-xl hover:rotate-12 transition-all duration-300"></div>
              </div>
              <p className="font-bold">
              Помощь пострадавшим от стихийных бедствий и кризисных ситуаций
              </p>
              <p className="text-gray-400">
              Реализация социальных программ и мероприятий для поддержки различных категорий граждан.
              </p>
            </div>
          </div>
          <div className="grid ">
            <div className="space-y-4">
              <div className="relative">
                <div className="flex justify-center items-center bg-fuchsia-700 h-16 w-16 rounded-xl  relative ">
                  <Image src="./planet.svg" alt="atom" width={32} height={34} />
                </div>
                <div className="w-16 h-16 bg-fuchsia-700/20 rotate-45 absolute inset-x-0 top-0 rounded-xl hover:rotate-12 transition-all duration-300"></div>
              </div>
              <p className="font-bold">
              Проведение мероприятий и кампаний для укрепления позитивного восприятия Санкт-Петербурга как города культуры, науки и инноваций
              </p>
              <p className="text-gray-400">
              Активное участие в международных процессах и мероприятиях для повышения привлекательности города для жителей и инвесторов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
