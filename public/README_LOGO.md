# 🎨 Jak dodać logo Conner do strony

## 📍 Umieść swoje logo tutaj:

Skopiuj swój plik logo do folderu `/public/`:

```
/public/
  ├── logo.svg        ← Twoje logo SVG (ZALECANE - przezroczyste!)
  ├── logo.png        ← Alternatywnie: logo PNG (z przezroczystym tłem)
  └── logo-dark.svg   ← Opcjonalnie: ciemna wersja logo
```

---

## ✏️ Edycja pliku Navbar.tsx

### Krok 1: Otwórz plik
`/src/app/components/conner/Navbar.tsx`

### Krok 2: Znajdź linię ~38-43 (w komponencie Link):

```tsx
<Link to="/" className="font-extrabold text-2xl tracking-tight no-underline text-[#1a1c20] flex items-center">
  {/* Logo image - replace src with your logo path */}
  {/* Uncomment and use your logo: */}
  {/* <img src="/logo.svg" alt="Conner" className="h-8 w-auto" /> */}
  
  {/* Current text logo - will be replaced */}
  <span>CONNER<span className="text-[#c5a059]"> sp. z o.o.</span></span>
</Link>
```

### Krok 3: Zamień na:

#### Opcja A - Logo SVG (ZALECANE):
```tsx
<Link to="/" className="flex items-center no-underline">
  <img 
    src="/logo.svg" 
    alt="Conner Sp. z o.o." 
    className="h-10 w-auto"
  />
</Link>
```

#### Opcja B - Logo PNG:
```tsx
<Link to="/" className="flex items-center no-underline">
  <img 
    src="/logo.png" 
    alt="Conner Sp. z o.o." 
    className="h-10 w-auto"
  />
</Link>
```

#### Opcja C - Logo + tekst obok:
```tsx
<Link to="/" className="flex items-center gap-3 no-underline">
  <img 
    src="/logo.svg" 
    alt="Conner" 
    className="h-10 w-auto"
  />
  <span className="font-bold text-xl text-[#1a1c20]">
    CONNER<span className="text-[#c5a059]"> sp. z o.o.</span>
  </span>
</Link>
```

---

## 🎨 Dostosowanie rozmiaru logo

Możesz zmienić wysokość logo modyfikując klasę `h-10`:

```tsx
className="h-8 w-auto"   // Małe logo (32px)
className="h-10 w-auto"  // Średnie logo (40px) ⭐ DOMYŚLNE
className="h-12 w-auto"  // Duże logo (48px)
className="h-14 w-auto"  // Bardzo duże logo (56px)
```

---

## 📱 Responsywność logo

### Logo mniejsze na mobile:
```tsx
<img 
  src="/logo.svg" 
  alt="Conner" 
  className="h-8 md:h-10 w-auto"
/>
```
- Mobile: 32px wysokości
- Desktop (md+): 40px wysokości

---

## 🎨 Wymagania dla pliku logo

