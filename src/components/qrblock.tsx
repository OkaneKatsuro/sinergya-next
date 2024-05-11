export default function QrBlock() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 ">
          <div className="ud-contact-content-wrapper">
            <div className="ud-contact-title text-center px-4"> {/* Добавлен класс px-4 */}
              <div className="text-4xl font-semibold mb-4">Информация о городах-побратимах</div>
            </div>
            <div className="ud-contact-info-wrapper flex flex-wrap justify-center">
              {/* Первый QR-код */}
              <div className="ud-single-info w-full md:w-1/2 flex justify-center">
                <div className="ud-info-meta text-center px-4">
                  <h5 className="font-semibold p-4">Сканируйте QR-код для получения информации о культурном обмене с городом Санкт-Петербург</h5>
                  <img src="QrEx.png" alt="QR-code A" className="w-500 h-500 md:w-auto md:h-auto mx-auto my-4" />
                </div>
              </div>
              {/* Второй QR-код */}
              <div className="ud-single-info w-full md:w-1/2 flex justify-center">
                <div className="ud-info-meta text-center px-4">
                  <h5 className="font-semibold p-4">Сканируйте QR-код для получения информации о культурном обмене с городом Санкт-Петербург</h5>
                  <img src="QrEx.png" alt="QR-code B" className="w-500 h-500 md:w-auto md:h-auto mx-auto my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
