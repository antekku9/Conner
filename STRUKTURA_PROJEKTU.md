# 📁 Struktura projektu Conner.pl

## 🗂️ Główna struktura

```
conner-website/
├── 📄 README.md                      ← Zaczynij tutaj! Główny opis projektu
├── 📄 SZYBKI_START.md               ← Szybka instrukcja (5 minut)
├── 📄 INSTRUKCJA_EDYCJI.md          ← Jak edytować produkty i treści
├── 📄 INSTRUKCJA_WDROZENIA.md       ← Pełna instrukcja wdrożenia
├── 📄 CHECKLIST_WDROZENIA.md        ← Lista kontrolna przed wdrożeniem
├── 📄 .htaccess.example             ← Przykładowy plik .htaccess (skopiuj na hosting)
│
├── 📄 package.json                   ← Zależności projektu (NIE EDYTUJ)
├── 📄 vite.config.ts                ← Konfiguracja Vite (NIE EDYTUJ)
│
└── 📁 src/                          ← KOD ŹRÓDŁOWY - EDYTUJ TUTAJ
    ├── 📁 app/
    ├── 📁 styles/
    └── 📁 imports/
```

---

## 📂 Folder `/src/app/` - Główny kod aplikacji

```
src/app/
├── 📄 App.tsx                       ← Główny komponent (NIE EDYTUJ)
├── 📄 routes.tsx                    ← Konfiguracja routingu (NIE EDYTUJ)
│
├── 📁 components/                   ← KOMPONENTY REACT
│   ├── 📁 conner/                  ← 🔥 GŁÓWNE KOMPONENTY STRONY
│   ├── 📁 products/                ← Komponenty produktów
│   ├── 📁 ui/                      ← Komponenty UI (przyciski, karty, itp.)
│   └── 📁 figma/                   ← Komponenty systemowe (NIE EDYTUJ)
│
├── 📁 pages/                        ← PODSTRONY APLIKACJI
│   ├── HomePage.tsx                ← Strona główna
│   ├── ProductsPage.tsx            ← Katalog produktów
│   ├── ProductDetailPage.tsx       ← Szczegóły produktu
│   ├── FirmyPage.tsx               ← Usługi dla firm
│   ├── SzkolyPage.tsx              ← Usługi dla szkół
│   └── InstytucjePage.tsx          ← Usługi dla instytucji
│
└── 📁 data/
    └── 📄 products.ts              ← 🔥 DANE PRODUKTÓW - EDYTUJ!
```

---

## 🎨 Folder `/src/app/components/conner/` - Tu edytujesz stronę!

```
components/conner/
├── 📄 Layout.tsx                    ← Layout główny (struktura strony)
├── 📄 Navbar.tsx                    ← 🔧 Menu nawigacyjne
├── 📄 Hero.tsx                      ← 🔧 Sekcja główna (hero)
├── 📄 BannerSlider.tsx             ← 🔥 SLIDER BANERÓW - EDYTUJ!
├── 📄 Services.tsx                  ← 🔧 Sekcja usług
├── 📄 ServiceDetails.tsx            ← Szczegóły usług
├── 📄 Stats.tsx                     ← 🔧 Statystyki (liczby)
├── 📄 Trust.tsx                     ← 🔧 Sekcja "Dlaczego my?"
├── 📄 Printers.tsx                  ← 🔧 Sekcja wynajmu drukarek
├── 📄 FeaturedProducts.tsx          ← Wyróżnione produkty (strona główna)
├── 📄 Contact.tsx                   ← 🔧 Sekcja kontakt
├── 📄 ContactForm.tsx               ← Formularz kontaktowy
└── 📄 Footer.tsx                    ← 🔧 STOPKA - dane firmowe tutaj!
```

### 🔥 = Najczęściej edytowane
### 🔧 = Możesz edytować teksty

---

## 🎨 Folder `/src/styles/` - Style i kolory

```
styles/
├── 📄 index.css                     ← Style globalne (NIE EDYTUJ)
├── 📄 tailwind.css                  ← Tailwind CSS (NIE EDYTUJ)
├── 📄 theme.css                     ← 🔥 KOLORY FIRMOWE - EDYTUJ!
└── 📄 fonts.css                     ← Czcionki (dodawaj nowe tutaj)
```

**Co edytować w `theme.css`:**
```css
:root {
  --color-dark: #1a1c20;     /* Ciemny grafit */
  --color-gold: #c5a059;     /* Złoty akcent */
  /* Zmień te wartości by zmienić kolory strony */
}
```

---

## 📦 Folder `/src/app/data/` - Dane aplikacji

```
data/
└── 📄 products.ts                   ← 🔥 WSZYSTKIE PRODUKTY TUTAJ!
```

**Struktura pliku products.ts:**
```typescript
// Kategorie produktów
export const categories = [
  'Laptopy',
  'Komputery stacjonarne',
  'Monitory',
  // ... dodaj/usuń kategorie
];

// Lista produktów
export const products = [
  {
    id: '1',
    name: 'Nazwa produktu',
    slug: 'nazwa-produktu',
    category: 'Laptopy',
    price: 2999,
    // ... wszystkie dane produktu
  },
  // ... kolejne produkty
];
```

---

## 🖼️ Folder `/src/imports/` - Zasoby importowane

```
imports/
├── 📄 conner-it-services.html       ← Import z Figma (NIE EDYTUJ)
└── 📄 styles.css                    ← Style importowane (NIE EDYTUJ)
```

---

## 📄 Najważniejsze pliki do edycji

