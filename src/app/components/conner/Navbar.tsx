import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, Moon, Sun } from 'lucide-react';
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
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

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
    <nav style={{ backgroundColor: 'var(--navbar-bg)', borderBottomColor: 'var(--navbar-border)' }} className="py-5 border-b sticky top-0 z-50 relative overflow-hidden backdrop-blur-sm">
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

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-extrabold text-2xl tracking-tight no-underline flex items-center" onClick={handleLogoClick} style={{ color: 'var(--navbar-text)' }}>
            {/* Logo Conner Sp. z o.o. - switches based on dark mode */}
            <img 
              src={isDarkMode ? `${import.meta.env.BASE_URL}logo-white.svg` : `${import.meta.env.BASE_URL}logo.svg`}
              alt="Conner Sp. z o.o." 
              className="h-12 w-auto transition-opacity hover:opacity-80"
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

          {/* Mobile Menu Button */}
          <button
            style={{ color: 'var(--navbar-text)' }}
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ 
            borderTopColor: 'var(--navbar-border)',
            backgroundColor: 'var(--navbar-bg)'
          }} className="md:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col gap-4 list-none">
              <li>
                <button 
                  onClick={() => handleScrollTo('serwis')}
                  style={{ color: 'var(--navbar-text)' }}
                  className="font-medium text-sm hover:text-[var(--accent)] transition-colors bg-transparent border-none cursor-pointer text-left w-full"
                >
                  Serwis
                </button>
              </li>
              <li>
                <Link 
                  to="/obsluga-firm" 
                  className={`no-underline font-medium text-sm hover:text-[var(--accent)] transition-colors ${
                    isActive('/obsluga-firm') ? 'text-[var(--accent)]' : ''
                  }`}
                  style={{ color: isActive('/obsluga-firm') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Obsługa firm
                </Link>
              </li>
              <li>
                <Link 
                  to="/szkoly" 
                  className={`no-underline font-medium text-sm hover:text-[var(--accent)] transition-colors ${
                    isActive('/szkoly') ? 'text-[var(--accent)]' : ''
                  }`}
                  style={{ color: isActive('/szkoly') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Szkoły
                </Link>
              </li>
              <li>
                <Link 
                  to="/instytucje-publiczne" 
                  className={`no-underline font-medium text-sm hover:text-[var(--accent)] transition-colors ${
                    isActive('/instytucje-publiczne') ? 'text-[var(--accent)]' : ''
                  }`}
                  style={{ color: isActive('/instytucje-publiczne') ? 'var(--accent)' : 'var(--navbar-text)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Instytucje
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('wynajem')}
                  style={{ color: 'var(--navbar-text)' }}
                  className="font-medium text-sm hover:text-[var(--accent)] transition-colors bg-transparent border-none cursor-pointer text-left w-full"
                >
                  Wynajem
                </button>
              </li>
              <li>
                <Link 
                  to="/produkty" 
                  className={`no-underline font-medium text-sm hover:text-[var(--accent)] transition-colors ${
                    location.pathname.includes('/produkty') ? 'text-[var(--accent)]' : ''
                  }`}
                  style={{ color: location.pathname.includes('/produkty') ? 'var(--accent)' : 'var(--navbar-text)' }}
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
                  style={{ borderColor: 'var(--accent)', color: 'var(--navbar-text)' }}
                  className="border px-4 py-2 rounded-md transition-all hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] no-underline font-medium text-sm inline-block"
                >
                  Sklep Allegro
                </a>
              </li>
              <li className="pt-2 border-t" style={{ borderTopColor: 'var(--navbar-border)' }}>
                <button
                  onClick={toggleTheme}
                  style={{ 
                    color: 'var(--navbar-text)',
                    borderColor: 'var(--navbar-border)',
                    backgroundColor: isDarkMode ? 'rgba(212, 169, 96, 0.08)' : 'transparent'
                  }}
                  className="w-full px-4 py-2 rounded-md hover:bg-[var(--bg-light)] transition-all border flex items-center justify-center gap-2"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                      <span className="text-sm">Jasny motyw</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span className="text-sm">Ciemny motyw</span>
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}