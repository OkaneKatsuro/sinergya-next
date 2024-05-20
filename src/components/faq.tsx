"use client";
import ExpandableText from "./ui/dropdown/dropdown";

const items = [
  { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
  { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
  { label: "Option 3", onClick: () => console.log("Option 3 clicked") },
];

const Faq: React.FC = () => {
  return (
    <section className="  relative flex bg-white h-max z-1 w-screen justify-center ">
      <div className="flex flex-row space-x-5 py-10">
        <div className="flex flex-col mx-6 space-y-10">
          <div className=" ">
            <ExpandableText
              text={"Что значит Синергия?"}
              title={"Что значит Синергия?"}
            />
          </div>
          <div className="  ">
            <ExpandableText
              text={"Сколько организаций в нашем фонде?"}
              title={"Сколько организаций в нашем фонде?"}
            />
          </div>
          <div className=" ">
            <ExpandableText
              text={"Конферения городов-побратимов"}
              title={"Конферения городов-побратимов"}
            />
          </div>
        </div>
        <div className="flex flex-col pr-6 space-y-10">
          <div className="  ">
            <ExpandableText
              text={"Ярмарка Дары Востока"}
              title={"Ярмарка Дары Востока"}
            />
          </div>
          <div className=" ">
            <ExpandableText
              text={"AUE"}
              title={"Конференции городов-побратимов"}
            />
          </div>
          <div className="  ">
            <ExpandableText
              text={"AUE"}
              title={"Проектная деятельность фонд СИНЕРГИЯ"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
