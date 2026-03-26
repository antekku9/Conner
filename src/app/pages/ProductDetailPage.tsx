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
      <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a1c20] mb-4">Produkt nie znaleziony</h1>
          <p className="text-gray-600 mb-8">Przepraszamy, nie możemy znaleźć tego produktu.</p>
          <Link 
            to="/produkty"
            className="inline-flex items-center gap-2 bg-[#c5a059] text-white px-6 py-3 rounded-lg hover:bg-[#b59049] transition-colors"
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
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#c5a059] transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <Link to="/produkty" className="hover:text-[#c5a059] transition-colors">
              Produkty
            </Link>
            <span>/</span>
            <span className="text-[#1a1c20] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Back Button */}
        <Link 
          to="/produkty"
          className="inline-flex items-center gap-2 text-[#c5a059] hover:text-[#b59049] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Powrót do produktów
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
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
            <div className="inline-block bg-[#c5a059]/10 text-[#c5a059] px-4 py-1 rounded-full text-sm font-medium mb-4">
              {product.category}
            </div>

            <h1 className="text-4xl font-bold text-[#1a1c20] mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] text-white p-8 rounded-2xl mb-6">
              {product.originalPrice && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-xl">
                    {product.originalPrice.toFixed(2)} zł
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    PROMOCJA
                  </span>
                </div>
              )}
              <div className="text-5xl font-bold mb-2">
                {product.price.toFixed(2)} <span className="text-2xl">zł</span>
              </div>
              <div className="text-gray-400 text-sm">Cena brutto</div>
            </div>

            {/* Omnibus Info - tylko przy promocji */}
            {product.originalPrice && product.lowestPrice30Days && (
              <div className="mb-6">
                <OmnibusPriceInfo 
                  lowestPrice30Days={product.lowestPrice30Days}
                  variant="detailed"
                />
              </div>
            )}

            {/* Availability */}
            <div className="flex items-center gap-3 mb-8">
              {product.inStock ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-600 font-medium text-lg">Dostępny</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-500" />
                  <span className="text-red-600 font-medium text-lg">Niedostępny</span>
                </>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href="https://allegro.pl/uzytkownik/ConnerMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#c5a059] text-white px-8 py-4 rounded-lg hover:bg-[#b59049] transition-colors text-lg font-semibold w-full"
              >
                <ShoppingCart className="w-6 h-6" />
                Kup na Allegro
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+48426319420"
                  className="flex items-center justify-center gap-2 border-2 border-[#c5a059] text-[#c5a059] px-6 py-3 rounded-lg hover:bg-[#c5a059] hover:text-white transition-colors font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń
                </a>
                <a
                  href="mailto:sklep@conner.pl"
                  className="flex items-center justify-center gap-2 border-2 border-[#c5a059] text-[#c5a059] px-6 py-3 rounded-lg hover:bg-[#c5a059] hover:text-white transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#1a1c20] mb-8">
              Podobne produkty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
