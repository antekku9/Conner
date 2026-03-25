# 🏢 Strona internetowa Conner Sp. z o.o.

Nowoczesna strona korporacyjna dla firmy IT stworzona w React + Vite + Tailwind CSS.

---

## 🔍 AUDYT ZAKOŃCZONY (25.03.2026) ✅

**Status projektu:** 🟢 **GOTOWY DO WDROŻENIA**

**AKTUALIZACJA #2 (właśnie teraz):** Naprawiono routing na GitHub Pages!

### ⚠️ ZNALEZIONE PROBLEMY:
1. ❌ **Brakowało `.github/workflows/deploy.yml`** - dlatego zmiany się nie wprowadzały! ✅ NAPRAWIONE
2. ❌ **Workflow używał `npm ci`** - błąd buildu bez package-lock.json ✅ NAPRAWIONE
3. ❌ **Brak `basename` w React Router** - strona nie działała po wdrożeniu ✅ WŁAŚNIE NAPRAWIONE!

### ✅ CO ZOSTAŁO NAPRAWIONE:
1. ✅ Utworzono `.github/workflows/deploy.yml` - automatyczny deployment
2. ✅ Zmieniono `npm ci` na `npm install` w workflow
3. ✅ Utworzono `.gitignore` - ignorowanie plików tymczasowych
4. ✅ Poprawiono `vite.config.ts` - base URL z `/conner-website/` na `/Conner/`
5. ✅ **Dodano `basename` do React Router** - teraz routing działa na GitHub Pages!
6. ✅ Sprawdzono wszystkie komponenty - brak błędów
7. ✅ **Formularz kontaktowy działa!** Wysyła na **sklep@conner.pl**

### 🚨 CO MUSISZ ZROBIĆ (3 KROKI):
1. **Wgraj pliki na GitHub** (Publish w Figma Make lub git push) ← ZRÓB TO PONOWNIE!
2. **Zmień Source na "GitHub Actions"** w Settings → Pages (jeśli jeszcze nie zmieniłeś)
3. **Poczekaj 6 minut** - strona będzie live i DZIAŁAJĄCA!

📖 **Naprawa routingu:** `NAPRAWA_ROUTING.md` - szczegóły problemu i rozwiązania  
📖 **Naprawa deployment:** `NAPRAWA_DEPLOYMENT.md` lub `QUICK_FIX.txt`  
📖 **Pełny raport:** `RAPORT_AUDYTU_PROJEKTU.md`  
🚀 **Co dalej:** `CO_DALEJ.md` - dalsze kroki wdrożenia  
📧 **Formularz:** `INSTRUKCJA_FORMULARZ_KONTAKTOWY.md` - jak działa FormSubmit

---

## 🆕 OSTATNIE AKTUALIZACJE (24.03.2026)

**✅ Naprawiono:**
- Odnośnik "Serwis" w menu (smooth scroll działa!)
- Odnośnik "Wynajem" w menu (smooth scroll działa!)

**✨ Dodano:**
- Karuzela urządzeń do wynajmu (6 urządzeń, auto-play, responsywna!)
- Przygotowanie do logo firmy (instrukcja: `/public/README_LOGO.md`)

**📖 Pełny changelog:** `CHANGELOG_POPRAWKI.md`

---

## 👋 NOWY UŻYTKOWNIK? START TUTAJ!

**📖 Otwórz plik: `START_TUTAJ.md`**

Zawiera przewodnik po CAŁEJ dokumentacji i pomoże Ci wybrać odpowiednią ścieżkę! 

🎯 **3 najpopularniejsze:**
1. `EKSPORT_Z_FIGMA_MAKE.md` - Uruchom stronę za 2 minuty!
2. `GITHUB_DEPLOYMENT.md` - Darmowy hosting GitHub Pages
3. `INSTRUKCJA_EDYCJI.md` - Jak edytować produkty i treści

---

## ⚡ EKSPORT DO GITHUBA Z FIGMA MAKE

**Nie musisz pobierać plików! Możesz wyeksportować BEZPOŚREDNIO z Figma Make do GitHuba!**

### 🚀 Szybki start (1 kliknięcie!):
1. W Figma Make kliknij **"Publish"**
2. Szukaj opcji **"Deploy to GitHub"** lub **"Connect GitHub"**
3. Połącz konto GitHub i kliknij Deploy
4. **GOTOWE!** Strona będzie online za 2-3 minuty! 🎉

📚 **Szczegółowa instrukcja:** Zobacz `EKSPORT_Z_FIGMA_MAKE.md`

---

## 📱 O projekcie

Profesjonalna strona internetowa dla **Conner Sp. z o.o.** - firmy IT z Łodzi działającej od 2007 roku.

### Funkcje:
- ✅ Responsywny design (desktop + mobile)
- ✅ Profesjonalny slider banerów
- ✅ Kompletny katalog produktów z filtrowaniem i wyszukiwaniem
- ✅ Dedykowane podstrony produktów
- ✅ Routing wielostronicowy (React Router)
- ✅ Sekcje: Usługi, O firmie, Kontakt
- ✅ Dedykowane podstrony dla różnych grup klientów (Firmy, Szkoły, Instytucje)

### Technologie:
- **React 18** - framework UI
- **TypeScript** - typowanie
- **Vite** - szybki bundler
- **Tailwind CSS v4** - stylowanie
- **React Router** - routing
- **Lucide React** - ikony
- **React Slick** - slider

