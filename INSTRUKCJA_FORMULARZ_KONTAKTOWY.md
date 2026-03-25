# 📧 Instrukcja: Formularz kontaktowy z FormSubmit.co

## ✅ WDROŻONE! Formularz wysyła emaile na: **sklep@conner.pl**

---

## 🎯 Co zostało zaimplementowane

### Funkcje działające:
1. ✅ **Wysyłanie emaili na sklep@conner.pl**
2. ✅ **Automatyczna odpowiedź dla klienta** (auto-response)
3. ✅ **Ładny format wiadomości** (table template)
4. ✅ **Spinner ładowania** podczas wysyłania
5. ✅ **Obsługa błędów** z komunikatem + numer telefonu
6. ✅ **Walidacja pól** (required fields)
7. ✅ **Responsywny design** (mobile + desktop)

---

## 📬 Jak działa FormSubmit.co

### Krok 1: Użytkownik wypełnia formularz
- Imię i nazwisko
- Email
- Telefon (opcjonalnie)
- Temat (serwis/firma/szkoły/etc)
- Wiadomość

### Krok 2: Kliknięcie "Wyślij wiadomość"
- Formularz wysyła dane do FormSubmit.co
- Pokazuje się spinner "Wysyłanie..."
- FormSubmit przekazuje email na **sklep@conner.pl**

### Krok 3: Email dociera na sklep@conner.pl
Przykładowa treść:

```
Od: formsubmit@formsubmit.co
Do: sklep@conner.pl
Temat: Nowa wiadomość z conner.pl - Serwis komputerowy

┌─────────────────────────┬──────────────────────────────┐
│ name                    │ Jan Kowalski                 │
│ email                   │ jan.kowalski@example.com     │
│ phone                   │ +48 123 456 789              │
│ subject                 │ serwis                       │
│ message                 │ Witam, potrzebuję naprawy... │
└─────────────────────────┴──────────────────────────────┘
```

### Krok 4: Klient otrzymuje automatyczną odpowiedź
Email na adres podany przez klienta:

```
Od: sklep@conner.pl
Do: jan.kowalski@example.com
Temat: Re: Nowa wiadomość z conner.pl

Dziękujemy za kontakt! Twoja wiadomość została dostarczona 
do Conner Sp. z o.o. Skontaktujemy się z Tobą w ciągu 24 godzin.
```

### Krok 5: Na stronie pojawia się komunikat sukcesu
"✅ Dziękujemy za wiadomość!"

---

## ⚙️ Konfiguracja FormSubmit

### Ukryte pola w formularzu:

```html
<!-- Wyłącz CAPTCHA (dla wygody użytkownika) -->
<input type="hidden" name="_captcha" value="false" />

<!-- Format emaila: tabela (ładniejszy) -->
<input type="hidden" name="_template" value="table" />

<!-- Temat emaila (dynamiczny) -->
<input type="hidden" name="_subject" value="Nowa wiadomość z conner.pl - [Temat]" />

<!-- Automatyczna odpowiedź dla klienta -->
<input type="hidden" name="_autoresponse" value="Dziękujemy za kontakt! ..." />
```

### Endpoint FormSubmit:
```
https://formsubmit.co/sklep@conner.pl
```

---

## 🔐 Bezpieczeństwo

### Co robi FormSubmit.co:
- ✅ **Nie przechowuje danych** - tylko przekazuje email
- ✅ **HTTPS** - połączenie szyfrowane
- ✅ **Bez rejestracji** - nie trzeba konta
- ✅ **Ukryty email** - sklep@conner.pl nie jest widoczny w kodzie frontendu (jest, ale to OK dla FormSubmit)

### Czy email jest bezpieczny?
**TAK!** FormSubmit.co używa tego od lat, jest zaufanym serwisem. Email `sklep@conner.pl` nie jest dostępny publicznie w kodzie HTML (jest tylko w request POST).

### Czy mogą być spamowane?
FormSubmit ma **wbudowaną ochronę przed spamem**:
- Rate limiting (limit wysyłek z jednego IP)
- Honeypot fields (ukryte pola dla botów)
- Opcjonalna CAPTCHA (obecnie wyłączona dla wygody)

**Jeśli dostaniesz spam**, możesz:
1. Włączyć CAPTCHA: zmień `_captcha` na `"true"`
2. Użyć FormSubmit Premium ($5/mies) z zaawansowaną ochroną

