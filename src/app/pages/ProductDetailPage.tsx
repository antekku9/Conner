import { useParams, Link } from 'react-router';
import { getProductBySlug, products } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, XCircle, ArrowLeft, Phone, Mail, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold mb-4">Produkt nie znaleziony</h1>
          <p className="text-gray-600 mb-6">
            Przepraszamy, nie możemy znaleźć produktu, którego szukasz.
          </p>
          <Link
            to="/produkty"
            className="bg-[#c5a059] text-white px-7 py-3.5 rounded-lg no-underline font-semibold inline-block hover:bg-[#b39050] transition-colors"
          >
            Wróć do katalogu
          </Link>
        </div>
      </div>
    );
  }

  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#c5a059] transition-colors">
              Start
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

      {/* Back button */}
      <div className="max-w-[1200px] mx-auto px-5 pt-8">
        <Link
          to="/produkty"
          className="inline-flex items-center gap-2 text-[#1a1c20] hover:text-[#c5a059] transition-colors no-underline font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Wróć do katalogu
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
              />
              {product.oldPrice && (
                <div className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  PROMOCJA -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>
              )}
            </div>

            {/* Additional images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {product.images.slice(1).map((img, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} - zdjęcie ${index + 2}`}
                      className="w-full rounded"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="text-sm text-[#c5a059] font-semibold mb-2">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-medium">Produkt dostępny w magazynie</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-600 font-medium">Produkt chwilowo niedostępny</span>
                </>
              )}
            </div>

            {/* Price */}
            <div className="bg-gray-100 rounded-xl p-6 mb-6">
              {product.oldPrice && (
                <div className="text-gray-500 line-through text-lg mb-1">
                  {product.oldPrice.toLocaleString('pl-PL')} zł
                </div>
              )}
              <div className="text-4xl font-bold text-[#1a1c20]">
                {product.price.toLocaleString('pl-PL')} zł
              </div>
              <div className="text-sm text-gray-600 mt-1">Cena brutto</div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Opis produktu</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold mb-4">Zainteresowany tym produktem?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Skontaktuj się z nami, aby uzyskać więcej informacji, sprawdzić dostępność lub złożyć zamówienie.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/#kontakt"
                  className="bg-[#c5a059] text-white px-6 py-3.5 rounded-lg no-underline font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#b39050] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Zapytaj o produkt
                </a>
                <a
                  href="tel:426319420"
                  className="border border-[#1a1c20] px-6 py-3.5 rounded-lg no-underline font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#1a1c20] hover:text-white transition-colors text-[#1a1c20]"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: 42 631 94 20
                </a>
                <a
                  href="https://allegro.pl/uzytkownik/ConnerMedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c5a059] text-[#c5a059] px-6 py-3.5 rounded-lg no-underline font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#c5a059] hover:text-white transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Zobacz na Allegro
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specs && product.specs.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Specyfikacja techniczna</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="font-semibold text-[#1a1c20] min-w-[140px]">
                    {spec.label}:
                  </div>
                  <div className="text-gray-700">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Podobne produkty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
