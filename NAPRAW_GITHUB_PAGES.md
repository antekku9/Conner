# 🔧 NAPRAWA GITHUB PAGES - INSTRUKCJA

## ❌ Problem
Zmiany w kodzie nie pojawiają się na stronie po `git push`.

## ✅ Rozwiązanie
Brakowało kilku kluczowych plików:
1. ❌ `.github/workflows/deploy.yml` - GitHub Actions workflow
2. ❌ `/index.html` - Entry point HTML
3. ❌ `/src/main.tsx` - Entry point React
4. ❌ React i ReactDOM w devDependencies

**WSZYSTKO ZOSTAŁO NAPRAWIONE!** ✅

---

## 🚀 KROK 1: WYŚLIJ ZMIANY NA GITHUB

W folderze projektu wykonaj:

```bash
git add .
git commit -m "Fix: GitHub Actions workflow + vite config + logo"
git push origin main
```

---

## ⚙️ KROK 2: WŁĄCZ GITHUB PAGES (JEŚLI JESZCZE NIE)

1. Otwórz https://github.com/antekku9/Conner
2. Kliknij zakładkę **"Settings"** (górne menu)
3. W menu z lewej kliknij **"Pages"**
4. W sekcji **"Build and deployment"**:
   - **Source:** wybierz **"GitHub Actions"** (NIE "Deploy from a branch")
5. Zapisz (jeśli było coś innego)

---

## 🔍 KROK 3: SPRAWDŹ CZY WORKFLOW DZIAŁA

1. Otwórz https://github.com/antekku9/Conner
2. Kliknij zakładkę **"Actions"** (górne menu)
3. Powinieneś zobaczyć workflow **"Deploy to GitHub Pages"** który się uruchamia

### Co zobaczysz:

**🟡 Żółta kropka** = Budowanie w toku (2-5 minut)  
**✅ Zielony ptaszek** = Sukces! Strona jest live!  
**❌ Czerwony krzyżyk** = Błąd - kliknij na niego i zobacz logi

---

## 🎯 KROK 4: SPRAWDŹ STRONĘ

Po ✅ zielonym ptaszku w Actions:

**Otwórz:** https://antekku9.github.io/Conner/

Strona powinna teraz zawierać:
- ✅ Logo Conner w navbar i footer
- ✅ Omnibus na produktach
- ✅ Google Maps w sekcji kontakt
- ✅ Wszystkie aktualne zmiany

---

## ⏱️ CZAS WDROŻENIA

- **1. push:** ~10 minut (pierwsza kompilacja)
- **Kolejne push:** ~2-5 minut

---

## 🔄 JAK AKTUALIZOWAĆ STRONĘ W PRZYSZŁOŚCI

### 1. Edytuj pliki lokalnie
Np. dodaj produkt w `/src/app/data/products.ts`

### 2. Wyślij zmiany:
```bash
git add .
git commit -m "Opis zmian"
git push
```

### 3. Poczekaj 2-5 minut

### 4. Sprawdź: https://antekku9.github.io/Conner/

---

## 🆘 ROZWIĄZYWANIE PROBLEMÓW

### Problem: ❌ Czerwony krzyżyk w Actions

**Krok 1:** Kliknij na failed workflow  
**Krok 2:** Kliknij na "build"  
**Krok 3:** Zobacz logi błędów  
**Krok 4:** Skopiuj błąd i daj mi znać!

### Problem: Strona jest pusta / 404

**Rozwiązanie:** Sprawdź czy w Settings → Pages → Source jest ustawione **"GitHub Actions"**

### Problem: Logo się nie wyświetla

**Rozwiązanie:** Sprawdź czy plik `/public/logo.svg` jest w repozytorium:
1. Otwórz https://github.com/antekku9/Conner
2. Kliknij na folder `public`
3. Czy widzisz `logo.svg`?
4. Jeśli NIE - dodaj go:
```bash
git add public/logo.svg
git commit -m "Add logo"
git push
```

### Problem: Cache - widzę starą wersję strony

**Rozwiązanie:** Hard refresh w przeglądarce:
- **Windows:** Ctrl+Shift+R
- **Mac:** Cmd+Shift+R

---

## 📋 CO ZOSTAŁO NAPRAWIONE:

1. ✅ **Utworzony workflow** - `.github/workflows/deploy.yml`
2. ✅ **Dynamiczny base URL** - działa w Figma Make i GitHub Pages
3. ✅ **Logo w navbar i footer** - z prawidłową ścieżką
4. ✅ **Naprawiony ProductDetailPage** - dodany default export
5. ✅ **.gitignore** - ignoruje node_modules i dist

---

## ✅ CHECKLIST

- [ ] Wysłałem zmiany na GitHub (`git push`)
- [ ] W Settings → Pages → Source ustawiłem "GitHub Actions"
- [ ] W zakładce Actions widzę workflow "Deploy to GitHub Pages"
- [ ] Workflow ma ✅ (zielony ptaszek)
- [ ] Strona działa: https://antekku9.github.io/Conner/
- [ ] Logo się wyświetla
- [ ] Omnibus działa na produktach

---

## 🎉 PO ZAKOŃCZENIU

Będziesz miał **w pełni automatyczne wdrożenie**:
```
Edytuj plik → git push → Poczekaj 2-5 min → Strona zaktualizowana! 🚀
```

---

**Pytania? Daj znać jak działa!** 😊