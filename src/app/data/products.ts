// INSTRUKCJA: Aby dodać nowy produkt, dodaj obiekt do tablicy 'products' poniżej
// Każdy produkt musi zawierać: id, name, slug, category, price, description, shortDescription, image, inStock, specs (opcjonalne)

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
    shortDescription: 'Solidny komputer stacjonarny do gier i pracy z procesorem i5 oraz kartą RTX 5060',
    description: 'Conner Okręt Bojowy to przemyślana konfiguracja stworzona z myślą o płynnej rozgrywce w najnowszych tytułach oraz stabilnej pracy w wymagających programach graficznych i montażowych. Wyposażony w potężny, 10-rdzeniowy procesor Intel Core i5 14. generacji, najnowszą kartę graficzną RTX 5060 oraz wydajne chłodzenie wodne DeepCool, które zapewnia idealną kulturę pracy i niskie temperatury.',
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
      { label: 'Zasilacz', value: 'Chieftec 700W' },
      { label: 'Obudowa', value: 'DeepCool CG530 4F' },
      { label: 'System', value: 'MS Windows 11 Home OEM' },
      { label: 'Gwarancja', value: '24 miesiące' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'HP EliteDesk 800 G6 SFF',
    slug: 'hp-elitedesk-800-g6',
    category: 'Komputery stacjonarne',
    price: 1899,
    shortDescription: 'Kompaktowy komputer biznesowy z Intel Core i7',
    description: 'HP EliteDesk 800 G6 w obudowie Small Form Factor to wydajny komputer stacjonarny idealny dla firm. Procesor Intel Core i7 10. generacji zapewnia wysoką wydajność przy niskim poborze energii. Kompaktowa konstrukcja oszczędza miejsce na biurku.',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800',
    specs: [
      { label: 'Procesor', value: 'Intel Core i7-10700' },
      { label: 'RAM', value: '16GB DDR4' },
      { label: 'Dysk', value: '512GB SSD + 1TB HDD' },
      { label: 'Karta graficzna', value: 'Intel UHD Graphics 630' },
      { label: 'System', value: 'Windows 11 Pro' },
      { label: 'Porty', value: 'USB 3.2, DisplayPort, HDMI' },
      { label: 'Gwarancja', value: '36 miesięcy' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Dell UltraSharp U2722DE',
    slug: 'dell-ultrasharp-u2722de',
    category: 'Monitory',
    price: 1299,
    shortDescription: 'Monitor 27" QHD z USB-C i IPS',
    description: 'Dell UltraSharp U2722DE to profesjonalny monitor 27 cali z rozdzielczością QHD (2560x1440). Matryca IPS zapewnia doskonałe odwzorowanie kolorów i szerokie kąty widzenia. Port USB-C umożliwia ładowanie laptopa i przesyłanie danych jednym kablem.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    specs: [
      { label: 'Przekątna', value: '27 cali' },
      { label: 'Rozdzielczość', value: 'QHD 2560x1440' },
      { label: 'Matryca', value: 'IPS' },
      { label: 'Odświeżanie', value: '60Hz' },
      { label: 'Kontrast', value: '1000:1' },
      { label: 'Porty', value: 'USB-C, HDMI, DisplayPort' },
      { label: 'Regulacja', value: 'Wysokość, obrót, pivot' },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: '4',
    name: 'HP LaserJet Pro M404dn',
    slug: 'hp-laserjet-pro-m404dn',
    category: 'Drukarki',
    price: 899,
    shortDescription: 'Drukarka laserowa mono z dupleksem',
    description: 'HP LaserJet Pro M404dn to wydajna drukarka laserowa monochromatyczna idealna do małych i średnich biur. Obsługuje automatyczny druk dwustronny, posiada moduł sieciowy Ethernet i drukuje z prędkością do 38 stron na minutę.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: [
      { label: 'Typ', value: 'Drukarka laserowa mono' },
      { label: 'Prędkość', value: 'Do 38 str/min' },
      { label: 'Rozdzielczość', value: '1200 x 1200 dpi' },
      { label: 'Druk dwustronny', value: 'Automatyczny' },
      { label: 'Pamięć', value: '256 MB' },
      { label: 'Łączność', value: 'Ethernet, USB' },
      { label: 'Wydajność', value: 'Do 80 000 str/mc' },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Logitech MX Keys',
    slug: 'logitech-mx-keys',
    category: 'Akcesoria',
    price: 459,
    shortDescription: 'Bezprzewodowa klawiatura dla profesjonalistów',
    description: 'Logitech MX Keys to premium klawiatura bezprzewodowa z podświetlanymi klawiszami. Klawisze idealnie wyprofilowane zapewniają komfortowe pisanie przez długie godziny. Możliwość sparowania z maksymalnie 3 urządzeniami.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
    specs: [
      { label: 'Typ', value: 'Klawiatura bezprzewodowa' },
      { label: 'Łączność', value: 'Bluetooth, USB receiver' },
      { label: 'Podświetlenie', value: 'Tak, automatyczne' },
      { label: 'Bateria', value: 'Do 10 dni z podświetleniem' },
      { label: 'Multi-device', value: 'Do 3 urządzeń' },
      { label: 'Kompatybilność', value: 'Windows, Mac, Linux' },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: '6',
    name: 'Dell PowerEdge T340',
    slug: 'dell-poweredge-t340',
    category: 'Serwery',
    price: 5499,
    shortDescription: 'Serwer wieżowy dla małych i średnich firm',
    description: 'Dell PowerEdge T340 to wydajny serwer wieżowy zaprojektowany dla małych i średnich przedsiębiorstw. Wyposażony w procesor Intel Xeon E-2224, oferuje niezawodność i skalowalność. Idealny do wirtualizacji, baz danych i aplikacji biznesowych.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    specs: [
      { label: 'Procesor', value: 'Intel Xeon E-2224' },
      { label: 'RAM', value: '16GB DDR4 ECC' },
      { label: 'Dyski', value: '2x 1TB SAS RAID 1' },
      { label: 'Zasilacz', value: '495W redundantny' },
      { label: 'RAID', value: 'PERC H330' },
      { label: 'Sloty PCIe', value: '4x PCIe Gen3' },
      { label: 'Gwarancja', value: '36 miesięcy ProSupport' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Ubiquiti UniFi Switch 24 PoE',
    slug: 'ubiquiti-unifi-switch-24-poe',
    category: 'Networking',
    price: 1599,
    shortDescription: 'Zarządzalny switch 24-portowy z PoE+',
    description: 'Ubiquiti UniFi Switch 24 PoE to profesjonalny przełącznik sieciowy z obsługą PoE+ na wszystkich portach. Idealny do zasilania punktów dostępowych, kamer IP i telefonów VoIP. Zarządzanie przez UniFi Controller.',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800',
    specs: [
      { label: 'Porty', value: '24x Gigabit RJ45 + 2x SFP' },
      { label: 'PoE+', value: '24 porty, budżet 250W' },
      { label: 'Przepustowość', value: '52 Gbps' },
      { label: 'Zarządzanie', value: 'UniFi Controller' },
      { label: 'VLAN', value: 'Tak' },
      { label: 'Montaż', value: 'Rack 19" 1U' },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: '8',
    name: 'Logitech MX Master 3S',
    slug: 'logitech-mx-master-3s',
    category: 'Akcesoria',
    price: 429,
    shortDescription: 'Ergonomiczna myszka dla profesjonalistów',
    description: 'Logitech MX Master 3S to flagowa myszka bezprzewodowa zaprojektowana dla maksymalnej produktywności. Cicha praca, precyzyjny sensor 8000 DPI i możliwość pracy na wielu urządzeniach jednocześnie.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
    specs: [
      { label: 'Typ', value: 'Myszka bezprzewodowa' },
      { label: 'Sensor', value: '8000 DPI' },
      { label: 'Łączność', value: 'Bluetooth, USB receiver' },
      { label: 'Bateria', value: 'Do 70 dni' },
      { label: 'Multi-device', value: 'Do 3 urządzeń' },
      { label: 'Cicha praca', value: 'Tak, 90% ciszej' },
    ],
    inStock: true,
    featured: false,
  },
];

// Funkcje pomocnicze
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
