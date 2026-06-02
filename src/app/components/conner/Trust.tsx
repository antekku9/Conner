import { Award } from 'lucide-react';

export function Trust() {
  return (
    // DODANO KLASĘ: hidden md:block - sekcja ukrywa się na mobile, wraca na desktopie
    <section className="hidden md:block py-10 md:py-16 border-t" style={{ 
      backgroundColor: 'var(--background)',
      borderTopColor: 'var(--border)'
    }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center">
          <div className="mb-3 md:mb-4">
            <span style={{ color: 'var(--accent)' }} className="uppercase text-[10px] md:text-xs font-bold tracking-[2px]">
              Zaufanie
            </span>
            <h3 className="text-xl md:text-2xl font-bold mt-1" style={{ color: 'var(--foreground)' }}>Zaufali nam</h3>
          </div>
          <p style={{ color: 'var(--text-muted)' }} className="text-sm md:text-lg max-w-[800px] mx-auto leading-relaxed">
            Współpracujemy z wieloma firmami, szkołami i instytucjami publicznymi w Łodzi i okolicach. 
            Dziękujemy za zaufanie i wieloletnią współpracę!
          </p>
          
          <div className="mt-6 md:mt-8 flex overflow-x-auto md:flex-wrap md:justify-center gap-3 md:gap-6 text-xs md:text-sm pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory px-1">
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2.5 rounded-xl font-medium shrink-0 snap-center border border-slate-100 dark:border-slate-900 md:border-none">
              Szkoły podstawowe, średnie oraz uczelnie
            </span>
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2.5 rounded-xl font-medium shrink-0 snap-center border border-slate-100 dark:border-slate-900 md:border-none">
              Prywatne przedsiębiorstwa
            </span>
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2.5 rounded-xl font-medium shrink-0 snap-center border border-slate-100 dark:border-slate-900 md:border-none">
              Instytucje publiczne
            </span>
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2.5 rounded-xl font-medium shrink-0 snap-center border border-slate-100 dark:border-slate-900 md:border-none">
              Organy Państwowe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
