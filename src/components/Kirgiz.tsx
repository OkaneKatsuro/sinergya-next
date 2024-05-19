import React from 'react';

export default function Kirgiz() {
  return (
    <section className="relative flex bg-white h-max z-1 w-full">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold pb-10 text-center py-32">
        Буклеты на киргизском языке (Кыргыз тили)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div className="space-y-6">
            <div className="arch bg-white p-4 shadow-lg">
              <img
                src="qr/kirgiz.png"
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="arch bg-white p-4 shadow-lg">
              <img
                src="qr/kirgiz2.png"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="arch bg-white p-4 shadow-lg">
              <img
                src="qr/kirgiz3.png"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Column 2 */}
          <div className="space-y-6">
            <div className="arch bg-white p-4 shadow-lg">
              <img
                src="qr/qr-codeKirgiz.gif"
                alt="Image 4"
                className="w-64 h-64 object-cover"
              />
            </div>
            <div className="arch bg-white p-4 shadow-lg">
              <img
                src="qr/qr-code2kirgiz.gif"
                alt="Image 5"
                className="w-64 h-64 object-cover"
              />
            </div>
            <div className="arch bg-white p-4 shadow-lg">
              <img
                src="qr/qr-code3kirgiz.gif"
                alt="Image 6"
                className="w-64 h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}