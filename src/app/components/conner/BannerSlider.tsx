import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const banners = [
  {
    image: '/Komputery.webp',
    tag: 'NOWOŚĆ',
    title: 'Komputery Szyte na Miarę',
    subtitle: 'Profesjonalne doradztwo i montaż',
    ctaText: 'Zadzwoń',
    ctaLink: 'tel:426319420', 
  },
  {
    image: '/serwis.webp',
    tag: 'SERWIS IT',
    title: 'Szybka Naprawa Laptopów',
    subtitle: 'Ekspresowa diagnoza i usunięcie awarii',
    ctaText: 'Sprawdź',
    ctaLink: '#serwis',
  },
  {
    image: '/wynajem.webp',
    tag: 'DLA BIURA',
    title: 'Wynajem Drukarek i Ksero',
    subtitle: 'Urządzenia wielofunkcyjne na dogodnych warunkach',
    ctaText: 'Oferta',
    ctaLink: '#wynajem',
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  
  return (
    <button
      onClick={onClick}
      style={{ 
        backgroundColor: isDark ? 'rgba(26, 29, 36, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: isDark ? 'rgba(212, 169, 96, 0.3)' : 'transparent'
      }}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-110 border hidden md:block"
      aria-label="Następny slajd"
    >
      <ChevronRight style={{ color: isDark ? '#d4a960' : '#1a1c20' }} className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  
  return (
    <button
      onClick={onClick}
      style={{ 
        backgroundColor: isDark ? 'rgba(26, 29, 36, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: isDark ? 'rgba(212, 169, 96, 0.3)' : 'transparent'
      }}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-110 border hidden md:block"
      aria-label="Poprzedni slajd"
    >
      <ChevronLeft style={{ color: isDark ? '#d4a960' : '#1a1c20' }} className="w-6 h-6" />
    </button>
  );
}

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <button
        className={`h-1.5 rounded-full transition-all ${
          i === currentSlide ? 'bg-[var(--accent)] w-5' : 'bg-slate-300 dark:bg-slate-700 w-1.5'
        }`}
        aria-label={`Slajd ${i + 1}`}
      />
    ),
    dotsClass: 'slick-dots !bottom-3 md:!bottom-6',
  };

  return (
    <div className="banner-slider w-full overflow-hidden px-4 pt-4 md:px-0 md:pt-0 bg-[var(--background)]">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="outline-none">
            {/* Responsywna wysokość: h-[220px] na mobile, większa na desktopie */}
            <div className="relative h-[220px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-none overflow-hidden border border-slate-100 dark:border-slate-800/60 md:border-none p-5 md:p-0 flex items-center shadow-xs md:shadow-none">
              
              {/* Zdjęcie rozciągnięte na cały kafelek jako tło */}
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                {/* Półprzezroczysty, ciemny nakład dla idealnego kontrastu napisów na mobile */}
                <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent" />
              </div>

              {/* Treść dostosowana do wersji mobilnej (białe fonty) oraz desktopowej */}
              <div className="relative z-10 w-full max-w-[1200px] mx-auto md:px-5 flex items-center">
                <div className="max-w-[70%] md:max-w-[600px] text-white">
                  <span className="text-[10px] md:text-xs font-extrabold tracking-wider uppercase text-[var(--accent)] mb-1 block">
                    {banner.tag}
                  </span>
                  <h2 className="text-lg md:text-5xl lg:text-6xl font-black md:font-bold text-white leading-tight mb-1 md:mb-4 tracking-tight">
                    {banner.title}
                  </h2>
                  <p className="text-xs md:text-xl mb-4 md:mb-8 text-slate-200 md:text-gray-200 opacity-90 line-clamp-2 md:line-clamp-none leading-snug">
                    {banner.subtitle}
                  </p>
                  <div>
                    <a
                      href={banner.ctaLink}
                      target={banner.ctaLink.startsWith('http') ? '_blank' : undefined}
                      rel={banner.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      // Mały przycisk w ramce dla mobile / standardowy duży dla desktopu
                      className="border border-white/30 text-white text-xs md:text-base font-bold md:font-semibold px-4 py-2 md:px-8 md:py-4 rounded-lg bg-white/10 backdrop-blur-xs active:bg-white/20 md:bg-[var(--accent)] md:text-white md:border-none md:hover:bg-[#b39050] transition-colors min-h-[36px] inline-flex items-center justify-center no-underline"
                    >
                      {banner.ctaText}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .banner-slider .slick-dots {
          display: flex !important;
          justify-content: center;
          gap: 5px;
          padding: 0;
          margin: 0;
        }
        
        .banner-slider .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
        }
        
        .banner-slider .slick-dots li button {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .banner-slider .slick-dots li button:before {
          display: none;
        }
      `}</style>
    </div>
  );
}