### ✅ SVG (NAJLEPSZE):
- **Format:** SVG
- **Przezroczystość:** Tak
- **Kolory:** Najlepiej dopasowane do palety (#1a1c20, #c5a059)
- **Proporcje:** Dowolne (automatyczne dopasowanie)

### ✅ PNG (ALTERNATYWA):
- **Format:** PNG
- **Przezroczystość:** Tak (przezroczyste tło!)
- **Rozdzielczość:** Min. 200px wysokości (dla sharp display)
- **DPI:** 72-144 DPI
- **Kolory:** RGB

### ❌ NIE UŻYWAJ:
- JPG (nie ma przezroczystości!)
- GIF (słaba jakość)
- BMP (za duże pliki)

---

## 📂 Pełny przykład edycji

### PRZED (obecny stan):
```tsx
<Link to="/" className="font-extrabold text-2xl tracking-tight no-underline text-[#1a1c20] flex items-center">
  {/* Logo image - replace src with your logo path */}
  {/* Uncomment and use your logo: */}
  {/* <img src="/logo.svg" alt="Conner" className="h-8 w-auto" /> */}
  
  {/* Current text logo - will be replaced */}
  <span>CONNER<span className="text-[#c5a059]"> sp. z o.o.</span></span>
</Link>
```

### PO (z logo):
```tsx
<Link to="/" className="flex items-center no-underline">
  <img 
    src="/logo.svg" 
    alt="Conner Sp. z o.o." 
    className="h-10 w-auto transition-opacity hover:opacity-80"
  />
</Link>
```

---

## 🚀 Wdrożenie na GitHub

Po dodaniu logo do `/public/logo.svg`:

### Metoda 1: GitHub Web Interface (NAJPROSTSZA!)

1. Wejdź na GitHub: https://github.com/antekku9/Conner
2. Przejdź do folderu `public/`
3. Kliknij **"Add file"** → **"Upload files"**
4. Przeciągnij swój plik `logo.svg` lub `logo.png`
5. Kliknij **"Commit changes"**
6. Edytuj plik `src/app/components/conner/Navbar.tsx`:
   - Kliknij na plik
   - Kliknij ikonę ołówka (Edit)
   - Wprowadź zmiany z Kroku 3 powyżej
   - Kliknij **"Commit changes"**
7. **Poczekaj 2-3 minuty** - GitHub automatycznie przebuduje stronę!

### Metoda 2: Git lokalnie

```bash
# Skopiuj logo do folderu public/
cp /path/to/your/logo.svg public/logo.svg

# Commit i push
git add public/logo.svg
git add src/app/components/conner/Navbar.tsx
git commit -m "Dodanie logo Conner"
git push origin main
```

---

## ✅ Checklist

- [ ] Mam plik logo (SVG lub PNG z przezroczystym tłem)
- [ ] Skopiowałem logo do `/public/logo.svg` lub `/public/logo.png`
- [ ] Otworzyłem plik `/src/app/components/conner/Navbar.tsx`
- [ ] Znalazłem sekcję z komentarzem "Logo image"
- [ ] Usunąłem lub zakomentowałem `<span>CONNER...</span>`
- [ ] Dodałem `<img src="/logo.svg" ... />`
- [ ] Zapisałem plik
- [ ] Wgrałem zmiany na GitHub
- [ ] Poczekałem 2-3 minuty na rebuild
- [ ] Sprawdziłem stronę: https://antekku9.github.io/Conner

---

## 🆘 Problemy?

### Logo nie wyświetla się:
1. Sprawdź czy plik jest w `/public/logo.svg` (NIE `/src/logo.svg`!)
2. Sprawdź nazwę pliku - musi być dokładnie `logo.svg` lub `logo.png`
3. Sprawdź czy ścieżka w Navbar.tsx to `/logo.svg` (zaczyna się od `/`)
4. Wyczyść cache przeglądarki (Ctrl+F5)

### Logo jest za duże/małe:
Zmień `h-10` na `h-8` (mniejsze) lub `h-12` (większe)

### Logo jest nieostre:
- Dla SVG: Sprawdź czy plik nie jest uszkodzony
- Dla PNG: Użyj wyższej rozdzielczości (min. 200px wysokości)

### Logo ma białe tło zamiast przezroczystego:
- Przetwórz logo w edytorze graficznym (np. Photoshop, GIMP, Figma)
- Zapisz jako PNG z przezroczystością lub SVG

---

## 💡 Porady

### 🎨 Optymalizacja SVG:
Użyj narzędzia: https://jakearchibald.github.io/svgomg/
- Zmniejsza rozmiar pliku SVG o 30-70%!

### 📐 Proporcje logo:
- **Poziome logo** (szersze niż wyższe): Idealnie!
- **Kwadratowe logo**: Bardzo dobrze
- **Pionowe logo** (wyższe niż szersze): Może wymagać dostosowania wysokości

### 🎯 Testowanie:
Po dodaniu logo przetestuj na:
- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Mobile (responsive view)
- ✅ Tablet

---

## 📞 Potrzebujesz pomocy?

**Email:** sklep@conner.pl  
**Telefon:** 42 631 94 20

---

**Powodzenia!** 🎉

Po dodaniu logo Twoja strona będzie wyglądać jeszcze bardziej profesjonalnie! 🚀
