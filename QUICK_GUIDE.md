# ⚡ Szybki przewodnik edycji

## 🎯 Najczęstsze zmiany (krok po kroku)

### 1. Zmiana ceny produktu na Allegro

**Czas: 2 minuty**

1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/data/products.ts
2. Kliknij **ołówek** (Edit this file)
3. Znajdź produkt (Ctrl+F → wpisz nazwę)
4. Zmień `price: 1899` na nową cenę
5. Zmień `omnibusPrice: 2099` (najniższa cena z ostatnich 30 dni)
6. Przewiń na dół → **Commit changes**
7. Poczekaj 3 minuty → Sprawdź stronę!

---

### 2. Dodanie nowego produktu

**Czas: 5 minut**

1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/data/products.ts
2. Kliknij **ołówek**
3. Skopiuj ostatni produkt (cały blok od `{` do `},`)
4. Wklej na końcu listy (przed zamykającym `]`)
5. Zmień:
   - `id: '21'` → zmień na kolejny numer
   - `name: 'Nazwa produktu'`
   - `category:` → wybierz: 'laptopy', 'monitory', 'drukarki', 'akcesoria', 'inne'
   - `price: 1899` → cena
   - `omnibusPrice: 2099` → najniższa z 30 dni
   - `allegroLink: 'https://allegro.pl/...'` → link do oferty
   - `image: 'https://...'` → link do zdjęcia
   - `description: 'Opis...'`
6. **Commit changes**

**Przykład:**
```typescript
{
  id: '21',
  name: 'Monitor Dell 24"',
  category: 'monitory',
  price: 599,
  omnibusPrice: 649,
  image: 'https://images.unsplash.com/photo-...',
  allegroLink: 'https://allegro.pl/oferta/...',
  description: 'Profesjonalny monitor 24 cale Full HD',
},
```

---

### 3. Zmiana bannera na stronie głównej

**Czas: 3 minuty**

1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/components/conner/BannerSlider.tsx
2. Kliknij **ołówek**
3. Znajdź sekcję `banners` (linia ~12)
4. Wybierz banner do edycji (pierwszy, drugi lub trzeci)
5. Zmień:
   - `title: 'Nowy tytuł'`
   - `subtitle: 'Nowy podtytuł'`
   - `buttonText: 'Nowy przycisk'`
   - `buttonLink: '/produkty'` → link przycisku
   - `image: 'https://...'` → nowe tło
6. **Commit changes**

---

### 4. Zmiana urządzenia do wynajmu

**Czas: 3 minuty**

1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/components/conner/RentalCarousel.tsx
2. Kliknij **ołówek**
3. Znajdź sekcję `devices` (linia ~14)
4. Wybierz urządzenie do edycji
5. Zmień:
   - `name: 'Xerox...'`
   - `model: 'VersaLink...'`
   - `price: 'od 299 zł/mies'`
   - `image: 'https://...'`
6. **Commit changes**

---

### 5. Zmiana danych kontaktowych

**Telefon/email w stopce:**
1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/components/conner/Footer.tsx
2. Kliknij **ołówek**
3. Znajdź tekst do zmiany (Ctrl+F)
4. Zmień numer telefonu, email, adres
5. **Commit changes**

**Sekcja kontakt:**
1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/components/conner/Contact.tsx
2. Edytuj tak samo jak powyżej

---

### 6. Podmiana logo

**Czas: 2 minuty**

1. Przejdź: https://github.com/antekku9/Conner/tree/main/public
2. Kliknij na **logo.svg**
3. Kliknij **ikonę kosza** (usuń)
4. Wróć do folderu `public/`
5. Kliknij **Add file** → **Upload files**
6. Przeciągnij nowy `logo.svg` lub `logo.png`
7. **Commit changes**

Jeśli zmieniasz z SVG na PNG:
1. Otwórz: https://github.com/antekku9/Conner/blob/main/src/app/components/conner/Navbar.tsx
2. Kliknij **ołówek**
3. Linia 40: zmień `logo.svg` na `logo.png`
4. **Commit changes**

---

## ⏱️ Jak długo czekać na zmiany?

Po kliknięciu **Commit changes**:

1. GitHub Actions uruchamia się **automatycznie**
2. Budowanie trwa **1-2 minuty**
3. Wdrożenie trwa **30-60 sekund**
4. **Razem: około 2-3 minuty**

**Sprawdź status:** https://github.com/antekku9/Conner/actions

- 🟢 = Gotowe! ✅
- 🟡 = Trwa... ⏳
- 🔴 = Błąd! ❌

---

## 💡 Porady

### ✅ DLA
- **Zawsze sprawdź** składnię przed zapisem
- **Nie usuwaj** przecinków między elementami
- **Zachowaj wcięcia** (spacje) w kodzie
- **Testuj zmiany** na stronie (Ctrl+F5)

### ❌ NIE
- **Nie usuwaj** nawiasów `{}` lub `[]`
- **Nie zmieniaj** struktury pliku
- **Nie edytuj** plików w folderze `.github/workflows/`
- **Nie usuwaj** `pnpm-lock.yaml`

---

## 🆘 SOS - Coś się zepsuło!

### Czerwony krzyżyk w Actions?
1. Kliknij na czerwony workflow
2. Sprawdź błąd
3. Cofnij zmiany (przywróć poprzednią wersję pliku)

### Jak cofnąć zmiany?
1. Otwórz plik który psuje stronę
2. Kliknij **History** (prawy górny róg)
3. Znajdź ostatnią działającą wersję
4. Kliknij **<>** (View file at this point)
5. Skopiuj całą zawartość
6. Wróć do aktualnej wersji pliku
7. Kliknij **Edit**
8. Zaznacz wszystko (Ctrl+A) i usuń
9. Wklej starą zawartość
10. **Commit changes** → "Przywrócenie poprzedniej wersji"

### Strona nie działa wcale?
📧 Napisz na: sklep@conner.pl  
☎️ Zadzwoń: 42 631 94 20

---

## 📚 Więcej informacji

**Pełna dokumentacja:** Zobacz `README.md`  
**Historia zmian:** Zobacz `CHANGELOG.md`

---

**Strona:** https://antekku9.github.io/Conner  
**Firma:** Conner Sp. z o.o.
