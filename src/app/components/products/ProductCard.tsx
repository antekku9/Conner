import { Link } from 'react-router';
import { Product } from '../../data/products';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, XCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/produkty/${product.slug}`}
      style={{ 
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)'
      }}
      className="group rounded-xl border overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all no-underline block"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-[#16181d]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.oldPrice && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
            <span style={{ 
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)'
            }} className="px-4 py-2 rounded-lg font-bold border border-white/10">
              Brak w magazynie
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-white dark:bg-[#24272e] transition-colors">
        <div className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>
          {product.category}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-1" style={{ color: 'var(--foreground)' }}>
          {product.name}
        </h3>
        <p className="text-sm mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">
          {product.shortDescription}
        </p>

        {/* Price & Stock */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                {product.oldPrice.toLocaleString('pl-PL')} zł
              </span>
            )}
            {/* NAPRAWIONA CENA: Dodałem dark:text-white */}
            <span className="text-xl font-bold text-[#1a1c20] dark:text-white transition-colors">
              {product.price.toLocaleString('pl-PL')} zł
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            {product.inStock ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">Dostępny</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-red-600 dark:text-red-400 font-medium">Niedostępny</span>
              </>
            )}
          </div>
        </div>
        
        {/* OMNIBUS - Naprawione dla trybu ciemnego */}
        {product.oldPrice && product.lowestPrice30Days && (
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              Dyrektywa Omnibus
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Najniższa cena z 30 dni: <strong className="text-gray-900 dark:text-white">{product.lowestPrice30Days.toLocaleString('pl-PL')} zł</strong>
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
