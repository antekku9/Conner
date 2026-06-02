import React, { useState } from 'react';
import salonImg from '../../../assets/salon-conner.jpg';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function SeoText() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--background)', 
        borderTopColor: 'var(--border)', 
        borderBottomColor: 'var(--border)' 
      }}
      className="py-12 md:py-16 border-t border-b transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* ====================================================================== */}
        {/* WIDOK MOBILNY (Zwijany opis a'la aplikacje e-commerce, poprawiony kontrast) */}
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

              {/* Lokalne specjalizacje w formie czystych mobilnych kart o wyższym jasnym kontraście */}
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

            {/* Przycisk rozwijania / zwijania - idealny pod kciuk */}
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
        {/* WIDOK DESKTOPOWY (Przywrócony, idealny, szeroki układ o stałych marginesach) */}
        {/* ====================================================================== */}
        <div className="hidden md:block">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Profesjonalny Serwis Komputerowy i Obsługa IT w Łodzi – Conner Sp. z o.o.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Szukasz sprawdzonego wsparcia technologicznego dla swojego biznesu lub potrzebujesz szybkiej naprawy sprzętu prywatnego? 
                <strong className="text-slate-900 dark:text-white font-semibold"> Conner</strong> to nowoczesny salon, <strong className="text-slate-900 dark:text-white font-semibold">sklep komputerowy w Łodzi</strong> i serwis, który od 2007 roku dostarcza kompleksowe rozwiązania teleinformatyczne. Nasz zespół tworzą doświadczeni specjaliści, dla których priorytetem jest ciągłość działania Twoich systemów IT.
              </p>
            </div>
            
            <div className="w-full lg:w-1/3 max-w-md shrink-0">
              <img 
                src={salonImg} 
                alt="Salon i Serwis Komputerowy Conner w Łodzi" 
                className="rounded-xl shadow-md border border-slate-200 dark:border-slate-800 object-cover w-full h-52"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-10">
            <div>
              <p>
                Jako autoryzowany partner wiodących producentów, oferujemy profesjonalną <strong className="text-slate-900 dark:text-white font-semibold">naprawę laptopów oraz komputerów stacjonarnych</strong> wszystkich popularnych marek (m.in. Asus, Lenovo, Dell, HP). Przyspieszamy działanie sprzętu biurowego, wymieniamy uszkodzone matryce, czyścimy układy chłodzenia i skutecznie usuwamy złośliwe oprogramowanie, dbając o bezpieczeństwo Twoich danych.
              </p>
            </div>
            
            <div>
              <p className="mb-4">
                Dla sektora biznesowego, szkół oraz instytucji publicznych na terenie Łodzi i województwa łódzkiego przygotowaliśmy dedykowaną ofertę na kompleksowe <strong className="text-slate-900 dark:text-white font-semibold">usługi IT w Łodzi</strong> oraz stały outsourcing informatyczny. Projektujemy i wdrażamy bezpieczne sieci komputerowe w oparciu o niezawodne systemy zarządzania takie jak <em className="text-slate-900 dark:text-white font-medium not-italic">Ubiquiti UniFi</em> oraz <em className="text-slate-900 dark:text-white font-medium not-italic">TP-Link Omada</em>, gwarantując stabilne i szybkie połączenie w każdym biurze.
              </p>
              <p>
                Naszą specjalizacją są nowoczesne <strong className="text-slate-900 dark:text-white font-semibold">urządzenia biurowe w Łodzi</strong> oraz pełna optymalizacja kosztów druku w przedsiębiorstwach. Oferujemy elastyczny <strong className="text-slate-900 dark:text-white font-semibold">wynajem drukarek i urządzeń wielofunkcyjnych</strong> oraz kompleksowy serwis kserokopiarek. Wybierając Conner, zyskujesz stałe pogotowie komputerowe, fachowe doradztwo przy zakupie sprzętu IT oraz partnera, który dba o cyfrowe bezpieczeństwo Twojego biznesu.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Nasze specjalizacje lokalne:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                <strong className="text-slate-900 dark:text-white block text-base font-bold mb-2">Składanie komputerów Łódź</strong>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Projektujemy i konfigurujemy jednostki centralne skrojone pod indywidualne potrzeby. Oferujemy profesjonalne składanie komputerów do gier, pracy biurowej oraz zaawansowanej obróbki graficznej i wideo, dbając o optymalny dobór komponentów i perfekcyjny cable management.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                <strong className="text-slate-900 dark:text-white block text-base font-bold mb-2">Laptopy Łódź – Serwis i doradztwo</strong>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Twój notebook zwalnia lub przegrzewa się pod obciążeniem? Nasz salon diagnozuje laptopy w Łodzi w ekspresowym tempie. Zajmujemy się modernizacją podzespołów, wymianą dysków na ultra szybkie NVMe SSD oraz naprawą płyt głównych po zalaniach.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                <strong className="text-slate-900 dark:text-white block text-base font-bold mb-2">Kompleksowe usługi IT w Łodzi</strong>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Dla łódzkich przedsiębiorców dostarczamy wsparcie techniczne najwyższej klasy. Nasze usługi IT obejmują audyty bezpieczeństwa, wdrażanie systemów kopii zapasowych (backup), administrację serwerami oraz natychmiastową pomoc w nagłych awariach systemowych.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
