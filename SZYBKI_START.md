# 🚀 Szybki Start - Strona Conner.pl

**Czas czytania: 5 minut**

---

## ⚡ NAJPIERW: Eksport z Figma Make do GitHuba

**Jeśli czytasz to w Figma Make i chcesz uruchomić stronę online:**

### Metoda 1-kliknięcia (NAJPROSTSZA!):

1. W Figma Make kliknij **"Publish"**
2. Szukaj opcji **"Deploy to GitHub"** lub **"Connect GitHub"**
3. Połącz konto GitHub (darmowe: https://github.com/signup)
4. Kliknij **"Deploy"**
5. **GOTOWE!** Strona online za 2-3 minuty! 🎉

📚 **Nie widzisz opcji GitHub?** Zobacz `EKSPORT_Z_FIGMA_MAKE.md` - szczegółowa instrukcja!

---

## 🎯 Co masz w tym projekcie

### 1️⃣ Pobierz kod (w Figma Make)
- Kliknij **"Download"** w prawym górnym rogu
- Zapisz i rozpakuj plik ZIP

### 2️⃣ Zainstaluj Node.js
- Pobierz: https://nodejs.org/ (wersja LTS)
- Zainstaluj i zrestartuj komputer

### 3️⃣ Otwórz terminal w folderze projektu
**Windows:** Shift + prawy przycisk myszy → "Otwórz okno PowerShell tutaj"
**Mac:** Aplikacja "Terminal" → przeciągnij folder

### 4️⃣ Zainstaluj zależności
```bash
npm install
```
*(Poczekaj 2-5 minut)*

### 5️⃣ Uruchom stronę lokalnie
```bash
npm run dev
```
Strona otworzy się na: `http://localhost:5173`

---

## 📝 Najczęstsze edycje

### 🖼️ Zmiana banerów w sliderze
**Plik:** `src/app/components/conner/BannerSlider.tsx`

Znajdź linijkę ~24-27 i zmień URL obrazów:
```tsx
const banners = [
  {
    id: 1,
    image: "https://twoj-serwer.pl/banner1.jpg",  // ← TUTAJ
    alt: "Banner promocyjny"
  },
  // Dodaj więcej banerów...
];
```

### 📦 Dodanie produktu
**Plik:** `src/app/data/products.ts`

Dodaj na końcu listy (przed `]`):
```tsx
{
  id: 'laptop-dell-123',
  name: 'Dell Latitude 5420',
  slug: 'dell-latitude-5420',
  category: 'Laptopy',
  price: 2999.99,
  image: 'https://obrazek.jpg',
  description: 'Wydajny laptop biznesowy',
  features: ['Intel i5', '16GB RAM', '512GB SSD'],
  specifications: {
    'Procesor': 'Intel Core i5-1135G7',
    'Pamięć': '16GB DDR4',
    'Dysk': '512GB NVMe SSD'
  }
},
```

### 📞 Zmiana danych kontaktowych
**Plik:** `src/app/components/conner/Footer.tsx`

Znajdź sekcję z danymi firmy (około linii 40-60) i edytuj:
```tsx
<p>ul. Dr. Seweryna Sterlinga 27/29</p>  // ← Adres
<p>90-217 Łódź</p>
<p>42 631 94 20</p>                       // ← Telefon
<p>sklep@conner.pl</p>                    // ← Email
```

### 🎨 Zmiana kolorów
**Plik:** `src/styles/theme.css`

```css
:root {
  --color-dark: #1a1c20;    /* Ciemny tło */
  --color-gold: #c5a059;    /* Złoty akcent */
}
```

### 📝 Edycja tekstu na stronie głównej
**Plik:** `src/app/components/conner/Hero.tsx` - główny baner
**Plik:** `src/app/components/conner/Services.tsx` - usługi
**Plik:** `src/app/components/conner/Trust.tsx` - sekcja zaufania

---

## 🚀 Wdrożenie na hosting

### Krok 1: Zbuduj projekt
```bash
npm run build
```
To stworzy folder `dist/` z gotowymi plikami

### Krok 2: Wgraj przez FTP
1. Pobierz **FileZilla**: https://filezilla-project.org/
2. Połącz się z hostingiem (dane od dostawcy)
3. Wejdź do folderu `public_html/`
4. Usuń stare pliki
5. Wgraj **zawartość** folderu `dist/`

### Krok 3: Sprawdź stronę
Wejdź na swoją domenę i gotowe! 🎉

---

## 🆘 Coś nie działa?

### "npm: command not found"
➡️ Zainstaluj Node.js i zrestartuj terminal

### "Cannot find module"
```bash
npm install
```

### Zmiany nie są widoczne
1. Zapisz plik (Ctrl+S)
2. Sprawdź terminal - czy nie ma błędów
3. Odśwież przeglądarkę (F5)

### Routing nie działa na hostingu (404)
Dodaj plik `.htaccess` w `public_html/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📚 Więcej informacji

Zobacz **INSTRUKCJA_WDROZENIA.md** dla pełnej dokumentacji.

---

**Gotowe! Teraz możesz edytować swoją stronę lokalnie i wdrażać na hosting. 🎊**