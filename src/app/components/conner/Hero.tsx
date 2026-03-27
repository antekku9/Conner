import { BannerSlider } from './BannerSlider';

export function Hero() {
  return (
    <section style={{ backgroundColor: 'var(--background)' }}>
      <BannerSlider />
      
      {/* Additional Hero Content */}
      <div className="py-16" style={{ background: 'linear-gradient(to bottom right, var(--bg-light), var(--background))' }}>
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Zaufany Partner IT od 1996 Roku
          </h1>
          <p className="text-lg max-w-[800px] mx-auto" style={{ color: 'var(--text-muted)' }}>
            Conner Sp. z o.o. to kompleksowe usługi IT dla firm, szkół i instytucji w Łodzi. 
            Serwis komputerowy, wynajem sprzętu, dostawy w przetargach i sklep na Allegro.
          </p>
        </div>
      </div>
    </section>
  );
}