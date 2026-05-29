/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function ThreePillars() {
  const pillars = [
    {
      num: "01",
      title: "SZYBKI KONTAKT",
      desc: "Odpowiadam sprawnie i konkretnie",
    },
    {
      num: "02",
      title: "INDYWIDUALNE PODEJŚCIE",
      desc: "Każda inwestycja traktowana priorytetowo",
    },
    {
      num: "03",
      title: "PIERWSZA KONSULTACJA BEZPŁATNA",
      desc: "Poznajmy Twoją inwestycję bez zobowiązań",
    },
  ];

  return (
    <section 
      id="pillars-bar" 
      className="relative bg-white border-t border-crimson z-20"
    >
      <div className="max-w-7xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-200 grid grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.title}
            className="reveal px-8 py-10 md:py-14 flex flex-col justify-center transition-all duration-300"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-serif text-crimson text-sm font-medium tracking-widest">
                {pillar.num}
              </span>
              <h3 className="font-sans text-xs font-semibold tracking-wider-plus text-charcoal uppercase">
                {pillar.title}
              </h3>
            </div>
            <p className="font-sans text-xs md:text-sm text-midgray font-light ml-8 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
