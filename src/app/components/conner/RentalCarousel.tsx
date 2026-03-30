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
    id: 1,
    name: 'Brother HL-L8260CDW',
    description: 'Profesjonalna kolorowa drukarka wielofunkcyjna A3',
    image: '/Conner/Wynajem/Brother HL-L8260CDW.jpg',
    specs: ['Druk kolorowy A4', 'Automatyczne dwustronne drukowanie', 'Do 31 str/min']
  },
  {
    id: 2,
    name: 'Brother HL-L9310CDW',
    description: 'Wydajne urządzenie wielofunkcyjne dla dużych biur',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk A3 mono', 'Duplex automatyczny', 'Do 55 str/min']
  },
  {
    id: 3,
    name: 'Brother MFC-L5710DW',
    description: 'Drukarka laserowa dla wymagających użytkowników',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk A4 mono', 'Sieć Ethernet', 'Do 40 str/min']
  },
  {
    id: 4,
    name: 'Brother MFC-L6710DW',
    description: 'Biznesowy laptop z pełnym wyposażeniem',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    specs: ['Druk A3 mono', 'Duplex automatyczny', 'Do 55 str/min']
  },
  {
    id: 5,
    name: 'Brother MFC-L8900CDW',
    description: 'Niezawodne rozwiązanie dla profesjonalistów',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    specs: ['Druk A3 mono', 'Duplex automatyczny', 'Do 55 str/min']
  },
  {
    id: 6,
    name: 'Projektor multimedialny',
    description: 'Full HD projektor do prezentacji i szkoleń',
    imageUrl: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?w=800',
    specs: ['Full HD 1920x1080', '3500 ANSI lumenów', 'HDMI, VGA, USB']
  }
];

export function RentalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
            Do wynajęcia
          </span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--foreground)' }}>Urządzenia Dostępne do Wynajmu</h2>
          <p style={{ color: 'var(--text-muted)' }} className="mt-4 max-w-[600px] mx-auto">
            Profesjonalny sprzęt IT na wyciągnięcie ręki. Elastyczne warunki najmu i pełne wsparcie techniczne.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{ 
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed border"
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <ChevronLeft style={{ color: 'var(--foreground)' }} className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            style={{ 
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed border"
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            <ChevronRight style={{ color: 'var(--foreground)' }} className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
            >
              {rentalDevices.map((device) => (
                <div 
                  key={device.id}
                  style={{ 
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)`
                  }}
                  className="flex-shrink-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden" style={{ backgroundColor: 'var(--bg-light)' }}>
                    <ImageWithFallback
                      src={device.imageUrl}
                      alt={device.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{device.name}</h3>
                    <p style={{ color: 'var(--text-muted)' }} className="text-sm mb-4">{device.description}</p>
                    
                    {device.specs && (
                      <ul className="space-y-1 mb-4">
                        {device.specs.map((spec, idx) => (
                          <li key={idx} style={{ color: 'var(--text-muted)' }} className="text-xs flex items-center gap-2">
                            <span style={{ color: 'var(--accent)' }}>✓</span> {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <a 
                      href="#kontakt" 
                      style={{ 
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)'
                      }}
                      className="inline-block border px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all"
                    >
                      Zapytaj o wynajem
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#c5a059] w-8' 
                    : 'bg-[#e5e7eb] hover:bg-[#d1d5db]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-[#6b7280] hover:text-[#c5a059] transition-colors"
            >
              {isAutoPlaying ? '⏸ Wstrzymaj automatyczne przewijanie' : '▶ Wznów automatyczne przewijanie'}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6b7280] mb-4">
            Zainteresowany wynajmem? Skontaktuj się z nami!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:426319420"
              className="bg-[#1a1c20] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#2a2c30] transition-colors no-underline"
            >
              📞 42 631 94 20
            </a>
            <a
              href="mailto:sklep@conner.pl"
              className="border-2 border-[#1a1c20] text-[#1a1c20] px-7 py-3.5 rounded-lg font-semibold hover:bg-[#1a1c20] hover:text-white transition-colors no-underline"
            >
              ✉️ sklep@conner.pl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
