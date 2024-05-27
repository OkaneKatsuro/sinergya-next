"use client";
import Input from "./ui/inputs/forminput";
import "@/components/styles/Anket.scss";

import React, { useState } from 'react';

function Anket() {
  const [selectedOption, setSelectedOption] = useState('');
  const [voted, setVoted] = useState(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleVote = () => {
    if (selectedOption !== '') {
      setVoted(true);
    } else {
      alert('Пожалуйста, выберите вариант ответа перед голосованием.');
    }
  };

  return (
    <section className="section relative h-max">
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-300 w-96">
          <div className="mb-4">
            <h2 className="text-lg font-medium">Выберите вариант ответа:</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="1"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "1"}
                />
                <span className="text-sm">Казанский собор</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>13 (10%)</span>
                  </div>
                </>
              )}
            </div>

            {/* Добавляем аналогичные блоки для остальных вариантов ответа */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="2"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "2"}
                />
                <span className="text-sm">Исаакиевский собор</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>8 (6%)</span>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="3"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "3"}
                />
                <span className="text-sm">Эрмитаж</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>8 (6%)</span>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="4"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "4"}
                />
                <span className="text-sm">Медный Всадник</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>3 (2%)</span>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="5"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "5"}
                />
                <span className="text-sm">Растральная колона</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>25 (19%)</span>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="6"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "6"}
                />
                <span className="text-sm">Мариинский театр</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>11 (8%)</span>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="7"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "7"}
                />
                <span className="text-sm">Крэйсер Аврора</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>9 (7%)</span>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="8"
                  className="form-radio h-4 w-4 text-purple-600"
                  onChange={handleOptionChange}
                  checked={selectedOption === "8"}
                />
                <span className="text-sm">Разводные мосты</span>
              </label>
              {voted && (
                <>
                  <div className="relative h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span>58 (43%)</span>
                  </div>
                </>
              )}
            </div>

          </div>

          {!voted && (
            <div className="flex justify-end">
              <button onClick={handleVote} className="bg-purple-600 text-white px-4 py-2 rounded">Голосовать</button>
            </div>
          )}

          {voted && (
            <div className="text-center text-gray-700">Спасибо за ваш голос!</div>
          )}
        </div>
        <div className="line-height:63px; font-size: 4em; font-weight: bold;">
      КАКИЕ СЛОВА У&nbsp;ВАС АССОЦИИРУЮТСЯ С&nbsp;РУССКИМИ?
    </div>
      </div>

    </section>
  );
}

export default Anket;
