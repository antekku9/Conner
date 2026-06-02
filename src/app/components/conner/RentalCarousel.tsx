import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface RentalDevice {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  specs?: string[];
}

const rentalDevices: RentalDevice[] = [
  {
    id: 2,
    name: 'Brother HL-L9310CDW',
    description: 'Profesjonalna kolorowa drukarka A4',
    imageUrl: '/HL-L9310CDW.webp',
    specs: ['Druk kolorowy A4', 'Duplex automatyczny', 'Do 31 str/min']
  },
  {
    id: 3,
    name: 'Brother MFC-L5710DW',
    description: 'Drukarka laserowa dla wymagających użytkowników',
    imageUrl: '/MFC-L5710DW.webp',
    specs: ['Druk A4 mono', 'Sieć Ethernet', 'Do 40 str/min']
  },
  {
    id: 4,
    name: 'Brother MFC-L6710DW',
    description: 'Wydajne urządzenie wielofunkcyjne do biura',
    imageUrl: '/MFC-L6710DW.webp',
    specs: ['Druk A4 mono', 'Duplex do 24 str/min', 'Do 50 str/min']
  },
  {
    id: 5,
    name: 'Brother MFC-L8900CDW',
    description: 'Niezawodne rozwiązanie dla profesjonalistów',
    imageUrl: '/MFC-L8900CDW.webp',
    specs: ['Urządzenie wielofunkcyjne', 'Druk już po 15 sekundach', 'Do 31 str/min']
  },
  {
    id: 6,
    name: 'Sharp MX-B356W',
    description: 'Profesjonalne urządzenie dla firm oraz instytucji',
    imageUrl: '/MX-B356W.webp',
    specs: ['Panel dotykowy LCD 7″', 'Do 35 str/min', 'Maksymalne obciążenie 100 000 str/m-c']
  }
];

export function RentalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, rentalDevices.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        
        <div className="text-center mb-12">
          <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
            Do wynajęcia
          </span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--foreground)' }}>Urządzenia Dostępne do Wynajmu</h2>
          <p style={{ color: 'var(--text-muted)' }} className="mt-4 max-w-[600px] mx-auto">
            Profesjonalny sprzęt IT na wyciągnięcie ręki. Elastyczne warunki najmu i pełne wsparcie techniczne.
          </p>
        </div>

        <div className="relative md:px-12 px-0" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          
          {/* Strzałki ukryte na mobile dla lepszego UX (jest paginacja niżej), widoczne od md */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity disabled:opacity-50 border bg-[var(--card)] border-[var(--border)]"
          >
            <ChevronLeft style={{ color: 'var(--foreground)' }} className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity disabled:opacity-50 border bg-[var(--card)] border-[var(--border)]"
          >
            <ChevronRight style={{ color: 'var(--foreground)' }} className="w-6 h-6" />
          </button>

          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                gap: '24px' // Stały gap zarządzany przez flexbox
              }}
            >
              {rentalDevices.map((device) => (
                <div 
                  key={device.id}
                  style={{ 
                    // Dokładne wyliczenie szerokości uwzględniające odstępy flexa
                    width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)`,
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)'
                  }}
                  className="flex-shrink-0 rounded-xl shadow-lg overflow-hidden border w-full"
                >
                  <div className="relative h-64 overflow-hidden bg-white p-4 flex items-center justify-center">
                    <ImageWithFallback
                      src={device.imageUrl}
                      alt={device.name}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{device.name}</h3>
                    <p style={{ color: 'var(--text-muted)' }} className="text-sm mb-4">{device.description}</p>
                    
                    {device.specs && (
                      <ul className="space-y-1 mb-4 p-0 list-none">
                        {device.specs.map((spec, idx) => (
                          <li key={idx} style={{ color: 'var(--text-muted)' }} className="text-xs flex items-center gap-2">
                            <span style={{ color: 'var(--accent)' }}>✓</span> {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <a href="#kontakt" className="inline-block border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--accent)] hover:text-white transition-all no-underline">
                      Zapytaj o wynajem
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kropeczki na dole */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-[#c5a059] w-8' : 'bg-[#e5e7eb]'}`}
            />
          ))}
        </div>

        {/* Sekcja kontaktowa na dole sekcji (Poprawiony Mail i Telefon pod oba motywy) */}
        <div className="text-center mt-12">
          <p style={{ color: 'var(--text-muted)' }} className="mb-4">Zainteresowany wynajmem? Skontaktuj się z nami!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="tel:426319420" 
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
              className="border px-7 py-3.5 rounded-lg font-semibold hover:opacity-80 transition-opacity no-underline shadow-sm"
            >
              📞 42 631 94 20
            </a>
            <a 
              href="mailto:sklep@conner.pl" 
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
              className="border-2 px-7 py-3.5 rounded-lg font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors no-underline shadow-sm"
            >
              ✉️ sklep@conner.pl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentalCarousel;
