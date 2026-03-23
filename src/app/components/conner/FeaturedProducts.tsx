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
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
            Polecane produkty
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Wybrane produkty z naszej oferty</h2>
          <p className="text-[#6b7280] max-w-[700px] mx-auto">
            Sprawdź wybrane przez nas produkty. Pełna oferta dostępna w katalogu oraz na naszym sklepie Allegro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/produkty"
            className="inline-flex items-center gap-2 bg-[#c5a059] text-white px-8 py-4 rounded-lg no-underline font-semibold hover:bg-[#b39050] transition-colors"
          >
            Zobacz wszystkie produkty
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
