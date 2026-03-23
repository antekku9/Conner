import { CheckCircle, Network, ShieldCheck, Headphones, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Contact } from '../components/conner/Contact';

export default function FirmyPage() {
  const benefits = [
    {
      icon: Network,
      title: 'Infrastruktura IT',
      description: 'Projektowanie, wdrażanie i zarządzanie kompleksową infrastrukturą sieciową.',
    },
    {
      icon: ShieldCheck,
      title: 'Bezpieczeństwo',
      description: 'Ochrona danych firmowych, backup i systemy zabezpieczeń.',
    },
    {
      icon: Headphones,
      title: 'Wsparcie 24/7',
      description: 'Stała pomoc techniczna i szybka reakcja na awarie.',
    },
    {
      icon: TrendingUp,
      title: 'Optymalizacja kosztów',
      description: 'Audyt IT i doradztwo w zakresie oszczędności.',
    },
  ];

  const services = [
    'Dostawy sprzętu komputerowego i biurowego',
    'Wdrażanie systemów IT i oprogramowania',
    'Zarządzanie infrastrukturą sieciową',
    'Opieka serwisowa i wsparcie techniczne',
    'Systemy bezpieczeństwa i monitoring',
    'Rozwiązania chmurowe i backup danych',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
              Dla biznesu
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 mt-2 tracking-tight" style={{ letterSpacing: '-1.5px' }}>
              Kompleksowa Obsługa IT dla Firm
            </h1>
            <p className="text-lg text-[#6b7280] mb-10">
              Zapewniamy pełne wsparcie technologiczne dla małych i dużych przedsiębiorstw. Od dostaw sprzętu, przez wdrożenia systemów, po codzienne zarządzanie infrastrukturą IT.
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
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MzAzMzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Obsługa IT firm"
                className="w-full rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-4">
                Dlaczego firmy wybierają Conner?
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Od 1996 roku wspieramy rozwój przedsiębiorstw w Łodzi i okolicach. Nasi klienci cenią nas za profesjonalizm, rzetelność i kompleksowe podejście do obsługi IT.
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
            <h2 className="text-4xl font-bold mb-4">Nasze korzyści dla biznesu</h2>
            <p className="text-[#6b7280] max-w-[600px] mx-auto">
              Oferujemy kompleksowe rozwiązania dopasowane do specyfiki Twojej firmy
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

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1c20] text-white">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <Users className="w-16 h-16 text-[#c5a059] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Gotowy na współpracę?</h2>
          <p className="text-gray-300 mb-8 max-w-[600px] mx-auto">
            Skontaktuj się z nami i dowiedz się, jak możemy wspierać rozwój Twojej firmy poprzez nowoczesne rozwiązania IT.
          </p>
          <a 
            href="#kontakt" 
            className="bg-[#c5a059] text-white px-8 py-4 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
          >
            Umów bezpłatną konsultację
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}
