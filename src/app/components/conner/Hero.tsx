import { BannerSlider } from './BannerSlider';

export function Hero() {
  return (
    <section style={{ backgroundColor: 'var(--background)' }}>
      <BannerSlider />
      
      {/* Additional Hero Content */}
      {/* Zmniejszono padding na mobile z py-16 do py-10 dla lepszej dynamiki */}
      <div className="py-10 md:py-16" style={{ background: 'linear-gradient(to bottom right, var(--bg-light), var(--background))' }}>
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          {/* text-2xl na mobile, text-4xl na desktopie */}
          <h1 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: 'var(--foreground)' }}>
            Zaufany Partner IT od 1996 Roku
          </h1>
          {/* Uproszczony stopień pisma na mobile (text-sm) dla lżejszego odbioru */}
          <p className="text-sm md:text-lg max-w-[800px] mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Conner Sp. z o.o. to kompleksowe usługi IT dla firm, szkół i instytucji w Łodzi. 
            Serwis komputerowy, wynajem sprzętu, dostawy w przetargach i sklep na Allegro.
          </p>
        </div>
      </div>
    </section>
  );
}
