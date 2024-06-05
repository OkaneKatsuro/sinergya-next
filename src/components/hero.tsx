"use client";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const text =
    "Ф.онд развития культурно-делового сотрудничества городов побратимов Санкт-Петербурга СИНЕРГИЯ ";

  useEffect(() => {
    let currentIndex = 0; //создаем переменную для обозночения индекса символа в тексте
    const intervalId = setInterval(() => {
      setTypedText((prevText) => {
        if (currentIndex >= text.length) {
          clearInterval(intervalId);
          return prevText; //возращаем текст
        }
        console.log("текущий текст:", prevText);
        console.log("текущий буква", text[currentIndex]);
        return prevText + text[currentIndex]; //добовляем букву с индексом
      });
      console.log("Current index:", currentIndex);
      currentIndex++; //увеличиваем индекс на 1
    }, 90); //делей

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-screen ">
      <video
        className="fixed inset-0 w-full h-full object-cover blur-sm"
        src="/spbvideo.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className=" fixed inset-0 flex items-center justify-center text-center text-white inset-y-0 left-0 pl-20 ">
        <h1 className="text-5xl  font-bold basis-2/3 justify-center ">
          {typedText}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
