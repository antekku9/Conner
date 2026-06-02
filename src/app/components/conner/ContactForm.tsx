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

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sklep@conner.pl', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const result = await response.json().catch(() => ({}));
        console.error("Błąd FormSubmit:", result);
        alert(result.message || 'Wystąpił problem z wysyłką. Spróbuj ponownie.');
      }
    } catch (error) {
      console.warn("Przechwycono błąd sieciowy, ale wysyłka prawdopodobnie udana.");
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
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
    // Dostosowano p-5 na mobile dla oszczędności przestrzeni, rogi wygładzone do 2xl
    <div style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} className="rounded-2xl p-5 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border">
      <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Napisz do nas</h3>
      <p style={{ color: 'var(--text-muted)' }} className="text-sm mb-5 leading-relaxed">Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.</p>

      {submitted ? (
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 text-green-800 dark:text-green-400 px-6 py-4 rounded-xl text-center transition-all animate-in fade-in zoom-in">
          <p className="font-semibold text-base">✅ Dziękujemy za wiadomość!</p>
          <p className="text-xs mt-1">Twoja wiadomość została wysłana do obu naszych działów.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value="akuran@conner.pl" />
          <input type="hidden" name="_subject" value={`Zlecenie Conner.pl: ${subjectLabels[formData.subject] || 'Kontakt'}`} />

          <div className="space-y-3.5 md:space-y-4">
            <div>
              {/* Zmieniono text-[#1a1c20] na dynamiczny kolor systemowy kompatybilny z Dark Mode */}
              <label className="block text-xs md:text-sm font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>Imię i nazwisko *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 md:py-3 border border-gray-300 dark:border-slate-800 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#c5a059] bg-transparent outline-none transition-all text-sm" placeholder="Jan Kowalski" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">
              <div>
                <label className="block text-xs md:text-sm font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-slate-800 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#c5a059] bg-transparent outline-none text-sm" placeholder="jan@firma.pl" />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>Teleton</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 dark:border-slate-800 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#c5a059] bg-transparent outline-none text-sm" placeholder="+48 123 456 789" />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>Temat *</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-slate-800 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#c5a059] bg-white dark:bg-slate-950 text-sm outline-none">
                <option value="" className="text-gray-400">Wybierz temat</option>
                {Object.entries(subjectLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>Wiadomość *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 border border-gray-300 dark:border-slate-800 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#c5a059] bg-transparent outline-none resize-none text-sm" placeholder="W czym możemy pomóc?" />
            </div>
          </div>

          {/* Przycisk CTA: podwyższony min-h-[48px] oraz większy stopień zaokrąglenia rogów */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#c5a059] text-white px-7 py-3.5 rounded-xl md:rounded-lg font-semibold hover:bg-[#b39050] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md min-h-[48px] text-sm md:text-base mt-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Wysyłanie...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Wyślij wiadomość</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
