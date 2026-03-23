# ✅ Checklist wdrożenia strony Conner.pl

Użyj tej listy kontrolnej przed wdrożeniem strony na hosting produkcyjny.

## 📋 Przed rozpoczęciem

- [ ] Mam zainstalowany Node.js (wersja 18+)
- [ ] Pobrałem kod z Figma Make i rozpakowałem
- [ ] Mam dostęp do hostingu (FTP/SFTP lub panel)
- [ ] Mam kopię zapasową starej strony (jeśli istnieje)

## 🛠️ Instalacja lokalna

- [ ] Uruchomiłem `npm install` bez błędów
- [ ] Uruchomiłem `npm run dev` i strona działa lokalnie
- [ ] Sprawdziłem stronę w przeglądarce na localhost:5173

## ✏️ Edycja treści

### Dane firmowe
- [ ] Zaktualizowałem adres firmy (jeśli się zmienił)
- [ ] Sprawdziłem numer telefonu: **42 631 94 20**
- [ ] Sprawdziłem email: **sklep@conner.pl**
- [ ] Dane są poprawne w Footer.tsx
- [ ] Dane są poprawne w Contact.tsx

### Produkty
- [ ] Dodałem wszystkie produkty do katalogu
- [ ] Każdy produkt ma poprawną cenę
- [ ] Każdy produkt ma zdjęcie
- [ ] Każdy produkt ma unikalny `slug`
- [ ] Wszystkie kategorie są poprawne
- [ ] Wybrałem produkty wyróżnione (`featured: true`)

### Banery
- [ ] Dodałem własne banery w BannerSlider.tsx
- [ ] Wszystkie zdjęcia banerów są wysokiej jakości
- [ ] Linki w banerach prowadzą do właściwych sekcji
- [ ] Przetestowałem slider (przewijanie, przyciski)

### Zdjęcia
- [ ] Wszystkie zdjęcia są optymalizowane (nie większe niż 500KB)
- [ ] Używam zdjęć dobrej jakości (min. 800x600px)
- [ ] Wszystkie URLe do zdjęć są poprawne i działają

## 🎨 Design i responsywność

