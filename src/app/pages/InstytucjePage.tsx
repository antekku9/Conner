import { CheckCircle, Building2, FileCheck, Clock, ShieldCheck, Network, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/conner/Contact';

export default function InstytucjePage() {
  const benefits = [
    {
      icon: FileCheck,
      title: 'Zamówienia publiczne',
      description: 'Pełne wsparcie w procesie przetargowym i realizacji dostaw.',
    },
    {
      icon: Clock,
      title: 'Terminowość',
      description: 'Dotrzymujemy terminów i zapewniamy pełną dokumentację.',
    },
    {
      icon: ShieldCheck,
      title: 'Bezpieczeństwo',
      description: 'Rozwiązania spełniające wymogi instytucji publicznych.',
    },
    {
      icon: Network,
      title: 'Infrastruktura',
      description: 'Kompleksowe wdrożenia i zarządzanie sieciami IT.',
    },
  ];

  const services = [
    'Dostawy sprzętu w trybie zamówień publicznych',
    'Wdrażanie systemów informatycznych',
    'Infrastruktura sieciowa i serwerownie',
    'Systemy bezpieczeństwa i monitoring',
    'Elektroniczny obieg dokumentów',
    'Wsparcie techniczne i serwis',
  ];

  const clients = [
    'Urzędy miast i gmin',
    'Starostwa powiatowe',
    'Instytucje rządowe',
    'Zakłady budżetowe',
    'Jednostki służby zdrowia',
    'Ośrodki pomocy społecznej',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
              Dla administracji
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 mt-2 tracking-tight" style={{ letterSpacing: '-1.5px' }}>
              Obsługa IT Instytucji Publicznych
            </h1>
            <p className="text-lg text-[#6b7280] mb-10">
              Wspieramy instytucje państwowe w modernizacji infrastruktury IT. Posiadamy doświadczenie w realizacji dostaw w trybie zamówień publicznych oraz zapewniamy kompleksową opiekę techniczną.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="#kontakt" 
                className="bg-[#c5a059] text-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
              >
                Zapytaj o ofertę
              </a>
              <a 
                href="tel:426319420" 
                className="border border-[#1a1c20] px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#1a1c20] hover:text-white transition-colors text-[#1a1c20]"
              >
                Zadzwoń: 42 631 94 20
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-16 flex-wrap">
            {/* Image */}
            <div className="flex-1 min-w-[300px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763917801937-d7d67b6872eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwdWJsaWMlMjBpbnN0aXR1dGlvbnxlbnwxfHx8fDE3NzMwNDk3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Instytucje publiczne"
                className="w-full rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-4">
                Zaufany partner sektora publicznego
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Od lat współpracujemy z instytucjami publicznymi w Łodzi i regionie. Rozumiemy specyfikę zamówień publicznych i wymagania stawiane dostawcom dla administracji państwowej.
              </p>
              <ul className="list-none space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2.5 font-medium">
                    <CheckCircle className="text-[#c5a059] w-5 h-5 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nasze kompetencje</h2>
            <p className="text-[#6b7280] max-w-[600px] mx-auto">
              Profesjonalna obsługa zgodna z wymogami sektora publicznego
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-[#f0f0f0] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all"
                >
                  <Icon className="text-[#c5a059] mb-4 w-10 h-10" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Obsługujemy różne typy instytucji</h2>
            <p className="text-[#6b7280] max-w-[700px] mx-auto">
              Nasze doświadczenie obejmuje współpracę z wieloma typami podmiotów sektora publicznego
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] p-6 rounded-xl border border-[#eee] flex items-center gap-3"
              >
                <Building2 className="text-[#c5a059] w-8 h-8 flex-shrink-0" />
                <span className="font-semibold">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1c20] text-white">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <Users className="w-16 h-16 text-[#c5a059] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Rozpocznij współpracę</h2>
          <p className="text-gray-300 mb-8 max-w-[600px] mx-auto">
            Skontaktuj się z nami, aby omówić potrzeby Twojej instytucji. Przygotujemy ofertę dopasowaną do specyficznych wymagań.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#kontakt" 
              className="bg-[#c5a059] text-white px-8 py-4 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
            >
              Wyślij zapytanie
            </a>
            <a 
              href="tel:426319420" 
              className="border border-white px-8 py-4 rounded-lg no-underline font-semibold inline-block hover:bg-white hover:text-[#1a1c20] transition-colors text-white"
            >
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