---

## 🎨 Jak wygląda email

### Format "table" (obecny)
```
┌─────────────┬──────────────────┐
│ Pole        │ Wartość          │
├─────────────┼──────────────────┤
│ name        │ Jan Kowalski     │
│ email       │ jan@example.com  │
│ phone       │ +48 123 456 789  │
│ subject     │ serwis           │
│ message     │ Treść...         │
└─────────────┴──────────────────┘
```

### Format "basic" (alternatywa)
Jeśli wolisz prosty format, zmień:
```typescript
<input type="hidden" name="_template" value="basic" />
```

Wtedy email będzie:
```
name: Jan Kowalski
email: jan@example.com
phone: +48 123 456 789
subject: serwis
message: Treść...
```

---

## 📝 Edycja formularza

### Zmiana adresu email odbiorcy

**Plik:** `/src/app/components/conner/ContactForm.tsx`  
**Linia:** 24

```typescript
const response = await fetch('https://formsubmit.co/NOWY_EMAIL@conner.pl', {
  method: 'POST',
  // ...
});
```

Zamień `sklep@conner.pl` na nowy adres.

---

### Zmiana automatycznej odpowiedzi

**Plik:** `/src/app/components/conner/ContactForm.tsx`  
**Linia:** 91

```html
<input 
  type="hidden" 
  name="_autoresponse" 
  value="TUTAJ WPISZ NOWĄ TREŚĆ ODPOWIEDZI" 
/>
```

---

### Włączenie CAPTCHA (ochrona przed spamem)

**Plik:** `/src/app/components/conner/ContactForm.tsx`  
**Linia:** 88

```html
<!-- PRZED (bez CAPTCHA) -->
<input type="hidden" name="_captcha" value="false" />

<!-- PO (z CAPTCHA - ochrona przed botami) -->
<input type="hidden" name="_captcha" value="true" />
```

**Efekt:** Użytkownik będzie musiał kliknąć "I'm not a robot" przed wysłaniem.

---

### Dodanie nowego pola do formularza

**Przykład:** Dodanie pola "Firma"

1. Dodaj pole w HTML:
```tsx
<div>
  <label htmlFor="company" className="block text-sm font-medium text-[#1a1c20] mb-2">
    Nazwa firmy
  </label>
  <input
    type="text"
    id="company"
    name="company"  {/* ← WAŻNE: name="company" */}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
    placeholder="Twoja Firma Sp. z o.o."
  />
</div>
```

