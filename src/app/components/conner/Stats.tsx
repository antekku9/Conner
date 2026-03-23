export function Stats() {
  const stats = [
    { number: '28+', label: 'Lat doświadczenia w IT' },
    { number: '18', label: 'Lat jako Conner sp. z o.o.' },
    { number: '500+', label: 'Zadowolonych klientów' },
    { number: 'Łódź', label: 'Lokalne wsparcie' },
  ];

  return (
    <section className="bg-[#1a1c20] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Conner w liczbach</h2>
          <p className="text-gray-400 mt-2">Zaufanie zbudowane latami doświadczenia</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="text-5xl font-extrabold text-[#c5a059] mb-1">
                {stat.number}
              </div>
              <p className="opacity-80 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}