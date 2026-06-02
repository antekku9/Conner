import { Wrench, Building2, GraduationCap, Printer, ShoppingCart, Laptop } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Serwis sprzętu',
      fullTitle: 'Serwis Komputerowy',
      description: 'Profesjonalne naprawy komputerów, laptopów i serwerów. Szybka diagnoza, naprawa sprzętu oraz opieka pogwarancyjna. Obsługa w siedzibie klienta lub w naszym serwisie.',
      featured: true,
    },
    {
      icon: Building2,
      title: 'Obsługa firm',
      fullTitle: 'Obsługa Firm',
      description: 'Kompleksowa obsługa IT dla małych i dużych przedsiębiorstw. Dostawy sprzętu, wdrożenia systemów, zarządzanie infrastrukturą IT oraz wsparcie techniczne.',
      featured: false,
    },
    {
      icon: GraduationCap,
      title: 'Szkoły i urzędy',
      fullTitle: 'Szkoły i Instytucje Publiczne',
      description: 'Specjalistyczna obsługa placówek edukacyjnych i instytucji państwowych. Dostawy sprzętu w przetargach publicznych, instalacja i pełne wdrożenie.',
      featured: false,
    },
    {
      icon: Printer,
      title: 'Wynajem ksero',
      fullTitle: 'Wynajem Urządzeń',
      description: 'Wynajem drukarek, kserokopiarek, laptopów i innego sprzętu biurowego. Elastyczne warunki najmu z pełnym wsparciem technicznym i serwisem.',
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: 'Sklep Allegro',
      fullTitle: 'Sprzedaż Sprzętu',
      description: 'Szeroki asortyment sprzętu komputerowego, RTV i AGD. Sprawdź naszą ofertę na Allegro lub skontaktuj się bezpośrednio w sprawie zamówień hurtowych.',
      featured: false,
    },
    {
      icon: Laptop,
      title: 'Doradztwo IT',
      fullTitle: 'Doradztwo IT',
      description: 'Pomożemy dobrać optymalne rozwiązania technologiczne dla Twojej firmy. Audyt IT, planowanie modernizacji i optymalizacja kosztów.',
      featured: false,
    },
  ];

  return (
    <section id="obsluga" className="py-12 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-10 md:mb-16">
          <span style={{ color: 'var(--accent)' }} className="uppercase text-[10px] md:text-xs font-bold tracking-[2px]">
            Nasze usługi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-1 md:mt-2" style={{ color: 'var(--foreground)' }}>
            Kompleksowa Obsługa IT
          </h2>
          <p style={{ color: 'var(--text-muted)' }} className="mt-3 text-sm md:text-base max-w-[600px] mx-auto">
            Ponad 28 lat doświadczenia w branży IT. Zaufało nam wiele firm, szkół i instytucji w Łodzi.
          </p>
        </div>
        
        {/* ====================================================================== */}
        {/* 1. WIDOK MOBILNY */}
        {/* ====================================================================== */}
        <div className="grid grid-cols-3 gap-2.5 md:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`mobile-${index}`}
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
                className="flex flex-col items-center text-center p-3 rounded-xl border transition-all active:scale-95 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-2 text-[var(--accent)] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight tracking-tight break-words w-full">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* ====================================================================== */}
        {/* 2. WIDOK DESKTOP */}
        {/* ====================================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`desktop-${index}`}
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
                className="p-8 rounded-lg border hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div 
                  style={{ 
                    backgroundColor: 'var(--bg-light)',
                    color: 'var(--accent)'
                  }}
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all group-hover:scale-105"
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                  {service.fullTitle}
                </h3>
                <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServiceDetails() {
  return (
    <>
      {/* Serwis Section */}
      <section id="serwis" className="py-12 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            
            {/* Image */}
            <div className="w-full md:flex-1 order-1 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljaWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NzMwNDk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Serwis komputerowy"
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
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya2luZ3xlbnwxfHx8fDE3NzMwNDk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
