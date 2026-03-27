# 🏢 Strona internetowa Conner Sp. z o.o.

Nowoczesna strona korporacyjna dla firmy IT stworzona w React + Tailwind CSS.

**🌐 Strona online:** https://antekku9.github.io/Conner

**⚡ Szybki przewodnik:** [QUICK_GUIDE.md](QUICK_GUIDE.md) - najczęstsze zmiany krok po kroku

---

## 📋 O projekcie

Profesjonalna strona dla **Conner Sp. z o.o.** - firmy IT z Łodzi działającej od 2007 roku.

### ✨ Funkcje:
- ✅ Responsywny design (desktop + mobile)
- ✅ Katalog produktów z Allegro (z cenami Omnibus)
- ✅ Dedykowane podstrony dla różnych grup klientów (Firmy, Szkoły, Instytucje)
- ✅ Formularz kontaktowy (wysyła na sklep@conner.pl)
- ✅ Slider banerów
- ✅ Karuzela urządzeń do wynajmu
- ✅ Automatyczne wdrażanie przy każdym push na GitHub

### 🛠️ Technologie:
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- GitHub Pages (hosting)

---

## 🚀 Jak wprowadzać zmiany (przez przeglądarkę)

### 1️⃣ **Edycja produktów na Allegro**

**Plik:** `/src/app/data/products.ts`

**Link:** https://github.com/antekku9/Conner/blob/main/src/app/data/products.ts

**Jak edytować:**
1. Otwórz link powyżej
2. Kliknij ikonę **ołówka** (Edit this file) w prawym górnym rogu
3. Znajdź produkt który chcesz edytować
4. Zmień dane (nazwę, cenę, opis, obrazek, link do Allegro)
5. Przewiń na dół i kliknij **"Commit changes"**
6. Poczekaj 2-3 minuty - strona automatycznie się zaktualizuje! ✅

**Przykład produktu:**
```typescript
{
  id: '1',
  name: 'Laptop Dell Latitude 5420',
  category: 'laptopy',
  price: 1899,
  omnibusPrice: 2099,  // najniższa cena z ostatnich 30 dni
  image: 'https://images.unsplash.com/photo-1...',
  allegroLink: 'https://allegro.pl/...',
  description: 'Wydajny laptop biznesowy...',
}
```

---

### 2️⃣ **Edycja banerów na stronie głównej**

**Plik:** `/src/app/components/conner/BannerSlider.tsx`

**Link:** https://github.com/antekku9/Conner/blob/main/src/app/components/conner/BannerSlider.tsx

**Jak edytować:**
1. Otwórz link powyżej
2. Kliknij **ołówek** (Edit)
3. Znajdź sekcję `banners` (około linia 12-40)
4. Zmień:
   - `title` - nagłówek
   - `subtitle` - podtytuł
   - `buttonText` - tekst przycisku
   - `buttonLink` - link przycisku
   - `image` - obrazek (użyj Unsplash lub własnego)
5. **Commit changes**

---

### 3️⃣ **Zmiana danych kontaktowych**

**Footer (stopka):**
- **Plik:** `/src/app/components/conner/Footer.tsx`
- **Link:** https://github.com/antekku9/Conner/blob/main/src/app/components/conner/Footer.tsx

**Sekcja kontakt:**
- **Plik:** `/src/app/components/conner/Contact.tsx`
- **Link:** https://github.com/antekku9/Conner/blob/main/src/app/components/conner/Contact.tsx

---

### 4️⃣ **Zmiana urządzeń do wynajmu**

**Plik:** `/src/app/components/conner/RentalCarousel.tsx`

**Link:** https://github.com/antekku9/Conner/blob/main/src/app/components/conner/RentalCarousel.tsx

**Jak edytować:**
1. Otwórz link
2. Znajdź sekcję `devices` (linia ~14)
3. Zmień nazwę urządzenia, model, cenę, obrazek
4. **Commit changes**

---

### 5️⃣ **Zmiana logo**

**Jak podmienić logo:**
1. Przejdź do: https://github.com/antekku9/Conner/tree/main/public
2. Kliknij na plik `logo.svg`
3. Kliknij ikonę **kosza** (usuń stare logo)
4. Wróć do folderu `public/`
5. Kliknij **"Add file"** → **"Upload files"**
6. Przeciągnij nowy plik `logo.svg` lub `logo.png`
7. **Commit changes**

Jeśli zmieniasz z SVG na PNG, musisz też edytować:
- **Plik:** `/src/app/components/conner/Navbar.tsx` (linia 40)
- Zmień `logo.svg` na `logo.png`

---

### 6️⃣ **Edycja treści na podstronach**

