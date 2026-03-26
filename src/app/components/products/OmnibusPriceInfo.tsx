import { Info } from 'lucide-react';

interface OmnibusPriceInfoProps {
  currentPrice: number;
  oldPrice?: number;
  lowestPrice30Days?: number;
}

export function OmnibusPriceInfo({ 
  currentPrice, 
  oldPrice, 
  lowestPrice30Days 
}: OmnibusPriceInfoProps) {
  // Jeśli nie ma promocji, nie pokazujemy Omnibus
  if (!oldPrice) {
    return null;
  }

  // Domyślnie najniższa cena = aktualna cena (jeśli nie podano inaczej)
  const lowestPrice = lowestPrice30Days || currentPrice;
  
  // Sprawdź czy aktualna cena jest niższa niż najniższa z 30 dni
  const isPriceLowerThanLowest = currentPrice < lowestPrice;
  
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            📋 Informacja zgodna z dyrektywą Omnibus
          </h4>
          <p className="text-blue-800 text-sm leading-relaxed">
            {isPriceLowerThanLowest ? (
              <>
                Aktualna cena <strong>{currentPrice.toLocaleString('pl-PL')} zł</strong> jest <strong>najniższą ceną</strong> tego produktu w ciągu ostatnich 30 dni przed obniżką.
              </>
            ) : lowestPrice === currentPrice ? (
              <>
                Najniższa cena z 30 dni przed obniżką: <strong>{lowestPrice.toLocaleString('pl-PL')} zł</strong>
                {' '}(równa aktualnej cenie promocyjnej)
              </>
            ) : (
              <>
                Najniższa cena z 30 dni przed obniżką: <strong>{lowestPrice.toLocaleString('pl-PL')} zł</strong>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
