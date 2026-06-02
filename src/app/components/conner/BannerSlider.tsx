import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const banners = [
  {
    image: '/Komputery.webp',
    title: 'Komputery Szyte na Miarę',
    subtitle: 'Kompleksowa budowa komputerów, profesjonalne doradztwo',
    ctaText: 'Zadzwoń już teraz',
    ctaLink: 'tel:426319420', 
  },
  {
    image: '/serwis.webp',
    title: 'Profesjonalny Serwis IT',
    subtitle: 'Kompleksowa obsługa komputerów, laptopów i serwerów',
    ctaText: 'Dowiedz się więcej',
    ctaLink: '#serwis',
  },
  {
    image: '/wynajem.webp',
    title: 'Wynajem Sprzętu Biurowego',
    subtitle: 'Drukarki, kserokopiarki i urządzenia wielofunkcyjne',
    ctaText: 'Zobacz ofertę',
    ctaLink: '#wynajem',
  },
  {
    image: '/Obsluga.webp', 
    title: 'Obsługa Firm, Szkół oraz Instytucji',
    subtitle: 'Kompleksowe zaopatrzenie w sprzęt IT',
    ctaText: 'Dowiedz się więcej',
    ctaLink: 'https://antekku9.github.io/Conner/obsluga-firm',
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
      // DODANO md:block hidden - strzałki znikają na telefonie
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
      // DODANO md:block hidden - strzałki znikają na telefonie
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
    speed: 500,
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
        className={`h-2 rounded-full transition-all ${
          i === currentSlide ? 'bg-[#c5a059] w-6 md:w-8' : 'bg-white/40 w-2'
        }`}
        aria-label={`Przejdź do slajdu ${i + 1}`}
      />
    ),
    dotsClass: 'slick-dots !bottom-4 md:!bottom-6',
  };

  return (
    <div className="banner-slider w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="outline-none">
            {/* Responsywna wysokość: h-[320px] na mobile daje zwarty, zgrabny baner */}
            <div className="relative h-[340px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                {/* Lepszy, uniwersalny overlay: czarny na dole dla mobile, gradient z boku dla desktopu */}
                <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-[1200px] mx-auto px-5 flex items-center md:items-center">
                <div className="max-w-[600px] text-white w-full">
                  {/* Uproszczone teksty na mobile */}
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-sm md:text-xl mb-6 md:mb-8 text-gray-200 opacity-90 line-clamp-2 md:line-clamp-none">
                    {banner.subtitle}
                  </p>
                  <a
                    href={banner.ctaLink}
                    target={banner.ctaLink.startsWith('http') ? '_blank' : undefined}
                    rel={banner.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    // Wygodniejszy dla kciuka padding i min-height na mobile
                    className="bg-[#c5a059] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-lg no-underline font-semibold inline-flex items-center justify-center text-sm md:text-base hover:bg-[#b39050] transition-colors min-h-[44px]"
                  >
                    {banner.ctaText}
                  </a>
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
          gap: 6px;
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
