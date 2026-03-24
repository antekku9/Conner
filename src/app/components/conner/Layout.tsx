import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}