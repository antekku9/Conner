import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  // Apply theme to document and detect system preference
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = () => {
      const root = document.documentElement;
      
      if (theme === 'system') {
        const systemDark = darkModeQuery.matches;
        setIsDarkMode(systemDark);
        if (systemDark) {
          root.classList.remove('light');
        } else {
          root.classList.add('light');
        }
      } else if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        setIsDarkMode(true);
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        setIsDarkMode(false);
      }
    };
    
    applyTheme();
    
    const handler = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };
    
    darkModeQuery.addEventListener('change', handler);
    return () => darkModeQuery.removeEventListener('change', handler);
  }, [theme]);

  // Zablokowanie scrollowania tła, kiedy menu mobilne jest otwarte (efekt aplikacji)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  // Toggle theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  const isActive = (path: string) => location.pathname === path;

  // Scroll to top when logo is clicked
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  // Smooth scroll handler for anchor links
  const handleScrollTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav style={{ backgroundColor: 'var(--navbar-bg)', borderBottomColor: 'var(--navbar-border)' }} className="py-4 md:py-5 border-b sticky top-0 z-50 overflow-hidden backdrop-blur-sm">
        {/* Circuit Board Decoration - Full Width Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img 
            src={`${import.meta.env.BASE_URL}circuit.png`}
            alt="" 
            className="w-full h-full object-cover"
            style={{ 
              filter: isDarkMode ? 'grayscale(100%) contrast(1.5) invert(1)' : 'grayscale(100%) contrast(1.2)',
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-5 relative z-50">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-extrabold text-2xl tracking-tight no-underline flex items-center" onClick={handleLogoClick} style={{ color: 'var(--navbar-text)' }}>
              <img 
                src={isDarkMode ? `${import.meta.env.BASE_URL}logo-white.svg` : `${import.meta.env.BASE_URL}logo.svg`}
                alt="Conner Sp. z o.o." 
                className="h-10 md:h-12 w-auto transition-opacity hover:opacity-80"
              />
            </Link>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 items-center list-none">
              <li>
                <button 
                  onClick={() => handleScrollTo('serwis')}
                  style={{ color: 'var(--navbar-text)' }}
                  className="font-medium text-sm transition-all bg-transparent border-none cursor-pointer relative pb-1 group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">Serwis</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--accent)' }}></span>
                </button>
              </li>
              <li>
                <Link 
                  to="/obsluga-firm" 
                  style={{ color: isActive('/obsluga-firm') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  className="no-underline font-medium text-sm transition-all relative pb-1 group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">Obsługa firm</span>
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full ${isActive('/obsluga-firm') ? 'w-full' : 'w-0'}`}
                    style={{ backgroundColor: 'var(--accent)' }}
                  ></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/szkoly" 
                  style={{ color: isActive('/szkoly') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  className="no-underline font-medium text-sm transition-all relative pb-1 group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">Szkoły</span>
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full ${isActive('/szkoly') ? 'w-full' : 'w-0'}`}
                    style={{ backgroundColor: 'var(--accent)' }}
                  ></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/instytucje-publiczne" 
                  style={{ color: isActive('/instytucje-publiczne') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  className="no-underline font-medium text-sm transition-all relative pb-1 group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">Instytucje</span>
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full ${isActive('/instytucje-publiczne') ? 'w-full' : 'w-0'}`}
                    style={{ backgroundColor: 'var(--accent)' }}
                  ></span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('wynajem')}
                  style={{ color: 'var(--navbar-text)' }}
                  className="font-medium text-sm transition-all bg-transparent border-none cursor-pointer relative pb-1 group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">Wynajem</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--accent)' }}></span>
                </button>
              </li>
              <li>
                <Link 
                  to="/produkty" 
                  style={{ color: location.pathname.includes('/produkty') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  className="no-underline font-medium text-sm transition-all relative pb-1 group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">Produkty</span>
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full ${location.pathname.includes('/produkty') ? 'w-full' : 'w-0'}`}
                    style={{ backgroundColor: 'var(--accent)' }}
                  ></span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://allegro.pl/uzytkownik/ConnerMedia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    borderColor: 'var(--accent)',
                    color: 'var(--navbar-text)'
                  }}
                  className="border px-4 py-2 rounded-md transition-all hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] no-underline font-medium text-sm"
                >
                  Sklep Allegro
                </a>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  style={{ 
                    color: 'var(--navbar-text)',
                    borderColor: 'var(--navbar-border)',
                    backgroundColor: isDarkMode ? 'rgba(212, 169, 96, 0.08)' : 'transparent'
                  }}
                  className="p-2 rounded-md hover:bg-[var(--bg-light)] transition-all border"
                  aria-label="Przełącz motyw"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} /> : <Moon className="w-5 h-5" />}
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button - Zwiększona powierzchnia kliku do 44px */}
            <button
              style={{ color: 'var(--navbar-text)' }}
              className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer select-none active:scale-95 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 animate-none" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Nowe Mobilne Menu Pełnoekranowe (App-style Overaly) */}
      <div 
        style={{ backgroundColor: 'var(--navbar-bg)' }}
        className={`fixed inset-0 top-[73px] z-40 md:hidden flex flex-col justify-between transition-all duration-300 ease-in-out border-t border-slate-100 dark:border-slate-900 ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Przewijana lista linków w stylu systemowych ustawień iOS/Android */}
        <div className="overflow-y-auto px-6 py-6 flex-1">
          <ul className="flex flex-col list-none p-0 m-0 split-y divide-y divide-slate-100 dark:divide-slate-900">
            <li className="py-1">
              <button 
                onClick={() => handleScrollTo('serwis')}
                style={{ color: 'var(--navbar-text)' }}
                className="w-full py-4 flex justify-between items-center font-semibold text-lg text-left bg-transparent border-none cursor-pointer active:opacity-70"
              >
                <span>Serwis Komputerowy</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </button>
            </li>
            <li className="py-1">
              <Link 
                to="/obsluga-firm" 
                style={{ color: isActive('/obsluga-firm') ? 'var(--accent)' : 'var(--navbar-text)' }}
                className="w-full py-4 flex justify-between items-center font-semibold text-lg no-underline active:opacity-70"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Obsługa firm IT</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </li>
            <li className="py-1">
              <Link 
                to="/szkoly" 
                style={{ color: isActive('/szkoly') ? 'var(--accent)' : 'var(--navbar-text)' }}
                className="w-full py-4 flex justify-between items-center font-semibold text-lg no-underline active:opacity-70"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Oferta dla Szkół</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </li>
            <li className="py-1">
              <Link 
                to="/instytucje-publiczne" 
                style={{ color: isActive('/instytucje-publiczne') ? 'var(--accent)' : 'var(--navbar-text)' }}
                className="w-full py-4 flex justify-between items-center font-semibold text-lg no-underline active:opacity-70"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Instytucje Publiczne</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </li>
            <li className="py-1">
              <button 
                onClick={() => handleScrollTo('wynajem')}
                style={{ color: 'var(--navbar-text)' }}
                className="w-full py-4 flex justify-between items-center font-semibold text-lg text-left bg-transparent border-none cursor-pointer active:opacity-70"
              >
                <span>Wynajem sprzętu</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </button>
            </li>
            <li className="py-1">
              <Link 
                to="/produkty" 
                style={{ color: location.pathname.includes('/produkty') ? 'var(--accent)' : 'var(--navbar-text)' }}
                className="w-full py-4 flex justify-between items-center font-semibold text-lg no-underline active:opacity-70"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Produkty / Katalog</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Dolna sekcja stała (Footer menu) – Przyciski akcji na wyciągnięcie kciuka */}
        <div className="p-6 border-t bg-slate-50/50 dark:bg-slate-900/20 flex flex-col gap-3" style={{ borderTopColor: 'var(--navbar-border)' }}>
          <a 
            href="https://allegro.pl/uzytkownik/ConnerMedia" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }}
            className="w-full py-3.5 rounded-xl transition-all font-bold text-center no-underline text-sm shadow-sm active:scale-[0.99]"
          >
            Oficjalny Sklep Allegro
          </a>

          <button
            onClick={toggleTheme}
            style={{ 
              color: 'var(--navbar-text)',
              borderColor: 'var(--navbar-border)',
              backgroundColor: isDarkMode ? 'rgba(212, 169, 96, 0.08)' : 'var(--navbar-bg)'
            }}
            className="w-full py-3.5 rounded-xl transition-all border flex items-center justify-center gap-2 font-medium text-sm active:bg-slate-100 dark:active:bg-slate-800"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <span>Przełącz na jasny motyw</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                <span>Przełącz na ciemny motyw</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
