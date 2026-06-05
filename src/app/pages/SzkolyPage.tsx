import { useEffect } from 'react';
import { CheckCircle, BookOpen, Shield, Wrench, Award, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/conner/Contact';

export default function SzkolyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: BookOpen,
      title: 'Sprzęt edukacyjny',
      description: 'Komputery, tablety i oprogramowanie dostosowane do potrzeb edukacji.',
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo sieci',
      description: 'Ochrona danych RODO oraz kontrola dostępowa dla uczniów.',
    },
    {
      icon: Wrench,
      title: 'Serwis na miejscu',
      description: 'Błyskawiczna pomoc techniczna bez przerywania zajęć.',
    },
    {
      icon: Award,
      title: '28 lat doświadczenia',
      description: 'Stabilna współpraca z dziesiątkami placówek oświatowych.',
    },
  ];

  const services = [
    'Dostawy sprzętu komputerowego w przetargach publicznych (zgodnie z SWZ)',
    'Kompleksowe wyposażenie sal informatycznych, językowych i laboratoriów',
    'Nowoczesne monitory, tablice interaktywne oraz multimedia szkolne',
    'Legalne oprogramowanie edukacyjne, licencje Microsoft i antywirusy',
    'Projektowanie i wdrożenia bezpiecznych sieci bezprzewodowych Wi-Fi',
    'Odroczone terminy płatności dla placówek oświatowych (faktura terminowa)',
    'Stała opieka techniczna, konserwacje układów oraz lokalny serwis w Łodzi',
  ];

  return (
    <div className="min-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] dark:from-[#16181d] dark:to-[#1a1c20] border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
              Dla edukacji
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-5 mt-2 tracking-tight text-gray-900 dark:text-white" style={{ letterSpacing: '-1.5px' }}>
              Nowoczesne Technologie dla Szkół
            </h1>
            <p className="text-sm md:text-lg text-[#6b7280] dark:text-gray-400 mb-8 md:mb-10 leading-relaxed">
              Wyposażamy sale lekcyjne w profesjonalny sprzęt komputerowy i systemy multimedialne. Kompleksowo wspieramy placówki edukacyjne w procesach zamówień publicznych oraz zapewniamy stałą opiekę techniczną na terenie Łodzi.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="#kontakt" 
                className="bg-[#c5a059] text-white px-7 py-3.5 rounded-xl no-underline font-bold inline-block hover:bg-[#b39050] transition-colors shadow-lg shadow-[#c5a059]/10"
              >
                Zapytaj o ofertę
              </a>
              <a 
                href="tel:426319420" 
                className="border border-[#1a1c20] dark:border-white px-7 py-3.5 rounded-xl no-underline font-bold inline-block hover:bg-[#1a1c20] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1c20] transition-colors text-[#1a1c20] dark:text-white"
              >
                Zadzwoń
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-12 md:py-24 bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-8 lg:gap-16 flex-wrap">
            
            {/* Text Content */}
            <div className="flex-1 min-w-[300px] order-1">
              <h2 className="text-2xl md:text-4xl font-black mb-5 text-gray-900 dark:text-white tracking-tight leading-tight">
                Kompleksowe wyposażenie placówek oświatowych
              </h2>
              <p className="text-sm text-[#6b7280] dark:text-gray-400 leading-relaxed mb-6">
                Doskonale rozumiemy specyfikę i rygorystyczne wymagania szkół, przedszkoli oraz uczelni wyższych. Oferujemy pełne wdrożenia technologiczne – od bezpłatnych konsultacji i audytów, przez bezpieczną dostawę, aż po konfigurację na miejscu i długofalowe wsparcie serwisowe.
              </p>
              <ul className="list-none space-y-3.5">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                    <CheckCircle className="text-[#c5a059] w-4.5 h-4.5 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image (Zmniejszone proporcje aspect-ratio na mobile) */}
            <div className="w-full flex-1 min-w-[300px] order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGNvbXB1dGVyc3xlbnwxfHx8fDE3NzMwNDk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nowoczesna sala komputerowa wyposażona przez Conner"
                className="w-full aspect-[16/10] md:aspect-auto object-cover rounded-2xl md:rounded-[20px] shadow-lg dark:shadow-2xl dark:shadow-black/40 border border-slate-100 dark:border-slate-800/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID (Przebudowany na 2 kolumny na mobile) */}
      <section className="py-12 md:py-24 bg-[#f9fafb] dark:bg-[#16181d] border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-2 text-gray-900 dark:text-white tracking-tight">
              Dlaczego szkoły nam ufają?
            </h2>
            <p className="text-xs md:text-sm text-[#6b7280] dark:text-gray-400 max-w-[600px] mx-auto font-medium">
              Gwarancja rzetelności, bezpieczeństwa prawnego i najwyższej stabilności technicznej
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#24272e] p-4 md:p-8 rounded-xl md:rounded-2xl border border-[#f0f0f0] dark:border-gray-800/80 hover:shadow-xl transition-all duration-300 group flex flex-col justify-start"
                >
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center mb-2.5 md:mb-4 shrink-0 border border-slate-100 dark:border-slate-800/40">
                    <Icon className="text-[#c5a059] w-4.5 h-4.5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-900 dark:text-white tracking-tight leading-tight">{benefit.title}</h3>
                  <p className="text-[#6b7280] dark:text-gray-400 leading-relaxed text-[11px] md:text-xs font-medium line-clamp-3 md:line-clamp-none">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRZETARGI SECTION */}
      <section className="py-12 md:py-24 bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] dark:from-[#24272e] dark:to-[#1a1c20] text-white p-6 md:p-14 rounded-2xl md:rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden text-center">
            <div className="max-w-[700px] mx-auto relative z-10">
              <GraduationCap className="w-12 h-12 md:w-14 md:h-14 text-[#c5a059] mx-auto mb-4" />
              <h2 className="text-xl md:text-4xl font-black mb-3 text-white tracking-tight">
                Zamówienia publiczne
              </h2>
              <p className="text-xs md:text-sm text-gray-300 mb-6 md:mb-8 leading-relaxed font-medium">
                Bezpiecznie realizujemy dostawy sprzętu w procedurach przetargowych. Doskonale znamy wymagania formalne, rygorystycznie przestrzegamy terminów realizacji oraz dostarczamy kompletną dokumentację.
              </p>
              <div className="flex justify-center mb-6 md:mb-8">
                <ul className="text-left inline-block space-y-2 text-xs md:text-sm font-semibold text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="text-[#c5a059] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    Pomoc przy przygotowywaniu specyfikacji
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="text-[#c5a059] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    Gwarantowane, terminowe dostawy urządzeń
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="text-[#c5a059] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    Komplet certyfikatów i atestów CE
                  </li>
                </ul>
              </div>
              <div>
                <a 
                  href="#kontakt" 
                  className="bg-[#c5a059] text-white px-6 py-3.5 rounded-xl no-underline font-bold inline-block hover:bg-[#b39050] transition-colors shadow-lg"
                >
                  Skontaktuj się z nami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
