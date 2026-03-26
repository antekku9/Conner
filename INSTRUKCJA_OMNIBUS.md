# 🇪🇺 Instrukcja: Dyrektywa Omnibus - Ceny produktów

## 📋 Co to jest dyrektywa Omnibus?

**Dyrektywa Omnibus** to unijna regulacja obowiązująca od 1 stycznia 2023 roku, która wymaga od sprzedawców internetowych **pokazywania najniższej ceny produktu z ostatnich 30 dni** przed zastosowaniem obniżki.

### 🎯 Cel:
Ochrona konsumentów przed fałszywymi promocjami (np. "przecena z 1000 zł na 800 zł", gdy produkt nigdy nie kosztował 1000 zł).

---

## ✅ Co zostało zaimplementowane na stronie Conner.pl

### 1️⃣ **Struktura danych produktu** (`/src/app/data/products.ts`)

Każdy produkt może mieć teraz 3 ceny:

```typescript
export interface Product {
  price: number;              // Aktualna cena
  oldPrice?: number;          // Cena przed obniżką (opcjonalna)
  lowestPrice30Days?: number; // OMNIBUS: Najniższa cena z 30 dni (opcjonalna)
  // ... reszta pól
}
```

### 2️⃣ **Komponent Omnibus** (`/src/app/components/products/OmnibusPriceInfo.tsx`)

Wyświetla niebieskie info box z informacją o najniższej cenie z 30 dni.

**Automatycznie wyświetla się:**
- ✅ **Tylko przy promocjach** (gdy `oldPrice` jest ustawione)
- ✅ **Na stronie szczegółów produktu**
- ✅ Różne komunikaty w zależności od sytuacji

### 3️⃣ **Komunikaty Omnibus:**

#### Przypadek 1: Aktualna cena = Najniższa z 30 dni
```
Najniższa cena z 30 dni przed obniżką: 2499 zł (równa aktualnej cenie promocyjnej)
```

#### Przypadek 2: Aktualna cena < Najniższa z 30 dni
```
Aktualna cena 2199 zł jest najniższą ceną tego produktu w ciągu ostatnich 30 dni przed obniżką.
```

#### Przypadek 3: Aktualna cena > Najniższa z 30 dni
```
Najniższa cena z 30 dni przed obniżką: 2699 zł
```

---

## 🛠️ Jak dodać produkt z promocją zgodnie z Omnibus

### Przykład 1: Produkt obniżony do najniższej ceny z 30 dni

```typescript
{
  id: '9',
  name: 'Laptop Dell Inspiron 15',
  slug: 'laptop-dell-inspiron-15',
  category: 'Laptopy',
  price: 2499,               // Aktualna cena promocyjna
  oldPrice: 2899,            // Cena przed promocją
  lowestPrice30Days: 2499,   // Najniższa cena z 30 dni = aktualna
  // ... reszta danych
}
```

**Wynik:**
- Cena: ~~2899 zł~~ **2499 zł**
- Info Omnibus: "Najniższa cena z 30 dni: 2499 zł (równa aktualnej cenie promocyjnej)"

---

### Przykład 2: Produkt obniżony do JESZCZE niższej ceny niż w ciągu 30 dni

```typescript
{
  id: '10',
  name: 'Monitor Samsung 27"',
  slug: 'monitor-samsung-27',
  category: 'Monitory',
  price: 999,                // Nowa, rekordowo niska cena
  oldPrice: 1299,            // Cena przed promocją
  lowestPrice30Days: 1099,   // Poprzednia najniższa cena z 30 dni
  // ... reszta danych
}
```

**Wynik:**
- Cena: ~~1299 zł~~ **999 zł**
- Info Omnibus: "Aktualna cena 999 zł jest najniższą ceną tego produktu w ciągu ostatnich 30 dni"

---

### Przykład 3: Produkt obniżony, ale w ciągu 30 dni był tańszy

```typescript
{
  id: '11',
  name: 'Drukarka HP LaserJet',
  slug: 'drukarka-hp-laserjet',
  category: 'Drukarki',
  price: 899,                // Aktualna cena promocyjna
  oldPrice: 1099,            // Cena przed promocją
  lowestPrice30Days: 849,    // W ciągu 30 dni był jeszcze tańszy!
  // ... reszta danych
}
```

**Wynik:**
- Cena: ~~1099 zł~~ **899 zł**
- Info Omnibus: "Najniższa cena z 30 dni przed obniżką: 849 zł"

---

### Przykład 4: Produkt bez promocji (NIE wyświetla Omnibus)

```typescript
{
  id: '12',
  name: 'Klawiatura Logitech',
  slug: 'klawiatura-logitech',
  category: 'Akcesoria',
  price: 299,
  // Brak oldPrice = brak promocji = brak Omnibus
  // ... reszta danych
}
```

**Wynik:**
- Cena: **299 zł**
- Info Omnibus: ❌ NIE wyświetla się (produkt nie jest w promocji)

---

## 📍 Gdzie wyświetla się informacja Omnibus?

### 1️⃣ **Lista produktów** (`ProductCard`)
- Mały tekst pod ceną: "Najniższa cena z 30 dni: XXX zł"
- Wyświetla się tylko przy produktach w promocji

### 2️⃣ **Strona szczegółów produktu** (`ProductDetailPage`)
- Duże niebieskie info box z ikoną ℹ️
- Szczegółowa informacja zgodna z przepisami

---

## ⚖️ Zgodność z prawem polskim

### Wymagania Omnibus w Polsce:

