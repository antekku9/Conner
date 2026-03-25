# 🚨 NAPRAWA: Dlaczego zmiany się nie wprowadzają

## ❌ ZNALEZIONY PROBLEM:

**Brakowało pliku `.github/workflows/deploy.yml`!**

Bez tego pliku GitHub Actions nie działał, więc zmiany w kodzie **NIE były automatycznie wdrażane** na stronę.

---

## ✅ CO ZOSTAŁO NAPRAWIONE (przed chwilą):

### 1. Utworzono workflow GitHub Actions
**Plik:** `.github/workflows/deploy.yml`
- ✅ Automatyczny build przy push do `main`
- ✅ Automatyczny deployment na GitHub Pages
- ✅ Poprawna konfiguracja permissions

### 2. Utworzono .gitignore
**Plik:** `.gitignore`
- ✅ Ignorowanie node_modules
- ✅ Ignorowanie dist
- ✅ Ignorowanie plików cache

### 3. Potwierdzono vite.config.ts
- ✅ Base URL poprawne: `/Conner/`
- ✅ GITHUB_PAGES env variable używana

---

## 🚀 CO MUSISZ TERAZ ZROBIĆ (5 KROKÓW):

### KROK 1: Wgraj nowe pliki na GitHub

**Opcja A - Przez Figma Make (ŁATWIEJSZE):**
```
1. Kliknij "Publish" w prawym górnym rogu
2. Wybierz "Update on GitHub"
3. Poczekaj na potwierdzenie
```

**Opcja B - Przez Git (jeśli masz lokalnie):**
```bash
git add .
git commit -m "Fix: Add GitHub Actions workflow + gitignore"
git push origin main
```

**⚠️ WAŻNE:** Ten krok jest KONIECZNY! Bez niego workflow nie trafi na GitHub!

---

### KROK 2: Sprawdź czy pliki są na GitHub

1. Otwórz: https://github.com/antekku9/Conner
2. Sprawdź czy widzisz folder `.github/`
3. Wejdź w: `.github/workflows/deploy.yml`
4. Sprawdź czy plik istnieje ✅

**Jeśli NIE WIDZISZ `.github/`:**
- Pliki się jeszcze nie wgrały
- Wróć do KROKU 1 i spróbuj ponownie
- Poczekaj 1-2 minuty i odśwież stronę

---

### KROK 3: Skonfiguruj GitHub Pages

1. Wejdź: https://github.com/antekku9/Conner/settings/pages
2. W sekcji "Build and deployment":
   - **Source:** Zmień na **"GitHub Actions"** ← BARDZO WAŻNE!
   - (Jeśli jest "Deploy from a branch" - ZMIEŃ na "GitHub Actions")
3. Kliknij **"Save"** (jeśli pojawi się przycisk)
4. Gotowe!

**⚠️ To jest NAJWAŻNIEJSZY krok!**  
Bez tego GitHub nie będzie używał workflow!

---

### KROK 4: Uruchom pierwszy build

**Opcja A - Automatycznie (poczekaj 2 minuty):**
GitHub Actions automatycznie zacznie build po wgraniu workflow.

**Opcja B - Manualnie (szybciej):**
1. Wejdź: https://github.com/antekku9/Conner/actions
2. Kliknij "Deploy to GitHub Pages" (po lewej stronie)
3. Kliknij "Run workflow" → "Run workflow" (zielony przycisk)
4. Poczekaj 2-3 minuty

---

### KROK 5: Sprawdź czy działa

1. Wejdź: https://github.com/antekku9/Conner/actions
2. Znajdź najnowszy workflow run
3. Poczekaj aż będzie **✅ zielony** (2-3 minuty)
4. Otwórz stronę: **https://antekku9.github.io/Conner**
5. Sprawdź formularz kontaktowy
6. **Wyczyść cache przeglądarki!** (Ctrl+Shift+R lub Cmd+Shift+R)

---

## 🔍 JAK SPRAWDZIĆ CZY WORKFLOW DZIAŁA?

### 1. Wejdź na zakładkę Actions
https://github.com/antekku9/Conner/actions

### 2. Sprawdź status:

#### ✅ SUKCES (zielony):
```
✅ Deploy to GitHub Pages
   All jobs completed successfully
```
**Rezultat:** Strona powinna być zaktualizowana!

#### 🟡 W TRAKCIE (żółty):
```
🟡 Deploy to GitHub Pages
   Running...
```
**Akcja:** Poczekaj 2-3 minuty

#### ❌ BŁĄD (czerwony):
```
❌ Deploy to GitHub Pages
   Some checks failed
```
**Akcja:** Kliknij w nazwę, zobacz logi, skopiuj błąd i wyślij mi!

---

## 🆘 ROZWIĄZYWANIE PROBLEMÓW

### Problem 1: Nie widzę folderu .github/ na GitHubie

**Przyczyna:** Pliki ukryte (zaczynające się od `.`) mogą być niewidoczne.

**Rozwiązanie:**
1. Sprawdź listę plików na głównej stronie repo
2. Jeśli nie widzisz `.github`, sprawdź przez:
   - https://github.com/antekku9/Conner/tree/main/.github
3. Jeśli dostaniesz 404 - pliki się NIE wgrały, wróć do KROKU 1

---

### Problem 2: Workflow się nie uruchamia

