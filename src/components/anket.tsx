"use client"
import React, { useState } from 'react';

type Votes = {
  [key: string]: number;
};

function Anket() {
  const [selectedOption, setSelectedOption] = useState('');
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState<Votes>({
    "1": 13,
    "2": 8,
    "3": 8,
    "4": 3,
    "5": 25,
    "6": 11,
    "7": 9,
    "8": 58
  });

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!voted) {
      const value = event.target.value;
      setSelectedOption(value);
    }
  };

  const handleVote = () => {
    if (selectedOption !== '') {
      setVoted(true);
      const updatedVotes = { ...votes };
      updatedVotes[selectedOption]++;
      setVotes(updatedVotes);
    } else {
      alert('Пожалуйста, выберите вариант ответа перед голосованием.');
    }
  };

  return (
    <section className="section relative h-max">
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-300 w-96 ml-4">
          <div className="flex justify-between items-center mb-4 text-center text-3xl font-bold">
            <div className="border-r-2 h-full border-black"></div>
          </div>
          <div className="space-y-4">
            {Object.keys(votes).map(option => (
              <div key={option}>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    className="form-radio h-4 w-4 text-purple-600"
                    onChange={handleOptionChange}
                    checked={selectedOption === option}
                    disabled={voted}
                  />
                  <span className="text-sm">
                    {getOptionLabel(option)}
                  </span>
                </label>
                {voted && (
                  <>
                    <div className="relative h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-full bg-purple-600 rounded" style={{ width: `${(votes[option] / Object.values(votes).reduce((a, b) => a + b, 0)) * 100}%` }}></div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                      </svg>
                      <span>{votes[option]} ({((votes[option] / Object.values(votes).reduce((a, b) => a + b, 0)) * 100).toFixed(2)}%)</span>
                    </div>
                  </>
                )}
              </div>
            ))}
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
        <div className="flex items-start flex-col ml-4 mt-4">
          <p className="text-6xl font-bold mb-4 text-left">
            С чем у вас <br />
            ассоциируется <br />
            Санкт-Петербург?
          </p>
        </div>
      </div>
    </section>
  );
}

function getOptionLabel(option: string) {
  switch (option) {
    case "1":
      return "Казанский собор";
    case "2":
      return "Исаакиевский собор";
    case "3":
      return "Эрмитаж";
    case "4":
      return "Медный Всадник";
    case "5":
      return "Растральная колона";
    case "6":
      return "Мариинский театр";
    case "7":
      return "Крейсер Аврора";
    case "8":
      return "Разводные мосты";
    default:
      return "";
  }
}

export default Anket;
