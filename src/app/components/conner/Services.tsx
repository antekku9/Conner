import { Wrench, Building2, GraduationCap, Printer, ShoppingCart, Laptop } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Serwis Komputerowy',
      description: 'Profesjonalne naprawy komputerów, laptopów i serwerów. Szybka diagnoza, naprawa sprzętu oraz opieka pogwarancyjna. Obsługa w siedzibie klienta lub w naszym serwisie.',
      featured: true,
    },
    {
      icon: Building2,
      title: 'Obsługa Firm',
      description: 'Kompleksowa obsługa IT dla małych i dużych przedsiębiorstw. Dostawy sprzętu, wdrożenia systemów, zarządzanie infrastrukturą IT oraz wsparcie techniczne.',
      featured: false,
    },
    {
      icon: GraduationCap,
      title: 'Szkoły i Instytucje Publiczne',
      description: 'Specjalistyczna obsługa placówek edukacyjnych i instytucji państwowych. Dostawy sprzętu w przetargach publicznych, instalacja i pełne wdrożenie.',
      featured: false,
    },
    {
      icon: Printer,
      title: 'Wynajem Urządzeń',
      description: 'Wynajem drukarek, kserokopiarek, laptopów i innego sprzętu biurowego. Elastyczne warunki najmu z pełnym wsparciem technicznym i serwisem.',
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: 'Sprzedaż Sprzętu',
      description: 'Szeroki asorytment sprzętu komputerowego, RTV i AGD. Sprawdź naszą ofertę na Allegro lub skontaktuj się bezpośrednio w sprawie zamówień hurtowych.',
      featured: false,
    },
    {
      icon: Laptop,
      title: 'Doradztwo IT',
      description: 'Pomożemy dobrać optymalne rozwiązania technologiczne dla Twojej firmy. Audyt IT, planowanie modernizacji i optymalizacja kosztów.',
      featured: false,
    },
  ];

  return (
    // Dopasowano padding na mobile (py-12 zamiast py-20)
    <section id="obsluga" className="py-12 md:py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
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
        
        {/* Na mobile: horyzontalna lista palcem (snap scroll). Na desktopie: klasyczny grid */}
        <div className="flex overflow-x-auto gap-4 pb-6 px-1 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-x-visible md:pb-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
                // w-[85%] shrink-0 snap-center - sprawia, że karta na telefonie wygląda jak w natywnej aplikacji
                className="w-[85%] shrink-0 snap-center p-6 md:p-8 rounded-2xl md:rounded-lg border hover:shadow-xl transition-all duration-300 group cursor-pointer md:w-full"
              >
                <div 
                  style={{ 
                    backgroundColor: service.featured ? 'var(--accent)' : 'var(--bg-light)',
                    color: service.featured ? 'var(--accent-foreground)' : 'var(--accent)'
                  }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-lg flex items-center justify-center mb-4 md:mb-5 transition-all"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: 'var(--foreground)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed text-xs md:text-sm line-clamp-4 md:line-clamp-none">
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