**Możliwe przyczyny:**
1. ❌ GitHub Pages NIE jest ustawione na "GitHub Actions"
   - **Rozwiązanie:** KROK 3 ponownie

2. ❌ Workflow ma błędy składni
   - **Rozwiązanie:** Sprawdź logi w Actions, wyślij mi błąd

3. ❌ Brak uprawnień
   - **Rozwiązanie:** Sprawdź Settings → Actions → General → Workflow permissions
   - Ustaw: **"Read and write permissions"**
   - Zaznacz: **"Allow GitHub Actions to create and approve pull requests"**

---

### Problem 3: Build się wykonał, ale strona nie zmienia

**Przyczyna:** Cache przeglądarki!

**Rozwiązanie:**
1. **Chrome/Edge:** Ctrl+Shift+R (Windows) lub Cmd+Shift+R (Mac)
2. **Firefox:** Ctrl+F5 (Windows) lub Cmd+Shift+R (Mac)
3. **Safari:** Cmd+Option+R
4. Lub otwórz w trybie incognito: Ctrl+Shift+N

**Jeśli nadal nie działa:**
1. Otwórz DevTools (F12)
2. Zakładka "Network"
3. Zaznacz "Disable cache"
4. Odśwież stronę (F5)

---

### Problem 4: Błąd 404 na stronie

**Przyczyna:** Zły base URL w vite.config.ts

**Sprawdź:**
1. Otwórz vite.config.ts
2. Linia 10 powinna być:
   ```typescript
   base: process.env.GITHUB_PAGES ? '/Conner/' : '/',
   ```
3. Upewnij się że `/Conner/` ma wielką literę C!

---

### Problem 5: Formularz nadal nie wysyła

**Przyczyna:** Stara wersja pliku ContactForm.tsx

**Sprawdź:**
1. Otwórz: src/app/components/conner/ContactForm.tsx
2. Linia 24 powinna zawierać:
   ```typescript
   const response = await fetch('https://formsubmit.co/sklep@conner.pl', {
   ```
3. Jeśli nie ma - formularz się nie zaktualizował

**Rozwiązanie:**
- Wgraj pliki ponownie (KROK 1)
- Uruchom build ponownie (KROK 4)

---

## 📊 TIMELINE WDROŻENIA

### Od teraz (po wgraniu plików):

**0 min:** Wgranie plików na GitHub (KROK 1)  
↓  
**+1 min:** GitHub wykrywa workflow  
↓  
**+2 min:** Automatyczny start build  
↓  
**+3-5 min:** Build się wykonuje  
↓  
**+5 min:** Deploy na GitHub Pages  
↓  
**+6 min:** ✅ Strona LIVE z zmianami!

**Całkowity czas:** ~6 minut od wgrania do live! ⚡

---

## ✅ CHECKLIST NAPRAWY

**PRZED DZIAŁANIEM:**
- [ ] Przeczytałem całą instrukcję
- [ ] Mam dostęp do GitHub (zalogowany)
- [ ] Mam dostęp do Figma Make LUB git lokalnie

**WDROŻENIE:**
- [ ] KROK 1: Wgrałem pliki na GitHub ✅
- [ ] KROK 2: Widzę `.github/workflows/deploy.yml` na GitHub ✅
- [ ] KROK 3: Ustawiłem Source na "GitHub Actions" ✅
- [ ] KROK 4: Uruchomiłem/poczekałem na build ✅
- [ ] KROK 5: Build jest ✅ zielony ✅

**WERYFIKACJA:**
- [ ] Otworzyłem https://antekku9.github.io/Conner
- [ ] Wyczyszczony cache (Ctrl+Shift+R)
- [ ] Strona się załadowała ✅
- [ ] Formularz kontaktowy wygląda OK ✅
- [ ] Wysłałem testową wiadomość ✅
- [ ] Email dotarł na sklep@conner.pl ✅

---

## 🎯 PODSUMOWANIE

### Co było nie tak:
❌ Brak `.github/workflows/deploy.yml`  
❌ Brak `.gitignore`  
❌ GitHub Pages może być ustawione na "Deploy from branch"

### Co naprawiono:
✅ Utworzono `.github/workflows/deploy.yml`  
✅ Utworzono `.gitignore`  
✅ Dodano instrukcję krok po kroku

### Co musisz zrobić:
1. ⬆️ Wgraj pliki na GitHub
2. ⚙️ Zmień Source na "GitHub Actions"
3. ⏳ Poczekaj 6 minut
4. 🎉 DZIAŁA!

---

## 📞 POTRZEBUJESZ POMOCY?

**Jeśli coś nie działa:**
1. Sprawdź https://github.com/antekku9/Conner/actions
2. Zobacz czy są błędy (czerwone ❌)
3. Kliknij w workflow run → Zobacz logi
4. Skopiuj błąd i wyślij mi!

**Lub wyślij screenshoty:**
- Zakładka Actions (https://github.com/antekku9/Conner/actions)
- Settings → Pages (konfiguracja)
- Konsola przeglądarki (F12 → Console)

Pomogę Ci natychmiast! 💪

---

**Data naprawy:** 25 marca 2026  
**Status:** 🟢 Workflow utworzony - gotowy do wdrożenia!  
**Czas do live:** ~6 minut po wgraniu plików
