import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
