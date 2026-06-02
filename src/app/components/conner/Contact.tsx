import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="kontakt" className="py-12 md:py-24" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-8 md:mb-12">
          <span style={{ color: 'var(--accent)' }} className="uppercase text-[10px] md:text-xs font-bold tracking-[2px]">
            Kontakt
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-1 md:mt-2" style={{ color: 'var(--foreground)' }}>
            Skontaktuj się z nami
          </h2>
          <p style={{ color: 'var(--text-muted)' }} className="mt-3 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Nasi specjaliści czekają na Twoje zapytanie. Odpowiemy na wszystkie pytania dotyczące usług IT.
          </p>
        </div>

        {/* Główna siatka danych */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
          
          {/* Lewa kolumna: Informacje o firmie i mapa */}
          <div className="space-y-6">
            <div 
              style={{ 
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }} 
              className="rounded-2xl p-6 md:p-8 shadow-xs border"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6" style={{ color: 'var(--foreground)' }}>
                Conner Sp. z o.o.
              </h3>
              
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--foreground)' }}>Adres</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">ul. Doktora Seweryna Sterlinga 27/29</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">90-212 Łódź, Polska</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--foreground)' }}>Telefon</p>
                    <a href="tel:426319420" className="text-[var(--accent)] font-bold hover:underline text-base md:text-lg">
                      42 631 94 20
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--foreground)' }}>Email</p>
                    <a href="mailto:sklep@conner.pl" className="text-[var(--accent)] font-bold hover:underline text-sm md:text-base">
                      sklep@conner.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock style={{ color: 'var(--accent)' }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--foreground)' }}>Godziny otwarcia</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Pon - Wt: 9:00 - 18:00</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Śr - Pt: 9:00 - 17:00</p>
                    <p className="text-sm text-slate-400 dark:text-slate-500">Sobota i Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interaktywna mapa Google - UKRYTA NA MOBILE dla płynności scrollowania, aktywna na PC */}
            <div className="hidden md:block">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=ul.+Doktora+Seweryna+Sterlinga+27%2F29,+90-212+Łódź,+Polska"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group border border-slate-200 dark:border-slate-800"
              >
                <div className="relative h-[260px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.4!2d19.4736!3d51.7688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34f2b6f0d7c5%3A0x0!2sul.%20Doktora%20Seweryna%20Sterlinga%2027%2F29%2C%2090-212%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja Conner Sp. z o.o."
                    className="pointer-events-none opacity-80 dark:opacity-70"
                  ></iframe>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--accent)] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg">
                      🗺️ Otwórz nawigację Google Maps
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Prawa kolumna: Formularz kontaktowy */}
          <div className="w-full">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </section>
  );
}
