import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Printers() {
  const features = [
    'Sprzedaż i dzierżawa urządzeń wielofunkcyjnych',
    'Autoryzowany serwis i materiały eksploatacyjne',
    'Systemy zarządzania drukiem (oszczędności do 30%)',
    'Doradztwo w doborze urządzeń do potrzeb firmy',
  ];

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center gap-16 flex-wrap">
          {/* Text Content */}
          <div className="flex-1 min-w-[300px]">
            <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
              Urządzenia drukujące
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: 'var(--foreground)' }}>
              Drukarki i Kserokopiarki dla Firm
            </h2>
            <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed mb-6">
              Dostarczamy i serwisujemy profesjonalne urządzenia drukujące dostosowane do różnych obciążeń i wymagań. Od małych drukarek biurowych po wielofunkcyjne systemy dla dużych organizacji.
            </p>
            <ul className="list-none my-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2.5 font-medium">
                  <CheckCircle className="text-[#c5a059] w-5 h-5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <a 
              href="tel:426319420" 
              className="bg-[#c5a059] text-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
            >
              Dobierz urządzenie
            </a>
          </div>

         
{/* Image Test */}
<div className="flex-1 min-w-[300px]">
  <img 
    src="/Conner/sharp-printer.webp" 
    alt="Test zdjęcia"
    className="w-full h-auto bg-red-500" 
    style={{ minHeight: '100px', display: 'block' }}
  />
</div>
          </div>
        </div>
    </section>
  );
}
