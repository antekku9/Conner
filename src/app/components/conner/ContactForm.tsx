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
      const form = e.currentTarget;
      const data = new FormData(form);

      // WAŻNE: Używamy endpointu AJAX
      const response = await fetch('https://formsubmit.co/antekku9@gmail.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();
      console.log("Status FormSubmit:", result); // Sprawdź to w konsoli F12!

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(`Błąd: ${result.message || 'Nie udało się wysłać wiadomości.'}`);
      }
    } catch (error) {
      console.error("Błąd sieci:", error);
      alert('Wystąpił błąd połączenia. Spróbuj ponownie lub zadzwoń: 42 631 94 20');
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
    <div style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} className="rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border">
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Napisz do nas</h3>
      <p style={{ color: 'var(--text-muted)' }} className="mb-6">Wypełnij formularz, odpowiemy w ciągu 24 godzin.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
          <p className="font-semibold">✅ Wiadomość wysłana!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value={`Wiadomość conner.pl: ${subjectLabels[formData.subject] || 'Kontakt'}`} />

          <div>
            <label className="block text-sm font-medium mb-2">Imię i nazwisko *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] outline-none" placeholder="Jan Kowalski" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] outline-none" placeholder="jan@firma.pl" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefon</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] outline-none" placeholder="+48 123 456 789" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Temat *</label>
            <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] outline-none">
              <option value="">Wybierz temat</option>
              {Object.entries(subjectLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Wiadomość *</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] outline-none resize-none" placeholder="W czym możemy pomóc?" />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-[#c5a059] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#b39050] transition-all flex items-center justify-center gap-2 disabled:opacity-50">
            {isSubmitting ? "Wysyłanie..." : <><Send className="w-5 h-5" /> Wyślij wiadomość</>}
          </button>
        </form>
      )}
    </div>
  );
}
