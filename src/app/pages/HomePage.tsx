import { Hero } from '../components/conner/Hero';
import { Services } from '../components/conner/Services';
import { ServiceDetails } from '../components/conner/ServiceDetails';
import { Printers } from '../components/conner/Printers';
import { RentalCarousel } from '../components/conner/RentalCarousel';
import { FeaturedProducts } from '../components/conner/FeaturedProducts';
import { Stats } from '../components/conner/Stats';
import { SeoText } from '../components/conner/SeoText';
import { Contact } from '../components/conner/Contact';
import { Trust } from '../components/conner/Trust';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceDetails />
      <RentalCarousel />
      <Printers />
      <FeaturedProducts />
      <Stats />
      <SeoText /> {/* <-- Komponent wstawiony tuż przed sekcją kontaktową */}
      <Contact />
      <Trust />
    </>
  );
}
