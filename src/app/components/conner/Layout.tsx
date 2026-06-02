import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div 
      style={{ 
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)' 
      }}
      // Dodano transition-colors (płynna zmiana motywów) oraz antialiased (wygładzenie czcionek na mobile)
      className="min-h-screen font-['Inter',sans-serif] antialiased transition-colors duration-200"
    >
      <ScrollToTop />
      <Navbar />
      
      {/* Kontener główny, do którego możemy w przyszłości dopisać globalne klasy dla mobile */}
      <main className="w-full">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
