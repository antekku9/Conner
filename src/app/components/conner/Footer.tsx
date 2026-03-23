import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#1a1c20] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              CONNER<span className="text-[#c5a059]"> sp. z o.o.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesjonalne usługi IT od 1996 roku. Kompleksowa obsługa firm, szkół i instytucji w zakresie sprzętu komputerowego, serwisu i wynajmu urządzeń.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#c5a059]">Szybkie linki</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#serwis" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Serwis komputerowy
                </a>
              </li>
              <li>
                <Link to="/obsluga-firm" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Obsługa firm
                </Link>
              </li>
              <li>
                <Link to="/szkoly" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Szkoły
                </Link>
              </li>
              <li>
                <Link to="/instytucje-publiczne" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Instytucje publiczne
                </Link>
              </li>
              <li>
                <a href="/#wynajem" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Wynajem sprzętu
                </a>
              </li>
              <li>
                <Link to="/produkty" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Katalog produktów
                </Link>
              </li>
              <li>
                <a 
                  href="https://allegro.pl/uzytkownik/ConnerMedia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c5a059] transition-colors"
                >
                  Sklep Allegro
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#c5a059]">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>ul. Doktora Seweryna Sterlinga 27/29</p>
                  <p>90-212 Łódź, Polska</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c5a059] flex-shrink-0" />
                <a href="tel:426319420" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  42 631 94 20
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c5a059] flex-shrink-0" />
                <a href="mailto:sklep@conner.pl" className="text-gray-400 hover:text-[#c5a059] transition-colors">
                  sklep@conner.pl
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Conner Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}