- [ ] Sprawdziłem wygląd na desktop (1920px, 1366px, 1280px)
- [ ] Sprawdziłem wygląd na tablet (768px, 1024px)
- [ ] Sprawdziłem wygląd na mobile (375px, 414px)
- [ ] Wszystkie teksty są czytelne
- [ ] Kolory firmowe są poprawne (#1a1c20, #c5a059)
- [ ] Czcionka Inter ładuje się poprawnie

## 🔗 Funkcjonalność

- [ ] Menu nawigacyjne działa na desktop
- [ ] Menu mobilne otwiera się i zamyka poprawnie
- [ ] Wszystkie linki wewnętrzne działają
- [ ] Slider banerów automatycznie przełącza się
- [ ] Przyciski "poprzedni/następny" w sliderze działają
- [ ] Filtrowanie produktów działa poprawnie
- [ ] Wyszukiwarka produktów działa
- [ ] Strony szczegółów produktów (/produkty/nazwa) działają
- [ ] Podstrony Firmy/Szkoły/Instytucje działają
- [ ] Formularz kontaktowy wyświetla się poprawnie

## 🏗️ Budowanie

- [ ] Uruchomiłem `npm run build` bez błędów
- [ ] Folder `dist/` został utworzony
- [ ] W folderze `dist/` znajduje się `index.html`
- [ ] W folderze `dist/assets/` są pliki JS i CSS
- [ ] Rozmiar folderu `dist/` jest rozsądny (zazwyczaj 2-10 MB)

## 🌐 Hosting

### Przygotowanie
- [ ] Mam dane dostępowe do FTP/SFTP
- [ ] Zainstalowałem klienta FTP (FileZilla/WinSCP/Cyberduck)
- [ ] Połączyłem się pomyślnie z serwerem

### Backup (WAŻNE!)
- [ ] Zrobiłem kopię zapasową aktualnej strony
- [ ] Zapisałem kopię na lokalnym dysku
- [ ] Wiem jak przywrócić starą wersję w razie problemów

### Upload
- [ ] Wgrałem **ZAWARTOŚĆ** folderu `dist/` do `public_html/`
- [ ] **NIE** wgrałem samego folderu `dist/`, tylko jego zawartość
- [ ] Plik `index.html` jest bezpośrednio w `public_html/`
- [ ] Folder `assets/` jest w `public_html/assets/`
- [ ] Wgrałem plik `.htaccess` (skopiowany z `.htaccess.example`)

### Konfiguracja serwera
- [ ] Sprawdziłem czy mod_rewrite jest włączony
- [ ] Plik `.htaccess` ma poprawne uprawnienia (644)
- [ ] Folder `public_html/` ma uprawnienia 755
- [ ] Pliki mają uprawnienia 644

## 🧪 Testowanie produkcyjne

### Podstawowe testy
- [ ] Strona główna ładuje się poprawnie
- [ ] Nie ma błędów 404 w konsoli przeglądarki (F12)
- [ ] Wszystkie obrazy się ładują
- [ ] Style CSS są załadowane
- [ ] JavaScript działa poprawnie

### Routing
- [ ] Strona główna (/) działa
- [ ] `/produkty` działa
- [ ] `/produkty/nazwa-produktu` działa
- [ ] `/firmy` działa
- [ ] `/szkoly` działa
- [ ] `/instytucje` działa
- [ ] Odświeżenie strony na podstronie nie daje błędu 404

### Menu i nawigacja
- [ ] Kliknięcie logo przenosi na stronę główną
- [ ] Wszystkie linki w menu działają
- [ ] Menu mobilne działa (hamburger)
- [ ] Nawigacja "breadcrumbs" działa

### Produkty
- [ ] Lista produktów wyświetla się
- [ ] Filtry kategorii działają
- [ ] Wyszukiwarka działa
- [ ] Kliknięcie produktu otwiera jego stronę
- [ ] Specyfikacja produktu wyświetla się poprawnie
- [ ] Powiązane produkty się pokazują

### Formularze
- [ ] Formularz kontaktowy wyświetla się
- [ ] Walidacja pól działa (puste pola, email)
- [ ] (Opcjonalnie) Formularz wysyła dane poprawnie

### Wydajność
- [ ] Strona ładuje się w mniej niż 3 sekundy
- [ ] Obrazy ładują się szybko
- [ ] Brak opóźnień w interakcjach
- [ ] Slider działa płynnie

## 📱 Testowanie mobile

- [ ] Otworzyłem stronę na telefonie (Android/iPhone)
- [ ] Menu mobilne działa
- [ ] Strona jest responsywna
- [ ] Wszystkie przyciski są klkalne (nie za małe)
- [ ] Tekst jest czytelny (nie za mały)
- [ ] Slider banerów działa na dotyk (swipe)

## 🔒 Bezpieczeństwo i SEO

- [ ] Strona działa na HTTPS (certyfikat SSL)
- [ ] Przekierowanie HTTP → HTTPS działa (jeśli skonfigurowane)
- [ ] Meta tagi są poprawne (tytuł, opis)
- [ ] Strona ma favicon
- [ ] Brak błędów w konsoli przeglądarki

## 📊 Przeglądarki

Przetestowałem stronę w:
- [ ] Chrome/Edge (Windows)
- [ ] Firefox
- [ ] Safari (Mac/iPhone)
- [ ] Chrome (Android)

## 🎯 Ostateczne sprawdzenie

- [ ] Wszystkie dane kontaktowe są poprawne
- [ ] Wszystkie ceny produktów są aktualne
- [ ] Nie ma literówek
- [ ] Nie ma "Lorem ipsum" ani tekstu zastępczego
- [ ] Nie ma pustych sekcji
- [ ] Loga i branding są poprawne
- [ ] Stopka zawiera aktualne informacje

## 📝 Po wdrożeniu

- [ ] Zapisałem dane dostępowe w bezpiecznym miejscu
- [ ] Zapisałem instrukcję jak wgrać aktualizacje
- [ ] Zrobiłem screenshot działającej strony
- [ ] Powiadomiłem zespół o wdrożeniu
- [ ] Dodałem stronę do zakładek

## 🎉 GRATULACJE!

Jeśli wszystko jest zaznaczone, Twoja strona jest gotowa i działa poprawnie!

---

## 🆘 W razie problemów

### Strona nie ładuje się (biała strona)
1. Sprawdź konsolę przeglądarki (F12)
2. Sprawdź czy plik `.htaccess` jest na miejscu
3. Sprawdź uprawnienia plików (644 dla plików, 755 dla folderów)

### 404 na podstronach
1. Sprawdź czy mod_rewrite jest włączony
2. Sprawdź zawartość pliku `.htaccess`
3. Skontaktuj się z supportem hostingu

### Obrazy się nie ładują
1. Sprawdź ścieżki do obrazów
2. Sprawdź czy obrazy zostały wgrane
3. Sprawdź uprawnienia do plików graficznych

### Coś innego nie działa
Zobacz `INSTRUKCJA_WDROZENIA.md` sekcja "Rozwiązywanie problemów"

---

**Data wdrożenia:** ___________________  
**Wdrożona przez:** ___________________  
**Wersja:** 1.0  
**Notatki:**

___________________________________________
___________________________________________
___________________________________________
