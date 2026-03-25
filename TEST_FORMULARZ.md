# ✅ Szybki test formularza kontaktowego

## 📧 Email docelowy: **sklep@conner.pl**

---

## ⚡ Szybki test (3 kroki)

### Krok 1: Wgraj zmiany na GitHub
```bash
git add .
git commit -m "Add: FormSubmit integration for contact form"
git push origin main
```

LUB kliknij **"Publish"** w Figma Make.

---

### Krok 2: Otwórz stronę live
Poczekaj 3-5 minut na build, potem:
👉 https://antekku9.github.io/Conner

---

### Krok 3: Wyślij testową wiadomość

**Wypełnij formularz:**
- **Imię i nazwisko:** Test Testowy
- **Email:** TWOJ_EMAIL@gmail.com (żeby zobaczyć auto-response)
- **Telefon:** 123456789
- **Temat:** Serwis komputerowy
- **Wiadomość:** To jest testowa wiadomość z formularza kontaktowego

**Kliknij:** "Wyślij wiadomość"

**Oczekiwany rezultat:**
1. Spinner "Wysyłanie..." (1-2 sekundy)
2. Komunikat: "✅ Dziękujemy za wiadomość!"

---

## 📬 Sprawdź email

### Na sklep@conner.pl powinieneś dostać:

```
Od: formsubmit@formsubmit.co
Temat: Nowa wiadomość z conner.pl - Serwis komputerowy

┌─────────────┬──────────────────────┐
│ name        │ Test Testowy         │
│ email       │ TWOJ_EMAIL@gmail.com │
│ phone       │ 123456789            │
│ subject     │ serwis               │
│ message     │ To jest testowa...   │
└─────────────┴──────────────────────┘
```

**Kiedy:** W ciągu 30-60 sekund

**⚠️ WAŻNE - PIERWSZE UŻYCIE:**

Jeśli to **pierwszy** test FormSubmit z tym emailem:
1. FormSubmit wyśle email **WERYFIKACYJNY** na sklep@conner.pl
2. Kliknij link weryfikacyjny w tym emailu
3. Dopiero potem wyślij ponownie formularz testowy
4. Od teraz będzie działać automatycznie

---

## 🔍 Co jeśli email nie dotarł?

### 1. Sprawdź folder SPAM/Junk
Email może trafić do spamu przy pierwszym wysłaniu.

**Rozwiązanie:**
- Znajdź email w spamie
- Kliknij "Nie spam" / "Not spam"
- Dodaj formsubmit@formsubmit.co do Safe Senders

---

### 2. Sprawdź czy była weryfikacja
Jeśli to pierwsza wiadomość, FormSubmit wymaga weryfikacji.

**Rozwiązanie:**
- Sprawdź skrzynkę sklep@conner.pl
- Szukaj emaila od FormSubmit z linkiem weryfikacyjnym
- Kliknij link
- Wyślij ponownie formularz testowy

---

### 3. Sprawdź DevTools Console
**Jak sprawdzić:**
1. Otwórz stronę: https://antekku9.github.io/Conner
2. Naciśnij F12 (DevTools)
3. Zakładka: Console
4. Wyślij formularz
5. Zobacz czy są błędy (czerwone komunikaty)

**Typowe błędy:**
- `403 Forbidden` → Za dużo testów z jednego IP (poczekaj 5 min)
- `CORS error` → Problem z konfiguracją (rzadkie)
- `Network error` → Problem z internetem

---

## ✅ Checklist testu

- [ ] Wgrałem zmiany na GitHub
- [ ] Poczekałem 3-5 min na build
- [ ] Otworzyłem https://antekku9.github.io/Conner
- [ ] Wypełniłem formularz testowy
- [ ] Kliknąłem "Wyślij wiadomość"
- [ ] Zobaczyłem spinner "Wysyłanie..."
- [ ] Zobaczyłem "✅ Dziękujemy za wiadomość!"
- [ ] Sprawdziłem skrzynkę sklep@conner.pl
- [ ] Email dotarł (lub weryfikacja wymagana)
- [ ] 🎉 **DZIAŁA!**

---

## 📞 Jeśli nadal nie działa

### Opcja 1: Sprawdź instrukcję
Pełna instrukcja z troubleshootingiem:
👉 `INSTRUKCJA_FORMULARZ_KONTAKTOWY.md`

### Opcja 2: Test lokalny
```bash
npm run dev
```
Otwórz: http://localhost:5173  
Wypełnij formularz - sprawdź czy są błędy w konsoli

### Opcja 3: Skontaktuj się
Jeśli nic nie działa, daj znać - pomogę!

---

## 🎁 Po pomyślnym teście

### 1. Dodaj sklep@conner.pl do Safe Senders
Żeby emaile nie trafiały do spamu:
- Gmail: Dodaj do kontaktów
- Outlook: Dodaj do Safe Senders
- Inne: Zobacz ustawienia poczty

### 2. Gotowe do użycia! 🎉
Formularz działa - możesz informować klientów!

---

**Data:** 25 marca 2026  
**Service:** FormSubmit.co (darmowy)  
**Email:** sklep@conner.pl
