// INSTRUKCJA: Aby dodać nowy produkt, dodaj obiekt do tablicy 'products' poniżej
// Każdy produkt musi zawierać: id, name, slug, category, price, description, image, specs (opcjonalne)

export interface Product {
  id: string;
  name: string;
  slug: string; // URL-friendly nazwa (np. "laptop-dell-latitude")
  category: string;
  price: number;
  oldPrice?: number; // opcjonalna stara cena (dla promocji)
  lowestPrice30Days?: number; // OMNIBUS: najniższa cena z ostatnich 30 dni
  description: string;
  shortDescription: string;
  image: string;
  images?: string[]; // dodatkowe zdjęcia
  specs?: { label: string; value: string }[]; // specyfikacja techniczna
  inStock: boolean;
  featured?: boolean; // wyróżniony produkt
}

export const categories = [
  'Laptopy',
  'Komputery stacjonarne',
  'Monitory',
  'Drukarki',
  'Akcesoria',
  'Serwery',
  'Networking',
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Conner Okręt Bojowy',
    slug: 'conner-okret-bojowy',
    category: 'Komputery stacjonarne',
    price: 5999,
    oldPrice: 5999, 
    lowestPrice30Days: 5999,
    shortDescription: 'Solidny komputer stacjonarny do gier i pracy z procesorem i5 oraz kartą RTX 5060',
    description: 'Conner Okręt Bojowy to przemyślana konfiguracja stworzona z myślą o płynnej rozgrywce w najnowszych tytułach oraz stabilnej pracy w wymagających programach graficznych i montażowych. Wyposażony w potężny, 20-rdzeniowy procesor Intel Core i5 14. generacji, najnowszą kartę graficzną RTX 5060 oraz wydajne chłodzenie wodne DeepCool, które zapewnia idealną kulturę pracy i niskie temperatury.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800', 
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800',
      'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=800',
    ],
    specs: [
      { label: 'Procesor', value: 'Intel Core i5-14700F (do 5.4 GHz)' },
      { label: 'Płyta główna', value: 'MSI PRO B760M' },
      { label: 'RAM', value: '16GB DDR4' },
      { label: 'Dysk', value: '1TB SSD NVMe M.2' },
      { label: 'Karta graficzna', value: 'NVIDIA GeForce RTX 5060 (MSI / Gigabyte / Asus)' },
      { label: 'Chłodzenie procesora', value: 'DeepCool LE240 WH v2 (Wodne)' },
      { label: '
