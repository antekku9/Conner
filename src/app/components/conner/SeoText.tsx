import React from 'react';

export function SeoText() {
  return (
    <section 
      className="py-16 border-t border-b border-gray-800" 
      style={{ backgroundColor: '#121418' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">
            Profesjonalny Serwis Komputerowy i Obsługa IT w Łodzi – Conner Sp. z o.o.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-base leading-relaxed">
            <div>
              <p className="mb-4">
                Szukasz sprawdzonego wsparcia technologicznego dla swojego biznesu lub potrzebujesz szybkiej naprawy sprzętu prywatnego? 
                <strong className="text-white"> Conner</strong> to nowoczesny salon i serwis komputerowy w Łodzi, który od 2007 roku dostarcza kompleksowe rozwiązania 
                teleinformatyczne. Nasz zespół tworzą doświadczeni specjaliści, dla których priorytetem jest ciągłość działania Twoich systemów IT.
              </p>
              <p>
                Jako autoryzowany partner wiodących producentów, oferujemy profesjonalną <strong className="text-white">naprawę laptopów oraz komputerów stacjonarnych</strong> wszystkich 
                popularnych marek (m.in. Asus, Lenovo, Dell, HP). Przyspieszamy działanie sprzętu biurowego, wymieniamy uszkodzone matryce, czyścimy 
                układy chłodzenia i skutecznie usuwamy złośliwe oprogramowanie, dbając o bezpieczeństwo Twoich danych.
              </p>
            </div>
            
            <div>
              <p className="mb-4">
                Dla sektora biznesowego, szkół oraz instytucji publicznych na terenie Łodzi i województwa łódzkiego przygotowaliśmy dedykowaną ofertę 
                <strong className="text-white"> outsourcingu IT i stałej obsługi firm</strong>. Projektujemy i wdrażamy bezpieczne sieci komputerowe w oparciu o niezawodne systemy 
                zarządzania takie jak <em className="text-white font-medium">Ubiquiti UniFi</em> oraz <em className="text-white font-medium">TP-Link Omada</em>, gwarantując stabilne i szybkie połączenie w każdym biurze.
              </p>
              <p>
                Naszą specjalizacją jest również optymalizacja kosztów druku w przedsiębiorstwach. Oferujemy elastyczny <strong className="text-white">wynajem drukarek i urządzeń 
                wielofunkcyjnych</strong> oraz kompleksowy serwis kserokopiarek. Wybierając Conner, zyskujesz stałe pogotowie komputerowe, fachowe doradztwo 
                przy zakupie sprzętu IT oraz partnera, który dba o cyfrowe bezpieczeństwo Twojego biznesu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
