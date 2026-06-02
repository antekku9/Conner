import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Wrench, Timer, User, Building2, ShieldCheck, Cpu, Monitor, ShieldAlert, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface Offer {
  title: string;
  desc: JSX.Element | string;
  price: string;
  oldPrice?: string;
  omnibus?: string;
  badge: string;
  icon: any;
  actionText: string;
  isSpecialPriceStructure?: boolean;
}

export function HitService() {
  const [mobileIndex, setMobileIndex] = useState<0 | 1>(0);
  const [isWeekend, setIsWeekend] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentDayIndex, setCurrentDayIndex] = useState(1);
  const [currentWeekType, setCurrentWeekType] = useState<'A' | 'B'>('A');

  // Stan do obsługi gestów swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const updateComponentState = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        setIsWeekend(true);
        const nextMonday = new Date();
        const daysUntilMonday = dayOfWeek === 6 ? 2 : 1;
        nextMonday.setDate(now.getDate() + daysUntilMonday);
        nextMonday.setHours(0, 0, 0, 0);

        const diff = nextMonday.getTime() - now.getTime();
        if (diff > 0) {
          setTimeLeft({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60)
          });
        }
      } else {
        setIsWeekend(false);
        setCurrentDayIndex(dayOfWeek);

        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
        const weekNumber = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
        setCurrentWeekType(weekNumber % 2 === 0 ? 'B' : 'A');

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const diff = endOfDay.getTime() - now.getTime();
        if (diff > 0) {
          setTimeLeft({
            days: 0,
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60)
          });
        }
      }
    };

    updateComponentState();
    const interval = setInterval(updateComponentState, 1000);
    return () => clearInterval(interval);
  }, []);

  // Obsługa swipe na urządzeniach mobilnych
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      setMobileIndex(mobileIndex === 0 ? 1 : 0);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const offersData: Record<'A' | 'B', Record<number, { detal: Offer; firma: Offer }>> = {
    A: {
      1: {
        detal: {
          title: "Konserwacja i czyszczenie układu chłodzenia",
          desc: (
            <div className="space-y-1">
              <p>Profesjonalna wymiana past termoprzewodzących oraz czyszczenie z kurzu.</p>
              <div className="text-[11px] text-slate-400 mt-1.5 pt-1.5 border-t border-slate-900 border-dashed">
                <span className="font-bold text-slate-300">Sprzęt standard: </span> 149 zł (ze 199 zł)<br />
                <span className="font-bold text-slate-300">🎮 Sprzęt gaming: </span> 199 zł (ze 249 zł)
              </div>
            </div>
          ),
          price: "Wycena", oldPrice: "199 zł", omnibus: "199 zł / 249 zł", badge: "Oszczędzasz 50 zł", icon: Wrench, actionText: "Zarezerwuj termin", isSpecialPriceStructure: true
        },
        firma: {
          title: "Audyt bezpieczeństwa sieci LAN/WLAN w firmie",
          desc: "Analiza podatności infrastruktury sieciowej pod kątem zabezpieczeń i stabilności. Zadbaj o dane firmowe.",
          price: "Od 0 zł", badge: "Darmowa wycena wdrożenia", icon: ShieldCheck, actionText: "Zamów audyt sieci"
        }
      },
      2: {
        detal: {
          title: "Ekspresowa diagnostyka laptopa (Tego samego dnia)",
          desc: "Szybkie namierzenie usterki sprzętowej lub systemowej w ekspresowym tempie. Diagnoza gotowa w kilka godzin.",
          price: "49 zł", oldPrice: "99 zł", omnibus: "99 zł", badge: "Ekspresowy serwis", icon: Cpu, actionText: "Dostarcz sprzęt do salonu"
        },
        firma: {
          title: "Audyt i optymalizacja kosztów druku",
          desc: "Przegląd floty urządzeń biurowych, kserokopiarek i drukarek. Realne obniżenie kosztów eksploatacji.",
          price: "0 zł", badge: "Bezpłatna analiza", icon: Monitor, actionText: "Skonsultuj koszty druku"
        }
      },
      3: {
        detal: {
          title: "Instalacja i pełna optymalizacja Windows 11",
          desc: "Instalacja systemu operacyjnego wraz z kompletem najnowszych sterowników oraz wyłączeniem zbędnych usług.",
          price: "129 zł", oldPrice: "189 zł", omnibus: "189 zł", badge: "Świeży system", icon: Monitor, actionText: "Zgłoś system do instalacji"
        },
        firma: {
          title: "Zarządzany system backupu danych w chmurze / NAS",
          desc: "Projekt i '../../../' konfiguracja automatycznych kopii zapasowych dla kluczowych stanowisk roboczych i serwerów.",
          price: "Wycena", badge: "Bezpieczeństwo danych", icon: ShieldCheck, actionText: "Zabezpiecz dane firmy"
        }
      },
      4: {
        detal: {
          title: "Czyszczenie wnętrza PC + Profesjonalny Cable Management",
          desc: "Kompleksowe czyszczenie jednostki, przedmuchiwanie zasilacza i ułożenie kabli dla lepszego przepływu powietrza.",
          price: "149 zł", oldPrice: "199 zł", omnibus: "199 zł", badge: "Idealny porządek", icon: Wrench, actionText: "Uporządkuj swój komputer"
        },
        firma: {
          title: "Przegląd techniczny serwera i szafy teletechnicznej RACK",
          desc: "Weryfikacja logów błędów, czyszczenie fizyczne urządzeń oraz sprawdzenie sprawności systemów UPS.",
          price: "249 zł", oldPrice: "399 zł", omnibus: "399 zł", badge: "Ciągłość biznesu", icon: Cpu, actionText: "Zamów przegląd serwerowni"
        }
      },
      5: {
        detal: {
          title: "Modernizacja dysku: Przejście na ultra szybki SSD NVMe",
          desc: "Przeniesienie Twojego obecnego systemu 1:1 na nowy, błyskawiczny dysk SSD. Szybki start systemu.",
          price: "99 zł", oldPrice: "149 zł", omnibus: "149 zł", badge: "Mocne przyspieszenie", icon: Cpu, actionText: "Zleć modernizację"
        },
        firma: {
          title: "Konsultacja IT: Projekt infrastruktury Ubiquiti UniFi / Omada",
          desc: "Konsultacja techniczna z inżynierem sieciowym na terenie Łodzi. Dobór AP, przełączników i bram.",
          price: "0 zł", oldPrice: "250 zł", omnibus: "250 zł", badge: "Profesjonalne sieci", icon: ShieldCheck, actionText: "Umów architekta sieci"
        }
      }
    },
    B: {
      1: {
        detal: {
          title: "Czyszczenie i dekontaminacja laptopa po zalaniu",
          desc: "Rozbieranie komputera, mycie płyty głównej w wannie ultradźwiękowej i usuwanie ognisk korozji.",
          price: "149 zł", oldPrice: "239 zł", omnibus: "239 zł", badge: "Ratowanie elektroniki", icon: Wrench, actionText: "Przynieś zalany laptop"
        },
        firma: {
          title: "Zdalne wsparcie IT Helpdesk (Pakiet wdrożeniowy)",
          desc: "Konfiguracja dostępu zdalnego dla inżynierów i pakiet 3 godzin wsparcia technicznego dla pracowników biura.",
          price: "199 zł", oldPrice: "350 zł", omnibus: "350 zł", badge: "Zdalny inżynier IT", icon: Monitor, actionText: "Wykup pakiet startowy"
        }
      },
      2: {
        detal: {
          title: "Sprawdzenie komputera pod kątem wirusów i malware",
          desc: "Głębokie skanowanie systemu, usuwanie oprogramowania szpiegującego, reklam oraz instalacja skutecznej ochrony.",
          price: "89 zł", oldPrice: "139 zł", omnibus: "139 zł", badge: "Bezpieczny PC", icon: ShieldAlert, actionText: "Odwirusuj komputer"
        },
        firma: {
          title: "Audyt legalności oprogramowania i licencji Microsoft / Adobe",
          desc: "Weryfikacja posiadanych licencji stanowiskowych w przedsiębiorstwie. Eliminacja ryzyka kar prawnych.",
          price: "299 zł", oldPrice: "500 zł", omnibus: "500 zł", badge: "Pełna zgodność prawna", icon: ShieldCheck, actionText: "Zamów weryfikację licencji"
        }
      },
      3: {
        detal: {
          title: "Profesjonalne składanie komputera z części klienta",
          desc: "Kupiłeś podzespoły i boisz się montażu? Nasi technicy złożą komputer i przetestują jego stabilność.",
          price: "199 zł", oldPrice: "299 zł", omnibus: "299 zł", badge: "Montaż premium", icon: Cpu, actionText: "Zleć montaż podzespołów"
        },
        firma: {
          title: "Wycena i dobór długoterminowego wynajmu kserokopiarek",
          desc: "Analiza potrzeb biura i dobór urządzeń wielofunkcyjnych w pakiecie z pełnym serwisem. Pierwszy miesiąc -50%.",
          price: "Darmowa", badge: "Wynajem sprzętu", icon: Monitor, actionText: "Zapytaj o ofertę najmu"
        }
      },
      4: {
        detal: {
          title: "Wymiana uszkodzonej matrycy LCD w laptopie (Robocizna)",
          desc: "Bezpieczny demontaż pękniętego lub rozlanego ekranu i montaż nowego panelu LCD. Przywróć idealny obraz.",
          price: "139 zł", oldPrice: "199 zł", omnibus: "199 zł", badge: "Nowy ekran LCD", icon: Monitor, actionText: "Wymień matrycę"
        },
        firma: {
          title: "Konfiguracja bezpiecznych połączeń szyfrowanych VPN dla firm",
          desc: "Wdrożenie bezpiecznych tuneli IPSec/OpenVPN umożliwiających bezpieczną pracę zdalną z zasobami biurowymi.",
          price: "149 zł", oldPrice: "250 zł", omnibus: "250 zł", badge: "Bezpieczna praca zdalna", icon: ShieldCheck, actionText: "Wdróż VPN w firmie"
        }
      },
      5: {
        detal: {
          title: "Konserwacja i czyszczenie układu chłodzenia",
          desc: (
            <div className="space-y-1">
              <p>Profesjonalna wymiana past termoprzewodzących oraz czyszczenie z kurzu.</p>
              <div className="text-[11px] text-slate-400 mt-1.5 pt-1.5 border-t border-slate-900 border-dashed">
                <span className="font-bold text-slate-300">Sprzęt standard: </span> 149 zł (ze 199 zł)<br />
                <span className="font-bold text-slate-300">🎮 Sprzęt gaming: </span> 199 zł (ze 249 zł)
              </div>
            </div>
          ),
          price: "Wycena", oldPrice: "199 zł", omnibus: "199 zł / 249 zł", badge: "Oszczędzasz 50 zł", icon: Wrench, actionText: "Zarezerwuj termin", isSpecialPriceStructure: true
        },
        firma: {
          title: "Analiza infrastruktury pod kątem systemów zasilania awaryjnego",
          desc: "Przegląd obciążeniowy akumulatorów w UPS-ach oraz weryfikacja czasu podtrzymania dla infrastruktury.",
          price: "0 zł", badge: "Bezpłatna konsultacja", icon: Wrench, actionText: "Zabezpiecz zasilanie biura"
        }
      }
    }
  };

  const currentOfferPair = offersData[currentWeekType][currentDayIndex] || offersData['A'][1];
  const formatNum = (num: number) => num.toString().padStart(2, '0');

  const renderCard = (offer: Offer, type: 'detal' | 'firma') => {
    const Icon = offer.icon;
    return (
      <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white p-5 overflow-hidden shadow-sm flex flex-col justify-between h-full select-none">
        <div>
          <div className="flex justify-between items-center mb-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">
              {type === 'detal' ? <User className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
              {type === 'detal' ? 'Dla Ciebie / Serwis' : 'Dla Biznesu'}
            </span>
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] font-black px-2.5 py-1 rounded-lg">
              {offer.badge}
            </div>
          </div>

          <div className="flex items-start justify-between gap-4 my-2 relative z-10">
            <div className="flex-1">
              <h4 className="text-base md:text-lg font-extrabold text-white leading-tight">
                {offer.title}
              </h4>
              <div className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {offer.desc}
              </div>
            </div>
            <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[var(--accent)] shrink-0 shadow-inner">
              <Icon className="w-7 h-7" />
            </div>
          </div>
        </div>

        <div className="mt-5 relative z-10">
          <div className="pt-4 border-t border-slate-900 flex justify-between items-end mb-4">
            <div className="flex flex-col gap-0.5">
              <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                {type === 'detal' ? 'Cena (paragon lub FV)' : 'Pakiet / Wycena'}
              </span>
              
              {offer.isSpecialPriceStructure ? (
                 <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-[11px] text-slate-300 font-bold">Standard: 149 zł</span>
                    <span className="text-slate-700">|</span>
                    <span className="text-[11px] text-[var(--accent)] font-bold">🎮 Gaming: 199 zł</span>
                 </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[var(--accent)]">{offer.price}</span>
                  {offer.oldPrice && (
                    <span className="text-xs text-slate-500 line-through">{offer.oldPrice}</span>
                  )}
                </div>
              )}

              {offer.omnibus && (
                <span className="text-[9px] text-slate-500 leading-tight block mt-0.5">
                  Najniższa cena z 30 dni: <span className="font-medium text-slate-400">{offer.omnibus}</span>
                </span>
              )}

              <Link 
                to="/regulamin-okazji" 
                className="text-[9px] text-slate-500 hover:text-[var(--accent)] transition-colors underline block mt-2 no-underline"
              >
                Regulamin akcji promocyjnej
              </Link>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                <Timer className="w-3 h-3" /> Kończy się za
              </span>
              <div className="flex gap-1 text-[11px] font-mono font-bold">
                <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{formatNum(timeLeft.hours)}</span>:
                <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{formatNum(timeLeft.minutes)}</span>:
                <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-red-400">{formatNum(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>

          <a
            href={type === 'detal' ? 'tel:426319420' : '#kontakt'}
            className="w-full min-h-[44px] rounded-xl bg-[var(--accent)] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center transition-transform active:scale-[0.99] no-underline"
          >
            {type === 'detal' ? 'Zarezerwuj od ręki' : 'Skonsultuj projekt'}
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="py-4 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <h3 className="text-base font-black tracking-tight text-slate-900 dark:text-white uppercase">
            Okazje Dnia w Conner
          </h3>
        </div>

        {isWeekend ? (
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white p-6 text-center overflow-hidden shadow-sm">
            <div className="relative z-10 max-w-md mx-auto py-4">
              <div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[var(--accent)] mx-auto mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black tracking-tight text-white">Weekendowa przerwa techniczna</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Nasz serwis odpoczywa w weekend. Nowy zestaw dedykowanych ofert dla firm oraz klientów detalicznych rusza w poniedziałek o północy!
              </p>
              
              <div className="mt-5 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 mb-1.5">
                  <Timer className="w-3 h-3 text-red-500 animate-pulse" /> Do nowych ofert pozostało
                </span>
                <div className="flex gap-1 text-xs font-mono font-bold">
                  {timeLeft.days > 0 && (
                    <>
                      <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">{timeLeft.days}d</span>
                      <span className="text-slate-700 self-center">:</span>
                    </>
                  )}
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">{formatNum(timeLeft.hours)}h</span>
                  <span className="text-slate-700 self-center">:</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">{formatNum(timeLeft.minutes)}m</span>
                  <span className="text-slate-700 self-center">:</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 text-red-400">{formatNum(timeLeft.seconds)}s</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* WIDOK MOBILNY (Wzbogacony o obsługę gestów touch-swipe) */}
            <div 
              className="block md:hidden relative group touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="min-h-[380px]">
                {mobileIndex === 0 
                  ? renderCard(currentOfferPair.detal, 'detal') 
                  : renderCard(currentOfferPair.firma, 'firma')
                }
              </div>

              <button
                onClick={() => setMobileIndex(mobileIndex === 0 ? 1 : 0)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 text-white flex items-center justify-center shadow-lg active:bg-slate-800 focus:outline-none"
                aria-label="Poprzednia oferta"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--accent)]" />
              </button>
              <button
                onClick={() => setMobileIndex(mobileIndex === 0 ? 1 : 0)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 text-white flex items-center justify-center shadow-lg active:bg-slate-800 focus:outline-none"
                aria-label="Następna oferta"
              >
                <ChevronRight className="w-5 h-5 text-[var(--accent)]" />
              </button>

              <div className="flex justify-center gap-1.5 mt-3">
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${mobileIndex === 0 ? 'bg-[var(--accent)] w-3' : 'bg-slate-300 dark:bg-slate-800'}`} />
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${mobileIndex === 1 ? 'bg-[var(--accent)] w-3' : 'bg-slate-300 dark:bg-slate-800'}`} />
              </div>
            </div>

            {/* WIDOK DESKTOPOWY */}
            <div className="hidden md:grid grid-cols-2 gap-6 items-stretch">
              <div className="h-full">
                {renderCard(currentOfferPair.detal, 'detal')}
              </div>
              <div className="h-full">
                {renderCard(currentOfferPair.firma, 'firma')}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
