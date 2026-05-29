/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Credentials() {
  const credentialsList = [
    { title: "Uprawnienia budowlane", subtitle: "Kierownik Budowy nr ew. PDK/0046/OWOK/18" },
    { title: "Zaufany Pośrednik", subtitle: "Licencjonowany pośrednik w obrocie nieruchomościami" },
    { title: "Wieloletnia Praktyka", subtitle: "Lata doświadczeń na podkarpackim rynku budowlanym i handlowym" },
    { title: "Precyzja Legislacyjna", subtitle: "Codzienna znajomość prawa budowlanego oraz prawa nieruchomości" },
  ];

  const authorityBlocks = [
    {
      label: "NADZÓR TECHNICZNY",
      text: "Ścisła kontrola jakości prowadzonych prac, zgodności z dokumentacją techniczną oraz polskimi normami. Sprawdzam beton, izolacje, konstrukcje stalowe i instalacje sanitarno-elektryczne.",
    },
    {
      label: "BEZPIECZEŃSTWO TRANSAKCJI",
      text: "Badanie stanu prawnego nieruchomości, audyty ksiąg wieczystych, sprawdzanie obciążeń hipotecznych czy roszczeń. Eliminuję niebezpieczeństwo zakupu wadliwych gruntów i lokali.",
    },
    {
      label: "KONTROLA DEWELOPERSKA",
      text: "Bezkompromisowy odbiór stanu technicznego mieszkań i domów jednorodzinnych we współpracy z rzeczoznawcami technologii budowlanej. Wykazuję wszelkie odchylenia od standardów rynkowych.",
    },
  ];

  return (
    <section id="poświadczenia" className="relative bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[640px]">
        
        {/* Left Column (Dark Charcoal) */}
        <div className="w-full lg:w-1/2 bg-charcoal text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
          {/* Subtle grid accent background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          <div className="reveal relative z-10 max-w-xl">
            <span className="font-sans text-[10px] font-semibold tracking-widest-plus text-crimson mb-2 uppercase block">
              AUTORYTET & UPRAWNIENIA
            </span>
            <h2 className="font-serif font-light text-white text-3xl md:text-5xl leading-tight tracking-tight mb-6">
              Działam lokalnie — dla Ciebie i Twojej inwestycji
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-12">
              Jako posiadaczka pełnych uprawnień budowlanych oraz licencji pośrednika nieruchomości oferuję unikalne, interdyscyplinarne wsparcie. Rozumiem konstrukcję budynku od fundamentów po dach, a także mechanizmy rynkowe i uwarunkowania prawne, które decydują o wartości nieruchomości. To daje moim klientom całkowite poczucie bezpieczeństwa.
            </p>

            {/* List of 4 credentials with thin red left border highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentialsList.map((item, index) => (
                <div
                  key={index}
                  className="pl-4 border-l-2 border-crimson flex flex-col py-1"
                >
                  <span className="font-sans text-xs font-semibold tracking-wide text-white uppercase">
                    {item.title}
                  </span>
                  <span className="font-sans text-[11px] text-gray-400 font-light mt-1">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Column (Pure White) */}
        <div className="w-full lg:w-1/2 bg-white text-charcoal p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="reveal max-w-xl w-full">
            
            {/* Elegant large red decorative number */}
            <div className="font-serif text-[6rem] leading-[0.8] text-crimson/10 font-extralight block select-none pointer-events-none tracking-tighter mb-4">
              01
            </div>

            {/* Credential Blocks Stacked Vertically, separated by light lines */}
            <div className="flex flex-col">
              {authorityBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className={`py-8 flex flex-col ${
                    idx !== 0 ? "border-t border-gray-100" : "pb-8"
                  }`}
                >
                  <span className="font-sans text-[10px] font-semibold tracking-wider-plus text-crimson mb-2 block uppercase">
                    {block.label}
                  </span>
                  <p className="font-sans text-xs md:text-sm text-midgray font-light leading-relaxed">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
