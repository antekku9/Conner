# 🔧 NAPRAWA: Routing nie działa na GitHub Pages

**Data:** 25.03.2026  
**Status:** ✅ NAPRAWIONE - czeka na wgranie

---

## ❌ PROBLEM:

Strona **antekku9.github.io/Conner/** nie działa po wdrożeniu!

**Przyczyna:**  
React Router (`createBrowserRouter`) **nie wiedział** o base path `/Conner/`!

Router myślał że strona jest na:
- ❌ `antekku9.github.io/` (root)

Zamiast:
- ✅ `antekku9.github.io/Conner/` (subfolder)

---

## ✅ ROZWIĄZANIE:

Dodano **`basename`** do `createBrowserRouter` w `/src/app/routes.tsx`

### BYŁO (linie 10-23):
```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "obsluga-firm", Component: FirmyPage },
      { path: "szkoly", Component: SzkolyPage },
      { path: "instytucje-publiczne", Component: InstytucjePage },
      { path: "produkty", Component: ProductsPage },
      { path: "produkty/:slug", Component: ProductDetailPage },
    ],
  },
]);
```

### JEST TERAZ (linie 10-25):
```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "obsluga-firm", Component: FirmyPage },
      { path: "szkoly", Component: SzkolyPage },
      { path: "instytucje-publiczne", Component: InstytucjePage },
      { path: "produkty", Component: ProductsPage },
      { path: "produkty/:slug", Component: ProductDetailPage },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
```

**Zmiana:** Dodano drugi parametr `{ basename: import.meta.env.BASE_URL }`

---

## 🧠 JAK TO DZIAŁA:

### `import.meta.env.BASE_URL`
To specjalna zmienna Vite, która automatycznie zawiera wartość `base` z `vite.config.ts`:

**Lokalnie (dev):**
- `base: '/'` → `import.meta.env.BASE_URL = '/'`
- Router używa: `basename: '/'`
- Strona działa na: `localhost:5173/`

**GitHub Pages (production):**
- `base: '/Conner/'` → `import.meta.env.BASE_URL = '/Conner/'`
- Router używa: `basename: '/Conner/'`
- Strona działa na: `antekku9.github.io/Conner/`

**Automatycznie!** Nie trzeba nic więcej robić! 🎉

---

## 🚀 CO TERAZ ZROBIĆ:

### KROK 1: Wgraj zmianę na GitHub

**Opcja A - Figma Make:**
1. Kliknij "Publish"
2. Wybierz "Update on GitHub"
3. Poczekaj na potwierdzenie

**Opcja B - Git:**
```bash
git add src/app/routes.tsx
git commit -m "Fix: Add basename to React Router for GitHub Pages"
git push origin main
```

---

### KROK 2: Poczekaj na build

1. Wejdź: https://github.com/antekku9/Conner/actions
2. Nowy workflow automatycznie wystartuje
3. Poczekaj 5-6 minut aż będzie ✅ zielony

---

### KROK 3: Sprawdź stronę

1. Otwórz: https://antekku9.github.io/Conner
2. **Wyczyść cache!** Ctrl+Shift+R (Windows) lub Cmd+Shift+R (Mac)
3. **Strona powinna działać!** ✅

---

## 🔍 TYPOWE PROBLEMY Z REACT ROUTER NA GITHUB PAGES:

### Problem 1: Blank page (pusta strona)
**Przyczyna:** Brak `basename` w routerze  
**Objawy:**
- Biała strona
- Console error: "No routes matched location"
- URL: `antekku9.github.io/Conner/` (poprawny)

**Rozwiązanie:** ✅ Dodać `basename` (TO WŁAŚNIE NAPRAWILIŚMY!)

---

### Problem 2: 404 przy odświeżeniu podstrony
**Przyczyna:** GitHub Pages nie obsługuje client-side routing  
**Objawy:**
- Strona główna działa: `antekku9.github.io/Conner/` ✅
- Podstrona z menu działa: `antekku9.github.io/Conner/produkty` ✅
- Odświeżenie (F5) na podstronie: 404 ❌

**Rozwiązanie (jeśli wystąpi):**  
Trzeba dodać plik `404.html` który przekierowuje do `index.html`. Ale to zrobimy tylko jeśli będzie potrzebne!

---

### Problem 3: Assets nie ładują się (brak CSS/JS)
**Przyczyna:** Zły `base` URL w `vite.config.ts`  
**Objawy:**
- Strona bez stylów
- Console error: "Failed to load resource"
- CSS/JS mają zły URL: `antekku9.github.io/assets/...` zamiast `antekku9.github.io/Conner/assets/...`

**Rozwiązanie:** ✅ `base: '/Conner/'` w vite.config.ts (JUŻ JEST OK!)

---

## 📊 PORÓWNANIE PRZED I PO:

### PRZED (nie działało):
```
URL: antekku9.github.io/Conner/
       ↓
React Router: Szuka route "/" na antekku9.github.io/
       ↓
Nie znajduje (bo powinien szukać na /Conner/)
       ↓
❌ Error: No routes matched location "/Conner/"
       ↓
Biała/pusta strona
```

### PO (działa):
```
URL: antekku9.github.io/Conner/
       ↓
React Router: basename="/Conner/" - wie że jest w subfolderze
       ↓
Szuka route "/" względem /Conner/
       ↓
Znajduje HomePage (index: true)
       ↓
✅ Strona się ładuje!
```

---

## ✅ CHECKLIST NAPRAWY:

- [x] Zidentyfikowano problem (brak basename)
- [x] Naprawiono kod (dodano basename)
- [x] Stworzone instrukcje
- [ ] Wgrane na GitHub (TO ZRÓB TERAZ!)
- [ ] Build zakończony sukcesem
- [ ] Strona działa

---

## 🧪 JAK PRZETESTOWAĆ PO WDROŻENIU:

### Test 1: Strona główna
1. Otwórz: https://antekku9.github.io/Conner
2. Powinna się załadować strona główna ✅
3. Widzisz logo, menu, bannery ✅

### Test 2: Nawigacja z menu
1. Kliknij "Produkty" w menu
2. URL zmienia się na: `/Conner/produkty` ✅
3. Strona produktów się ładuje ✅

### Test 3: Bezpośredni URL
1. Wklej w adres: https://antekku9.github.io/Conner/produkty
2. Strona produktów powinna się załadować ✅
3. Nie 404 ❌

### Test 4: Formularz kontaktowy
1. Przewiń do sekcji kontakt
2. Wypełnij formularz testowy
3. Wyślij
4. Sprawdź sklep@conner.pl ✅

---

## 📖 DODATKOWE INFORMACJE:

### import.meta.env.BASE_URL vs hardcode

**❌ Hardcode (gorsze):**
```typescript
basename: '/Conner/',
```
- Działa na GitHub Pages ✅
- NIE działa lokalnie ❌ (dev server na localhost:5173)
- Trzeba pamiętać o zmianie przed lokalnym testem

**✅ import.meta.env.BASE_URL (lepsze):**
```typescript
basename: import.meta.env.BASE_URL,
```
- Działa na GitHub Pages ✅
- Działa lokalnie ✅
- Automatycznie dostosowuje się do środowiska
- Jedna konfiguracja w vite.config.ts

**TO UŻYWAMY!** 🎉

---

### Inne rozwiązania routingu dla GitHub Pages:

**1. HashRouter (alternatywa):**
```typescript
import { createHashRouter } from "react-router";
```
- URL: `antekku9.github.io/Conner/#/produkty` (z #)
- Nie wymaga basename
- Brzydkie URL z hash (#) ❌
- Nie polecam!

**2. BrowserRouter z basename (stare API):**
```typescript
<BrowserRouter basename="/Conner/">
  <Routes>...</Routes>
</BrowserRouter>
```
- Starsze API React Router
- Używamy nowszego: `createBrowserRouter` ✅

---

## 🎯 PODSUMOWANIE:

**Problem:** React Router nie wiedział o `/Conner/` base path  
**Naprawa:** Dodano `basename: import.meta.env.BASE_URL`  
**Rezultat:** Router automatycznie używa poprawnego base path  
**Status:** ✅ Gotowe do wgrania  
**Czas wdrożenia:** 6 minut od push

---

## 📞 JEŚLI NADAL NIE DZIAŁA PO WDROŻENIU:

### Sprawdź:
1. ✅ Czy workflow się wykonał pomyślnie (zielony checkmark)
2. ✅ Czy wyczyściłeś cache (Ctrl+Shift+R)
3. ✅ Czy czekałeś 2 minuty po buildzie (propagacja CDN)

### Wyślij mi:
1. Screenshot konsoli (F12 → Console)
2. Screenshot zakładki Network (F12 → Network)
3. URL który próbujesz otworzyć

Pomogę dalej! 💪

---

**Teraz: Wgraj zmianę na GitHub i poczekaj 6 minut!** 🚀
