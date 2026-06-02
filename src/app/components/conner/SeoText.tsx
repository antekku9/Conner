import React, { useState } from 'react';
import salonImg from '../../../assets/salon-conner.jpg';
import { ChevronDown, ChevronUp, Zap, ShieldCheck, Monitor, Laptop, Settings } from 'lucide-react';

export function SeoText() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--background)', 
        borderTopColor: 'var(--border)', 
        borderBottomColor: 'var(--border)' 
      }}
      className="py-16 md:py-24 border-t border-b transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* ====================================================================== */}
        {/* WIDOK MOBILNY (Zwijany opis, zachowana oryginalna logika)              */}
        {/* ====================================================================== */}
        <div className="md:hidden">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight leading-snug">
                Profesjonalny Serwis Komputerowy i Obsługa IT w Łodzi – Conner Sp. z o.o.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Szukasz sprawdzonego wsparcia technologicznego dla swojego biznesu lub potrzebujesz szybkiej naprawy sprzętu prywatnego? 
                <strong className="text-slate-900 dark:text-white font-bold"> Conner</strong> to nowoczesny salon, sklep komputerowy w Łodzi i serwis, który od 2007 roku dostarcza kompleksowe rozwiązania teleinformatyczne.
              </p>
            </div>

            {/* Kontener z warunkowym rozwijaniem */}
            <div className={`flex flex-col gap-4 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              
              <div className="w-full max-w-sm mx-auto my-2">
                <img 
                  src={salonImg} 
                  alt="Salon i Serwis Komputerowy Conner w Łodzi" 
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 object-cover w-full h-48 shadow-xs"
                />
              </div>

              <div className="text-slate-600 dark:text-slate-300 text-sm space-y-4 leading-relaxed">
                <p>
                  Jako autoryzowany partner wiodących producentów, oferujemy profesjonalną <strong className="text-slate-900 dark:text-white font-bold">naprawę laptopów oraz komputerów stacjonarnych</strong> wszystkich popularnych marek. Przyspieszamy działanie sprzętu biurowego, wymieniamy uszkodzone matryce, czyścimy układy chłodzenia i skutecznie usuwamy złośliwe oprogramowanie.
                </p>
                <p>
                  Dla sektora biznesowego, szkół oraz instytucji publicznych na terenie Łodzi i województwa łódzkiego przygotowaliśmy dedykowaną ofertę na kompleksowe <strong className="text-slate-900 dark:text-white font-bold">usługi IT w Łodzi</strong> oraz stały outsourcing informatyczny. Projektujemy i wdrażamy bezpieczne sieci komputerowe w oparciu o systemy zarządzania takie jak <em className="font-semibold text-slate-900 dark:text-white not-italic">Ubiquiti UniFi</em> oraz <em className="font-semibold text-slate-900 dark:text-white not-italic">TP-Link Omada</em>.
                </p>
                <p>
                  Naszą specjalizacją są nowoczesne <strong className="text-slate-900 dark:text-white font-bold">urządzenia biurowe w Łodzi</strong>. Oferujemy elastyczny <strong className="text-slate-900 dark:text-white font-bold">wynajem drukarek i urządzeń wielofunkcyjnych</strong> oraz kompleksowy serwis kserokopiarek.
                </p>
              </div>

              {/* Lokalne specjalizacje na mobile */}
              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-900">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                  <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">Składanie komputerów Łódź</strong>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Projektujemy i konfigurujemy jednostki centralne skrojone pod indywidualne potrzeby. Oferujemy profesjonalne składanie komputerów do gier i pracy biurowej.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                  <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">Laptopy Łódź – Serwis</strong>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Nasz salon diagnozuje laptopy w Łodzi w ekspresowym tempie. Zajmujemy się modernizacją podzespołów, wymianą dysków oraz naprawą płyt głównych.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                  <strong className="text-slate-900 dark:text-white block text-sm font-bold mb-1">Kompleksowe usługi IT</strong>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Dla łódzkich przedsiębiorców dostarczamy wsparcie najwyższej klasy. Nasze usługi IT obejmują audyty bezpieczeństwa oraz wdrażanie systemów kopii zapasowych.</p>
                </div>
              </div>

            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 w-full py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-xs text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-center gap-1.5 active:bg-slate-100 dark:active:bg-slate-800 transition-colors min-h-[40px]"
            >
              {isExpanded ? (
                <><span>Zwiń opis firmy</span><ChevronUp className="w-4 h-4" /></>
              ) : (
                <><span>Rozwiń pełny opis firmy</span><ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>

        {/* ====================================================================== */}
        {/* WIDOK DESKTOPOWY (Całkowicie przebudowany, zbalansowany układ)         */}
        {/* ====================================================================== */}
        <div className="hidden md:block">
          
          {/* 1. Część nagłówkowa ze zdjęciem 50/50 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px] block">
                O nas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Profesjonalny Serwis Komputerowy i Obsługa IT w Łodzi – Conner Sp. z o.o.
              </h2>
              <div className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Szukasz sprawdzonego wsparcia technologicznego dla swojego biznesu lub potrzebujesz szybkiej naprawy sprzętu prywatnego? 
                  <strong className="text-slate-900 dark:text-white font-semibold"> Conner</strong> to nowoczesny salon, <strong className="text-slate-900 dark:text-white font-semibold">sklep komputerowy w Łodzi</strong> i serwis, który od 2007 roku dostarcza kompleksowe rozwiązania teleinformatyczne.
                </p>
                <p>
                  Nasz zespół tworzą doświadczeni specjaliści, dla których priorytetem jest ciągłość działania Twoich systemów IT.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a059] to-[#b39050] rounded-2xl blur opacity-25 group-hover:opacity-35 transition duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg aspect-[4/3]">
                <img 
                  src={salonImg} 
                  alt="Salon i Serwis Komputerowy Conner w Łodzi" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 2. Dwie główne kolumny ofertowe z ikonami i wyrównaniem wysokości */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Karta: Serwis indywidualny */}
            <div 
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
              className="p-8 rounded-2xl border shadow-sm flex flex-col justify-start space-y-5"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#c5a059]">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Serwis i Wsparcie Klienta</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  Jako autoryzowany partner wiodących producentów, oferujemy profesjonalną <strong className="text-slate-900 dark:text-white font-semibold">naprawę laptopów oraz komputerów stacjonarnych</strong> wszystkich popularnych marek (m.in. Asus, Lenovo, Dell, HP). Przyspieszamy działanie sprzętu biurowego, wymieniamy uszkodzone matryce, czyścimy układy chłodzenia i skutecznie usuwamy złośliwe oprogramowanie, dbając o bezpieczeństwo Twoich danych.
                </p>
              </div>
            </div>

            {/* Karta: Outsourcing i biznes */}
            <div 
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
              className="p-8 rounded-2xl border shadow-sm flex flex-col justify-start space-y-5"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#c5a059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Outsourcing IT i Infrastruktura</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed space-y-3">
                  <span>
                    Dla sektora biznesowego, szkół oraz instytucji publicznych na terenie Łodzi i województwa łódzkiego przygotowaliśmy dedykowaną ofertę na kompleksowe <strong className="text-slate-900 dark:text-white font-semibold">usługi IT w Łodzi</strong> oraz stały outsourcing informatyczny. Projektujemy i wdrażamy bezpieczne sieci komputerowe w oparciu o niezawodne systemy zarządzania takie jak <em className="font-semibold text-slate-900 dark:text-white not-italic">Ubiquiti UniFi</em> oraz <em className="font-semibold text-slate-900 dark:text-white not-italic">TP-Link Omada</em>, gwarantując stabilne i szybkie połączenie w każdym biurze.
                  </span>
                  <span className="block mt-3">
                    Naszą specjalizacją są nowoczesne <strong className="text-slate-900 dark:text-white font-semibold">urządzenia biurowe w Łodzi</strong> oraz pełna optymalizacja kosztów druku w przedsiębiorstwach. Oferujemy elastyczny <strong className="text-slate-900 dark:text-white font-semibold">wynajem drukarek i urządzeń wielofunkcyjnych</strong> oraz kompleksowy serwis kserokopiarek. Wybierając Conner, zyskujesz stałe pogotowie komputerowe, fachowe doradztwo przy zakupie sprzętu IT.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 3. Trzy dolne karty specjalizacji lokalnych o równej wysokości */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Nasze specjalizacje lokalne:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Specjalizacja 1 */}
              <div 
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
                className="p-6 md:p-8 rounded-xl border flex flex-col justify-between h-full hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="text-[#c5a059]"><Monitor className="w-5 h-5" /></div>
                  <strong className="text-slate-900 dark:text-white block text-base font-bold">Składanie komputerów Łódź</strong>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Projektujemy i konfigurujemy jednostki centralne skrojone pod indywidualne potrzeby. Oferujemy profesjonalne składanie komputerów do gier, pracy biurowej oraz zaawansowanej obróbki graficznej i wideo, dbając o optymalny dobór komponentów i perfekcyjny cable management.
                  </p>
                </div>
              </div>

              {/* Specjalizacja 2 */}
              <div 
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
                className="p-6 md:p-8 rounded-xl border flex flex-col justify-between h-full hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="text-[#c5a059]"><Laptop className="w-5 h-5" /></div>
                  <strong className="text-slate-900 dark:text-white block text-base font-bold">Laptopy Łódź – Serwis i doradztwo</strong>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Twój notebook zwalnia lub przegrzewa się pod obciążeniem? Nasz salon diagnozuje laptopy w Łodzi w ekspresowym tempo. Zajmujemy się modernizacją podzespołów, wymianą dysków na ultra szybkie NVMe SSD oraz naprawą płyt głównych po zalaniach.
                  </p>
                </div>
              </div>

              {/* Specjalizacja 3 */}
              <div 
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
                className="p-6 md:p-8 rounded-xl border flex flex-col justify-between h-full hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="text-[#c5a059]"><Settings className="w-5 h-5" /></div>
                  <strong className="text-slate-900 dark:text-white block text-base font-bold">Kompleksowe usługi IT w Łodzi</strong>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Dla łódzkich przedsiębiorców dostarczamy wsparcie techniczne najwyższej klasy. Nasze usługi IT obejmują audyty bezpieczeństwa, wdrażanie systemów kopii zapasowych (backup), administrację serwerami oraz natychmiastową pomoc w nagłych awariach systemowych.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
