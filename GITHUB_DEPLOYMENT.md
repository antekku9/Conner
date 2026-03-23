# 🐙 Wdrożenie strony Conner.pl na GitHub Pages

## 🎯 Dlaczego GitHub?

- ✅ **Darmowy hosting** (GitHub Pages)
- ✅ Własna domena: `nazwa.github.io/conner-website`
- ✅ Możliwość podpięcia własnej domeny (conner.pl)
- ✅ Automatyczne wdrożenie (przy każdym push)
- ✅ Historia zmian (Git)
- ✅ HTTPS za darmo
- ✅ Szybkie CDN

---

## ⚡ NAJSZYBSZA METODA: Eksport z Figma Make → GitHub (POLECAM!)

**Nie musisz pobierać plików lokalnie!** Figma Make prawdopodobnie ma wbudowaną integrację z GitHub.

### Krok 1: Sprawdź opcję "Publish"

1. **Kliknij "Publish"** w Figma Make
2. Szukaj opcji:
   - ✅ **"Deploy to GitHub"**
   - ✅ **"Connect to GitHub"**
   - ✅ **"Export to GitHub"**
   - ✅ **"GitHub Pages"**

### Krok 2: Jeśli widzisz opcję GitHub:

1. **Kliknij "Connect to GitHub"** lub podobną opcję
2. **Zaloguj się** na swoje konto GitHub (lub utwórz darmowe: https://github.com/signup)
3. **Autoryzuj** Figma Make do dostępu do GitHub
4. **Nazwij repozytorium:** `conner-website` (lub dowolna nazwa)
5. **Wybierz opcje:**
   - Repository: **Public** (dla darmowego GitHub Pages)
   - Auto-deploy: **Enabled** (jeśli dostępne)
   - GitHub Pages: **Enabled** (jeśli dostępne)
6. **Kliknij "Deploy"** lub "Publish to GitHub"

### ✨ GOTOWE! 

Figma Make automatycznie:
- ✅ Utworzy repozytorium na Twoim GitHubie
- ✅ Wgra CAŁY kod projektu (wszystkie pliki!)
- ✅ Skonfiguruje GitHub Pages
- ✅ Uruchomi stronę na `twoja-nazwa.github.io/conner-website/`

**Twoja strona będzie działać za 2-3 minuty!** 🎉

---

## 🔍 Jeśli NIE MA opcji GitHub w "Publish":

### Spróbuj "Make settings":

1. **Kliknij "Make settings"**
2. Szukaj sekcji:
   - **"Integrations"**
   - **"Export"** 
   - **"GitHub"**
   - **"Deployment"**
3. Sprawdź czy możesz tam połączyć GitHub

### Lub sprawdź "Share":

1. **Kliknij "Share"**
2. Zobacz czy jest opcja:
   - **"Share to GitHub"**
   - **"Export code to GitHub"**
   - **"Generate GitHub repository"**

---

## 📤 ALTERNATYWNA METODA: Jeśli Figma Make nie ma integracji GitHub

Jeśli naprawdę nie ma ŻADNEJ opcji GitHub w Figma Make, możesz:

### Opcja A: Publish na hosting Figma → Sklonuj kod

1. **Opublikuj** projekt przez "Publish" (na hostingu Figma)
2. Po publikacji sprawdź czy pojawia się opcja **"Download source code"**
3. Jeśli tak - pobierz i przejdź do sekcji "Metoda lokalna" poniżej

### Opcja B: "Copy Design" (jeśli dostępne)

1. **Kliknij "Copy design"**
2. Zobacz co to robi - może skopiować kod który możesz wkleić

### Opcja C: Kontakt z supportem Figma Make

Napisz do supportu Figma Make:
```
Cześć! Jak mogę wyeksportować mój projekt do GitHuba? 
Nie widzę opcji "Download" ani "Export to GitHub".
Dostępne opcje to: publish, share, make settings, copy design.

ID projektu: [twoje ID]
```

---

## 📋 Wymagania

- ✅ Konto na GitHub (darmowe): https://github.com/signup
- ✅ Projekt w Figma Make (masz!)
- ✅ ~5 minut czasu

---

## 🚀 Krok 1: Pobierz kod z Figma Make

### Opcja A: Przez "Publish"
1. W Figma Make kliknij **"Publish"**
2. Sprawdź czy jest opcja **"Deploy to GitHub"** lub **"Download code"**
3. Jeśli jest GitHub - połącz konto i gotowe! ✨
4. Jeśli jest Download - pobierz ZIP i rozpakuj

### Opcja B: Przez "Make settings"
1. Kliknij **"Make settings"**
2. Szukaj opcji **"Export"** lub **"Download source code"**
3. Pobierz i rozpakuj

### Opcja C: Publish → Host → Download
1. Opublikuj projekt
2. Po publikacji sprawdź czy można pobrać kod źródłowy

---

## 🔧 Krok 2: Zainstaluj Git (jeśli nie masz)

### Windows:
1. Pobierz z https://git-scm.com/download/win
2. Zainstaluj z domyślnymi ustawieniami
3. Otwórz "Git Bash"

### Mac:
```bash
# Otwórz Terminal i wpisz:
git --version
# Jeśli nie masz, zainstaluje się automatycznie
```

### Konfiguracja (pierwsza instalacja):
```bash
git config --global user.name "Twoje Imię"
git config --global user.email "twoj@email.pl"
```

---

## 📦 Krok 3: Przygotuj projekt lokalnie

### 1. Otwórz terminal w folderze projektu
**Windows:** Shift + prawy przycisk myszy → "Open Git Bash here"  
**Mac:** Terminal → przeciągnij folder

### 2. Zainstaluj zależności i przetestuj
```bash
# Zainstaluj pakiety
npm install

# Sprawdź czy działa lokalnie
npm run dev

# Ctrl+C żeby zatrzymać
```

### 3. Zbuduj projekt (test)
```bash
npm run build
```

Jeśli wszystko działa bez błędów, możemy iść dalej! ✅

---

## 🐙 Krok 4: Utwórz repozytorium na GitHub

### 1. Zaloguj się na GitHub
https://github.com/login

### 2. Stwórz nowe repozytorium
1. Kliknij **"+"** w prawym górnym rogu → **"New repository"**
2. Nazwa repozytorium: `conner-website` (lub dowolna)
3. Opis: `Strona internetowa Conner Sp. z o.o.`
4. Wybierz: **Public** (dla darmowego GitHub Pages)
5. **NIE** zaznaczaj "Add a README file" (już masz pliki!)
6. **NIE** zaznaczaj .gitignore ani licencji
7. Kliknij **"Create repository"**

### 3. Skopiuj URL repozytorium
GitHub pokaże Ci coś jak:
```
https://github.com/TWOJA-NAZWA/conner-website.git
```
Skopiuj ten link! 📋

---

## 💻 Krok 5: Wyślij kod na GitHub

W terminalu, w folderze projektu:

```bash
# 1. Zainicjuj Git (jeśli jeszcze nie jest)
git init

# 2. Dodaj wszystkie pliki
git add .

# 3. Pierwszy commit
git commit -m "Initial commit - Strona Conner.pl"

# 4. Zmień branch na 'main'
git branch -M main

# 5. Dodaj repozytorium GitHub (WKLEJ SWÓJ URL!)
git remote add origin https://github.com/TWOJA-NAZWA/conner-website.git

# 6. Wyślij kod na GitHub
git push -u origin main
```

**Pojawi się prośba o zalogowanie** - użyj swojego konta GitHub.

---

## 🌐 Krok 6: Włącz GitHub Pages

### Automatyczne wdrożenie (POLECAM!)

GitHub Actions już jest skonfigurowany w pliku `.github/workflows/deploy.yml`! 

1. Wejdź na swoje repozytorium na GitHub
2. Kliknij zakładkę **"Settings"** (na górze)
3. W menu z lewej kliknij **"Pages"**
4. W sekcji **"Build and deployment"**:
   - Source: **GitHub Actions** (zamiast "Deploy from a branch")
5. **GOTOWE!** 🎉

### Sprawdź status wdrożenia:
1. Wejdź w zakładkę **"Actions"** (górne menu)
2. Powinieneś zobaczyć workflow **"Deploy to GitHub Pages"**
3. Poczekaj aż będzie ✅ (zazwyczaj 2-3 minuty)

### Twoja strona jest dostępna pod:
```
https://TWOJA-NAZWA.github.io/conner-website/
```

---

## 🎨 Krok 7: Konfiguracja bazowego URL (WAŻNE!)

GitHub Pages hostuje strony pod `nazwa.github.io/repozytorium/`, więc musisz zaktualizować plik `vite.config.ts`:

**Znajdź linię:**
```typescript
base: process.env.GITHUB_PAGES ? '/conner-website/' : '/',
```

**Zmień `/conner-website/` na nazwę TWOJEGO repozytorium:**
```typescript
base: process.env.GITHUB_PAGES ? '/TWOJA-NAZWA-REPO/' : '/',
```

**Przykład:** Jeśli Twoje repo nazywa się `strona-conner`:
```typescript
base: process.env.GITHUB_PAGES ? '/strona-conner/' : '/',
```

**Zapisz plik i wyślij zmiany:**
```bash
git add vite.config.ts
git commit -m "Update base URL for GitHub Pages"
git push
```

GitHub Actions automatycznie przebuduje stronę! ✨

---

## 🔗 Krok 8: Podpięcie własnej domeny (opcjonalnie)

### Jeśli chcesz używać conner.pl zamiast github.io:

#### 1. W repozytorium GitHub:
1. Settings → Pages
2. W sekcji "Custom domain" wpisz: `www.conner.pl`
3. Zaznacz "Enforce HTTPS"
4. Kliknij Save

#### 2. U dostawcy domeny (np. home.pl):
Dodaj rekordy DNS:

**Dla www.conner.pl:**
```
Type: CNAME
Name: www
Value: TWOJA-NAZWA.github.io
```

**Dla conner.pl (apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Zmiana DNS może potrwać 24-48 godzin!**

#### 3. Jeśli używasz własnej domeny, zmień w vite.config.ts:
```typescript
base: '/', // Dla własnej domeny używaj '/'
```

---

## 📝 Krok 9: Aktualizowanie strony w przyszłości

### Workflow edycji:

```bash
# 1. Edytuj pliki lokalnie (np. produkty, banery)
# 2. Przetestuj lokalnie:
npm run dev

# 3. Zapisz zmiany w Git:
git add .
git commit -m "Opis zmian, np: Dodałem nowe produkty"

# 4. Wyślij na GitHub:
git push

# 5. GitHub automatycznie wdroży zmiany! 🚀
```

Po push GitHub Actions:
- Automatycznie zbuduje projekt
- Wdroży na GitHub Pages
- Strona zaktualizuje się za 2-3 minuty

### Sprawdzanie statusu:
1. Wejdź na GitHub → Twoje repo
2. Zakładka **"Actions"**
3. Zobacz status ostatniego wdrożenia

---

## 🎯 Podsumowanie - Co masz teraz:

✅ **Kod na GitHub** - bezpieczne przechowywanie + historia zmian  
✅ **Darmowy hosting** - GitHub Pages  
✅ **Automatyczne wdrożenie** - przy każdym `git push`  
✅ **HTTPS za darmo** - certyfikat SSL  
✅ **Szybkie CDN** - strona szybko się ładuje na całym świecie  
✅ **Własna domena** - możliwość podpięcia conner.pl  

---

## 🔧 Najczęstsze edycje

Po wdrożeniu na GitHub, workflow wygląda tak:

### Dodanie produktu:
```bash
# 1. Edytuj lokalnie
nano src/app/data/products.ts  # lub otwórz w VS Code

# 2. Zapisz w Git
git add src/app/data/products.ts
git commit -m "Dodałem laptop Dell Latitude"
git push

# 3. Gotowe! Strona zaktualizuje się automatycznie
```

### Zmiana banerów:
```bash
# Edytuj
nano src/app/components/conner/BannerSlider.tsx

# Zapisz
git add src/app/components/conner/BannerSlider.tsx
git commit -m "Zaktualizowałem banery promocyjne"
git push
```

---

## 🆘 Rozwiązywanie problemów

### Problem: 404 po wejściu na stronę
**Przyczyna:** Źle ustawiony `base` w `vite.config.ts`  
**Rozwiązanie:** Upewnij się że nazwa w `base` zgadza się z nazwą repozytorium

### Problem: Strona wygląda dziwnie (brak CSS)
**Przyczyna:** Źle ustawiony `base` URL  
**Rozwiązanie:** Sprawdź w konsoli przeglądarki (F12) czy pliki CSS się ładują

### Problem: GitHub Actions się nie uruchamiają
**Rozwiązanie:**
1. Settings → Pages → Source: **GitHub Actions**
2. Settings → Actions → General → Workflow permissions: **Read and write permissions**

### Problem: "npm ci" fails
**Rozwiązanie:** Usuń `package-lock.json` i wyślij ponownie:
```bash
rm package-lock.json
git add package-lock.json
git commit -m "Remove package-lock"
git push
```

### Problem: Routing nie działa (404 na podstronach)
**Rozwiązanie:** To jest prawidłowe zachowanie dla GitHub Actions workflow - routing SPA jest już skonfigurowany w workflow.

---

## 📊 Porównanie: GitHub Pages vs Tradycyjny hosting

| Cecha | GitHub Pages | Tradycyjny hosting (FTP) |
|-------|--------------|--------------------------|
| **Cena** | 🟢 Darmowe | 🟡 20-50 zł/mies. |
| **Wdrożenie** | 🟢 Automatyczne (`git push`) | 🟡 Ręczne (FTP) |
| **Historia zmian** | 🟢 Pełna (Git) | 🔴 Brak |
| **Cofnięcie zmian** | 🟢 1 komenda | 🔴 Ręczne |
| **HTTPS/SSL** | 🟢 Darmowe | 🟡 Czasem płatne |
| **CDN** | 🟢 Wbudowane | 🔴 Zazwyczaj brak |
| **Własna domena** | 🟢 Tak | 🟢 Tak |
| **Baza danych** | 🔴 Nie (tylko frontend) | 🟢 Tak (MySQL itp.) |

**Wniosek:** GitHub Pages idealny dla stron statycznych (jak Twoja). Dla bazy danych (np. system RMA) użyłbyś Supabase.

---

## 🎓 Przydatne komendy Git

```bash
# Sprawdź status zmian
git status

# Zobacz historię commitów
git log --oneline

# Cofnij ostatni commit (zachowując zmiany w plikach)
git reset --soft HEAD~1

# Cofnij zmiany w pliku
git checkout -- nazwa-pliku.tsx

# Zobacz różnice przed commitem
git diff

# Sprawdź które repo jest podłączone
git remote -v
```

---

## 🔗 Przydatne linki

- **GitHub Pages dokumentacja:** https://pages.github.com/
- **GitHub Actions status:** https://www.githubstatus.com/
- **Git dokumentacja:** https://git-scm.com/doc
- **Darmowe kursy Git:** https://learngitbranching.js.org/

---

## ✅ Checklist GitHub Pages

- [ ] Mam konto na GitHub
- [ ] Zainstalowałem Git lokalnie
- [ ] Pobrałem kod z Figma Make
- [ ] Projekt działa lokalnie (`npm run dev`)
- [ ] Stworzyłem repozytorium na GitHub
- [ ] Wysłałem kod na GitHub (`git push`)
- [ ] Włączyłem GitHub Pages w Settings
- [ ] Zaktualizowałem `base` w `vite.config.ts`
- [ ] GitHub Actions się uruchamiają (zakładka Actions)
- [ ] Strona jest dostępna pod `*.github.io/*`
- [ ] Wszystkie linki działają
- [ ] Routing działa (podstrony)
- [ ] Strona wygląda dobrze

---

**Gotowe! Masz profesjonalną stronę hostowaną na GitHub Pages! 🎉**

*Pytania? Zobacz `INSTRUKCJA_WDROZENIA.md` lub napisz na sklep@conner.pl*