**Firmy:** `/src/app/pages/FirmyPage.tsx`  
**Szkoły:** `/src/app/pages/SzkolyPage.tsx`  
**Instytucje:** `/src/app/pages/InstytucjePage.tsx`

**Jak edytować:**
1. Otwórz plik na GitHubie
2. Kliknij **ołówek** (Edit)
3. Zmień teksty, nagłówki, opisy
4. **Commit changes**

---

### 7️⃣ **Zmiana kolorów firmowych**

**Plik:** `/src/styles/theme.css`

**Link:** https://github.com/antekku9/Conner/blob/main/src/styles/theme.css

Obecne kolory:
- Ciemny grafit: `#1a1c20`
- Złoty akcent: `#c5a059`

---

## ⚙️ Automatyczne wdrażanie

Po każdym **Commit changes** na GitHubie:

1. ⚡ GitHub Actions automatycznie uruchamia workflow
2. 🔨 Buduje nową wersję strony
3. 🚀 Wdraża na GitHub Pages
4. ✅ **Za 2-3 minuty strona jest zaktualizowana!**

**Sprawdź status:** https://github.com/antekku9/Conner/actions

- 🟢 **Zielona fajka** = Wdrożenie udane! ✅
- 🟡 **Żółte kółko** = Trwa budowanie... ⏳
- 🔴 **Czerwony krzyżyk** = Błąd (napisz do mnie!) ❌

---

## 📂 Najważniejsze pliki do edycji

| Co chcesz zmienić | Plik |
|-------------------|------|
| **Produkty Allegro** | `/src/app/data/products.ts` |
| **Banery** | `/src/app/components/conner/BannerSlider.tsx` |
| **Wynajem urządzeń** | `/src/app/components/conner/RentalCarousel.tsx` |
| **Stopka (kontakt)** | `/src/app/components/conner/Footer.tsx` |
| **Sekcja kontakt** | `/src/app/components/conner/Contact.tsx` |
| **Menu nawigacji** | `/src/app/components/conner/Navbar.tsx` |
| **Strona główna** | `/src/app/pages/HomePage.tsx` |
| **Podstrona Firmy** | `/src/app/pages/FirmyPage.tsx` |
| **Podstrona Szkoły** | `/src/app/pages/SzkolyPage.tsx` |
| **Podstrona Instytucje** | `/src/app/pages/InstytucjePage.tsx` |
| **Kolory** | `/src/styles/theme.css` |
| **Logo** | `/public/logo.svg` |

---

## 🎨 Kolory firmowe

```css
Ciemny grafit: #1a1c20
Złoty akcent:  #c5a059
Białe tło:     #ffffff
Szare tło:     #f5f5f5
```

---

## 📞 Dane kontaktowe

**Conner Sp. z o.o.**
- 📍 Adres: ul. Dr. Seweryna Sterlinga 27/29, 90-217 Łódź
- ☎️ Telefon: 42 631 94 20
- 📧 Email: sklep@conner.pl
- 🛒 Allegro: https://allegro.pl/uzytkownik/ConnerMedia
- 📅 Działalność: od 2007 roku

### Usługi:
- Serwis komputerowy
- Obsługa firm, szkół i instytucji publicznych
- Wynajem urządzeń drukujących
- Sprzedaż sprzętu IT

---

## 🆘 Pomoc

### Logo się nie wyświetla?
1. Sprawdź czy plik jest w folderze `/public/` (NIE `/src/`!)
2. Plik musi się nazywać dokładnie `logo.svg` lub `logo.png`
3. Wyczyść cache przeglądarki: **Ctrl+F5** (Windows) lub **Cmd+Shift+R** (Mac)

### Zmiany się nie pojawiają na stronie?
1. Sprawdź czy workflow zakończył się sukcesem: https://github.com/antekku9/Conner/actions
2. Poczekaj 2-3 minuty po commit
3. Wyczyść cache: **Ctrl+F5**

### Jak dodać nowy produkt?
1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/data/products.ts
2. Skopiuj istniejący produkt i wklej na końcu
3. Zmień `id` na unikalny (np. '21', '22')
4. Zmień wszystkie dane (nazwa, cena, kategoria, link)
5. **Commit changes**

### Jak usunąć produkt?
1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/data/products.ts
2. Usuń cały blok produktu (od `{` do `},`)
3. **Commit changes**

---

## 📄 Licencja

Projekt własnościowy - Conner Sp. z o.o. © 2007-2026

---

**Potrzebujesz pomocy?**  
📧 sklep@conner.pl  
📞 42 631 94 20

Stworzone z ❤️ dla Conner Sp. z o.o.