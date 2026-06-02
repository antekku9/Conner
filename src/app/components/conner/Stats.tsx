export function Stats() {
  const stats = [
    { number: '28+', label: 'Lat doświadczenia w IT' },
    { number: '18', label: 'Lat jako Conner sp. z o.o.' },
    { number: '500+', label: 'Zadowolonych klientów' },
    { number: 'Łódź', label: 'Lokalne wsparcie' },
  ];

  return (
    <section className="bg-[#1a1c20] text-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-white tracking-tight">Conner w liczbach</h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1">Zaufanie zbudowane latami doświadczenia</p>
        </div>
        
        {/* Zmieniono grid-cols-1 na grid-cols-2 dla mobile - zwarty układ 2x2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col justify-center">
              {/* Delikatnie zmniejszony font na mobile z 5xl do 3xl dla balansu */}
              <div className="text-3xl md:text-5xl font-extrabold text-[#c5a059] mb-1 tracking-tight">
                {stat.number}
              </div>
              <p className="opacity-70 text-[10px] md:text-sm uppercase tracking-wider px-2 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