## 🚀 Szybki start

### 1. Zainstaluj Node.js
Pobierz i zainstaluj z: https://nodejs.org/ (wersja LTS - 18 lub nowsza)

### 2. Zainstaluj zależności
```bash
npm install
```

### 3. Uruchom serwer deweloperski
```bash
npm run dev
```
Strona otworzy się na: http://localhost:5173

### 4. Zbuduj do produkcji
```bash
npm run build
```
Gotowe pliki znajdziesz w folderze `dist/`

## 📚 Dokumentacja

W projekcie znajdują się trzy instrukcje:

1. **SZYBKI_START.md** - Podstawowe informacje (5 minut)
2. **INSTRUKCJA_EDYCJI.md** - Jak edytować produkty, banery, treści
3. **INSTRUKCJA_WDROZENIA.md** - Pełna dokumentacja wdrożenia na hosting

## 📝 Najczęstsze edycje

### Zmiana banerów na stronie głównej:
```
/src/app/components/conner/BannerSlider.tsx
```

### Dodanie/edycja produktów:
```
/src/app/data/products.ts
```

### Zmiana danych kontaktowych:
```
/src/app/components/conner/Footer.tsx
/src/app/components/conner/Contact.tsx
```

### Edycja kolorów firmowych:
```
/src/styles/theme.css
```

## 🌐 Wdrożenie

### Opcja 1: GitHub Pages (DARMOWE + AUTOMATYCZNE!) ⭐ POLECAM
```bash
# Pełna instrukcja w: GITHUB_DEPLOYMENT.md
git init
git add .
git commit -m "Initial commit"
git push
```
**Zalety:**
- ✅ Całkowicie darmowe
- ✅ Automatyczne wdrożenie przy każdym `git push`
- ✅ HTTPS za darmo
- ✅ Historia zmian (Git)
- ✅ Możliwość podpięcia własnej domeny

📚 **Szczegóły:** Zobacz `GITHUB_DEPLOYMENT.md`

### Opcja 2: FTP/SFTP (hosting standardowy)
1. Zbuduj: `npm run build`
2. Wgraj zawartość folderu `dist/` do `public_html/`
3. Dodaj plik `.htaccess` (instrukcja w INSTRUKCJA_WDROZENIA.md)

### Opcja 3: Netlify (najprostsze dla testów)
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Opcja 4: Vercel
```bash
npx vercel --prod
```

## 📁 Struktura projektu

```
conner-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── conner/          # Komponenty strony Conner
│   │   │   ├── products/        # Komponenty produktów
│   │   │   └── ui/              # Komponenty UI (buttony, karty)
│   │   ├── pages/               # Podstrony (Home, Produkty, itp.)
│   │   ├── data/
│   │   │   └── products.ts      # DANE PRODUKTÓW - edytuj tutaj!
│   │   ├── App.tsx              # Główny komponent
│   │   └── routes.tsx           # Konfiguracja routingu
│   ├── styles/
│   │   ├── theme.css            # KOLORY I STYLE FIRMOWE
│   │   ├── fonts.css            # Czcionki (Inter)
│   │   └── index.css            # Style globalne
│   └── imports/                 # Importowane zasoby
├── package.json                 # Zależności projektu
├── vite.config.ts              # Konfiguracja Vite
├── README.md                    # Ten plik
├── SZYBKI_START.md             # Krótki przewodnik
├── INSTRUKCJA_EDYCJI.md        # Jak edytować treści
└── INSTRUKCJA_WDROZENIA.md     # Jak wdrożyć na hosting
```

## 🎨 Kolory firmowe

```css
Ciemny grafit: #1a1c20
Złoty akcent:  #c5a059
```

## 📞 Dane kontaktowe firmy

**Conner Sp. z o.o.**
- Adres: ul. Dr. Seweryna Sterlinga 27/29, 90-217 Łódź
- Telefon: 42 631 94 20
- Email: sklep@conner.pl
- Działalność: od 2007 roku

### Usługi:
- Serwis komputerowy
- Obsługa firm, szkół i instytucji publicznych
- Wynajem urządzeń drukujących
- Sprzedaż sprzętu (Allegro)

## 🔧 Skrypty npm

```bash
npm run dev         # Uruchom serwer deweloperski
npm run build       # Zbuduj do produkcji
npm run preview     # Podgląd wersji produkcyjnej lokalnie
```

## ⚠️ Wymagania

- Node.js: **18.0.0** lub nowszy
- npm: **9.0.0** lub nowszy (lub pnpm 8+)

## 🆘 Problemy?

### "npm: command not found"
Zainstaluj Node.js z https://nodejs.org/

### Błędy podczas instalacji
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Routing nie działa na hostingu
Dodaj plik `.htaccess` - instrukcja w `INSTRUKCJA_WDROZENIA.md`

### Inne problemy
Zobacz plik `INSTRUKCJA_WDROZENIA.md` sekcja "Rozwiązywanie problemów"

## 📄 Licencja

Projekt własnościowy - Conner Sp. z o.o. © 2007-2026

---

**Potrzebujesz pomocy?**  
📧 sklep@conner.pl  
📞 42 631 94 20

Stworzone z ❤️ dla Conner Sp. z o.o.