// INSTRUKCJA: Aby dodać nowy produkt, dodaj obiekt do tablicy 'products' poniżej
// Każdy produkt musi zawierać: id, name, slug, category, price, description, shortDescription, image, inStock, specs (opcjonalne)

export interface Product {
  id: string;
  name: string;
  slug: string; 
  category: string;
  price: number;
  oldPrice?: number; 
  lowestPrice30Days?: number; 
  description: string;
  shortDescription: string;
  image: string;
  images?: string[]; 
  specs?: { label: string; value: string }[]; 
  inStock: boolean;
  featured?: boolean; 
  
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
  // KOMPUTERY STACJONARNE
  // ==========================================
  {
    id: 'gc-mini',
    name: 'GameCon Mini',
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
    name: 'GameCon Standard',
    slug: 'conner-gamecon-standard',
    category: 'Komputery stacjonarne',
    price: 5499,
    shortDescription: 'Złoty środek dla graczy. i5-14600KF, RTX 5060 i obudowa typu "akwarium".',
    description: 'Zbudowany, by przyciągać wzrok i miażdżyć wymagania sprzętowe. GameCon Standard łączy moc najnowszej architektury RTX 5060 z 14-generacją procesorów Intel. Panoramiczna obudowa wyeksponuje chłodzenie wodne, oferując nie tylko genialne osiągi, ale i niesamowity wygląd Twojego stanowiska.',
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
    name: 'GameCon Max',
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
    name: 'WorkCon Office',
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
    name: 'WorkCon Standard',
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
    name: 'WorkCon Business',
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
    name: 'GraphCon Standard',
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
    name: 'GraphCon Pro',
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
  // LAPTOPY
  // ==========================================
  {
    id: 'lap-acer-extensa-15',
    name: 'Acer Extensa 15',
    slug: 'acer-extensa-15',
    category: 'Laptopy',
    price: 2599,
    shortDescription: 'Niezawodny sprzęt biurowy i domowy z mocnym procesorem Intel i5.',
    description: 'Laptop Acer Extensa to świetny wybór do codziennej pracy, nauki i multimediów. Wyposażony w procesor Intel Core i5, aż 16GB pamięci operacyjnej oraz szybki i pojemny dysk SSD. Matowa matryca zapobiega męczeniu wzroku, a wytrzymała obudowa świetnie znosi podróże.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
    badges: ['Optymalny'],
    specs: [
      { label: 'Procesor', value: 'Intel Core i5' },
      { label: 'Pamięć RAM', value: '16GB DDR4' },
      { label: 'Dysk', value: '512GB SSD NVMe' },
      { label: 'Ekran', value: '15.6" FHD (1920x1080) Matowy' },
      { label: 'System', value: 'Windows 11 Home' }
    ],
    inStock: true,
    featured: true,
  },

  // ==========================================
  // MONITORY
  // ==========================================
  {
    id: 'mon-dell-p2725he',
    name: 'Dell P2725HE',
    slug: 'dell-p2725he',
    category: 'Monitory',
    price: 899,
    shortDescription: 'Nowoczesny 27-calowy monitor biurowy z zaawansowanym hubem USB-C.',
    description: 'Monitor Dell P2725HE to doskonałe centrum produktywności. Matryca IPS zapewnia perfekcyjne odwzorowanie kolorów, a podwyższone odświeżanie 100Hz sprawia, że interfejs systemu działa płynniej. Wbudowany hub USB-C o mocy 90W pozwala na zasilanie laptopa, przesyłanie obrazu i sieci po jednym kablu.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    specs: [
      { label: 'Przekątna', value: '27 cali' },
      { label: 'Rozdzielczość', value: 'FHD 1920x1080' },
      { label: 'Matryca', value: 'IPS, 100Hz' },
      { label: 'Złącza', value: 'USB-C (90W), HDMI, DisplayPort, RJ45' },
      { label: 'Ergonomia', value: 'Regulacja wysokości, Tilt, Swivel, Pivot' }
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'mon-philips-24e2n1100',
    name: 'Philips 24E2N1100',
    slug: 'philips-24e2n1100',
    category: 'Monitory',
    price: 399,
    shortDescription: 'Przystępny cenowo, bezramkowy ekran 24" o odświeżaniu 100Hz.',
    description: 'Philips z serii E to idealny balans między świetnym designem a wydajnością. Wyróżnia się bezramkową matrycą IPS oraz odświeżaniem na poziomie 100Hz, które zmniejsza smużenie obrazu i chroni Twój wzrok. Świetnie nadaje się do standardowej pracy biurowej i konsumpcji multimediów.',
    image: 'https://images.unsplash.com/photo-1585792180566-04428cb524f8?w=800',
    specs: [
      { label: 'Przekątna', value: '24 cale' },
      { label: 'Rozdzielczość', value: 'FHD 1920x1080' },
      { label: 'Matryca', value: 'IPS, 100Hz' },
      { label: 'Czas reakcji', value: '1 ms (MPRT)' },
      { label: 'Technologie', value: 'Flicker-free, Low Blue Mode' }
    ],
    inStock: true,
    featured: false,
  },

  // ==========================================
  // DRUKARKI
  // ==========================================
  {
    id: 'prn-hp-m404dn',
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
      { label: 'Łączność', value: 'Ethernet, USB' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'prn-brother-t430',
    name: 'Brother DCP-T430W',
    slug: 'brother-dcp-t430',
    category: 'Drukarki',
    price: 699,
    shortDescription: 'Tania w eksploatacji domowa drukarka atramentowa z systemem napełniania i Wi-Fi.',
    description: 'Urządzenie z serii InkBenefit Plus. Oferuje niezwykle niski koszt druku dzięki systemowi wbudowanych pojemników na atrament, które łatwo się napełnia. Świetnie sprawdza się w małym biurze oraz u uczniów. Posiada wbudowaną łączność bezprzewodową do pracy prosto ze smartfona.',
    image: 'https://images.unsplash.com/photo-1598550473950-89196b087095?w=800',
    badges: ['Tani druk'],
    specs: [
      { label: 'Typ', value: 'Atramentowa, kolorowa' },
      { label: 'Zasilanie atramentem', value: 'System zbiornikowy (CISS)' },
      { label: 'Łączność', value: 'Wi-Fi, USB' },
      { label: 'Funkcje', value: 'Druk, Kopia, Skaner' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'prn-brother-t530',
    name: 'Brother DCP-T530W',
    slug: 'brother-dcp-t530',
    category: 'Drukarki',
    price: 849,
    shortDescription: 'Wydajne urządzenie wielofunkcyjne InkBenefit Plus dla domu i małego biura.',
    description: 'Szybsza alternatywa dla modelu T430. Posiada wygodny, 1-wierszowy wyświetlacz LCD oraz w pełni uszczelniony, łatwy w uzupełnianiu system atramentów. W komplecie z urządzeniem otrzymujesz atrament pozwalający na wydruk tysięcy stron.',
    image: 'https://images.unsplash.com/photo-1598550473950-89196b087095?w=800',
    specs: [
      { label: 'Typ', value: 'Atramentowa, kolorowa' },
      { label: 'Zasilanie atramentem', value: 'System zbiornikowy (CISS)' },
      { label: 'Łączność', value: 'Wi-Fi, USB' },
      { label: 'Panel', value: 'Wyświetlacz LCD' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'prn-brother-t730',
    name: 'Brother DCP-T730DW',
    slug: 'brother-dcp-t730',
    category: 'Drukarki',
    price: 1099,
    shortDescription: 'Zaawansowana drukarka atramentowa z ADF i automatycznym drukiem dwustronnym.',
    description: 'Topowy model z rodziny InkBenefit Plus zaprojektowany do wyższych obciążeń. Oprócz zalet płynących z systemu zbiornikowego, model T730DW posiada automatyczny podajnik dokumentów (ADF) znacznie przyspieszający skanowanie oraz funkcję oszczędzania papieru dzięki automatycznemu drukowi dwustronnemu.',
    image: 'https://images.unsplash.com/photo-1598550473950-89196b087095?w=800',
    badges: ['Dla małego biura'],
    specs: [
      { label: 'Typ', value: 'Atramentowa, kolorowa' },
      { label: 'Druk dwustronny', value: 'Automatyczny (Duplex)' },
      { label: 'Skanowanie', value: 'Z automatycznym podajnikiem (ADF)' },
      { label: 'Łączność', value: 'Wi-Fi, USB' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'prn-sharp-bp51c26',
    name: 'Sharp BP-51C26',
    slug: 'sharp-bp-51c26',
    category: 'Drukarki',
    price: 12915,
    shortDescription: 'Potężne kolorowe urządzenie wielofunkcyjne formatu A3 dla dużych przedsiębiorstw.',
    description: 'Oparte na najnowszych technologiach, profesjonalne wolnostojące urządzenie wielofunkcyjne SRA3/A3 od Sharp. Prędkość druku wynosząca 26 stron na minutę w połączeniu ze skanowaniem sieciowym na potężnym wyświetlaczu dotykowym 10,1" robi z niego centrum dowodzenia obiegami dokumentów w korporacji. Oferuje gigantyczną wydajność i niesłychanie tani koszt wydruku.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    badges: ['Maszyna Biurowa', 'Format A3'],
    specs: [
      { label: 'Typ urządzenia', value: 'Wolnostojące wielofunkcyjne (A3, SRA3)' },
      { label: 'Prędkość druku', value: '26 stron na minutę' },
      { label: 'Panel', value: 'Dotykowy, 10,1 cala' },
      { label: 'Kasety na papier', value: 'Pojemne kasety dolne z możliwością rozbudowy' }
    ],
    inStock: true,
    featured: true,
  },

  // ==========================================
  // AKCESORIA
  // ==========================================
  {
    id: 'acc-logitech-mx-keys',
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
      { label: 'Bateria', value: 'Do 10 dni z podświetleniem' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'acc-logitech-mx-master-3s',
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
      { label: 'Bateria', value: 'Do 70 dni' }
    ],
    inStock: true,
    featured: false,
  },

  // ==========================================
  // SERWERY
  // ==========================================
  {
    id: 'srv-dell-t340',
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
      { label: 'Gwarancja', value: '36 miesięcy ProSupport' }
    ],
    inStock: true,
    featured: true,
  },

  // ==========================================
  // NETWORKING
  // ==========================================
  {
    id: 'net-unifi-switch-24-poe',
    name: 'Ubiquiti UniFi Switch 24 PoE',
    slug: 'ubiquiti-unifi-switch-24-poe',
    category: 'Networking',
    price: 1839,
    shortDescription: 'Zarządzalny switch 24-portowy z PoE+',
    description: 'Ubiquiti UniFi Switch 24 PoE to profesjonalny przełącznik sieciowy z obsługą PoE+ na wszystkich portach. Idealny do zasilania punktów dostępowych, kamer IP i telefonów VoIP. Zarządzanie z poziomu scentralizowanej chmury UniFi Controller.',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800',
    specs: [
      { label: 'Porty', value: '24x Gigabit RJ45 + 2x SFP' },
      { label: 'PoE+', value: '24 porty, budżet 250W' },
      { label: 'Zarządzanie', value: 'UniFi Controller' },
      { label: 'Montaż', value: 'Rack 19" 1U' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'net-unifi-u6-pro',
    name: 'Ubiquiti UniFi 6 Pro',
    slug: 'ubiquiti-unifi-6-pro',
    category: 'Networking',
    price: 862,
    shortDescription: 'Wydajny punkt dostępowy Wi-Fi 6 dedykowany do montażu sufitowego.',
    description: 'Access Point klasy biznesowej obsługujący najnowszy standard Wi-Fi 6 z przepustowością przekraczającą 5.3 Gbps. Bez problemu obsługuje środowiska o wysokim zagęszczeniu klientów - gwarantuje stabilne działanie nawet do 300 podłączonych urządzeń jednocześnie.',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800', 
    specs: [
      { label: 'Standard Wi-Fi', value: '802.11ax (Wi-Fi 6)' },
      { label: 'Zasilanie', value: 'PoE+' },
      { label: 'MIMO', value: '4x4 na pasmach 5 GHz, 2x2 na 2.4 GHz' },
      { label: 'Środowisko', value: 'Wewnętrzne (Indoor), obudowa z ochroną IP54' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'net-tplink-sg3428x',
    name: 'TP-Link Omada TL-SG3428X',
    slug: 'tp-link-omada-sg3428x',
    category: 'Networking',
    price: 1150, 
    shortDescription: 'Zarządzalny przełącznik L2+ z 24 portami Gigabitowymi i 4 slotami 10G SFP+.',
    description: 'Serce nowoczesnej sieci z rodziny TP-Link Omada SDN. Zapewnia błyskawiczne połączenie z serwerami szkieletowymi dzięki czterem slotom 10G. Może być centralnie kontrolowany z darmowego serwera kontrolera lub chmury sprzętowej TP-Link, ułatwiając zarządzanie flotą przełączników.',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800', 
    specs: [
      { label: 'Porty', value: '24x Gigabit RJ45, 4x 10G SFP+' },
      { label: 'Zarządzanie', value: 'Omada SDN (Chmura, Sprzętowe, Softowe)' },
      { label: 'Warstwa', value: 'L2+ oraz statyczny routing L3' }
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'net-tplink-eap650',
    name: 'TP-Link Omada EAP650',
    slug: 'tp-link-omada-eap650',
    category: 'Networking',
    price: 690, 
    shortDescription: 'Niskoprofilowy punkt dostępowy Wi-Fi 6 ze środowiska Omada.',
    description: 'Elegancki, zaledwie 33mm grubości, Access Point AX3000 pracujący w ekosystemie Omada. Szybki roaming (802.11k/v) pozwala na bezproblemowe przemieszczanie się po firmie bez zrywania połączeń na urządzeniach takich jak laptopy, telefony czy terminale magazynowe.',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800', 
    specs: [
      { label: 'Standard', value: 'Wi-Fi 6 AX3000' },
      { label: 'Zarządzanie', value: 'Omada SDN' },
      { label: 'Zasilanie', value: 'PoE+ lub zasilacz DC' },
      { label: 'Roaming', value: 'Szybki roaming, Seamless' }
    ],
    inStock: true,
    featured: false,
  }
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