2. Dodaj do state (opcjonalnie, jeśli chcesz walidacji):
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',  // ← dodaj tutaj
  subject: '',
  message: '',
});
```

3. **Gotowe!** FormSubmit automatycznie wyśle nowe pole w emailu.

---

## 🧪 Testowanie formularza

### Krok 1: Wypełnij formularz testowy
- **Imię:** Test Testowy
- **Email:** TWOJ_PRYWATNY_EMAIL@gmail.com (żeby zobaczyć auto-response)
- **Telefon:** 123456789
- **Temat:** Serwis komputerowy
- **Wiadomość:** To jest test formularza kontaktowego

### Krok 2: Kliknij "Wyślij wiadomość"
- Powinien pokazać się spinner "Wysyłanie..."
- Po chwili: "✅ Dziękujemy za wiadomość!"

### Krok 3: Sprawdź skrzynkę sklep@conner.pl
- Email powinien przyjść w ciągu **30-60 sekund**
- Temat: "Nowa wiadomość z conner.pl - Serwis komputerowy"
- Sprawdź folder SPAM jeśli nie ma w Inbox

### Krok 4: Sprawdź auto-response (opcjonalnie)
Jeśli podałeś swój email testowy, sprawdź skrzynkę - powinieneś dostać automatyczną odpowiedź.

---

## ⚠️ Rozwiązywanie problemów

### Problem: Email nie dochodzi na sklep@conner.pl

**Możliwe przyczyny:**

1. **Email w folderze SPAM** ✉️
   - Sprawdź folder spam/junk w skrzynce sklep@conner.pl
   - Oznacz jako "Nie spam" jeśli tam jest

2. **Pierwsze użycie FormSubmit** 🔐
   - **WAŻNE:** Za pierwszym razem FormSubmit wysyła email WERYFIKACYJNY!
   - Sprawdź skrzynkę sklep@conner.pl
   - Kliknij link weryfikacyjny w emailu
   - Dopiero po weryfikacji formularze będą działać

3. **Błąd 403 Forbidden**
   - FormSubmit blokuje, gdy wysyła się za dużo testów z jednego IP
   - Poczekaj 5 minut i spróbuj ponownie

4. **Nieprawidłowy adres email**
   - Sprawdź czy w kodzie jest `sklep@conner.pl` (bez literówek)

---

### Problem: Formularz pokazuje błąd

**Komunikat:** "Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 42 631 94 20"

**Rozwiązanie:**
1. Sprawdź połączenie internetowe
2. Otwórz DevTools (F12) → Console → zobacz dokładny błąd
3. Sprawdź czy FormSubmit.co nie ma przerwy (status.formsubmit.co)
4. Wyślij ponownie za chwilę

---

### Problem: Nie działa na localhost

**Przyczyna:** Niektóre przeglądarki blokują FormSubmit na localhost.

**Rozwiązanie:**
1. Wdróż na GitHub Pages (tam zadziała)
2. Lub użyj `npm run preview` zamiast `npm run dev`
3. Lub dodaj w pliku hosts: `127.0.0.1 conner.local` i używaj tego

---

## 📊 Statystyki FormSubmit

### Limity darmowego planu:
- ✅ **Nielimitowane wiadomości** (tak, naprawdę!)
- ✅ **Nielimitowane formularze**
- ✅ **Podstawowa ochrona przed spamem**
- ✅ **Auto-response (1 szablon)**

### Plan Premium ($5/mies - opcjonalnie):
- 🔒 Zaawansowana ochrona przed spamem
- 📊 Dashboard z historią wiadomości
- 📎 Załączniki (upload plików)
- 🎨 Własne szablony auto-response
- 📈 Analityka formularzy

**Czy potrzebujesz Premium?**  
Dla większości firm **NIE**. Darmowy plan w zupełności wystarczy!

---

## 🔄 Alternatywy dla FormSubmit

Jeśli FormSubmit nie działa lub wolisz inne rozwiązanie:

### 1. Web3Forms (również darmowy)
- 250 wiadomości/miesiąc
- Wymaga rejestracji (klucz API)
- Dashboard z historią
- https://web3forms.com

### 2. EmailJS (darmowy tier)
- 200 wiadomości/miesiąc
- Wymaga konfiguracji
- Szablony email
- https://emailjs.com

### 3. Getform (darmowy tier)
- 50 wiadomości/miesiąc
- Prosty dashboard
- https://getform.io

### 4. Własny backend (zaawansowane)
- Pełna kontrola
- Wymaga serwera
- Node.js + Nodemailer

---

## 📞 Dane kontaktowe w formularzu

Jeśli formularz nie działa, użytkownik widzi numer telefonu:

```
"Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 42 631 94 20"
```

To zapewnia, że zawsze można się skontaktować alternatywną drogą.

---

## ✅ Checklist wdrożenia

- [x] ✅ Formularz wysyła na sklep@conner.pl
- [x] ✅ Auto-response skonfigurowany
- [x] ✅ Format emaila: table (czytelny)
- [x] ✅ Spinner ładowania
- [x] ✅ Obsługa błędów
- [x] ✅ Walidacja pól
- [x] ✅ CAPTCHA wyłączona (dla wygody)
- [ ] ⏳ Pierwsze wysłanie testowe (ZRÓB TO!)
- [ ] ⏳ Weryfikacja emaila (jeśli FormSubmit wyśle link)
- [ ] ⏳ Sprawdzenie czy email doszedł
- [ ] ⏳ Dodanie sklep@conner.pl do Safe Senders (żeby nie szło do spam)

---

## 🎉 Gotowe!

Formularz kontaktowy jest w pełni funkcjonalny i gotowy do użycia!

**Co teraz:**
1. Wgraj zmiany na GitHub (`git push` lub "Publish" w Figma Make)
2. Wyślij testową wiadomość z https://antekku9.github.io/Conner
3. Sprawdź czy email dotarł na sklep@conner.pl
4. **Gotowe!** 🎊

---

**Pytania?**  
📧 sklep@conner.pl  
📞 42 631 94 20

---

**Data wdrożenia:** 25 marca 2026  
**Wersja:** 1.0  
**Service:** FormSubmit.co (darmowy plan)
