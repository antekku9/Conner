import { Award } from 'lucide-react';

export function Trust() {
  return (
    <section className="py-16 border-t border-[#eee] bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-[#c5a059] w-8 h-8" />
            <h3 className="text-2xl font-bold">Zaufali nam</h3>
          </div>
          <p className="text-[#6b7280] text-lg max-w-[800px] mx-auto">
            Współpracujemy z wieloma firmami, szkołami i instytucjami publicznymi w Łodzi i okolicach. 
            Dziękujemy za zaufanie i wieloletnią współpracę!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#1a1c20]">
            <span className="px-4 py-2 bg-[#f9fafb] rounded-lg font-medium">Szkoły podstawowe i średnie</span>
            <span className="px-4 py-2 bg-[#f9fafb] rounded-lg font-medium">Przedsiębiorstwa MŚP</span>
            <span className="px-4 py-2 bg-[#f9fafb] rounded-lg font-medium">Instytucje publiczne</span>
            <span className="px-4 py-2 bg-[#f9fafb] rounded-lg font-medium">Organizacje edukacyjne</span>
          </div>
        </div>
      </div>
    </section>
  );
}