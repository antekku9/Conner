# 🎠 Instrukcja - Karuzela Urządzeń do Wynajmu

## 📍 Czym jest karuzela?

Profesjonalny slider z automatycznym przewijaniem prezentujący urządzenia dostępne do wynajmu.

**Funkcje:**
- ✅ Auto-play (przewija co 4 sekundy)
- ✅ Manualne przewijanie (strzałki lewo/prawo)
- ✅ Responsywna (3 urządzenia na desktop, 2 na tablet, 1 na mobile)
- ✅ Pause on hover (zatrzymuje się gdy najeżdżasz myszką)
- ✅ Kropki nawigacyjne
- ✅ Przycisk play/pause

**Lokalizacja na stronie:**  
Sekcja "Sprzęt do Wynajmu" - znajduje się po sekcji "Wynajem", przed "Drukarkami".

---

## 📂 Plik do edycji

```
/src/app/components/conner/RentalCarousel.tsx
```

---

## ✏️ Jak dodać/edytować urządzenia

### Krok 1: Otwórz plik

```
/src/app/components/conner/RentalCarousel.tsx
```

### Krok 2: Znajdź tablicę `rentalDevices`

Około linii 10-60, zobaczysz:

```tsx
const rentalDevices: RentalDevice[] = [
  {
    id: 1,
    name: 'Konica Minolta bizhub C308',
    description: 'Profesjonalna kolorowa drukarka wielofunkcyjna A3',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk kolorowy A3', 'Kopiowanie i skanowanie', 'Do 30 str/min']
  },
  {
    id: 2,
    name: 'Konica Minolta bizhub 558e',
    description: 'Wydajne urządzenie wielofunkcyjne dla dużych biur',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
    specs: ['Druk A3 mono', 'Duplex automatyczny', 'Do 55 str/min']
  },
  // ... więcej urządzeń
];
```

---

## ➕ Dodawanie nowego urządzenia

### Przykład:

```tsx
const rentalDevices: RentalDevice[] = [
  // ... istniejące urządzenia ...
  
  // NOWE URZĄDZENIE - dodaj na końcu, przed "]"
  {
    id: 7,  // Kolejny numer (zwiększ o 1)
    name: 'Scanner dokumentów Fujitsu',
    description: 'Profesjonalny skaner do cyfryzacji dokumentów',
    imageUrl: 'https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=800',
    specs: ['Skanowanie 60 str/min', 'Duplex', 'ADF 100 arkuszy']
  }
];
```

### Pola:

| Pole | Opis | Wymagane | Przykład |
|------|------|----------|----------|
| `id` | Unikalny numer urządzenia | ✅ Tak | `7` |
| `name` | Nazwa urządzenia | ✅ Tak | `'Scanner Fujitsu'` |
| `description` | Krótki opis (1-2 zdania) | ✅ Tak | `'Profesjonalny skaner...'` |
| `imageUrl` | Link do zdjęcia | ✅ Tak | `'https://...'` |
| `specs` | Lista specyfikacji (tablica) | ❌ Nie | `['Spec 1', 'Spec 2']` |

---

## 🖼️ Dodawanie zdjęć urządzeń

### Opcja 1: Unsplash (darmowe zdjęcia)

1. Wejdź na: https://unsplash.com/
2. Wyszukaj np. "office printer", "laptop", "projector"
3. Znajdź zdjęcie i kliknij na nie
4. Skopiuj URL zdjęcia
5. Wklej do `imageUrl`

**Przykład:**
```tsx
imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800'
```

### Opcja 2: Własne zdjęcia

#### Krok 1: Umieść zdjęcie w projekcie
```
/public/images/devices/
  ├── drukarka-konica.jpg
  ├── laptop-dell.jpg
  └── projektor-epson.jpg
```

#### Krok 2: Użyj ścieżki względnej
```tsx
imageUrl: '/images/devices/drukarka-konica.jpg'
```

### Opcja 3: Zewnętrzny link (np. ze strony producenta)
```tsx
imageUrl: 'https://www.example.com/images/device.jpg'
```

---

## ✏️ Edycja istniejącego urządzenia

### Zmiana nazwy:
```tsx
{
  id: 1,
  name: 'NOWA NAZWA URZĄDZENIA',  // ← Zmień tutaj
  description: '...',
  // ...
}
```

