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
    name: 'Konica Minolta bizhub C308',
    description: 'Profesjonalna kolorowa drukarka wielofunkcyjna A3',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk kolorowy A3', 'Kopiowanie i skanowanie', 'Do 30 str/min']
  },
  {
    id: 2,
    name: 'Konica Minolta bizhub 558e',
    description: 'Wydajne urządzenie wielofunkcyjne dla dużych biur',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk A3 mono', 'Duplex automatyczny', 'Do 55 str/min']
  },
  {
    id: 3,
    name: 'HP LaserJet Enterprise',
    description: 'Drukarka laserowa dla wymagających użytkowników',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk A4 mono', 'Sieć Ethernet', 'Do 40 str/min']
  },
  {
    id: 4,
    name: 'Laptop Dell Latitude',
    description: 'Biznesowy laptop z pełnym wyposażeniem',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    specs: ['Intel Core i5', '16GB RAM', 'SSD 512GB']
  },
  {
    id: 5,
    name: 'Laptop Lenovo ThinkPad',
    description: 'Niezawodne rozwiązanie dla profesjonalistów',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    specs: ['Intel Core i7', '16GB RAM', 'SSD 1TB']
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
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
            Dostępne urządzenia
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Sprzęt do Wynajmu
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Profesjonalny sprzęt IT i urządzenia biurowe dostępne w elastycznym wynajmie krótko i długoterminowym
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-[#f9fafb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a1c20]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-[#f9fafb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-[#1a1c20]" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {rentalDevices.map((device) => (
                <div 
                  key={device.id}
                  className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  {/* Image */}
                  <div className="relative h-64 bg-[#f9fafb] overflow-hidden">
                    <ImageWithFallback
                      src={device.imageUrl}
                      alt={device.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-[#1a1c20]">
                      {device.name}
                    </h3>
                    <p className="text-[#6b7280] text-sm mb-4">
                      {device.description}
                    </p>

                    {/* Specs */}
                    {device.specs && (
                      <ul className="space-y-2 mb-4">
                        {device.specs.map((spec, index) => (
                          <li key={index} className="text-sm text-[#6b7280] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full flex-shrink-0"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <a
                      href="#kontakt"
                      className="inline-block w-full text-center bg-[#c5a059] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b39050] transition-colors no-underline"
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
