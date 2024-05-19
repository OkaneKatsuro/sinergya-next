/* eslint-disable react/no-unescaped-entities */
export default function Aim() {
  return (
    <section className="relative flex bg-white h-max z-1 w- py-32">
      <div className="mx-20 flex flex-col space-y-7">
        <div className="max-w-screen-lg mx-auto ">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Основные направления Фонда
          </h2>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-4">
              <span className="text-xl font-semibold">
                Международное сотрудничество и привлечение инвестиций:
              </span>
              <p className="text-lg mt-2">
                Установление партнерских отношений с зарубежными странами и
                субъектами Российской Федерации. Продвижение экономического
                потенциала Санкт-Петербурга на международном уровне. Привлечение
                инвестиций в экономику города.
              </p>
            </li>
            <li className="mb-4">
              <span className="text-xl font-semibold">
                Культурные и образовательные инициативы:
              </span>
              <p className="text-lg mt-2">
                Организация культурных мероприятий и фестивалей для
                популяризации культурных ценностей. Поддержка научных и
                научно-образовательных проектов для повышения инновационного
                потенциала города.
              </p>
            </li>
            <li className="mb-4">
              <span className="text-xl font-semibold">
                Социальная поддержка и развитие:
              </span>
              <p className="text-lg mt-2">
                Помощь пострадавшим от стихийных бедствий и кризисных ситуаций.
                Реализация социальных программ и мероприятий для поддержки
                различных категорий граждан.
              </p>
            </li>
            <li className="mb-4">
              <span className="text-xl font-semibold">
                Взаимодействие и обмен опытом:
              </span>
              <p className="text-lg mt-2">
                Организация обменов и деловых встреч с представителями других
                городов и международных организаций. Содействие в установлении
                новых партнерских связей и развитии существующих контактов.
              </p>
            </li>
            <li className="mb-4">
              <span className="text-xl font-semibold">
                Продвижение имиджа города:
              </span>
              <p className="text-lg mt-2">
                Проведение мероприятий и кампаний для укрепления позитивного
                восприятия Санкт-Петербурга как города культуры, науки и
                инноваций. Активное участие в международных процессах и
                мероприятиях для повышения привлекательности города для жителей
                и инвесторов.
              </p>
            </li>
          </ul>
        </div>

        <a
          href="Ustav.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Устав фонда "Синергия"
        </a>
      </div>
    </section>
  );
}
