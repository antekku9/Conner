import { useEffect } from 'react';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';

export default function PromoTermsPage() {
  // Automatyczne przewijanie na górę strony po wejściu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-12 md:py-20 min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
      <div className="max-w-[800px] mx-auto px-5">
        
        {/* Przycisk powrotu */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[var(--accent)] transition-colors no-underline mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Powrót do strony głównej
        </Link>

        {/* Nagłówek strony */}
        <div className="border-b pb-6 mb-8 border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Dokumenty prawne</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight">
            Regulamin Akcji Promocyjnej „Okazja Dnia”
          </h1>
          <p className="text-xs text-slate-400 mt-2">Ostatnia aktualizacja: Czerwiec 2026 r.</p>
        </div>

        {/* Treść Regulaminu */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          
          <div>
            <h3 className="text-base font-bold text-[var(--foreground)] mb-2">§ 1. Postanowienia ogólne</h3>
            <p>1. Organizatorem akcji promocyjnej „Okazja Dnia” (zwanej dalej „Promocją”) jest Conner Sp. z o.o. z siedzibą w Łodzi, ul. Doktora Seweryna Sterlinga 27/29, 90-212 Łódź.</p>
            <p>2. Promocja prowadzona jest za pośrednictwem serwisu internetowego conner.pl oraz bezpośrednio w salonie stacjonarnym Organizatora.</p>
            <p>3. Czas trwania Promocji dla każdego dedykowanego wariantu usługi wynosi 24 godziny – od godziny 00:00:00 do godziny 23:59:59 danego dnia kalendarzowego.</p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--foreground)] mb-2">§ 2. Warunki uczestnictwa i realizacji</h3>
            <p>1. Promocja podzielona jest na dwa niezależne segmenty:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li><span className="font-bold text-[var(--foreground)]">Ścieżka „Dla Ciebie / Serwis”</span> – skierowana do konsumentów (osób prywatnych).</li>
              <li><span className="font-bold text-[var(--foreground)]">Ścieżka „Dla Biznesu”</span> – skierowana do podmiotów gospodarczych, placówek oświatowych oraz instytucji publicznych.</li>
            </ul>
            <p className="mt-2">2. Warunkiem skorzystania z ceny promocyjnej lub darmowej usługi konsultacyjnej prezentowanej w danym dniu jest zgłoszenie chęci udziału w Promocji poprzez formularz kontaktowy, rezerwację telefoniczną pod numerem 42 631 94 20 w dniu obowiązywania oferty, lub osobiste dostarczenie sprzętu do salonu i powołanie się na „Okazję Dnia”.</p>
            <p>3. Sama usługa serwisowa lub wdrożeniowa może zostać zrealizowana w innym, ustalonym z Organizatorem terminie, pod warunkiem dokonania skutecznego zgłoszenia w dniu trwania promocji.</p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--foreground)] mb-2">§ 3. Ceny i Dyrektywa Omnibus</h3>
            <p>1. Wszystkie ceny podawane w segmencie „Dla Ciebie” są cenami brutto (zawierają podatek VAT) i podlegają ewidencji paragonowej lub fakturze imiennej. Ceny w segmencie „Dla Biznesu” podawane są w wartościach netto.</p>
            <p>2. Zgodnie z unijną dyrektywą Omnibus, Organizator przy każdej usłudze objętej obniżką ceny podaje informację o najniższej cenie tej usługi, która obowiązywała w okresie 30 dni przed wprowadzeniem obniżki.</p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--foreground)] mb-2">§ 4. Ograniczenia i limity</h3>
            <p>1. Jedna osoba lub jedna firma może skorzystać z danej „Okazji Dnia” maksymalnie jeden raz w trakcie jednego cyklu jej wyświetlania.</p>
            <p>2. W przypadku skrajnego obłożenia serwisu, Organizator zastrzega sobie prawo do wydłużenia czasu realizacji promocyjnej usługi, o czym uczestnik zostanie poinformowany przed przyjęciem zlecenia.</p>
            <p>3. Promocje nie łączą się z innymi rabatami i indywidualnymi umowami serwisowymi.</p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            <span>Bezpieczne usługi serwisowe autoryzowane przez Conner Sp. z o.o.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
