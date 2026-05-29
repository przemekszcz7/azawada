/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProcessStep } from "../types";

export default function Process() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Bezpłatna konsultacja",
      description: "Niezobowiązujące spotkanie lub rozmowa telefoniczna, podczas której omawiamy cel, uwarunkowania i oczekiwany zakres opieki technicznej lub pośrednictwa.",
    },
    {
      number: "02",
      title: "Indywidualna oferta",
      description: "Na podstawie zebranych danych opracowuję przejrzystą wycenę oraz plan nadzorów i odbiorów dostosowany optymalnie do budżetu i harmonogramu inwestycji.",
    },
    {
      number: "03",
      title: "Realizacja nadzoru",
      description: "Przeprowadzam regularne inspekcje na placu budowy lub rygorystyczne odbiory lokalu. Skrupulatnie sprawdzam ekipy wykonawców i raportuję stan faktyczny.",
    },
    {
      number: "04",
      title: "Finalizacja i raport",
      description: "Otrzymujesz kompletną, zweryfikowaną prawnie dokumentację powykonawczą, protokoły wykrytych wad oraz pełnowartościowy raport stanu Twojej inwestycji.",
    },
  ];

  return (
    <section id="wspolpraca" className="py-24 bg-lightgray border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="font-sans text-xs font-semibold tracking-widest-plus text-crimson mb-2 uppercase">
            ETAPY WSPÓŁPRACY
          </p>
          <h2 className="font-serif font-light text-charcoal text-3xl md:text-5xl tracking-tight">
            Prosty proces, pewny wynik
          </h2>
          <div className="w-12 h-[1px] bg-crimson mt-4" />
        </div>

        {/* 4 Steps Row (Grid: 2x2 on mobile, 4 in desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="reveal flex flex-col pt-6 border-t border-crimson/40"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Large Red Step Number in Thin Cormorant */}
              <span className="font-serif text-[4rem] text-crimson font-light leading-none select-none">
                {step.number}
              </span>
              
              {/* Bold Title */}
              <h3 className="font-sans text-sm font-semibold tracking-wide text-charcoal uppercase mt-4 mb-2">
                {step.title}
              </h3>
              
              {/* Description Body */}
              <p className="font-sans text-xs lg:text-[13px] text-midgray font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
