import React from 'react';

export default function QrBlock() {
  return (
    <section className="relative flex bg-white h-max z-1 w-full">
      <div className="max-w-screen-lg mx-auto">
        <ul className="font-bold text-black">
          <li className="hover:text-black transition duration-300">
            <a href="/uzbek" className="block text-3xl hover:bg-gray-200 p-2 rounded-md">
              Буклеты на узбекском языке (o'zbek tilida)
            </a>
          </li>
          <li className="hover:text-black transition duration-300">
            <a href="/kyrgyz" className="block text-3xl hover:bg-gray-200 p-2 rounded-md">
              Буклеты на киргизском языке (Кыргыз тили)
            </a>
          </li>
          <li className="hover:text-black transition duration-300">
            <a href="/tajik" className="block text-3xl hover:bg-gray-200 p-2 rounded-md">
              Буклеты на таджикском языке (бо забони точики)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
