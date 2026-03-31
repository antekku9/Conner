import { Award } from 'lucide-react';

export function Trust() {
  return (
    <section className="py-16 border-t" style={{ 
      backgroundColor: 'var(--background)',
      borderTopColor: 'var(--border)'
    }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center">
          <div className="mb-4">
            <span style={{ color: 'var(--accent)' }} className="uppercase text-xs font-bold tracking-[2px]">
              Zaufanie
            </span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Zaufali nam</h3>
          </div>
          <p style={{ color: 'var(--text-muted)' }} className="text-lg max-w-[800px] mx-auto">
            Współpracujemy z wieloma firmami, szkołami i instytucjami publicznymi w Łodzi i okolicach. 
            Dziękujemy za zaufanie i wieloletnią współpracę!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2 rounded-lg font-medium">Szkoły podstawowe, średnie oraz uczelnie wyższe</span>
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2 rounded-lg font-medium">Prywatne przedsiębiorstwa </span>
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2 rounded-lg font-medium">Instytucje publiczne</span>
            <span style={{ 
              backgroundColor: 'var(--bg-light)',
              color: 'var(--foreground)'
            }} className="px-4 py-2 rounded-lg font-medium">Organy Państwowe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
