import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// INSTRUKCJA: Aby dodać nowy baner, dodaj obiekt do tablicy 'banners' poniżej
// Każdy baner może zawierać: image (URL obrazu), title, subtitle, ctaText, ctaLink
const banners = [
  {
    image: 'https://images.unsplash.com/photo-1685159375835-e987def57d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJVCUyMHNlcnZpY2VzJTIwYmFubmVyfGVufDF8fHx8MTc3MzE1NjkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Profesjonalny Serwis IT',
    subtitle: 'Kompleksowa obsługa komputerów, laptopów i serwerów',
    ctaText: 'Dowiedz się więcej',
    ctaLink: '#serwis',
  },
  {
    image: 'https://images.unsplash.com/photo-1560264357-8d9202250f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHNlcnZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMTU2OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Wynajem Sprzętu Biurowego',
    subtitle: 'Drukarki, kserokopiarki i urządzenia wielofunkcyjne',
    ctaText: 'Zobacz ofertę',
    ctaLink: '#wynajem',
  },
  {
    image: 'https://images.unsplash.com/photo-1656646424386-69c923c411f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBlcXVpcG1lbnQlMjByZW50YWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzMxNTY5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sklep na Allegro',
    subtitle: 'Szeroki wybór sprzętu komputerowego i akcesoriów',
    ctaText: 'Odwiedź sklep',
    ctaLink: 'https://allegro.pl/uzytkownik/ConnerMedia',
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Następny slajd"
    >
      <ChevronRight className="w-6 h-6 text-[#1a1c20]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Poprzedni slajd"
    >
      <ChevronLeft className="w-6 h-6 text-[#1a1c20]" />
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
        className={`w-3 h-3 rounded-full transition-all ${
          i === currentSlide ? 'bg-[#c5a059] w-8' : 'bg-white/60'
        }`}
        aria-label={`Przejdź do slajdu ${i + 1}`}
      />
    ),
    dotsClass: 'slick-dots !bottom-6',
  };

  return (
    <div className="banner-slider w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="outline-none">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-[1200px] mx-auto px-5 flex items-center">
                <div className="max-w-[600px] text-white">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {banner.subtitle}
                  </p>
                  <a
                    href={banner.ctaLink}
                    target={banner.ctaLink.startsWith('http') ? '_blank' : undefined}
                    rel={banner.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-[#c5a059] text-white px-8 py-4 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
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
          gap: 8px;
          padding: 0;
          margin: 0;
        }
        
        .banner-slider .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }
        
        .banner-slider .slick-dots li button {
          padding: 0;
        }
        
        .banner-slider .slick-dots li button:before {
          display: none;
        }
      `}</style>
    </div>
  );
}
