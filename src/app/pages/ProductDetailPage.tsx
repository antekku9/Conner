import { useParams, Link } from 'react-router';
import { getProductBySlug, products } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, XCircle, ArrowLeft, Phone, Mail, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { OmnibusPriceInfo } from '../components/products/OmnibusPriceInfo';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f9fafb] dark:bg-[#16181d] flex items-center justify-center transition-colors">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a1c20] dark:text-white mb-4">Produkt nie znaleziony</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Przepraszamy, nie możemy znaleźć tego produktu.</p>
          <Link 
            to="/produkty"
            className="inline-flex items-center gap-2 bg-[#c5a059] text-white px-6 py-3 rounded-lg hover:bg-[#b59049] transition-colors shadow-lg shadow-[#c5a059]/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Powrót do produktów
          </Link>
        </div>
      </div>
    );
  }

  // Recommended products - same category, different products
  const recommendedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#1a1c20] transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#1f2229] border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-[#c5a059] transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <Link to="/produkty" className="hover:text-[#c5a059] transition-colors">
              Produkty
            </Link>
            <span>/</span>
            <span className="text-[#1a1c20] dark:text-white font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Back Button */}
        <Link 
          to="/produkty"
          className="inline-flex items-center gap-2 text-[#c5a059] hover:text-[#b59049] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Powrót do produktów
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image Container */}
          <div className="bg-white dark:bg-[#24272e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
            <div className="aspect-square flex items-center justify-center bg-gray-50 dark:bg-[#16181d] rounded-xl overflow-hidden p-4">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category Badge */}
            <div className="inline-block bg-[#c5a059]/10 text-[#c5a059] dark:bg-[#c5a059]/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {product.category}
            </div>

            <h1 className="text-4xl font-bold text-[#1a1c20] dark:text-white mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] dark:from-[#24272e] dark:to-[#16181d] text-white p-8 rounded-2xl mb-6 shadow-xl border border-white/5">
              {product.originalPrice && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-xl">
                    {product.originalPrice.toFixed(2)} zł
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    PROMOCJA
                  </span>
                </div>
              )}
              <div className="text-5xl font-bold mb-2">
                {product.price.toFixed(2)} <span className="text-2xl">zł</span>
              </div>
              <div className="text-gray-400 text-sm">Cena brutto</div>
            </div>

            {/* Omnibus Info */}
            {product.originalPrice && product.lowestPrice30Days && (
              <div className="mb-6 bg-gray-50 dark:bg-[#16181d] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                <OmnibusPriceInfo 
                  lowestPrice30Days={product.lowestPrice30Days}
                  variant="detailed"
                />
              </div>
            )}

            {/* Availability Badge */}
            <div className="flex items-center gap-3 mb-8">
              {product.inStock ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-600 dark:text-green-400 font-medium text-lg">Dostępny w magazynie</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-500" />
                  <span className="text-red-600 dark:text-red-400 font-medium text-lg">Produkt niedostępny</span>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://allegro.pl/uzytkownik/ConnerMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#c5a059] text-white px-8 py-4 rounded-lg hover:bg-[#b59049] transition-all text-lg font-semibold w-full shadow-lg shadow-[#c5a059]/20 active:scale-[0.98]"
              >
                <ShoppingCart className="w-6 h-6" />
                Kup teraz na Allegro
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+48426319420"
                  className="flex items-center justify-center gap-2 border-2 border-[#c5a059] text-[#c5a059] dark:text-[#c5a059] px-6 py-3 rounded-lg hover:bg-[#c5a059] hover:text-white transition-all font-semibold active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń
                </a>
                <a
                  href="mailto:sklep@conner.pl"
                  className="flex items-center justify-center gap-2 border-2 border-[#c5a059] text-[#c5a059] dark:text-[#c5a059] px-6 py-3 rounded-lg hover:bg-[#c5a059] hover:text-white transition-all font-semibold active:scale-[0.98]"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products Grid */}
        {recommendedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-[#1a1c20] dark:text-white mb-8">
              Podobne produkty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
