import { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  // Stany do zarządzania akordeonami w widoku mobilnym
  const [linksExpanded, setLinksExpanded] = useState(false);
  const [contactExpanded, setContactExpanded] = useState(false);

  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--navbar-bg)', 
        borderTopColor: 'var(--navbar-border)' 
      }} 
      className="py-10 md:py-16 border-t text-foreground transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Główna struktura siatki */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          {/* O firmie - widoczne zawsze (zarówno mobile, jak i desktop) */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block mb-3">
              <img 
                src={`${import.meta.env.BASE_URL}logo-white.svg`} 
                alt="Conner Sp. z o.o." 
                className="h-9 md:h-10 w-auto transition-opacity hover:opacity-80 dark:block hidden"
              />
              <img 
                src={`${import.meta.env.BASE_URL}logo.svg`} 
                alt="Conner Sp. z o.o." 
                className="h-9 md:h-10 w-auto transition-opacity hover:opacity-80 block dark:hidden"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Profesjonalne usługi IT od 1996 roku. Kompleksowa obsługa firm, szkół i instytucji w zakresie sprzętu komputerowego, serwisu i wynajmu urządzeń.
            </p>
          </div>

          {/* ====================================================================== */}
          {/* Szybkie linki - Zwijane na mobile, otwarte na desktopie                 */}
          {/* ====================================================================== */}
          <div className="border-t border-slate-100 dark:border-slate-900/60 pt-4 md:border-none md:pt-0">
            {/* Nagłówek dla Mobile (Klikalny) */}
            <button 
              onClick={() => setLinksExpanded(!linksExpanded)}
              className="w-full flex justify-between items-center text-left md:hidden bg-transparent border-none py-1 focus:outline-none"
            >
              <h4 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Szybkie linki</h4>
              {linksExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Nagłówek dla Desktop (Statyczny) */}
            <h4 className="hidden md:block font-bold mb-4 text-[var(--accent)] text-sm uppercase tracking-wider">Szybkie linki</h4>

            {/* Lista linków z warunkową widocznością na mobile */}
            <ul className={`space-y-3 md:space-y-2 text-sm mt-3 md:mt-0 transition-all duration-300 overflow-hidden md:max-h-none ${linksExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}`}>
              <li>
                <a href="/#serwis" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Serwis komputerowy
                </a>
              </li>
              <li>
                <Link to="/obsluga-firm" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Obsługa firm
                </Link>
              </li>
              <li>
                <Link to="/szkoly" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Szkoły
                </Link>
              </li>
              <li>
                <Link to="/instytucje-publiczne" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Instytucje publiczne
                </Link>
              </li>
              <li>
                <a href="/#wynajem" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Wynajem sprzętu
                </a>
              </li>
              <li>
                <Link to="/produkty" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Katalog produktów
                </Link>
              </li>
              <li>
                <a 
                  href="https://allegro.pl/uzytkownik/ConnerMedia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0"
                >
                  Sklep Allegro
                </a>
              </li>
              <li>
                <a href="/#kontakt" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] transition-colors no-underline block py-1 md:py-0">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* ====================================================================== */}
          {/* Kontakt - Zwijany na mobile, otwarty na desktopie                       */}
          {/* ====================================================================== */}
          <div className="border-t border-slate-100 dark:border-slate-900/60 pt-4 md:border-none md:pt-0">
            {/* Nagłówek dla Mobile (Klikalny) */}
            <button 
              onClick={() => setContactExpanded(!contactExpanded)}
              className="w-full flex justify-between items-center text-left md:hidden bg-transparent border-none py-1 focus:outline-none"
            >
              <h4 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Kontakt</h4>
              {contactExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Nagłówek dla Desktop (Statyczny) */}
            <h4 className="hidden md:block font-bold mb-4 text-[var(--accent)] text-sm uppercase tracking-wider">Kontakt</h4>

            {/* Blok kontaktowy z podbitym rozmiarem elementów pod kciuk na telefonie */}
            <div className={`space-y-4 md:space-y-3 text-sm mt-4 md:mt-0 transition-all duration-300 overflow-hidden md:max-h-none ${contactExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}`}>
              <div className="flex items-start gap-3 py-1 md:py-0">
                <MapPin className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <div className="text-slate-500 dark:text-slate-400">
                  <p className="font-medium text-slate-800 dark:text-slate-200">ul. Doktora Seweryna Sterlinga 27/29</p>
                  <p>90-212 Łódź, Polska</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-1 md:py-0">
                <Phone className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                <a href="tel:426319420" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] font-medium transition-colors no-underline block">
                  42 631 94 20
                </a>
              </div>
              <div className="flex items-center gap-3 py-1 md:py-0">
                <Mail className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                <a href="mailto:sklep@conner.pl" className="text-slate-500 dark:text-slate-400 hover:text-[var(--accent)] font-medium transition-colors no-underline block">
                  sklep@conner.pl
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Prawa autorskie / Dolna kreska podziału */}
        <div className="border-t border-slate-100 dark:border-slate-900 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Conner Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
        </div>

      </div>
    </footer>
  );
}
