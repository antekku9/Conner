import { CheckCircle, BookOpen, Shield, Wrench, Users, Award, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/conner/Contact';

export default function SzkolyPage() {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Sprzęt edukacyjny',
      description: 'Komputery, tablety i oprogramowanie dostosowane do potrzeb edukacji.',
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo',
      description: 'Systemy zabezpieczeń i kontrola rodzicielska dla uczniów.',
    },
    {
      icon: Wrench,
      title: 'Serwis na miejscu',
      description: 'Szybka pomoc techniczna bez przerywania zajęć.',
    },
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Lata współpracy z placówkami edukacyjnymi.',
    },
  ];

  const services = [
    'Dostawy sprzętu w przetargach publicznych',
    'Wyposażenie sal komputerowych i laboratoriów',
    'Tablice interaktywne i multimedia',
    'Oprogramowanie edukacyjne i licencje',
    'Sieć bezprzewodowa WiFi dla szkół',
    'Stała opieka techniczna i serwis',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1c20] transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] dark:from-[#16181d] dark:to-[#1a1c20] border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
              Dla edukacji
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 mt-2 tracking-tight text-gray-900 dark:text-white" style={{ letterSpacing: '-1.5px' }}>
              Nowoczesne Technologie dla Szkół
            </h1>
            <p className="text-lg text-[#6b7280] dark:text-gray-400 mb-10">
              Wyposażamy sale lekcyjne w profesjonalny sprzęt komputerowy i multimedia. Wspieramy placówki edukacyjne w procesach przetargowych i zapewniamy kompleksową opiekę techniczną.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="#kontakt" 
                className="bg-[#c5a059] text-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors shadow-lg shadow-[#c5a059]/20"
              >
                Zapytaj o ofertę
              </a>
              <a 
                href="tel:426319420" 
                className="border border-[#1a1c20] dark:border-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#1a1c20] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1c20] transition-colors text-[#1a1c20] dark:text-white"
              >
                Zadzwoń: 42 631 94 20
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white dark:bg-[#1a1c20]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-16 flex-wrap">
            {/* Text Content */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Kompleksowe wyposażenie placówek edukacyjnych
              </h2>
              <p className="text-[#6b7280] dark:text-gray-400 leading-relaxed mb-6">
                Rozumiemy specyficzne potrzeby szkół i przedszkoli. Oferujemy nie tylko sprzęt, ale kompleksowe rozwiązania - od konsultacji, przez dostawę, instalację, aż po stałą opiekę serwisową.
              </p>
              <ul className="list-none space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2.5 font-medium text-gray-800 dark:text-gray-200">
                    <CheckCircle className="text-[#c5a059] w-5 h-5 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-1 min-w-[300px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGNvbXB1dGVyc3xlbnwxfHx8fDE3NzMwNDk3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Szkoły i edukacja"
                className="w-full rounded-[20px] shadow-xl dark:shadow-2xl dark:shadow-black/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#f9fafb] dark:bg-[#16181d]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Dlaczego szkoły nam ufają?</h2>
            <p className="text-[#6b7280] dark:text-gray-400 max-w-[600px] mx-auto">
              Kompleksowe wsparcie dla placówek oświatowych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#24272e] p-8 rounded-2xl border border-[#f0f0f0] dark:border-gray-800 hover:shadow-xl transition-all group"
                >
                  <Icon className="text-[#c5a059] mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-[#6b7280] dark:text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Przetargi Section */}
      <section className="py-20 bg-white dark:bg-[#1a1c20]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] dark:from-[#24272e] dark:to-[#1a1c20] text-white p-12 rounded-3xl border border-gray-800 shadow-2xl">
            <div className="max-w-[700px] mx-auto text-center">
              <GraduationCap className="w-16 h-16 text-[#c5a059] mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-white">Doświadczenie w przetargach publicznych</h2>
              <p className="text-gray-300 mb-8">
                Realizujemy dostawy w procedurach zamówień publicznych. Znamy wymagania formalne i zapewniamy terminową realizację oraz pełną dokumentację.
              </p>
              <ul className="text-left inline-block space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#c5a059] w-5 h-5 flex-shrink-0" />
                  Pomoc w przygotowaniu specyfikacji
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#c5a059] w-5 h-5 flex-shrink-0" />
                  Terminowa realizacja dostaw
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#c5a059] w-5 h-5 flex-shrink-0" />
                  Pełna dokumentacja i certyfikaty
                </li>
              </ul>
              <div>
                <a 
                  href="#kontakt" 
                  className="bg-[#c5a059] text-white px-8 py-4 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
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
