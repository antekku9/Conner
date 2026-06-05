import { useEffect } from 'react';
import { CheckCircle, Building2, FileCheck, Clock, ShieldCheck, Network, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/conner/Contact';

export default function InstytucjePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: FileCheck,
      title: 'Zamówienia publiczne',
      description: 'Pełne wsparcie merytoryczne w procesie przetargowym i dostawach.',
    },
    {
      icon: Clock,
      title: 'Terminowość i rzetelność',
      description: 'Dotrzymujemy terminów i zapewniamy dokumentację powykonawczą.',
    },
    {
      icon: ShieldCheck,
      title: 'Bezpieczeństwo danych',
      description: 'Wdrożenia i audyty zgodne z wymogami KRI oraz RODO.',
    },
    {
      icon: Network,
      title: 'Stabilna infrastruktura',
      description: 'Projektowanie, budowa i całodobowe zarządzanie sieciami IT.',
    },
  ];

  const services = [
    'Dostawy sprzętu komputerowego w trybie zamówień publicznych (zgodnie z SWZ)',
    'Projektowanie i budowa certyfikowanych sieci LAN/WLAN (Ubiquiti, TP-Link)',
    'Konfiguracja bezpiecznych serwerowni, systemów NAS oraz szaf RACK',
    'Wdrażanie zaawansowanych systemów bezpieczeństwa i firewalli sprzętowych',
    'Wdrożenia oprogramowania biurowego oraz licencji wolumenowych',
    'Profesjonalny audyt infrastruktury, plany ciągłości działania i serwis',
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] dark:from-[#16181d] dark:to-[#1a1c20] border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
              Dla administracji
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-5 mt-2 tracking-tight text-gray-900 dark:text-white" style={{ letterSpacing: '-1.5px' }}>
              Obsługa IT Instytucji Publicznych
            </h1>
            <p className="text-sm md:text-lg text-[#6b7280] dark:text-gray-400 mb-8 md:mb-10 leading-relaxed">
              Skutecznie wspieramy instytucje państwowe i urzędy w modernizacji infrastruktury IT. Posiadamy ponad 28 lat doświadczenia w realizacji dostaw w trybie zamówień publicznych oraz zapewniamy całodobową opiekę techniczną.
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
            
            {/* Image (Zmniejszone proporcje aspect-ratio na mobile) */}
            <div className="w-full flex-1 min-w-[300px] order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763917801937-d7d67b6872eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwdWJsaWMlMjBpbnN0aXR1dGlvbnxlbnwxfHx8fDE3NzMwNDk3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Administracja i instytucje publiczne obsługiwane przez Conner"
                className="w-full aspect-[16/10] md:aspect-auto object-cover rounded-2xl md:rounded-[20px] shadow-lg dark:shadow-2xl dark:shadow-black/40 border border-slate-100 dark:border-slate-800/60"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-[300px] order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-black mb-5 text-gray-900 dark:text-white tracking-tight leading-tight">
                Zaufany partner sektora publicznego
              </h2>
              <p className="text-sm text-[#6b7280] dark:text-gray-400 leading-relaxed mb-6">
                Od prawie trzech dekad ściśle współpracujemy z jednostkami administracji publicznej w Łodzi i całym województwie łódzkim. Doskonale rozumiemy rygorystyczne procedury zamówień publicznych oraz wysokie standardy cyberbezpieczeństwa stawiane dostawcom technologii.
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
          </div>
        </div>
      </section>

      {/* BENEFITS GRID (Przebudowany na 2 kolumny na mobile) */}
      <section className="py-12 md:py-24 bg-[#f9fafb] dark:bg-[#16181d] border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-2 text-gray-900 dark:text-white tracking-tight">
              Nasze kompetencje
            </h2>
            <p className="text-xs md:text-sm text-[#6b7280] dark:text-gray-400 max-w-[600px] mx-auto font-medium">
              Profesjonalna obsługa inżynieryjna w pełni zgodna ze specyfiką jednostek budżetowych
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

      {/* CLIENTS SECTION */}
      <section className="py-12 md:py-24 bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-2 text-gray-900 dark:text-white tracking-tight">
              Obsługujemy różne typy instytucji
            </h2>
            <p className="text-xs md:text-sm text-[#6b7280] dark:text-gray-400 max-w-[700px] mx-auto font-medium">
              Nasze bogate portfolio obejmuje wieloletnie wdrożenia dla zróżnicowanych podmiotów sektora publicznego
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] dark:bg-[#24272e] p-4 md:p-5 rounded-xl border border-[#eee] dark:border-gray-800/60 flex items-center gap-3 md:gap-4 hover:border-[#c5a059] transition-all duration-200"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-24 bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] dark:from-[#24272e] dark:to-[#1a1c20] text-white p-6 md:p-14 rounded-2xl md:rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden text-center">
            <div className="max-w-[650px] mx-auto relative z-10">
              <Users className="w-12 h-12 md:w-14 md:h-14 text-[#c5a059] mx-auto mb-4" />
              <h2 className="text-xl md:text-4xl font-black mb-3 tracking-tight">Rozpocznij współpracę</h2>
              <p className="text-xs md:text-sm text-gray-300 mb-6 md:mb-8 leading-relaxed font-medium">
                Skontaktuj się z naszym działem obsługi sektora publicznego, aby omówić wymagania techniczne lub formalne Twojej jednostki.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a 
                  href="#kontakt" 
                  className="bg-[#c5a059] text-white px-6 py-3.5 rounded-xl no-underline font-bold inline-block hover:bg-[#b39050] transition-colors shadow-lg shadow-[#c5a059]/10"
                >
                  Wyślij zapytanie
                </a>
                <a 
                  href="tel:426319420" 
                  className="border border-white/30 hover:border-white text-white px-6 py-3.5 rounded-xl no-underline font-bold inline-block hover:bg-white hover:text-[#1a1c20] transition-all"
                >
                  Zadzwoń teraz
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
