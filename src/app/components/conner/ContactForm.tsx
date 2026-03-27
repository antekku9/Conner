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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Wysyłanie przez FormSubmit.co
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/sklep@conner.pl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 5000);
      } else {
        alert('Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 42 631 94 20');
      }
    } catch (error) {
      alert('Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 42 631 94 20');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Mapowanie tematów na czytelne nazwy
  const subjectLabels: Record<string, string> = {
    'serwis': 'Serwis komputerowy',
    'firma': 'Obsługa firm',
    'szkola': 'Obsługa szkół',
    'instytucja': 'Obsługa instytucji',
    'wynajem': 'Wynajem sprzętu',
    'zakup': 'Zakup sprzętu',
    'inne': 'Inne'
  };

  return (
    <div style={{ 
      backgroundColor: 'var(--card)',
      borderColor: 'var(--border)'
    }} className="rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border">
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Napisz do nas</h3>
      <p style={{ color: 'var(--text-muted)' }} className="mb-6">
        Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
          <p className="font-semibold">✅ Dziękujemy za wiadomość!</p>
          <p className="text-sm mt-1">Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* FormSubmit.co konfiguracja - ukryte pola */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input 
            type="hidden" 
            name="_subject" 
            value={`Nowa wiadomość z conner.pl - ${subjectLabels[formData.subject] || 'Kontakt'}`} 
          />
          <input type="hidden" name="_autoresponse" value="Dziękujemy za kontakt! Twoja wiadomość została dostarczona do Conner Sp. z o.o. Skontaktujemy się z Tobą w ciągu 24 godzin." />

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
            disabled={isSubmitting}
            className="w-full bg-[#c5a059] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#b39050] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Wysyłanie...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Wyślij wiadomość
              </>
            )}
          </button>

          <p className="text-xs text-[#6b7280] text-center">
            * Pola wymagane
          </p>
        </form>
      )}
    </div>
  );
}