import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  // Smooth scroll handler for anchor links
  const handleScrollTo = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="py-5 border-b border-[#eee] bg-white sticky top-0 z-50 relative overflow-hidden">
      {/* Circuit Board Decoration - Full Width Background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}circuit.png`}
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            filter: 'grayscale(100%) contrast(1.2)',
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-extrabold text-2xl tracking-tight no-underline text-[#1a1c20] flex items-center">
            {/* Logo Conner Sp. z o.o. */}
            <img 
              src={`${import.meta.env.BASE_URL}logo.svg`} 
              alt="Conner Sp. z o.o." 
              className="h-12 w-auto transition-opacity hover:opacity-80"
            />
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center list-none">
            <li>
              <button 
                onClick={() => handleScrollTo('serwis')}
                className="no-underline text-[#1a1c20] font-medium text-sm hover:text-[#c5a059] transition-colors bg-transparent border-none cursor-pointer"
              >
                Serwis
              </button>
            </li>
            <li>
              <Link 
                to="/obsluga-firm" 
                className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                  isActive('/obsluga-firm') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                }`}
              >
                Obsługa firm
              </Link>
            </li>
            <li>
              <Link 
                to="/szkoly" 
                className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                  isActive('/szkoly') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                }`}
              >
                Szkoły
              </Link>
            </li>
            <li>
              <Link 
                to="/instytucje-publiczne" 
                className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                  isActive('/instytucje-publiczne') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                }`}
              >
                Instytucje
              </Link>
            </li>
            <li>
              <button 
                onClick={() => handleScrollTo('wynajem')}
                className="no-underline text-[#1a1c20] font-medium text-sm hover:text-[#c5a059] transition-colors bg-transparent border-none cursor-pointer"
              >
                Wynajem
              </button>
            </li>
            <li>
              <Link 
                to="/produkty" 
                className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                  location.pathname.includes('/produkty') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                }`}
              >
                Produkty
              </Link>
            </li>
            <li>
              <a 
                href="https://allegro.pl/uzytkownik/ConnerMedia" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1a1c20] px-4 py-2 rounded-md transition-all hover:bg-[#1a1c20] hover:text-white no-underline text-[#1a1c20] font-medium text-sm"
              >
                Sklep Allegro
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a1c20] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#eee] pt-4">
            <ul className="flex flex-col gap-4 list-none">
              <li>
                <button 
                  onClick={() => handleScrollTo('serwis')}
                  className="no-underline text-[#1a1c20] font-medium text-sm hover:text-[#c5a059] transition-colors bg-transparent border-none cursor-pointer text-left w-full"
                >
                  Serwis
                </button>
              </li>
              <li>
                <Link 
                  to="/obsluga-firm" 
                  className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                    isActive('/obsluga-firm') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Obsługa firm
                </Link>
              </li>
              <li>
                <Link 
                  to="/szkoly" 
                  className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                    isActive('/szkoly') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Szkoły
                </Link>
              </li>
              <li>
                <Link 
                  to="/instytucje-publiczne" 
                  className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                    isActive('/instytucje-publiczne') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Instytucje
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('wynajem')}
                  className="no-underline text-[#1a1c20] font-medium text-sm hover:text-[#c5a059] transition-colors bg-transparent border-none cursor-pointer text-left w-full"
                >
                  Wynajem
                </button>
              </li>
              <li>
                <Link 
                  to="/produkty" 
                  className={`no-underline font-medium text-sm hover:text-[#c5a059] transition-colors ${
                    location.pathname.includes('/produkty') ? 'text-[#c5a059]' : 'text-[#1a1c20]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Produkty
                </Link>
              </li>
              <li>
                <a 
                  href="https://allegro.pl/uzytkownik/ConnerMedia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1a1c20] px-4 py-2 rounded-md transition-all hover:bg-[#1a1c20] hover:text-white no-underline text-[#1a1c20] font-medium text-sm inline-block"
                >
                  Sklep Allegro
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}