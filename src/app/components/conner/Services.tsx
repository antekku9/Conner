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
    <section id="obsluga" className="py-12 md:py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Układ nagłówka - responsywne marginesy */}
        <div className="text-center mb-8 md:mb-12">
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
        
        {/* 1. WIDOK MOBILNY (A'la x-kom: 3 kolumny, ikona na górze, bez opisu) */}
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

        {/* 2. WIDOK DESKTOP (Przywrócony oryginalny, szeroki profesjonalny grid z opisami) */}
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
                    backgroundColor: service.featured ? 'var(--accent)' : 'var(--bg-light)',
                    color: service.featured ? 'var(--accent-foreground)' : 'var(--accent)'
                  }}
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all"
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
