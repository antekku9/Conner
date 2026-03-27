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
      description: 'Szeroki asortyment sprzętu komputerowego, RTV i AGD. Sprawdź naszą ofertę na Allegro lub skontaktuj się bezpośrednio w sprawie zamówień hurtowych.',
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
    <section id="obsluga" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
            Nasze usługi
          </span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--foreground)' }}>Kompleksowa Obsługa IT</h2>
          <p style={{ color: 'var(--text-muted)' }} className="mt-4 max-w-[600px] mx-auto">
            Ponad 28 lat doświadczenia w branży IT. Zaufało nam wiele firm, szkół i instytucji w Łodzi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
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
                  {service.title}
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