import { Hero } from './components/conner/Hero';
import { Services } from './components/conner/Services';
import { HitService } from './components/conner/HitService'; // DODANO: Usługowy "Gorący strzał"
import { ServiceDetails } from './components/conner/ServiceDetails';
import { RentalCarousel } from './components/conner/RentalCarousel';
import { Printers } from './components/conner/Printers';
import { FeaturedProducts } from './components/conner/FeaturedProducts';
import { Stats } from './components/conner/Stats';
import { SeoText } from './components/conner/SeoText';
import { Contact } from './components/conner/Contact';
import { Trust } from './components/conner/Trust';
import { ContactFab } from './components/conner/ContactFab'; // DODANO: Mobilny pływający dymek kontaktu

export default function HomePage() {
  return (
    <>
      {/* 1. SEKCJA BANERÓW */}
      <Hero />
      
      {/* 2. KAFLI KATEGORII USŁUG */}
      <Services />
      
      {/* 3. PROMO: GORĄCA USŁUGA (Wzorowane bezpośrednio na układzie sekcji x-kom) */}
      <HitService />
      
      {/* 4. DETALE OFERTY (Zoptymalizowane pod kciuk na mobile, szerokie na PC) */}
      <ServiceDetails />
      <RentalCarousel />
      <Printers />
      
      {/* 5. SEKCJA E-COMMERCE (Katalog karuzelowy dla mobile) */}
      <FeaturedProducts />
      
      {/* 6. STATYSTYKI I SOCJAL PROOF (Automatycznie ukryte na mobile za pomocą hidden md:block) */}
      <Stats />
      
      {/* 7. TEKST POZYCJONUJĄCY SEO (Zwijany akordeonem dla czystości mobile, pełny na PC) */}
      <SeoText />
      
      {/* 8. CENTRUM KONTAKTOWE */}
      <Contact />
      <Trust />
      
      {/* ====================================================================== */}
      {/* NATYWNY SYSTEM KONWERSJI (Dymek unosi się nad całą stroną na mobile)     */}
      {/* ====================================================================== */}
      <ContactFab />
    </>
  );
}
