import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { getProductBySlug, products } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, XCircle, ArrowLeft, Phone, Mail, ShoppingCart, ShieldCheck, Check } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { OmnibusPriceInfo } from '../components/products/OmnibusPriceInfo';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;

  // Stan dla głównego zdjęcia w galerii
  const [mainImage, setMainImage] = useState<string>('');

  // Ustawienie głównego zdjęcia przy załadowaniu produktu
  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f9fafb] dark:bg-[#16181d] flex items-center justify-center transition-colors">
        <div className="text-center">
          <div className="text-6xl mb-6 opacity-50">🛸</div>
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

  // Złączenie obrazu głównego i obrazów dodatkowych
  const allImages = [product.image, ...(product.images || [])];

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#1a1c20] transition-colors duration-300 pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#1f2229] border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-[#c5a059] transition-colors">Strona główna</Link>
            <span>/</span>
            <Link to="/produkty" className="hover:text-[#c5a059] transition-colors">Produkty</Link>
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
          Powrót do katalogu
        </Link>

        {/* SEKCJA 1: ABOVE THE FOLD (Galeria + Buy Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Lewa kolumna: Galeria */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-[#24272e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
              <div className="aspect-square flex items-center justify-center bg-gray-50 dark:bg-[#16181d] rounded-xl overflow-hidden p-4">
                <ImageWithFallback
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>
            
            {/* Miniaturki */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImage(img)}
                    className={`w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all p-2 bg-white dark:bg-[#24272e] ${
                      mainImage === img 
                        ? 'border-[#c5a059]' 
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <img src={img} alt={`Miniaturka ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Prawa kolumna: Product Info */}
          <div>
            {/* Odznaki i Kategoria */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-block bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-medium">
                {product.category}
              </div>
              {product.badges?.map((badge, idx) => (
                <span 
                  key={idx} 
                  className="bg-[#c5a059]/10 text-[#c5a059] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide border border-[#c5a059]/20"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-[#1a1c20] dark:text-white mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2c30] dark:from-[#24272e] dark:to-[#16181d] text-white p-8 rounded-2xl mb-6 shadow-xl border border-white/5">
              {product.oldPrice && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-xl">
                    {product.oldPrice.toFixed(2)} zł
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    PROMOCJA
                  </span>
                </div>
              )}
              <div className="text-5xl font-bold mb-2">
                {product.price.toLocaleString('pl-PL')} <span className="text-2xl">zł</span>
              </div>
              <div className="text-gray-400 text-sm">Cena brutto</div>
            </div>

            {/* Omnibus Info */}
            {product.oldPrice && product.lowestPrice30Days && (
              <div className="mb-6 bg-gray-50 dark:bg-[#16181d] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                <OmnibusPriceInfo 
                  lowestPrice30Days={product.lowestPrice30Days}
                  variant="detailed"
                />
              </div>
            )}

            {/* Availability Badge */}
            <div className="flex items-center gap-3 mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
              {product.inStock ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-600 dark:text-green-400 font-medium text-lg">Dostępny w magazynie</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-500" />
                  <span className="text-red-600 dark:text-red-400 font-medium text-lg">Produkt chwilowo niedostępny</span>
                </>
              )}
            </div>

            {/* Cechy produktu (Features) */}
            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-1 gap-4 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
                      {feature.title}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm pl-7">
                      {feature.description}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://allegro.pl/uzytkownik/ConnerMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#c5a059] text-white px-8 py-4 rounded-xl hover:bg-[#b59049] transition-all text-lg font-bold w-full shadow-lg shadow-[#c5a059]/20 active:scale-[0.98]"
              >
                <ShoppingCart className="w-6 h-6" />
                Kup teraz na Allegro
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+48426319420"
                  className="flex items-center justify-center gap-2 border-2 border-[#c5a059] text-[#c5a059] dark:text-[#c5a059] px-6 py-3 rounded-xl hover:bg-[#c5a059] hover:text-white transition-all font-semibold active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń
                </a>
                <a
                  href="mailto:sklep@conner.pl"
                  className="flex items-center justify-center gap-2 border-2 border-[#c5a059] text-[#c5a059] dark:text-[#c5a059] px-6 py-3 rounded-xl hover:bg-[#c5a059] hover:text-white transition-all font-semibold active:scale-[0.98]"
                >
                  <Mail className="w-5 h-5" />
                  Napisz do nas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEKCJA 2: OPIS I SPECYFIKACJA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          
          {/* Główny opis (lewa strona) */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Szczegółowy opis
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg">
              <p>{product.description}</p>
            </div>

            {/* Zawartość zestawu */}
            {product.includes && product.includes.length > 0 && (
              <div className="bg-white dark:bg-[#24272e] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Co znajduje się w zestawie?
                </h3>
                <ul className="space-y-4">
                  {product.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <div className="bg-[#c5a059]/10 p-1.5 rounded-full">
                        <Check className="w-4 h-4 text-[#c5a059]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tabela specyfikacji (prawa strona) */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Specyfikacja techniczna
            </h2>
            
            {product.specs && product.specs.length > 0 ? (
              <div className="bg-white dark:bg-[#24272e] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {product.specs.map((spec, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-[#2a2d35] transition-colors duration-150"
                    >
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:w-1/3 mb-1 sm:mb-0">
                        {spec.label}
                      </div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white sm:w-2/3 sm:text-right">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Brak szczegółowej specyfikacji dla tego produktu.
              </p>
            )}

            {/* Drobny tekst uwiarygadniający jeśli to komputer */}
            {product.category === 'Komputery stacjonarne' && (
              <div className="mt-6 flex gap-3 p-4 bg-[#c5a059]/10 rounded-xl border border-[#c5a059]/20">
                <ShieldCheck className="w-6 h-6 text-[#c5a059] flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Wszystkie komputery stacjonarne przechodzą rygorystyczne testy wydajnościowe i temperaturowe przed spakowaniem i wysyłką do klienta.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products Grid */}
        {recommendedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-[#1a1c20] dark:text-white mb-8">
              Podobne produkty z tej kategorii
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
