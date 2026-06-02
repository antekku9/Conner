import { Wrench, Building2, GraduationCap, Printer, ShoppingCart, Laptop } from 'lucide-react';

export function Services() {
  const services = [
    { icon: Wrench, title: 'Serwis sprzętu' },
    { icon: Building2, title: 'Obsługa firm' },
    { icon: GraduationCap, title: 'Szkoły i urzędy' },
    { icon: Printer, title: 'Wynajem ksero' },
    { icon: ShoppingCart, title: 'Sklep Allegro' },
    { icon: Laptop, title: 'Doradztwo IT' },
  ];

  return (
    <section id="obsluga" className="py-6 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Układ x-kom: Siatka ikonek/kategorii 3x2 na mobile, klasyczny grid na desktopie */}
        <div className="grid grid-cols-3 gap-2.5 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
                className="flex flex-col items-center text-center p-3 rounded-xl border transition-all active:scale-95 cursor-pointer md:flex-row md:text-left md:p-8 md:rounded-lg"
              >
                {/* Okrągłe gniazdo na ikonę */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-2 md:mb-0 md:mr-5 text-[var(--accent)] shrink-0">
                  <Icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                
                <span className="text-[11px] md:text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight tracking-tight break-words w-full md:w-auto">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
