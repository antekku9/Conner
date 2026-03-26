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
      className="group bg-white rounded-xl border border-[#eee] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all no-underline"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.oldPrice && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-[#1a1c20] px-4 py-2 rounded-lg font-semibold">
              Brak w magazynie
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-sm text-[#c5a059] font-semibold mb-1">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-[#1a1c20] mb-2 group-hover:text-[#c5a059] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b7280] mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price & Stock */}
        <div className="flex items-center justify-between">
          <div>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                {product.oldPrice.toLocaleString('pl-PL')} zł
              </span>
            )}
            <span className="text-xl font-bold text-[#1a1c20]">
              {product.price.toLocaleString('pl-PL')} zł
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            {product.inStock ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-600 font-medium">Dostępny</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-red-600 font-medium">Niedostępny</span>
              </>
            )}
          </div>
        </div>
        
        {/* OMNIBUS - Najniższa cena z 30 dni (tylko przy promocji) */}
        {product.oldPrice && product.lowestPrice30Days && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Najniższa cena z 30 dni: <strong>{product.lowestPrice30Days.toLocaleString('pl-PL')} zł</strong>
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}