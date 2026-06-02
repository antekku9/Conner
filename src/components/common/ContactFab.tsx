import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { ContactForm } from '../home/ContactForm'; // Dostosuj ścieżkę do Twojego ContactForm

export function ContactFab() {
  const [isOpen, setIsOpen] = useState(false);

  // Blokada scrollowania tła witryny, gdy formularz w dymku jest otwarty
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Pływający okrągły dymek w stylu x-kom - Widoczny tylko na mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-2xl z-[999] md:hidden transition-all duration-300 active:scale-95 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        aria-label="Otwórz szybki kontakt"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        {/* Pulsująca kropka powiadomienia, która przyciąga wzrok bez zasłaniania ekranu */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-950 animate-pulse" />
      </button>

      {/* Ciemny overlay w tle po otwarciu dymka */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[1000] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Wysuwany od dołu arkusz (BottomSheet) zawierający Twój oryginalny formularz */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-white dark:bg-[#191d26] rounded-t-3xl z-[1001] p-5 shadow-2xl border-t border-slate-100 dark:border-slate-800/60 md:hidden flex flex-col transition-all duration-300 ease-in-out max-h-[92vh] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Pasek dekoracyjny dający odczucie natywnej aplikacji */}
        <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-4 shrink-0" onClick={() => setIsOpen(false)} />

        {/* Nagłówek panelu z przyciskiem zamknięcia */}
        <div className="flex justify-between items-center mb-2 shrink-0">
          <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Szybka wycena / pomoc</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 active:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Kontener przewijany dla formularza, aby nie uciekał poza ekran telefonu */}
        <div className="overflow-y-auto flex-1 pb-4 scrollbar-none">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
