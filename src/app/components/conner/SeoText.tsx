import React from 'react';
import salonImg from '../../../assets/salon-conner.jpg'; // Import z folderu src/assets

export function SeoText() {
  return (
    <section 
      className="py-16 border-t border-b border-gray-800" 
      style={{ backgroundColor: '#121418' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-none">
          
          {/* Główna sekcja: Nagłówek, wstęp i zdjęcie salonu dla Google */}
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6">
                Profesjonalny Serwis Komputerowy i Obsługa IT w Łodzi – Conner Sp. z o.o.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Szukasz sprawdzonego wsparcia technologicznego dla swojego biznesu lub potrzebujesz szybkiej naprawy sprzętu prywatnego? 
                <strong className="text-white"> Conner</strong> to nowoczesny salon, <strong className="text-white">sklep komputerowy w Łodzi</strong> i serwis, który od 2007 roku dostarcza kompleksowe rozwiązania 
                teleinformatyczne. Nasz zespół tworzą doświadczeni specjaliści, dla których priorytetem jest ciągłość działania Twoich systemów IT.
              </p>
            </div>
            
            {/* Ostro zdefiniowane zdjęcie firmy, widoczne dla algorytmu Google i klientów */}
            <div className="w-full lg:w-1/3 max-w-md shrink-0">
              <img 
                src={salonImg} 
                alt="Salon i Serwis Komputerowy Conner w Łodzi" 
                className="rounded-lg shadow-xl border border-gray-800 object-cover w-full h-52"
              />
            </div>
          </div>
          
          {/* Rozwinięcie oferty w dwukolumnowym układzie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-base leading-relaxed mb-8">
            <div>
              <p>
                Jako autoryzowany partner wiodących producentów, oferujemy profesjonalną <strong className="text-white">naprawę laptopów oraz komputerów stacjonarnych</strong> wszystkich 
                popularnych marek (m.in. Asus, Lenovo, Dell, HP). Przyspieszamy działanie sprzętu biurowego, wymieniamy uszkodzone matryce, czyścimy 
                układy chłodzenia i skutecznie usuwamy złośliwe oprogramowanie, dbając o bezpieczeństwo Twoich danych.
              </p>
            </div>
            
            <div>
              <p className="mb-4">
                Dla sektora biznesowego, szkół oraz instytucji publicznych na terenie Łodzi i województwa łódzkiego przygotowaliśmy dedykowaną ofertę 
                na kompleksowe <strong className="text-white">usługi IT w Łodzi</strong> oraz stały outsourcing informatyczny. Projektujemy i wdrażamy bezpieczne sieci komputerowe w oparciu o niezawodne systemy 
                zarządzania takie jak <em className="text-white font-medium">Ubiquiti UniFi</em> oraz <em className="text-white font-medium">TP-Link Omada</em>, gwarantując stabilne i szybkie połączenie w każdym biurze.
              </p>
              <p>
                Naszą specjalizacją są nowoczesne <strong className="text-white">urządzenia biurowe w Łodzi</strong> oraz pełna optymalizacja kosztów druku w przedsiębiorstwach. Oferujemy elastyczny <strong className="text-white">wynajem drukarek i urządzeń 
                wielofunkcyjnych</strong> oraz kompleksowy serwis kserokopiarek. Wybierając Conner, zyskujesz stałe pogotowie komputerowe, fachowe doradztwo 
                przy zakupie sprzętu IT oraz partnera, który dba o cyfrowe bezpieczeństwo Twojego biznesu.
              </p>
            </div>
          </div>

          {/* Sekcja dedykowana pod brakujące frazy kluczowe */}
          <div className="border-t border-gray-800 pt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Nasze specjalizacje lokalne:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-450 text-sm">
              <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/60">
                <strong className="text-white block text-base mb-1">Składanie komputerów Łódź</strong>
                Projektujemy i konfigurujemy jednostki centralne skrojone pod indywidualne potrzeby. Oferujemy profesjonalne składanie komputerów do gier, pracy biurowej oraz zaawansowanej obróbki graficznej i wideo, dbając o optymalny dobór komponentów i perfekcyjny cable management.
              </li>
              <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/60">
                <strong className="text-white block text-base mb-1">Laptopy Łódź – Serwis i doradztwo</strong>
                Twój notebook zwalnia lub przegrzewa się pod obciążeniem? Nasz salon diagnozuje laptopy w Łodzi w ekspresowym tempo. Zajmujemy się modernizacją podzespołów, wymianą dysków na ultra szybkie NVMe SSD oraz naprawą płyt głównych po zalaniach.
              </li>
              <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/60">
                <strong className="text-white block text-base mb-1">Kompleksowe usługi IT w Łodzi</strong>
                Dla łódzkich przedsiębiorców dostarczamy wsparcie techniczne najwyższej klasy. Nasze usługi IT obejmują audyty bezpieczeństwa, wdrażanie systemów kopii zapasowych (backup), administrację serwerami oraz natychmiastową pomoc w nagłych awariach systemowych.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
