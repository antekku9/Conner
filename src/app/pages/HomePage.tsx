import { Hero } from '../components/conner/Hero';
import { HitService } from '../components/conner/HitService'; // Wyciągnięty wyżej
import { Services } from '../components/conner/Services'; // Przesunięty niżej
import { ServiceDetails } from '../components/conner/ServiceDetails';
import { RentalCarousel } from '../components/conner/RentalCarousel';
import { Printers } from '../components/conner/Printers';
import { FeaturedProducts } from '../components/conner/FeaturedProducts';
import { Stats } from '../components/conner/Stats';
import { SeoText } from '../components/conner/SeoText';
import { Contact } from '../components/conner/Contact';
import { Trust } from '../components/conner/Trust';
import { ContactFab } from '../components/conner/ContactFab';

export default function HomePage() {
  return (
    <>
      {/* 1. SEKCJA BANERÓW (Hasło: Zaufany Partner IT od 1996 Roku) */}
      <Hero />
      
      {/* 2. PROMO: OFERTA DNIA (Szybki, konkretny impuls zakupowy zaraz po wejściu) */}
      <HitService />
      
      {/* 3. KAFLI KATEGORII USŁUG (Pełny przegląd oferty) */}
      <Services />
      
      {/* 4. DETALE OFERTY */}
      <ServiceDetails />
      <RentalCarousel />
      <Printers />
      
      {/* 5. SEKCJA E-COMMERCE */}
      <FeaturedProducts />
      
      {/* 6. STATYSTYKI I SOCJAL PROOF */}
      <Stats />
      
      {/* 7. TEKST POZYCJONUJĄCY SEO */}
      <SeoText />
      
      {/* 8. CENTRUM KONTAKTOWE */}
      <Contact />
      <Trust />
      
      {/* NATYWNY SYSTEM KONWERSJI (Mobilny pływający dymek kontaktu pod kciukiem) */}
      <ContactFab />
    </>
  );
}
