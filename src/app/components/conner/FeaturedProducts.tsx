import { Link } from 'react-router';
import { getFeaturedProducts } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-8 md:mb-12">
          <span style={{ color: 'var(--accent)' }} className="uppercase text-[10px] md:text-xs font-bold tracking-[2px]">
            Katalog produktów
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-1" style={{ color: 'var(--foreground)' }}>Sprawdź Naszą Ofertę</h2>
          <p style={{ color: 'var(--text-muted)' }} className="mt-3 text-sm md:text-base max-w-[600px] mx-auto">
            Szeroki wybór laptopów, komputerów i akcesoriów w konkurencyjnych cenach. Sklep dostępny również na Allegro.
          </p>
        </div>

        {/* Dotykowa karuzela dla produktów na smartfonach */}
        <div className="flex overflow-x-auto gap-4 pb-6 px-1 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-x-visible md:mb-10 md:pb-0 mb-6">
          {featuredProducts.map((product) => (
            // w-[80%] nadaje idealną szerokość mobilnej karty produktowej
            <div key={product.id} className="w-[80%] shrink-0 snap-center md:w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/produkty"
            // w-full na mobile dla pewnego kliku, wygładzone zaokrąglenie do xl
            className="w-full md:w-auto justify-center inline-flex items-center gap-2 bg-[#c5a059] text-white px-8 py-4 rounded-xl md:rounded-lg no-underline font-semibold hover:bg-[#b39050] transition-colors min-h-[48px] text-sm md:text-base"
          >
            Zobacz wszystkie produkty
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
