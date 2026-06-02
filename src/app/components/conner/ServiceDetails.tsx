import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServiceDetails() {
  return (
    <>
      {/* Serwis Section */}
      {/* Zmniejszone odstępy py-12 na mobile dla lżejszej kompozycji */}
      <section id="serwis" className="py-12 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[1200px] mx-auto px-5">
          {/* gap-8 na mobile, gap-16 na desktopie */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            
            {/* Image - Na mobile wyświetla się PIERWSZE dla kontekstu wizualnego */}
            <div className="w-full md:flex-1 order-1 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljaWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NzMwNDk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Serwis komputerowy"
                // Zaokrąglenie dostosowane do standardów mobile (rounded-2xl)
                className="w-full aspect-video md:aspect-auto object-cover rounded-2xl md:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:flex-1 order-2 md:order-2">
              <span style={{ color: 'var(--accent)' }} className="uppercase text-[10px] md:text-xs font-bold tracking-[2px]">
                Profesjonalny serwis
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mt-1 mb-3 md:mb-4" style={{ color: 'var(--foreground)' }}>
                Serwis Komputerowy
              </h2>
              <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                Nasz wykwalifikowany zespół techników zapewnia kompleksową obsługę serwisową sprzętu komputerowego. Realizujemy naprawy na miejscu u klienta lub w naszym centrum serwisowym w Łodzi.
              </p>
              
              {/* Zagęszczona i bardziej czytelna lista punktowana na smartfonie */}
              <ul className="list-none my-4 md:my-6 space-y-2.5 md:space-y-3">
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Naprawa laptopów, komputerów stacjonarnych i serwerów</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Szybka diagnostyka i usuwanie awarii</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Opieka pogwarancyjna i konserwacja sprzętu</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Konfiguracja i optymalizacja systemów</span>
                </li>
              </ul>
              
              {/* Przycisk CTA: na telefonie zajmuje całą szerokość ekranu (w-full) i jest wyższy (min-h-[48px]) */}
              <a 
                href="tel:426319420" 
                style={{ 
                  backgroundColor: 'var(--accent)',
                  color: 'var(--accent-foreground)'
                }}
                className="w-full md:w-auto text-center px-7 py-3.5 rounded-xl md:rounded-lg no-underline font-semibold inline-flex items-center justify-center min-h-[48px] hover:opacity-90 transition-opacity text-sm md:text-base"
              >
                Umów wizytę serwisową
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wynajem Section */}
      <section id="wynajem" className="py-12 md:py-24" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-[1200px] mx-auto px-5">
          {/* flex-col-reverse na mobile wymusza logiczny układ: najpierw tekst, na końcu zdjęcie */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className="w-full md:flex-1">
              <span style={{ color: 'var(--accent)' }} className="uppercase text-[10px] md:text-xs font-bold tracking-[2px]">
                Elastyczne rozwiązania
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mt-1 mb-3 md:mb-4" style={{ color: 'var(--foreground)' }}>
                Wynajem Sprzętu IT
              </h2>
              <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                Oferujemy wynajem profesjonalnego sprzętu IT i urządzeń biurowych na dogodnych warunkach. Idealne rozwiązanie dla firm, szkół oraz organizatorów wydarzeń i szkoleń.
              </p>
              <ul className="list-none my-4 md:my-6 space-y-2.5 md:space-y-3">
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Wynajem drukarek i kserokopiarek wielofunkcyjnych</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Wynajem laptopów i komputerów</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Pełne wsparcie techniczne w czasie najmu</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm md:text-base font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>Elastyczne okresy wynajmu - krótko i długoterminowe</span>
                </li>
              </ul>
              
              {/* Przycisk CTA dopasowany do kciuka */}
              <a 
                href="#kontakt" 
                className="w-full md:w-auto text-center bg-[#c5a059] text-white px-7 py-3.5 rounded-xl md:rounded-lg no-underline font-semibold inline-flex items-center justify-center min-h-[48px] hover:bg-[#b39050] transition-colors text-sm md:text-base"
              >
                Zapytaj o wynajem
              </a>
            </div>

            {/* Image */}
            <div className="w-full md:flex-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzAyMTk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wynajem sprzętu biurowego"
                className="w-full aspect-video md:aspect-auto object-cover rounded-2xl md:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
