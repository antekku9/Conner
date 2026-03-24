# Instrukcja zarządzania stroną Conner Sp. z o.o.

## 📋 Spis treści
1. [🚀 Jak pobrać i wdrożyć stronę](#jak-pobrać-i-wdrożyć-stronę)
2. [Jak dodać nowy baner do slidera](#jak-dodać-nowy-baner-do-slidera)
3. [Jak edytować karuzelę urządzeń do wynajmu](#jak-edytować-karuzelę-urządzeń-do-wynajmu) ⭐ NOWE!
4. [Jak dodać nowy produkt](#jak-dodać-nowy-produkt)
5. [Jak edytować istniejący produkt](#jak-edytować-istniejący-produkt)
6. [Kategorie produktów](#kategorie-produktów)
7. [Wyróżnione produkty](#wyróżnione-produkty)
8. [Jak dodać logo firmy](#jak-dodać-logo-firmy) ⭐ NOWE!

---

## 🚀 Jak pobrać i wdrożyć stronę

### Szybki start:
1. **Pobierz kod** - W Figma Make kliknij "Download" w prawym górnym rogu
2. **Zainstaluj Node.js** - https://nodejs.org/ (wersja LTS)
3. **Otwórz terminal** w folderze projektu i uruchom:
   ```bash
   npm install
   npm run dev
   ```
4. **Edytuj lokalnie** - Strona otworzy się na http://localhost:5173
5. **Zbuduj do produkcji** - `npm run build` (tworzy folder `dist/`)
6. **Wgraj na hosting** - Zawartość folderu `dist/` wgraj przez FTP do `public_html/`

📚 **Szczegółowe instrukcje:** Zobacz pliki:
- `SZYBKI_START.md` - krótki przewodnik
- `INSTRUKCJA_WDROZENIA.md` - pełna dokumentacja wdrożenia i troubleshooting

---

## 🎨 Jak dodać nowy baner do slidera

**Plik do edycji:** `/src/app/components/conner/BannerSlider.tsx`

### Krok 1: Znajdź tablicę banerów
Otwórz plik i znajdź tablicę `banners` (około linii 9-10):

```typescript
const banners = [
  {
    image: 'URL_DO_OBRAZU',
    title: 'Tytuł baneru',
    subtitle: 'Podtytuł baneru',
    ctaText: 'Tekst przycisku',
    ctaLink: 'link',
  },
  // ... kolejne banery
];
```

### Krok 2: Dodaj nowy baner
Dodaj nowy obiekt do tablicy:

```typescript
{
  image: 'https://twoje-zdjecie.jpg',  // URL do Twojego zdjęcia
  title: 'Profesjonalny Serwis IT',    // Główny tytuł
  subtitle: 'Kompleksowa obsługa',     // Podtytuł
  ctaText: 'Dowiedz się więcej',       // Tekst na przycisku
  ctaLink: '#serwis',                  // Link (# dla sekcji, http dla zewnętrznych)
},
```

### Przykład:
```typescript
const banners = [
  {
    image: 'https://images.unsplash.com/photo-1234567890',
    title: 'Nowa Promocja!',
    subtitle: 'Laptopy Dell -20% taniej',
    ctaText: 'Zobacz ofertę',
    ctaLink: '/produkty',
  },
  // Poprzednie banery...
];
```

---

## 🛍️ Jak edytować karuzelę urządzeń do wynajmu

**Plik do edycji:** `/src/app/components/conner/RentalCarousel.tsx`

### Krok 1: Znajdź tablicę urządzeń
Otwórz plik i znajdź tablicę `devices` (około linii 9-10):

```typescript
const devices = [
  {
    image: 'URL_DO_OBRAZU',
    title: 'Tytuł urządzenia',
    description: 'Krótki opis urządzenia',
    ctaText: 'Tekst przycisku',
    ctaLink: 'link',
  },
  // ... kolejne urządzenia
];
```

### Krok 2: Dodaj nowe urządzenie
Dodaj nowy obiekt do tablicy:

```typescript
{
  image: 'https://twoje-zdjecie.jpg',  // URL do Twojego zdjęcia
  title: 'Serwer HP ProLiant DL380 Gen10',    // Główny tytuł
  description: 'Wysokowydajny serwer dla firm',     // Opis
  ctaText: 'Dowiedz się więcej',       // Tekst na przycisku
  ctaLink: '#serwery',                  // Link (# dla sekcji, http dla zewnętrznych)
},
```

### Przykład:
```typescript
const devices = [
  {
    image: 'https://images.unsplash.com/photo-server.jpg',
    title: 'Serwer HP ProLiant DL380 Gen10',
    description: 'Wysokowydajny serwer dla firm',
    ctaText: 'Dowiedz się więcej',
    ctaLink: '#serwery',
  },
  // Poprzednie urządzenia...
];
```

---

## 🛍️ Jak dodać nowy produkt

**Plik do edycji:** `/src/app/data/products.ts`

### Krok 1: Znajdź tablicę produktów
Otwórz plik i znajdź `export const products: Product[] = [` (około linii 33):

### Krok 2: Dodaj nowy produkt
Dodaj nowy obiekt do tablicy:

```typescript
{
  id: '9',                              // Unikalny numer (kolejny)
  name: 'Nazwa produktu',              // Pełna nazwa
  slug: 'nazwa-produktu',              // URL (małe litery, myślniki zamiast spacji)
  category: 'Laptopy',                 // Kategoria (musi być z listy kategorii)
  price: 2999,                         // Cena (tylko liczba, bez zł)
  oldPrice: 3499,                      // Opcjonalnie: stara cena (dla promocji)
  shortDescription: 'Krótki opis',     // Opis na liście (1-2 zdania)
  description: 'Pełny opis produktu...', // Szczegółowy opis
  image: 'https://link-do-zdjecia.jpg', // Główne zdjęcie
  specs: [                             // Opcjonalnie: specyfikacja
    { label: 'Procesor', value: 'Intel Core i7' },
    { label: 'RAM', value: '16GB DDR4' },
  ],
  inStock: true,                       // true = dostępny, false = niedostępny
  featured: true,                      // true = wyróżniony na stronie głównej
},
```

### Pełny przykład:
```typescript
{
  id: '9',
  name: 'Lenovo ThinkPad X1 Carbon',
  slug: 'lenovo-thinkpad-x1-carbon',
  category: 'Laptopy',
  price: 6999,
  oldPrice: 7999,
  shortDescription: 'Ultralekki laptop biznesowy premium',
  description: 'Lenovo ThinkPad X1 Carbon to flagowy ultrabook biznesowy. Waga poniżej 1,1 kg, procesor Intel Core i7 12. generacji, 16GB RAM i ekran 14" WUXGA. Idealny do pracy mobilnej.',
  image: 'https://images.unsplash.com/photo-laptop.jpg',
  specs: [
    { label: 'Procesor', value: 'Intel Core i7-1260P' },
    { label: 'RAM', value: '16GB LPDDR5' },
    { label: 'Dysk', value: '512GB SSD NVMe' },
    { label: 'Ekran', value: '14" WUXGA (1920x1200) IPS' },
    { label: 'Waga', value: '1.12 kg' },
    { label: 'Bateria', value: 'Do 16 godzin' },
    { label: 'System', value: 'Windows 11 Pro' },
  ],
  inStock: true,
  featured: true,
},
```

---

## ✏️ Jak edytować istniejący produkt

**Plik do edycji:** `/src/app/data/products.ts`

### Zmiana ceny:
Znajdź produkt po `id` lub `name` i zmień wartość `price`:
```typescript
price: 2499,  // Zmień tę liczbę
```

### Dodanie promocji:
Dodaj pole `oldPrice` przed `price`:
```typescript
oldPrice: 2899,  // Stara cena
price: 2499,     // Nowa cena
```

### Zmiana dostępności:
```typescript
inStock: false,  // false = brak w magazynie
```

### Zmiana zdjęcia:
```typescript
image: 'https://nowe-zdjecie.jpg',
```

---

## 📂 Kategorie produktów

**Plik do edycji:** `/src/app/data/products.ts` (linia ~23)

Dostępne kategorie:
```typescript
export const categories = [
  'Laptopy',
  'Komputery stacjonarne',
  'Monitory',
  'Drukarki',
  'Akcesoria',
  'Serwery',
  'Networking',
];
```

### Dodawanie nowej kategorii:
```typescript
export const categories = [
  'Laptopy',
  'Komputery stacjonarne',
  'Monitory',
  'Drukarki',
  'Akcesoria',
  'Serwery',
  'Networking',
  'Tablety',        // Nowa kategoria
  'Oprogramowanie', // Nowa kategoria
];
```

**Ważne:** Kategoria w produkcie MUSI być dokładnie taka sama jak w liście kategorii!

---

## ⭐ Wyróżnione produkty

Produkty z `featured: true` pojawiają się na stronie głównej w sekcji "Polecane produkty".

### Aby wyróżnić produkt:
```typescript
featured: true,  // Produkt pojawi się na stronie głównej
```

### Aby usunąć wyróżnienie:
```typescript
featured: false,  // Produkt będzie tylko w katalogu
```

**Zalecenie:** Wyróżniaj maksymalnie 3-6 produktów jednocześnie.

---

## 🔗 Automatyczne linki

System automatycznie tworzy:
- **URL produktu:** `/produkty/nazwa-produktu` (używa `slug`)
- **Kategorie:** Automatycznie grupuje produkty
- **Powiązane produkty:** Pokazuje produkty z tej samej kategorii
- **Licznik produktów:** Automatycznie liczy produkty w kategorii

---

## 📝 Najlepsze praktyki

### Zdjęcia:
- Używaj wysokiej jakości obrazów (minimum 800x600px)
- Zachowuj spójny styl zdjęć
- Używaj formatu JPG lub PNG

### Slug (URL):
- Tylko małe litery
- Myślniki zamiast spacji
- Bez polskich znaków (ą → a, ł → l)
- Przykład: "Dell Latitude 5520" → "dell-latitude-5520"

### Opisy:
- **shortDescription:** 1-2 zdania (max 150 znaków)
- **description:** Szczegółowy opis (2-3 akapity)

### Specyfikacja:
- Dodawaj najważniejsze parametry
- Zachowuj spójność nazw (zawsze "Procesor", nie raz "CPU" raz "Procesor")
- 5-10 parametrów to optymalna liczba

---

## 🎨 Jak dodać logo firmy

**Pliki:** 
- `/public/logo.svg` lub `/public/logo.png` - Twoje logo
- `/src/app/components/conner/Navbar.tsx` - Navbar do edycji

### Krok 1: Przygotuj plik logo

**Wymagania:**
- Format: **SVG** (zalecane) lub PNG
- Przezroczyste tło
- Wysokość: minimum 200px
- Kolory: dopasowane do palety firmowej

### Krok 2: Dodaj logo do projektu

Skopiuj plik logo do folderu `/public/`:
```
/public/
  └── logo.svg     ← Tutaj!
```

### Krok 3: Edytuj Navbar

Otwórz plik: `/src/app/components/conner/Navbar.tsx`

Znajdź (około linii 38-43):
```tsx
<Link to="/" className="font-extrabold text-2xl tracking-tight no-underline text-[#1a1c20] flex items-center">
  {/* Logo image - replace src with your logo path */}
  {/* Uncomment and use your logo: */}
  {/* <img src="/logo.svg" alt="Conner" className="h-8 w-auto" /> */}
  
  {/* Current text logo - will be replaced */}
  <span>CONNER<span className="text-[#c5a059]"> sp. z o.o.</span></span>
</Link>
```

Zamień na:
```tsx
<Link to="/" className="flex items-center no-underline">
  <img 
    src="/logo.svg" 
    alt="Conner Sp. z o.o." 
    className="h-10 w-auto"
  />
</Link>
```

### Krok 4: Dostosuj rozmiar (opcjonalnie)

Zmień `h-10` na:
- `h-8` - małe logo (32px)
- `h-10` - średnie logo (40px) ⭐ ZALECANE
- `h-12` - duże logo (48px)
- `h-14` - bardzo duże logo (56px)

### Responsywne logo (różne rozmiary na mobile/desktop):
```tsx
<img 
  src="/logo.svg" 
  alt="Conner" 
  className="h-8 md:h-10 w-auto"
/>
```

📚 **Pełna dokumentacja:** Zobacz `/public/README_LOGO.md`

---

## 🆘 Pomoc

Jeśli masz problemy:
1. Sprawdź czy nie ma błędów w składni (brakujące przecinki, cudzysłowy)
2. Upewnij się, że każdy produkt ma unikalny `id`
3. Sprawdź czy kategoria produktu istnieje w liście kategorii
4. Zweryfikuj poprawność URLi do zdjęć

---

**Data aktualizacji:** Marzec 2026  
**Wersja:** 1.1