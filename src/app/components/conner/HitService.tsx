import { useState, useEffect } from 'react';
import { Wrench, Timer } from 'lucide-react';

export function HitService() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const difference = endOfDay.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-4 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Główna karta Oferty Dnia */}
        <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white p-5 overflow-hidden shadow-sm">
          
          {/* Nagłówek sekcji - ZMIENIONO NAZWĘ NA OFERTA DNIA */}
          <div className="flex justify-between items-center mb-4 relative z-10">
            <h3 className="text-base font-black tracking-tight text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Oferta Dnia
            </h3>
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] font-black px-2.5 py-1 rounded-lg">
              Oszczędzasz 50 zł
            </div>
          </div>

          {/* Środek karty */}
          <div className="flex items-center justify-between my-2 relative z-10">
            <div className="max-w-[65%]">
              <h4 className="text-lg font-extrabold text-white leading-tight">
                Konserwacja & Czyszczenie Układu Chłodzenia
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Wymiana past termoprzewodzących w laptopie lub PC. Zapobiegaj przegrzewaniu!
              </p>
            </div>
            
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[var(--accent)] shrink-0 shadow-inner">
              <Wrench className="w-8 h-8" />
            </div>
          </div>

          {/* Dół karty */}
          <div className="mt-5 pt-4 border-t border-slate-900 flex justify-between items-end relative z-10">
            <div className="flex flex-col gap-1">
              <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Cena w pakiecie</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[var(--accent)]">149 zł</span>
                <span className="text-xs text-slate-500 line-through">199 zł</span>
              </div>
              <span className="text-[10px] text-slate-500 leading-tight block mt-0.5 max-w-[180px] md:max-w-none">
                Najniższa cena z 30 dni przed obniżką: <span className="font-medium text-slate-400">199 zł</span>
              </span>
            </div>

            {/* Licznik czasu */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                <Timer className="w-3 h-3" /> Okazja kończy się za
              </span>
              <div className="flex gap-1 text-xs font-mono font-bold">
                <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">{formatNum(timeLeft.hours)}</span>
                <span className="text-slate-600 self-center">:</span>
                <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">{formatNum(timeLeft.minutes)}</span>
                <span className="text-slate-600 self-center">:</span>
                <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 text-red-400">{formatNum(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>

          {/* Pełnowymiarowy przycisk akcji */}
          <div className="mt-5 relative z-10">
            <a
              href="tel:426319420"
              className="w-full min-h-[44px] rounded-xl bg-[var(--accent)] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center transition-transform active:scale-[0.99] no-underline"
            >
              Zarezerwuj termin od ręki
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