✅ **Spełnione:**
1. ✅ Najniższa cena z 30 dni jest **wyraźnie widoczna** przy promocjach
2. ✅ Informacja jest **czytelna i zrozumiała** dla konsumenta
3. ✅ Komunikat zawiera frazę "najniższa cena z 30 dni przed obniżką"
4. ✅ Wyświetla się **tylko przy rzeczywistych obniżkach cen**

### Kary za brak zgodności:
- UOKiK może nałożyć karę do **10% rocznego obrotu** firmy
- Dlatego **zawsze uzupełniaj** pole `lowestPrice30Days` przy produktach w promocji!

---

## 🔄 Jak aktualizować ceny zgodnie z Omnibus?

### Krok 1: Zanim wprowadzisz promocję

**Sprawdź historię cen z ostatnich 30 dni** i znajdź najniższą:

```
Ostatnie 30 dni:
- 15.03.2026: 2899 zł
- 10.03.2026: 2799 zł (akcja weekend)
- 05.03.2026: 2899 zł
- 01.03.2026: 2899 zł
--------------------------
Najniższa: 2799 zł
```

### Krok 2: Wprowadź promocję

```typescript
{
  price: 2599,               // Nowa cena promocyjna
  oldPrice: 2899,            // Cena regularna
  lowestPrice30Days: 2799,   // Najniższa z 30 dni (z 10.03)
}
```

### Krok 3: Po zakończeniu promocji

**Usuń** `oldPrice` (lub zostaw, jeśli to stała przecena):

```typescript
{
  price: 2899,               // Wróć do ceny regularnej
  // Usuń oldPrice i lowestPrice30Days
}
```

---

## 📅 Kiedy aktualizować `lowestPrice30Days`?

### Zasada:
Wartość `lowestPrice30Days` powinna być **aktualizowana co 30 dni** lub przy każdej zmianie ceny.

### Zalecany harmonogram:
- **Co tydzień** - sprawdź czy minęło 30 dni od ostatniej aktualizacji
- **Przy każdej promocji** - zaktualizuj przed wprowadzeniem obniżki
- **Używaj arkusza kalkulacyjnego** - śledź historię cen każdego produktu

---

## 🛡️ Najlepsze praktyki

### ✅ DOBRZE:

```typescript
// Uczciwa promocja
{
  price: 2499,
  oldPrice: 2899,
  lowestPrice30Days: 2499, // Najniższa cena = aktualna
}
```

### ⚠️ UWAGA:

```typescript
// Może być kłopotliwe (wprowadź tylko jeśli PRAWDA!)
{
  price: 2499,
  oldPrice: 2899,
  lowestPrice30Days: 2699, // Produkt był tańszy w ciągu 30 dni
}
```

### ❌ ŹLE:

```typescript
// Fałszywa promocja - NIELEGALNE!
{
  price: 2499,
  oldPrice: 2899,
  lowestPrice30Days: 3199, // Kłamstwo! Produkt nigdy tyle nie kosztował
}
```

---

## 📖 Przydatne linki

- [Ustawa Omnibus - tekst](https://www.gov.pl/web/uokik/dyrektywa-omnibus)
- [UOKiK - Informacje dla przedsiębiorców](https://www.uokik.gov.pl/)
- [Kalkulator rabatu](https://omnibus-kalkulator.pl/) (nieoficjalny)

---

## 🆘 Często zadawane pytania (FAQ)

### Q: Co jeśli produkt jest nowy (mniej niż 30 dni w ofercie)?

A: Użyj najniższej ceny od momentu wprowadzenia produktu do sprzedaży:

```typescript
{
  price: 999,
  oldPrice: 1199,
  lowestPrice30Days: 999, // Najniższa od momentu wprowadzenia
}
```

### Q: Co jeśli produkt nigdy nie był w promocji?

A: Nie dodawaj `oldPrice` ani `lowestPrice30Days` - Omnibus się nie wyświetli:

```typescript
{
  price: 1299,
  // Brak promocji = brak Omnibus
}
```

### Q: Co z produktami second-hand lub używanymi?

A: Omnibus **dotyczy również** produktów używanych sprzedawanych przez firmy.

### Q: Czy muszę archiwizować historię cen?

A: **TAK!** UOKiK może poprosić o udokumentowanie, że ceny były prawdziwe. Trzymaj arkusz Excel/Google Sheets z historią.

---

## 📝 Szablon arkusza śledzenia cen

```
| ID  | Nazwa produktu       | Data       | Cena  | Notatka          |
|-----|---------------------|------------|-------|------------------|
| 1   | Dell Latitude 5520  | 2026-03-01 | 2899  | Cena regularna   |
| 1   | Dell Latitude 5520  | 2026-03-10 | 2799  | Promocja weekend |
| 1   | Dell Latitude 5520  | 2026-03-15 | 2899  | Powrót do reg.   |
| 1   | Dell Latitude 5520  | 2026-03-26 | 2499  | Duża promocja    |
```

Najniższa z 30 dni przed 26.03 = **2799 zł** (z 10.03)

---

## 🎓 Podsumowanie

1. ✅ **Każda promocja** musi mieć `oldPrice` i `lowestPrice30Days`
2. ✅ **Sprawdzaj historię cen** przed wprowadzeniem promocji
3. ✅ **Dokumentuj zmiany cen** w arkuszu kalkulacyjnym
4. ✅ **Nie kłam** w cenach - UOKiK może ukarać wysokimi grzywnami
5. ✅ **Aktualizuj co 30 dni** wartość `lowestPrice30Days`

---

**Data utworzenia:** 26 marca 2026  
**Wersja:** 1.0  
**Zgodność:** Dyrektywa Omnibus (UE) 2019/2161
