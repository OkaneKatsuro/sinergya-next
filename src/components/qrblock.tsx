'use client'
import { useState, useEffect, useRef } from 'react';

export default function QrBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo && container.scrollTo({
        left: container.clientWidth * activeIndex,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative flex bg-white h-max z-1 w-full py-32">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold pb-10 text-center">Информация для иностранных граждан</h2>
        <div ref={containerRef} className="overflow-x-auto snap-x snap-mandatory">
          <div className="grid grid-cols-3 gap-8">
            <div className="snap-center">
              <img src="qr/Uz_blank.png" alt="Left Image" className="w-full h-auto" />
            </div>
            <div className="snap-center">
              <img src="qr/uz1qr-code.gif" alt="QR Code" className="w-full h-auto" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
