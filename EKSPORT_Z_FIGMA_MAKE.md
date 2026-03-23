# 🚀 Jak wyeksportować projekt z Figma Make do GitHuba

## ⚡ NAJSZYBSZA METODA (1 kliknięcie!)

### Krok 1: Otwórz menu w Figma Make

W prawym górnym rogu masz opcje:
- ✅ **Publish** ⭐ ZACZNIJ TUTAJ!
- Share
- Open full screen view
- Make settings
- Copy design

---

## 🎯 Metoda A: "Publish" → GitHub (NAJPROSTSZE!)

### 1. Kliknij **"Publish"**

### 2. Szukaj opcji GitHub:

Powinieneś zobaczyć jedną z tych opcji:

✅ **"Deploy to GitHub"**  
✅ **"Connect GitHub"**  
✅ **"Export to GitHub"**  
✅ **"GitHub Pages"**

### 3. Jeśli widzisz opcję GitHub:

**GRATULACJE! To najprostszy sposób!** 🎉

Kliknij **"Connect to GitHub"** lub podobną opcję:

1. **Zaloguj się** na GitHub (lub załóż darmowe konto: https://github.com/signup)
2. **Autoryzuj** Figma Make do dostępu do GitHub
3. **Nazwij repozytorium:** `conner-website`
4. **Wybierz opcje:**
   - Repository: **Public** (dla darmowego hostingu)
   - Enable GitHub Pages: **TAK** (jeśli dostępne)
   - Auto-deploy: **TAK** (jeśli dostępne)
5. Kliknij **"Deploy"** lub **"Publish"**

### 4. ✨ GOTOWE!

Figma Make automatycznie:
- ✅ Utworzy repozytorium na GitHubie
- ✅ Wgra CAŁY kod (wszystkie pliki!)
- ✅ Skonfiguruje GitHub Pages
- ✅ Uruchomi stronę online!

**Twoja strona będzie dostępna za 2-3 minuty pod:**
```
https://twoja-nazwa.github.io/conner-website/
```

---

## 🔍 Metoda B: Jeśli nie ma opcji GitHub w "Publish"

### 1. Sprawdź co masz po kliknięciu "Publish":

#### Scenariusz A: Widzisz tylko "Deploy to Figma hosting"
Wybierz to! Po publikacji:
1. Zobacz czy pojawia się opcja **"Download source code"** lub **"View on GitHub"**
2. Jeśli tak - użyj tej opcji!
3. Jeśli nie - przejdź do Metody C poniżej

#### Scenariusz B: Widzisz różne opcje hostingu (Netlify, Vercel, itp.)
Szukaj opcji **"GitHub"** lub **"Download code"**

#### Scenariusz C: Tylko "Deploy" bez wyboru platformy
Po deployment sprawdź czy jest opcja **"Export"** lub **"Download"**

---

## 🛠️ Metoda C: "Make settings"

### 1. Kliknij **"Make settings"**

### 2. Szukaj sekcji:
- **"Integrations"** → sprawdź czy jest GitHub
- **"Export"** → opcje eksportu kodu
- **"Deployment"** → opcje wdrożenia
- **"GitHub"** → bezpośrednia integracja

### 3. Jeśli znajdziesz GitHub:
Połącz konto i eksportuj projekt!

---

## 📤 Metoda D: "Share"

### 1. Kliknij **"Share"**

### 2. Zobacz czy masz opcje:
- **"Share to GitHub"**
- **"Export code"**
- **"Generate repository"**
- **"Download as ZIP"**

### 3. Jeśli cokolwiek związanego z GitHub/Export:
Użyj tego!

---

## 📋 Metoda E: "Copy Design"

### 1. Kliknij **"Copy Design"**

### 2. Zobacz co się stanie:
- Może skopiować link do repozytorium
- Może skopiować kod
- Może utworzyć duplikat projektu z opcją eksportu

---

## ❓ Jeśli ŻADNA metoda nie działa

### Opcja 1: Opublikuj na hostingu Figma

1. Użyj **"Publish"** żeby opublikować na hostingu Figma
2. Skopiuj URL opublikowanej strony
3. Wyślij mi URL - powiem Ci jak sklonować kod z opublikowanej strony

### Opcja 2: Kontakt z supportem Figma Make

Napisz do supportu (lub znajdź przycisk Help/Support):

```
Cześć!

Chcę wyeksportować mój projekt do GitHuba, ale nie widzę opcji:
- "Download"
- "Export to GitHub"
- "Download source code"

Dostępne opcje w interfejsie to:
- Publish
- Share
- Open full screen view
- Make settings
- Copy design

Jak mogę wyeksportować kod projektu do GitHuba lub pobrać pliki źródłowe?

Projekt: Strona Conner.pl
ID: [jeśli masz]

Dziękuję!
```

### Opcja 3: Screenshot interfejsu

Jeśli możesz:
1. Zrób screenshot opcji "Publish"
2. Zrób screenshot opcji "Make settings"
3. Wyślij mi - pomogę dokładnie!

---

## 🎯 Co powinieneś zobaczyć po pomyślnym eksporcie:

### Na GitHubie zobaczysz:

✅ Nowe repozytorium: `conner-website`

✅ Wszystkie pliki projektu:
```
conner-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── routes.tsx
│   ├── styles/
│   └── imports/
├── .github/workflows/
├── package.json
├── vite.config.ts
├── README.md
├── GITHUB_DEPLOYMENT.md
├── INSTRUKCJA_EDYCJI.md
└── ... (wszystkie inne pliki)
```

✅ W zakładce **"Actions"** zobaczysz:
- Workflow: "Deploy to GitHub Pages"
- Status: 🟢 Running lub ✅ Completed

✅ W zakładce **"Settings" → "Pages"** zobaczysz:
- Your site is live at: `https://twoja-nazwa.github.io/conner-website/`

---

## 🚀 Po eksporcie - następne kroki:

### 1. Sprawdź czy strona działa:
Wejdź na: `https://twoja-nazwa.github.io/conner-website/`

### 2. Jeśli nazwa repozytorium jest inna niż "conner-website":

Musisz zaktualizować plik `vite.config.ts`:

1. Wejdź na GitHub → Twoje repo
2. Otwórz plik: `vite.config.ts`
3. Kliknij ikonę ołówka (Edit)
4. Znajdź linię:
   ```typescript
   base: process.env.GITHUB_PAGES ? '/conner-website/' : '/',
   ```
5. Zmień `'/conner-website/'` na `'/TWOJA-NAZWA-REPO/'`
6. Kliknij **"Commit changes"**

GitHub automatycznie przebuduje stronę! ✨

### 3. Gotowe!

Twoja strona działa z:
- ✅ Sliderem banerów
- ✅ Katalogiem produktów
- ✅ Filtrowaniem i wyszukiwaniem
- ✅ Wszystkimi podstronami
- ✅ Responsywnym designem

---

## 💡 Co dalej?

### Edycja produktów i treści:
Zobacz plik: **`INSTRUKCJA_EDYCJI.md`**

### Podpięcie własnej domeny (conner.pl):
Zobacz sekcję w: **`GITHUB_DEPLOYMENT.md`**

### Aktualizacje strony:
Zobacz plik: **`README.md`** → sekcja "Aktualizowanie"

---

## 🆘 Pomoc

**Nie możesz znaleźć opcji eksportu?**

1. ✅ Zrób screenshot interfejsu Figma Make
2. ✅ Pokaż co widzisz po kliknięciu "Publish"
3. ✅ Pokaż co widzisz po kliknięciu "Make settings"
4. ✅ Opisz dokładnie jakie opcje masz dostępne

Pomogę Ci dokładnie! 🚀

---

## ✨ Podsumowanie

| Metoda | Czas | Trudność |
|--------|------|----------|
| **Publish → GitHub** | 2 minuty | ⭐ Bardzo łatwe |
| **Make settings → GitHub** | 3 minuty | ⭐ Bardzo łatwe |
| **Share → GitHub** | 3 minuty | ⭐ Bardzo łatwe |
| **Publish → Download → Lokalne wgranie** | 15 minut | ⭐⭐ Średnie |

**Najlepsze:** Użyj bezpośredniej integracji GitHub w Figma Make! 🎯

---

**Powodzenia!** 🚀

*Strona Conner.pl będzie online za kilka minut!*
