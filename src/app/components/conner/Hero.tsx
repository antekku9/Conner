import { BannerSlider } from './BannerSlider';

export function Hero() {
  return (
    <section className="bg-white">
      <BannerSlider />
      
      {/* Additional Hero Content */}
      <div className="py-16 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Zaufany Partner IT od 1996 Roku
          </h1>
          <p className="text-lg text-[#6b7280] max-w-[800px] mx-auto">
            Conner Sp. z o.o. to kompleksowe usługi IT dla firm, szkół i instytucji w Łodzi. 
            Serwis komputerowy, wynajem sprzętu, dostawy w przetargach i sklep na Allegro.
          </p>
        </div>
      </div>
    </section>
  );
}