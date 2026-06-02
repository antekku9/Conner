import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    arrows: false, // x-kom nie ma strzałek na mobile
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <button
        className={`h-1.5 rounded-full transition-all ${
          i === currentSlide ? 'bg-[var(--accent)] w-5' : 'bg-slate-300 dark:bg-slate-700 w-1.5'
        }`}
        aria-label={`Slajd ${i + 1}`}
      />
    ),
    dotsClass: 'slick-dots !bottom-3',
  };

  return (
    <div className="banner-slider w-full overflow-hidden px-4 pt-4 bg-[var(--background)]">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="outline-none">
            {/* Główny kontener kafelka a'la x-kom */}
            <div className="relative h-[220px] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 p-5 flex items-center">
              
              {/* Treść po lewej stronie */}
              <div className="z-10 max-w-[60%] flex flex-col justify-center h-full">
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--accent)] mb-1">
                  {banner.tag}
                </span>
                <h2 className="text-lg font-black text-slate-900 dark:text-white leading-tight mb-1 tracking-tight">
                  {banner.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-snug">
                  {banner.subtitle}
                </p>
                {/* Charakterystyczny mały przycisk x-komu w ramce */}
                <div>
                  <a
                    href={banner.ctaLink}
                    className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold px-4 py-2 rounded-lg bg-white dark:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700 transition-colors min-h-[36px]"
                  >
                    {banner.ctaText}
                  </a>
                </div>
              </div>

              {/* Zdjęcie po prawej stronie - wklejone w róg i zaokrąglone */}
              <div className="absolute right-0 bottom-0 w-[42%] h-full flex items-end justify-end pointer-events-none p-2">
                <ImageWithFallback
                  src={banner.image}
                  alt={banner.title}
                  className="object-contain max-h-[90%] w-auto rounded-xl shadow-xs"
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .banner-slider .slick-dots { display: flex !important; justify-content: center; gap: 5px; padding: 0; margin: 0; }
        .banner-slider .slick-dots li { margin: 0; width: auto; height: auto; }
        .banner-slider .slick-dots li button { padding: 0; }
        .banner-slider .slick-dots li button:before { display: none; }
      `}</style>
    </div>
  );
}