### 1️⃣ **PRODUKTY** (najczęstsze)
```
/src/app/data/products.ts
```
✅ Dodawanie produktów  
✅ Zmiana cen  
✅ Edycja opisów  
✅ Zarządzanie kategoriami  

### 2️⃣ **BANERY** (strona główna)
```
/src/app/components/conner/BannerSlider.tsx
```
✅ Zmiana zdjęć banerów  
✅ Edycja tekstów na banerach  
✅ Zmiana linków  

### 3️⃣ **DANE KONTAKTOWE**
```
/src/app/components/conner/Footer.tsx
/src/app/components/conner/Contact.tsx
```
✅ Adres firmy  
✅ Telefon  
✅ Email  
✅ Linki social media  

### 4️⃣ **KOLORY FIRMOWE**
```
/src/styles/theme.css
```
✅ Kolory główne  
✅ Kolory akcentów  
✅ Kolory tła  

### 5️⃣ **TEKSTY NA STRONIE**
```
/src/app/components/conner/Hero.tsx          - Główny baner
/src/app/components/conner/Services.tsx      - Usługi
/src/app/components/conner/Trust.tsx         - "Dlaczego my"
/src/app/components/conner/Printers.tsx      - Wynajem drukarek
```
✅ Nagłówki  
✅ Opisy  
✅ Teksty przycisków  

---

## 🚫 Czego NIE edytować

### Pliki systemowe:
- ❌ `package.json` - użyj `npm install nazwa-pakietu` zamiast ręcznej edycji
- ❌ `vite.config.ts` - konfiguracja buildera
- ❌ `tsconfig.json` - konfiguracja TypeScript
- ❌ `/src/app/App.tsx` - główny komponent (chyba że wiesz co robisz)
- ❌ `/src/app/routes.tsx` - routing (chyba że dodajesz nowe strony)

### Komponenty systemowe:
- ❌ `/src/app/components/figma/*` - komponenty z Figma Make
- ❌ `/src/app/components/ui/*` - biblioteka komponentów UI

### Style bazowe:
- ❌ `/src/styles/index.css` - style globalne
- ❌ `/src/styles/tailwind.css` - konfiguracja Tailwind

---

## 📊 Przepływ edycji

```
1. Edytuj plik lokalnie
   └─→ Visual Studio Code / inny edytor

2. Sprawdź zmiany lokalnie
   └─→ npm run dev
   └─→ http://localhost:5173

3. Zbuduj do produkcji
   └─→ npm run build
   └─→ Tworzy folder dist/

4. Wgraj na hosting
   └─→ FTP: Zawartość dist/ → public_html/
   └─→ Netlify: przeciągnij folder dist/

5. Sprawdź na żywo
   └─→ https://twoja-domena.pl
```

---

## 🔍 Jak znaleźć co edytować?

### Chcę zmienić tekst na stronie:
1. Otwórz stronę w przeglądarce
2. Znajdź sekcję którą chcesz edytować
3. Sprawdź w której sekcji się znajduje (Hero, Services, Contact, itp.)
4. Otwórz odpowiedni plik z `/src/app/components/conner/`

### Chcę dodać/edytować produkt:
→ `/src/app/data/products.ts`

### Chcę zmienić baner na stronie głównej:
→ `/src/app/components/conner/BannerSlider.tsx`

### Chcę zmienić dane kontaktowe:
→ `/src/app/components/conner/Footer.tsx`  
→ `/src/app/components/conner/Contact.tsx`

### Chcę zmienić kolory strony:
→ `/src/styles/theme.css`

### Chcę dodać nową stronę:
1. Utwórz plik w `/src/app/pages/NowaStrona.tsx`
2. Dodaj routing w `/src/app/routes.tsx`
3. Dodaj link w `/src/app/components/conner/Navbar.tsx`

---

## 🎓 Konwencje nazewnictwa

### Pliki komponentów:
- `PascalCase.tsx` - komponenty React (np. `BannerSlider.tsx`)
- `camelCase.ts` - pliki z danymi (np. `products.ts`)
- `kebab-case.css` - pliki styli (np. `theme.css`)

### Foldery:
- `lowercase` - wszystkie małe litery (np. `components`, `pages`)

### Komponenty w kodzie:
```typescript
// Dobre ✅
export function BannerSlider() { ... }

// Złe ❌
export function banner_slider() { ... }
```

---

## 💡 Szybkie wskazówki

### Gdzie jest co na stronie:

| Sekcja strony | Plik do edycji |
|--------------|----------------|
| Menu (górne) | `Navbar.tsx` |
| Duży baner z tekstem | `Hero.tsx` |
| Slider ze zdjęciami | `BannerSlider.tsx` |
| Kafelki usług | `Services.tsx` |
| Liczby (statystyki) | `Stats.tsx` |
| "Dlaczego my?" | `Trust.tsx` |
| Wynajem drukarek | `Printers.tsx` |
| Polecane produkty | `FeaturedProducts.tsx` |
| Formularz kontaktowy | `ContactForm.tsx` |
| Stopka (dane firmy) | `Footer.tsx` |

---

## 🆘 Nie wiesz co edytować?

1. **Zobacz `README.md`** - główny przewodnik
2. **Zobacz `SZYBKI_START.md`** - szybka instrukcja
3. **Zobacz `INSTRUKCJA_EDYCJI.md`** - jak edytować produkty i banery
4. **Zobacz `INSTRUKCJA_WDROZENIA.md`** - jak wdrożyć na hosting

---

**Masz pytania?**  
📧 sklep@conner.pl  
📞 42 631 94 20

---

*Ostatnia aktualizacja: Marzec 2026*
