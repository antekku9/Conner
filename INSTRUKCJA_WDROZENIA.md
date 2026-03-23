# 🚀 Instrukcja wdrożenia strony Conner.pl na własny hosting

## 📋 Spis treści
1. [Pobranie kodu z Figma Make](#1-pobranie-kodu)
2. [Instalacja środowiska lokalnego](#2-instalacja-środowiska)
3. [Edycja lokalna](#3-edycja-lokalna)
4. [Budowanie do produkcji](#4-budowanie-produkcyjne)
5. [Wdrożenie na hosting](#5-wdrożenie-na-hosting)
6. [Rozwiązywanie problemów](#6-rozwiązywanie-problemów)

---

## 1. 📥 Pobranie kodu z Figma Make

### Metoda A: Przez interfejs Figma Make (zalecane)
1. W prawym górnym rogu interfejsu Figma Make znajdź przycisk **"Download"** lub **"Export"**
2. Wybierz **"Download code"** lub **"Export as ZIP"**
3. Zapisz plik `.zip` na swoim komputerze
4. Rozpakuj archiwum

### Metoda B: Jeśli nie widzisz przycisku pobierania
- Sprawdź menu **File** → **Export**
- Lub menu hamburger (☰) w prawym górnym rogu
- Lub skontaktuj się z supportem Figma Make

---

## 2. 💻 Instalacja środowiska lokalnego

### Wymagania systemowe:
- **Node.js** w wersji 18 lub nowszej
- Menadżer pakietów: **npm** (instaluje się z Node.js) lub **pnpm**

### Sprawdź czy masz Node.js:
```bash
node --version
# Powinno pokazać: v18.x.x lub wyżej
```

### Jeśli nie masz Node.js:
1. Pobierz z: https://nodejs.org/
2. Zainstaluj wersję **LTS** (Long Term Support)
3. Zrestartuj terminal

### Instalacja projektu:
```bash
# 1. Przejdź do folderu z rozpakowanym projektem
cd sciezka/do/projektu

# 2. Zainstaluj wszystkie zależności
npm install

# ⏳ To może potrwać 2-5 minut przy pierwszym uruchomieniu
```

---

## 3. 🛠️ Edycja lokalna

### Uruchomienie serwera deweloperskiego:
```bash
npm run dev
```

**Co się stanie:**
- Strona otworzy się automatycznie w przeglądarce
- Adres: `http://localhost:5173`
- **Hot reload** - zmiany w kodzie widoczne natychmiast (bez odświeżania!)
- Terminal pokazuje komunikaty o błędach (jeśli są)

### Struktura projektu - co możesz edytować:

```
📁 src/
  📁 app/
    📁 components/
      📁 conner/           ← TUTAJ SĄ KOMPONENTY STRONY
        📄 Navbar.tsx      ← Menu nawigacyjne
        📄 Hero.tsx        ← Sekcja główna (baner)
        📄 BannerSlider.tsx ← Slider z banerami
        📄 Services.tsx    ← Usługi
        📄 Contact.tsx     ← Kontakt
        📄 Footer.tsx      ← Stopka
        
    📁 pages/              ← PODSTRONY
      📄 HomePage.tsx      ← Strona główna
      📄 ProductsPage.tsx  ← Katalog produktów
      📄 FirmyPage.tsx     ← Usługi dla firm
      
    📁 data/
      📄 products.ts       ← DANE PRODUKTÓW (edytuj tutaj!)
      
  📁 styles/
    📄 theme.css          ← KOLORY I STYLE (#1a1c20, #c5a059)
    📄 fonts.css          ← Czcionki (Inter)
```

### 📝 Najczęstsze edycje:

#### Zmiana treści banerów (slider):
**Plik:** `/src/app/components/conner/BannerSlider.tsx`

```tsx
const banners = [
  {
    id: 1,
    image: "URL_DO_TWOJEGO_OBRAZU",  // ← Zmień URL
    alt: "Twój opis"                  // ← Zmień tekst alternatywny
  },
  // ... dodaj więcej banerów
];
```

#### Dodanie/edycja produktów:
**Plik:** `/src/app/data/products.ts`

```tsx
{
  id: 'nowy-produkt',
  name: 'Nazwa produktu',
  slug: 'nazwa-produktu',
  category: 'Kategoria',
  price: 1999.99,
  image: 'URL_DO_OBRAZU',
  description: 'Opis produktu',
  features: ['Cecha 1', 'Cecha 2'],
  specifications: {
    'Specyfikacja': 'Wartość'
  }
}
```

#### Zmiana danych kontaktowych:
**Plik:** `/src/app/components/conner/Footer.tsx`

```tsx
// Znajdź i edytuj:
<p>ul. Dr. Seweryna Sterlinga 27/29</p>
<p>42 631 94 20</p>
<p>sklep@conner.pl</p>
```

#### Zmiana kolorów:
**Plik:** `/src/styles/theme.css`

```css
:root {
  --color-dark: #1a1c20;     /* Ciemny grafit */
  --color-gold: #c5a059;     /* Złoty akcent */
  /* Zmień wartości kolorów tutaj */
}
```

### 🔍 Podgląd zmian:
1. Zapisz plik (Ctrl+S / Cmd+S)
2. Sprawdź przeglądarkę - zmiany pojawią się automatycznie
3. Jeśli nie widzisz zmian, odśwież stronę (F5)

---

## 4. 🏗️ Budowanie do produkcji

### Kiedy projekt jest gotowy do wdrożenia:

```bash
# Zbuduj projekt
npm run build
```

**Co się stanie:**
- Tworzy folder `dist/` z gotowymi plikami
- Optymalizuje kod (usuwa zbędne spacje, komentarze)
- Kompresuje pliki dla szybszego ładowania
- Generuje pliki HTML, JS, CSS gotowe do wrzucenia na hosting

### Struktura folderu `dist/`:
```
📁 dist/
  📄 index.html           ← Główny plik HTML
  📁 assets/
    📄 index-abc123.js    ← Cały kod React (zminifikowany)
    📄 index-def456.css   ← Wszystkie style
    🖼️ [obrazy i inne zasoby]
```

---

## 5. 🌐 Wdrożenie na hosting

### Opcja A: Hosting standardowy (np. home.pl, OVH, cyber_Folks)

#### Przez FTP/SFTP:
1. **Pobierz klienta FTP:**
   - FileZilla (darmowy): https://filezilla-project.org/
   - WinSCP (Windows)
   - Cyberduck (Mac)

2. **Połącz się z hostingiem:**
   - Host: `ftp.twojadomena.pl`
   - Użytkownik: twój login FTP
   - Hasło: twoje hasło FTP
   - Port: 21 (FTP) lub 22 (SFTP)

3. **Wgraj pliki:**
   - Usuń zawartość folderu `public_html/` (lub `www/`)
   - Wgraj **CAŁĄ ZAWARTOŚĆ** folderu `dist/` do `public_html/`
   - **UWAGA:** Wgrywaj zawartość `dist/`, nie sam folder!

```
✅ PRAWIDŁOWO:
public_html/
  ├── index.html
  ├── assets/
  └── ...

❌ ŹLE:
public_html/
  └── dist/
      ├── index.html
      └── ...
```

4. **Sprawdź stronę:**
   - Wejdź na `https://twojadomena.pl`
   - Jeśli widzisz starą stronę, wyczyść cache przeglądarki (Ctrl+Shift+R)

#### Przez panel hostingu (np. cPanel):
1. Zaloguj się do panelu
2. Znajdź **"Menedżer plików"** (File Manager)
3. Przejdź do `public_html/`
4. Usuń stare pliki
5. Wgraj archiwum ZIP z zawartością `dist/`
6. Rozpakuj archiwum w panelu

### Opcja B: Netlify (najprostsze - zalecane do testów)

```bash
# 1. Zainstaluj Netlify CLI
npm install -g netlify-cli

# 2. Zbuduj projekt
npm run build

# 3. Wdróż
netlify deploy --prod --dir=dist
```

**Lub przez przeglądarkę:**
1. Wejdź na: https://app.netlify.com
2. Przeciągnij folder `dist/` na stronę
3. Gotowe! Otrzymasz link typu: `twoja-strona.netlify.app`

### Opcja C: Vercel (dla zaawansowanych)

```bash
# 1. Zainstaluj Vercel CLI
npm install -g vercel

# 2. Wdróż
vercel --prod
```

---

## 6. 🔧 Rozwiązywanie problemów

### Problem: "command not found: npm"
**Rozwiązanie:** Zainstaluj Node.js z https://nodejs.org/

### Problem: Błędy podczas `npm install`
```bash
# Wyczyść cache i spróbuj ponownie
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problem: Strona nie ładuje się po wdrożeniu
**Sprawdź:**
1. Czy wgrałeś zawartość `dist/`, nie sam folder `dist/`
2. Czy plik `index.html` jest w głównym katalogu (`public_html/`)
3. Czy hosting obsługuje SPA (Single Page Application) - może wymagać konfiguracji `.htaccess`

#### Dodaj plik `.htaccess` (dla Apache):
Utwórz plik `.htaccess` w `public_html/`:
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

### Problem: Routing nie działa (404 na podstronach)
**Rozwiązanie:** Skonfiguruj serwer by przekierowywał wszystkie requesty do `index.html`

**Dla Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Problem: Obrazy się nie ładują
**Sprawdź:**
1. Czy ścieżki do obrazów są poprawne
2. Czy obrazy zostały wgrane do folderu `assets/`
3. Czy w kodzie używasz relatywnych ścieżek (nie absolutnych)

### Problem: Zmiany nie są widoczne
```bash
# Wyczyść cache i przebuduj
rm -rf dist/
npm run build
# Wgraj ponownie na hosting
```

---

## 📊 Checklist wdrożenia

- [ ] Pobrałem kod z Figma Make
- [ ] Zainstalowałem Node.js
- [ ] Uruchomiłem `npm install`
- [ ] Przetestowałem lokalnie (`npm run dev`)
- [ ] Wykonałem wszystkie edycje
- [ ] Zbudowałem projekt (`npm run build`)
- [ ] Sprawdziłem folder `dist/`
- [ ] Wgrałem zawartość `dist/` na hosting
- [ ] Dodałem `.htaccess` (jeśli potrzebne)
- [ ] Sprawdziłem stronę w przeglądarce
- [ ] Sprawdziłem na mobile
- [ ] Przetestowałem wszystkie linki
- [ ] Przetestowałem routing (/produkty, /firmy, etc.)

---

## 🆘 Potrzebujesz pomocy?

### Kontakt do supportu Conner:
- **Email:** sklep@conner.pl
- **Telefon:** 42 631 94 20

### Przydatne linki:
- **Node.js:** https://nodejs.org/
- **Visual Studio Code** (edytor kodu): https://code.visualstudio.com/
- **FileZilla** (klient FTP): https://filezilla-project.org/
- **Netlify:** https://www.netlify.com/
- **React dokumentacja:** https://react.dev/

---

## 🎓 Dodatkowe zasoby

### Polecane edytory kodu:
- **Visual Studio Code** (najpopularniejszy, darmowy)
- WebStorm (płatny, dla profesjonalistów)
- Sublime Text

### Rozszerzenia VS Code (opcjonalne):
- ESLint - wykrywa błędy w kodzie
- Prettier - automatyczne formatowanie
- Tailwind CSS IntelliSense - podpowiedzi dla Tailwind

### Workflow: Edycja → Wdrożenie
1. Edytuj kod lokalnie
2. Sprawdź zmiany (`npm run dev`)
3. Zbuduj (`npm run build`)
4. Wgraj folder `dist/` na hosting przez FTP
5. Sprawdź na żywo

---

**Powodzenia z wdrożeniem! 🚀**

*Ostatnia aktualizacja: Marzec 2026*