### Zmiana opisu:
```tsx
{
  id: 1,
  name: '...',
  description: 'Nowy opis urządzenia - maksymalnie 2-3 zdania',  // ← Zmień tutaj
  // ...
}
```

### Zmiana specyfikacji:
```tsx
{
  id: 1,
  name: '...',
  description: '...',
  imageUrl: '...',
  specs: [
    'Pierwsza specyfikacja',     // ← Edytuj
    'Druga specyfikacja',         // ← Edytuj
    'Trzecia specyfikacja'        // ← Edytuj lub dodaj więcej
  ]
}
```

---

## 🗑️ Usuwanie urządzenia

Usuń cały blok `{ id: X, ... }`:

### PRZED:
```tsx
const rentalDevices: RentalDevice[] = [
  {
    id: 1,
    name: 'Urządzenie 1',
    // ...
  },
  {
    id: 2,
    name: 'Urządzenie DO USUNIĘCIA',  // ← TO USUWAMY
    // ...
  },
  {
    id: 3,
    name: 'Urządzenie 3',
    // ...
  }
];
```

### PO:
```tsx
const rentalDevices: RentalDevice[] = [
  {
    id: 1,
    name: 'Urządzenie 1',
    // ...
  },
  // Urządzenie 2 zostało usunięte
  {
    id: 3,
    name: 'Urządzenie 3',
    // ...
  }
];
```

---

## ⚙️ Ustawienia karuzeli

### Zmiana czasu auto-play

Znajdź linię ~55:

```tsx
const interval = setInterval(() => {
  nextSlide();
}, 4000); // ← 4000ms = 4 sekundy
```

**Zmień na:**
```tsx
}, 3000); // 3 sekundy
}, 5000); // 5 sekund
}, 6000); // 6 sekund
```

### Wyłączenie auto-play

Znajdź linię ~24:

```tsx
const [isAutoPlaying, setIsAutoPlaying] = useState(true); // ← true = włączone
```

**Zmień na:**
```tsx
const [isAutoPlaying, setIsAutoPlaying] = useState(false); // ← false = wyłączone
```

### Zmiana ilości widocznych urządzeń (desktop)

Znajdź linię ~30-40:

```tsx
const updateItemsPerView = () => {
  if (window.innerWidth < 768) {
    setItemsPerView(1);     // Mobile - 1 urządzenie
  } else if (window.innerWidth < 1024) {
    setItemsPerView(2);     // Tablet - 2 urządzenia
  } else {
    setItemsPerView(3);     // Desktop - 3 urządzenia ← ZMIEŃ TUTAJ
  }
};
```

**Zmień `3` na `4` dla 4 urządzeń na desktop:**
```tsx
setItemsPerView(4); // Desktop - 4 urządzenia
```

---

## 🎨 Dostosowanie stylów

### Zmiana kolorów przycisków

Znajdź (linia ~133):
```tsx
className="inline-block w-full text-center bg-[#c5a059] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b39050] transition-colors no-underline"
```

**Zmień:**
- `bg-[#c5a059]` - kolor przycisku
- `hover:bg-[#b39050]` - kolor przy najechaniu

### Zmiana wysokości zdjęć

Znajdź (linia ~102):
```tsx
<div className="relative h-64 bg-[#f9fafb] overflow-hidden">
```

**Zmień `h-64` na:**
- `h-48` - niższe zdjęcia
- `h-72` - wyższe zdjęcia
- `h-80` - jeszcze wyższe zdjęcia

---

## 📝 Przykład: Dodanie własnego urządzenia

```tsx
const rentalDevices: RentalDevice[] = [
  // ... istniejące urządzenia ...
  
  {
    id: 7,
    name: 'Drukarka Ricoh MP C3004',
    description: 'Kolorowa drukarka wielofunkcyjna A3 z wykończeniem dokumentów',
    imageUrl: '/images/devices/ricoh-mp-c3004.jpg',
    specs: [
      'Druk kolorowy A3',
      'Kopiowanie, skanowanie, faks',
      'Do 30 str/min',
      'Duplex automatyczny',
      'Wykończenie (zszywanie, dziurkowanie)'
    ]
  }
];
```

---

## 🚀 Wdrożenie zmian

### Metoda 1: Przez GitHub Web Interface

