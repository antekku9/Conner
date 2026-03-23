import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // W prawdziwej aplikacji tutaj byłoby wysyłanie do API
    console.log('Formularz wysłany:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <h3 className="text-2xl font-bold mb-2">Napisz do nas</h3>
      <p className="text-[#6b7280] mb-6">
        Wypełnij formularz, a nasz specjalista skontaktuje się z Tobą w ciągu 24h.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
          <p className="font-semibold">Dziękujemy za wiadomość!</p>
          <p className="text-sm mt-1">Skontaktujemy się z Tobą wkrótce.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1a1c20] mb-2">
              Imię i nazwisko *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
              placeholder="Jan Kowalski"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1a1c20] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
                placeholder="jan@firma.pl"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#1a1c20] mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#1a1c20] mb-2">
              Temat *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
            >
              <option value="">Wybierz temat</option>
              <option value="serwis">Serwis komputerowy</option>
              <option value="firma">Obsługa firm</option>
              <option value="szkola">Obsługa szkół</option>
              <option value="instytucja">Obsługa instytucji</option>
              <option value="wynajem">Wynajem sprzętu</option>
              <option value="zakup">Zakup sprzętu</option>
              <option value="inne">Inne</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1a1c20] mb-2">
              Wiadomość *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent resize-none"
              placeholder="Opisz swoją potrzebę..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c5a059] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#b39050] transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Wyślij wiadomość
          </button>

          <p className="text-xs text-[#6b7280] text-center">
            * Pola wymagane
          </p>
        </form>
      )}
    </div>
  );
}
