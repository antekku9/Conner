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

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#c5a059] mx-auto mb-4" />
                <p className="font-semibold text-[#1a1c20] mb-2">Odwiedź nas w Łodzi</p>
                <p className="text-sm text-[#6b7280]">ul. Doktora Seweryna Sterlinga 27/29</p>
                <p className="text-sm text-[#6b7280]">90-212 Łódź</p>
              </div>
            </div>
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