1. Wejdź na: https://github.com/antekku9/Conner
2. Nawiguj do: `src/app/components/conner/RentalCarousel.tsx`
3. Kliknij ikonę ołówka (Edit)
4. Wprowadź zmiany
5. Scroll w dół, kliknij **"Commit changes"**
6. Poczekaj 2-3 minuty - strona automatycznie się przebuduje!

### Metoda 2: Przez Git (lokalnie)

```bash
# Edytuj plik lokalnie
# Zapisz zmiany

git add src/app/components/conner/RentalCarousel.tsx
git commit -m "Aktualizacja urządzeń do wynajmu"
git push origin main
```

### Metoda 3: Przez Figma Make

1. Wprowadź zmiany w pliku
2. Kliknij **"Publish"**
3. Wybierz **"Update on GitHub"** lub **"Re-deploy"**
4. Gotowe!

---

## ✅ Checklist edycji

- [ ] Otworzyłem plik `/src/app/components/conner/RentalCarousel.tsx`
- [ ] Znalazłem tablicę `rentalDevices`
- [ ] Dodałem/edytowałem urządzenia
- [ ] Sprawdziłem czy wszystkie `id` są unikalne
- [ ] Dodałem zdjęcia (Unsplash lub własne)
- [ ] Zapisałem plik
- [ ] Wgrałem zmiany na GitHub
- [ ] Poczekałem 2-3 minuty na rebuild
- [ ] Sprawdziłem stronę: https://antekku9.github.io/Conner

---

## 🆘 Rozwiązywanie problemów

### Karuzela nie wyświetla się
- Sprawdź czy dodałeś `<RentalCarousel />` w `HomePage.tsx`
- Sprawdź konsolę przeglądarki (F12) czy są błędy

### Zdjęcia się nie ładują
- Sprawdź URL zdjęcia (otwórz w nowej karcie przeglądarki)
- Jeśli używasz własnych zdjęć, upewnij się że są w `/public/images/`
- Sprawdź ścieżkę: `/images/nazwa.jpg` (zaczyna się od `/`)

### Karuzela nie przewija
- Sprawdź czy masz więcej niż 3 urządzenia (dla desktop)
- Sprawdź czy nie masz błędów w składni JSON (przecinki, nawiasy)

### Auto-play nie działa
- Sprawdź `isAutoPlaying = true` (linia ~24)
- Sprawdź czy czas nie jest ustawiony na 0

### Błąd składni
Upewnij się że:
- Każdy obiekt jest otoczony `{ }`
- Obiekty są oddzielone przecinkami `,`
- Ostatni obiekt NIE ma przecinka po `}`
- Tablica kończy się na `];`

**Przykład poprawnej składni:**
```tsx
const rentalDevices: RentalDevice[] = [
  {
    id: 1,
    name: 'Device 1',
    // ...
  },  // ← przecinek po obiekcie
  {
    id: 2,
    name: 'Device 2',
    // ...
  }   // ← BRAK przecinka po ostatnim obiekcie
];
```

---

## 💡 Porady

### 🎨 Zdjęcia:
- Używaj zdjęć w orientacji poziomej (landscape)
- Minimalna szerokość: 800px
- Format: JPG lub PNG
- Rozmiar: maksymalnie 500KB (zoptymalizuj na: https://tinypng.com/)

### 📝 Teksty:
- **Nazwa:** Maksymalnie 50 znaków
- **Opis:** 1-2 zdania, maksymalnie 150 znaków
- **Specyfikacja:** 3-5 punktów, każdy maksymalnie 40 znaków

### ⚡ Wydajność:
- Im mniej urządzeń, tym szybsze ładowanie
- Optymalnie: 6-12 urządzeń
- Maksymalnie: 20 urządzeń

### 📱 Responsywność:
Przetestuj na różnych urządzeniach:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

---

## 📞 Potrzebujesz pomocy?

**Email:** sklep@conner.pl  
**Telefon:** 42 631 94 20

---

## 📚 Powiązane pliki

- **Homepage:** `/src/app/pages/HomePage.tsx` (miejsce gdzie jest karuzela)
- **Style:** Wbudowane w komponent (Tailwind CSS)
- **Zdjęcia:** `/public/images/devices/` (opcjonalnie dla własnych zdjęć)

---

**Powodzenia z edycją karuzeli!** 🎠

*Jeśli dodasz własne urządzenia i zdjęcia, Twoja strona będzie jeszcze bardziej profesjonalna!* 🚀
