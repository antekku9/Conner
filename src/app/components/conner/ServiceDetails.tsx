import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServiceDetails() {
  return (
    <>
      {/* Serwis Section */}
      <section id="serwis" className="py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-16 flex-wrap">
            {/* Image */}
            <div className="flex-1 min-w-[300px] order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljaWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NzMwNDk3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Serwis komputerowy"
                className="w-full rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-[300px] order-1 md:order-2">
              <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
                Profesjonalny serwis
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: 'var(--foreground)' }}>
                Serwis Komputerowy
              </h2>
              <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed mb-6">
                Nasz wykwalifikowany zespół techników zapewnia kompleksową obsługę serwisową sprzętu komputerowego. Realizujemy naprawy na miejscu u klienta lub w naszym centrum serwisowym w Łodzi.
              </p>
              <ul className="list-none my-6 space-y-3">
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Naprawa laptopów, komputerów stacjonarnych i serwerów
                </li>
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Szybka diagnostyka i usuwanie awarii
                </li>
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Opieka pogwarancyjna i konserwacja sprzętu
                </li>
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Konfiguracja i optymalizacja systemów
                </li>
              </ul>
              <a 
                href="tel:426319420" 
                style={{ 
                  backgroundColor: 'var(--accent)',
                  color: 'var(--accent-foreground)'
                }}
                className="px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:opacity-90 transition-opacity"
              >
                Umów wizytę serwisową
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wynajem Section */}
      <section id="wynajem" className="py-24" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-16 flex-wrap">
            {/* Text Content */}
            <div className="flex-1 min-w-[300px]">
              <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
                Elastyczne rozwiązania
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: 'var(--foreground)' }}>
                Wynajem Sprzętu IT i Urządzeń Biurowych
              </h2>
              <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed mb-6">
                Oferujemy wynajem profesjonalnego sprzętu IT i urządzeń biurowych na dogodnych warunkach. Idealne rozwiązanie dla firm, szkół oraz organizatorów wydarzeń i szkoleń.
              </p>
              <ul className="list-none my-6 space-y-3">
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Wynajem drukarek i kserokopiarek wielofunkcyjnych
                </li>
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Wynajem laptopów i komputerów
                </li>
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Pełne wsparcie techniczne w czasie najmu
                </li>
                <li className="flex items-center gap-2.5 font-medium" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0" />
                  Elastyczne okresy wynajmu - krótko i długoterminowe
                </li>
              </ul>
              <a 
                href="#kontakt" 
                className="bg-[#c5a059] text-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
              >
                Zapytaj o wynajem
              </a>
            </div>

            {/* Image */}
            <div className="flex-1 min-w-[300px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzAyMTk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wynajem sprzętu biurowego"
                className="w-full rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}