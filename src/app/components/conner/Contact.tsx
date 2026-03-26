import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-[#f9fafb]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[#c5a059] uppercase text-xs font-bold tracking-[2px]">
            Kontakt
          </span>
          <h2 className="text-4xl font-bold mt-2">Skontaktuj się z nami</h2>
          <p className="text-[#6b7280] mt-4">
            Nasi specjaliści czekają na Twoje zapytanie. Odpowiemy na wszystkie pytania dotyczące usług IT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-6">
              <h3 className="text-2xl font-bold mb-6">Conner Sp. z o.o.</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#c5a059] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Adres</p>
                    <p className="text-[#6b7280]">ul. Doktora Seweryna Sterlinga 27/29</p>
                    <p className="text-[#6b7280]">90-212 Łódź, Polska</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-[#c5a059] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Telefon</p>
                    <a href="tel:426319420" className="text-[#c5a059] hover:underline text-lg">
                      42 631 94 20
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#c5a059] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:sklep@conner.pl" className="text-[#c5a059] hover:underline">
                      sklep@conner.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-[#c5a059] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Godziny otwarcia</p>
                    <p className="text-[#6b7280]">Pon - Pt: 9:00 - 17:00</p>
                    <p className="text-[#6b7280]">Sobota i Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=ul.+Doktora+Seweryna+Sterlinga+27%2F29,+90-212+Łódź,+Polska"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative h-[300px]">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.4!2d19.4736!3d51.7688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34f2b6f0d7c5%3A0x0!2sul.%20Doktora%20Seweryna%20Sterlinga%2027%2F29%2C%2090-212%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Conner Sp. z o.o."
                  className="pointer-events-none"
                ></iframe>
                
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c5a059] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    🗺️ Otwórz nawigację Google Maps
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}