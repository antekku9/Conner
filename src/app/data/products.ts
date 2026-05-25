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
  
  // Pola dla rozbudowanej karty produktu:
  badges?: string[]; 
  features?: { title: string; description: string }[]; 
  includes?: string[];
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
  // ==========================================
  // KOMPUTERY STACJONARNE - SERIA CONNER
  // ==========================================
  {
    id: 'gc-mini',
    name: 'Conner GameCon Mini',
    slug: 'conner-gamecon-mini',
    category: 'Komputery stacjonarne',
    price: 3299,
    shortDescription: 'Świetny start w świat gamingu. i5-12400F i RTX 3050 w kompaktowej formie.',
    description: 'GameCon Mini to idealny wybór dla graczy szukających świetnego stosunku ceny do wydajności. Płynna gra w rozdzielczości 1080p, stabilny procesor Intel Core i5 12. generacji oraz karta graficzna z serii RTX pozwalają cieszyć się najnowszymi tytułami. Całość zamknięta w zgrabnej obudowie z przeszklonym panelem bocznym.',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800',
    badges: ['Bestseller', 'Gaming'],
    features: [
      { title: 'Ray Tracing', description: 'Technologia śledzenia promieni dzięki karcie RTX 3050' },
      { title: 'Kompaktowy rozmiar', description: 'Zmieści się na każdym biurku' }
    ],
    specs: [
      { label: 'Procesor', value: 'Intel Core i5-12400F' },
      { label: 'Karta graficzna', value: 'NVIDIA GeForce RTX 3050' },
      { label: 'Pamięć RAM', value: '16GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO' },
      { label: 'Zasilacz', value: '650W' },
      { label: 'Chłodzenie', value: 'Endorfy Spartan 5' },
      { label: 'Obudowa', value: 'Kompaktowa z oknem' },
      { label: 'System', value: 'Windows 11 Home' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'gc-standard',
    name: 'Conner GameCon Standard',
    slug: 'conner-gamecon-standard',
    category: 'Komputery stacjonarne',
    price: 5499,
    shortDescription: 'Złoty środek dla graczy. i5-14600KF, RTX 5060 i obudowa typu "akwarium".',
    description: 'Zbudowany, by przyciągać wzrok i miażdżyć wymagania sprzętowe. GameCon Standard łączy moc najnowszej architektury RTX 5060 z 14-generacją procesorów Intel. Panoramiczna obudowa DeepCool CH530 wyeksponuje chłodzenie wodne, oferując nie tylko genialne osiągi, ale i niesamowity wygląd Twojego stanowiska.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800',
    badges: ['Nowość', 'Polecamy'],
    features: [
      { title: 'Chłodzenie Cieczą', description: 'Niskie temperatury dzięki zestawowi AIO 240mm' },
      { title: 'Panoramiczny Design', description: 'Obudowa Dual-Chamber ze szkłem hartowanym' }
    ],
    specs: [
      { label: 'Procesor', value: 'Intel Core i5-14600KF' },
      { label: 'Karta graficzna', value: 'NVIDIA GeForce RTX 5060' },
      { label: 'Pamięć RAM', value: '16GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO' },
      { label: 'Zasilacz', value: '750W' },
      { label: 'Chłodzenie', value: 'Wodne AIO 240mm (MSI / Endorfy)' },
      { label: 'Obudowa', value: 'DeepCool CH530 4F' },
      { label: 'System', value: 'Windows 11 Home' }
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'gc-max',
    name: 'Conner GameCon Max',
    slug: 'conner-gamecon-max',
    category: 'Komputery stacjonarne',
    price: 9999,
    shortDescription: 'Ekstremalna wydajność i potęga RTX 5080. Komputer dla najbardziej wymagających.',
    description: 'Nie uznajemy kompromisów. GameCon Max to stacja bojowa, która pozwala na grę w rozdzielczości 4K na ustawieniach Ultra. Na pokładzie potężny Intel i7-14700KF, aż 32GB pamięci RAM oraz flagowa karta RTX 5080. Całość bezprzewodowo łączy się z siecią dzięki wbudowanemu modułowi Wi-Fi/Bluetooth.',
    image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=800',
    badges: ['Premium', '4K Gaming'],
    specs: [
      { label: 'Procesor', value: 'Intel Core i7-14700KF' },
      { label: 'Karta graficzna', value: 'NVIDIA GeForce RTX 5080' },
      { label: 'Pamięć RAM', value: '32GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO Wi-Fi + BT' },
      { label: 'Zasilacz', value: '850W' },
      { label: 'Chłodzenie', value: 'Wodne AIO 360mm DeepCool' },
      { label: 'Obudowa', value: 'DeepCool CH690' },
      { label: 'System', value: 'Windows 11 Pro' }
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'wc-office',
    name: 'Conner WorkCon Office',
    slug: 'conner-workcon-office',
    category: 'Komputery stacjonarne',
    price: 1899,
    shortDescription: 'Niezawodna stacja biurowa z obsługą wielu monitorów.',
    description: 'Idealny koń pociągowy do zadań administracyjnych, księgowości czy obsługi klienta. Dzięki zastosowaniu wydajnego procesora i3 12. generacji oraz dodatkowej karty graficznej, zyskujesz płynną pracę w aplikacjach biurowych i możliwość bezproblemowego podłączenia kilku monitorów jednocześnie.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800',
    specs: [
      { label: 'Procesor', value: 'Intel Core i3-12100F' },
      { label: 'Karta graficzna', value: 'Dedykowana (np. GeForce 210)' },
      { label: 'Pamięć RAM', value: '16GB DDR4' },
      { label: 'Płyta główna', value: 'H610' },
      { label: 'Zasilacz', value: '500W' },
      { label: 'Chłodzenie', value: 'Intel OEM' },
      { label: 'Obudowa', value: 'Armis 100 Solid' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'wc-standard',
    name: 'Conner WorkCon Standard',
    slug: 'conner-workcon-standard',
    category: 'Komputery stacjonarne',
    price: 3199,
    shortDescription: 'Wydajność i5 14. generacji dla płynnego multitaskingu w firmie.',
    description: 'Stworzony dla pracowników, którzy na co dzień korzystają z wielu zasobożernych aplikacji jednocześnie. 14-rdzeniowy (w modelu i5-14600) procesor gwarantuje, że arkusze kalkulacyjne, bazy danych i przeglądarka z dziesiątkami zakładek będą działać błyskawicznie.',
    image: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=800',
    specs: [
      { label: 'Procesor', value: 'Intel Core i5-14600' },
      { label: 'Pamięć RAM', value: '16GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO' },
      { label: 'Zasilacz', value: '550W' },
      { label: 'Chłodzenie', value: 'Intel OEM' },
      { label: 'Obudowa', value: 'Modecom Oberon / Armis 100 Solid' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'wc-business',
    name: 'Conner WorkCon Business',
    slug: 'conner-workcon-business',
    category: 'Komputery stacjonarne',
    price: 4599,
    shortDescription: 'Wielozadaniowość bez granic. Procesor i7, 32GB RAM i Wi-Fi.',
    description: 'Maszyna do zadań specjalnych. Nieważne, czy analizujesz wielkie zbiory danych, pracujesz w zaawansowanym środowisku wirtualnym czy zarządzasz skomplikowanymi projektami. Zapas pamięci operacyjnej (32GB) i procesor i7 dbają o absolutny brak opóźnień. Wbudowane moduły bezprzewodowe pozwalają na elastyczne ustawienie stacji w nowoczesnym biurze.',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?w=800',
    badges: ['Dla Profesjonalistów'],
    specs: [
      { label: 'Procesor', value: 'Intel Core i7-14700' },
      { label: 'Pamięć RAM', value: '32GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO Wi-Fi + BT' },
      { label: 'Zasilacz', value: '700W' },
      { label: 'Chłodzenie', value: 'Endorfy Spartan 5' },
      { label: 'Obudowa', value: 'Modecom Pro Glass' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'graphcon-standard',
    name: 'Conner GraphCon Standard',
    slug: 'conner-graphcon-standard',
    category: 'Komputery stacjonarne',
    price: 5999,
    shortDescription: 'Stworzony do pracy z grafiką i wideo. 32GB RAM i akceleracja RTX 5060.',
    description: 'Twoje narzędzie pracy w pakietach Adobe, DaVinci Resolve czy środowiskach 3D. Podwojona ilość pamięci RAM względem maszyn gamingowych zapewnia przestrzeń roboczą dla wielowarstwowych projektów, a dedykowana grafika NVIDIA znacznie przyspiesza renderowanie i eksport finalnego materiału.',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800',
    badges: ['Creative Studio'],
    features: [
      { title: 'Przestrzeń robocza', description: '32GB RAM do swobodnej pracy z wieloma projektami' },
      { title: 'Renderowanie GPGPU', description: 'Sprzętowe przyspieszenie dzięki RTX 5060' }
    ],
    specs: [
      { label: 'Procesor', value: 'Intel Core i5-14600KF' },
      { label: 'Karta graficzna', value: 'NVIDIA GeForce RTX 5060' },
      { label: 'Pamięć RAM', value: '32GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO Wi-Fi + BT' },
      { label: 'Zasilacz', value: '700W' },
      { label: 'Chłodzenie', value: 'Endorfy Spartan 5' },
      { label: 'Obudowa', value: 'Modecom Pro Glass' }
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'graphcon-pro',
    name: 'Conner GraphCon Pro',
    slug: 'conner-graphcon-pro',
    category: 'Komputery stacjonarne',
    price: 12499,
    shortDescription: 'Potężna stacja robocza. 64GB RAM, i7-14700K i wybitnie ciche środowisko pracy.',
    description: 'Sprzęt dla agencji kreatywnych, animatorów i montażystów pracujących na wysokich rozdzielczościach. Aż 64GB pamięci RAM, procesor Intel z odblokowanym mnożnikiem oraz mocarza RTX 5080. Całość zamknięta w klasowej obudowie be quiet! z wyciszanymi panelami, chłodzona wodą, aby zminimalizować hałas nawet pod 100% obciążeniem podczas wielogodzinnych renderów.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800',
    badges: ['Stacja Robocza', 'Cisza'],
    specs: [
      { label: 'Procesor', value: 'Intel Core i7-14700K' },
      { label: 'Karta graficzna', value: 'NVIDIA GeForce RTX 5080' },
      { label: 'Pamięć RAM', value: '64GB DDR4' },
      { label: 'Płyta główna', value: 'MSI B760 PRO Wi-Fi + BT' },
      { label: 'Zasilacz', value: '1000W' },
      { label: 'Chłodzenie', value: 'Wodne AIO 360mm' },
      { label: 'Obudowa', value: 'be quiet! Shadow Base 800' }
    ],
    inStock: true,
    featured: true,
  },

  // ==========================================
  // POZOSTAŁE KATEGORIE (ZACHOWANE)
  // ==========================================
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
    in
