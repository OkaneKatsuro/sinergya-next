"use client";
import React, { useState } from "react";
import "@/components/styles/Offcanvas.scss";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

interface OffcanvasProps {
  onClose: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ onClose }) => {
  return (
    <div className="offcanvas flex items-center ">
      <div className=" absolute top-0">
        <button
          type="button"
          className=" text-white mx-3 my-3"
          onClick={onClose}
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "35" }}
          >
            <MdClose />
          </IconContext.Provider>
        </button>
      </div>
      <div className=" px-12">
        <div className="col-12 flex flex-col justify-center items-center space-y-4">
          <p className="text-xl font-bold text-center">
            Контактная информация или информация про организацию
          </p>
          <h3 className="text-2xl font-semibold">Контакты</h3>
          <p className="text-base">+7 (812) 123-45-67</p>
          <p className="text-base">+7 (911) 123-45-67</p>
          <p className="text-base">Новоостровский проспект, дом 36 лит.С</p>
          <h3 className="text-2xl font-semibold">Режим работы</h3>
          <p className="text-base">C 10:00 до 21:00 (Пн-Пт)</p>
          <p className="text-base">С 11:00 до 20:00 (Сб-Вс)</p>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
