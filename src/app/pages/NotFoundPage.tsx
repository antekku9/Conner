import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#1a1c20' }}>
      <div className="text-center max-w-2xl">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4" style={{ color: '#c5a059' }}>
            404
          </h1>
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#ffffff' }}>
            Strona nie znaleziona
          </h2>
          <p className="text-lg mb-8" style={{ color: '#a0a0a0' }}>
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ 
              backgroundColor: '#c5a059', 
              color: '#1a1c20',
            }}
          >
            <Home className="w-5 h-5" />
            Strona główna
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-80"
            style={{ 
              backgroundColor: 'transparent',
              border: '2px solid #c5a059',
              color: '#c5a059',
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Wróć
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#333' }}>
          <p className="text-sm mb-4" style={{ color: '#808080' }}>
            Jeśli uważasz, że to błąd, skontaktuj się z nami:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm" style={{ color: '#c5a059' }}>
            <a href="tel:+48426319420" className="hover:underline">
              📞 42 631 94 20
            </a>
            <a href="mailto:sklep@conner.pl" className="hover:underline">
              ✉️ sklep@conner.pl
            </a>
          </div>
        </div>

        {/* Logo/Brand */}
        <div className="mt-8">
          <p className="text-xl font-semibold" style={{ color: '#c5a059' }}>
            Conner Sp. z o.o.
          </p>
          <p className="text-sm mt-1" style={{ color: '#808080' }}>
            Serwis komputerowy i obsługa IT od 2007 roku
          </p>
        </div>
      </div>
    </div>
  );
}
