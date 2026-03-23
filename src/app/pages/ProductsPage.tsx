import { useState } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { Search, Filter } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Wszystkie' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Katalog Produktów</h1>
          <p className="text-lg text-gray-300 max-w-[700px]">
            Przeglądaj naszą ofertę sprzętu komputerowego, akcesoriów i urządzeń biurowych. 
            Wszystkie produkty są również dostępne w naszym sklepie na Allegro.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="max-w-[1200px] mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Szukaj produktów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              <button
                onClick={() => setSelectedCategory('Wszystkie')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'Wszystkie'
                    ? 'bg-[#c5a059] text-white'
                    : 'bg-gray-100 text-[#1a1c20] hover:bg-gray-200'
                }`}
              >
                Wszystkie
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#c5a059] text-white'
                      : 'bg-gray-100 text-[#1a1c20] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Znaleziono {filteredProducts.length} {filteredProducts.length === 1 ? 'produkt' : filteredProducts.length < 5 ? 'produkty' : 'produktów'}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Nie znaleziono produktów</h3>
            <p className="text-gray-600">
              Spróbuj zmienić kryteria wyszukiwania lub kategorię
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h3 className="text-2xl font-bold mb-4">Nie znalazłeś tego, czego szukasz?</h3>
          <p className="text-gray-600 mb-6">
            Skontaktuj się z nami - pomożemy znaleźć idealne rozwiązanie dla Twojej firmy
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/#kontakt"
              className="bg-[#c5a059] text-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
            >
              Napisz do nas
            </a>
            <a
              href="tel:426319420"
              className="border border-[#1a1c20] px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#1a1c20] hover:text-white transition-colors text-[#1a1c20]"
            >
              Zadzwoń: 42 631 94 20
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
