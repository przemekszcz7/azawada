/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Service } from "../types";
import { X, Check } from "lucide-react";

export default function ServiceBlock() {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: "posrednictwo",
      category: "NIERUCHOMOŚCI",
      title: "Pośrednictwo Nieruchomości",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      description: "Wsparcie w bezpiecznej sprzedaży i zakupie nieruchomości. Działam w Twoim interesie na każdym etapie transakcji — od wyceny po podpisanie aktu.",
      details: [
        "Szczegółowa analiza stanu prawnego nieruchomości (księgi wieczyste, obciążenia)",
        "Profesjonalna wycena rynkowa oparta na realnych transakcjach",
        "Przygotowanie planu marketingowego oraz optymalizacja prezentacji nieruchomości",
        "Asysta prawna i techniczna przy negocjacjach cenowych",
        "Koordynacja procesu przygotowania dokumentów do aktu notarialnego",
        "Oficjalne sporządzenie protokołu zdawczo-odbiorczego i przekazanie kluczy"
      ]
    },
    {
      id: "odbior",
      category: "KONTROLA JAKOŚCI",
      title: "Odbiór Mieszkania",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
      description: "Profesjonalna weryfikacja lokalu przed odbiorem od dewelopera. Wykrywam wady ukryte i jawne, sporządzam protokół i reprezentuję Twoje interesy.",
      details: [
        "Kontrola geometryczna: pomiar pionów, płaszczyzn tynków oraz poprawności kątów krawędzi",
        "Weryfikacja stolarki okiennej i drzwiowej pod kątem zarysowań, regulacji i szczelności",
        "Ocena wilgotności przegród budowlanych profesjonalnym wilgotnościomierzem",
        "Sprawdzenie wykonania instalacji elektrycznych, sanitarnych oraz wentylacji grawitacyjnej",
        "Kontrola poprawności ułożenia wylewek, tarasów oraz przynależnych komórek lokatorskich",
        "Sporządzenie formalnej listy wad i usterek wpisywanych do protokołu deweloperskiego"
      ]
    },
    {
      id: "nadzor",
      category: "BUDOWNICTWO",
      title: "Nadzór Inwestorski",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      description: "Reprezentowanie interesu inwestora, kontrola jakości prac i zgodności z projektem. Budujesz pewnie — ja czuwam nad każdym etapem.",
      details: [
        "Regularne inspekcje na budowie oraz wykonywanie wpisów potwierdzających stan prac w dzienniku budowy",
        "Kontrola zgodności technologii i materiałów z projektem budowlanym oraz normami PN-EN",
        "Odbiory elementów ulegających zakryciu (np. zbrojenie, izolacje przeciwwilgociowe i termiczne)",
        "Weryfikacja dokładności oraz rzetelności rozliczeń finansowych z generalnym wykonawcą",
        "Doradztwo przy wyborze optymalnych materiałów i rozwiązań w trudnych warunkach gruntowych",
        "Nadzorowanie i koordynacja końcowych prób technicznych przed pozwoleniem na użytkowanie"
      ]
    }
  ];

  return (
    <section id="uslugi" className="py-24 bg-lightgray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="font-sans text-xs font-semibold tracking-widest-plus text-crimson mb-2 uppercase">
            ZAKRES USŁUG
          </p>
          <h2 className="font-serif font-light text-charcoal text-3xl md:text-5xl tracking-tight">
            Co mogę dla Ciebie zrobić
          </h2>
          <div className="w-12 h-[1px] bg-crimson mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="reveal flex flex-col bg-white overflow-hidden transition-all duration-300 relative group border-l-0 border-transparent hover:border-l-[3px] hover:border-crimson"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Service Cover Crop Container */}
              <div className="h-[260px] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Padding Content */}
              <div className="p-8 flex flex-col flex-grow min-h-[280px]">
                <span className="font-sans text-[10px] font-semibold tracking-wider-plus text-crimson mb-2 uppercase">
                  {service.category}
                </span>
                <h3 className="font-serif text-charcoal text-xl md:text-2xl font-light mb-4 tracking-wide group-hover:text-crimson transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-midgray font-light leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="font-sans text-xs font-semibold tracking-wider text-crimson uppercase hover:opacity-85 transition-opacity duration-300 inline-flex items-center gap-1 cursor-pointer border-b border-transparent hover:border-crimson"
                  >
                    Dowiedz się więcej —&gt;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Detail Drawer / Modal Overlay */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white max-w-2xl w-full p-8 md:p-12 relative overflow-y-auto max-h-[90vh] shadow-2xl border-t-4 border-crimson">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 text-charcoal hover:text-crimson transition-colors focus:outline-none"
              aria-label="Zamknij szczegóły usługi"
            >
              <X size={24} />
            </button>

            <span className="font-sans text-[11px] font-semibold tracking-wider-plus text-crimson uppercase block mb-2">
              {activeModalService.category}
            </span>
            <h3 className="font-serif text-charcoal text-3xl font-light mb-6 tracking-wide">
              {activeModalService.title}
            </h3>
            
            <p className="font-sans text-sm text-midgray font-light leading-relaxed mb-8">
              {activeModalService.description}
            </p>

            <div className="h-[1px] bg-gray-200 mb-8" />

            <h4 className="font-sans text-xs font-semibold tracking-wider text-charcoal uppercase mb-4">
              SZCZEGÓŁOWY ZAKRES DZIAŁANIA:
            </h4>
            
            <ul className="flex flex-col gap-3.5">
              {activeModalService.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 text-crimson shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-4">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-6 py-3 border border-gray-300 text-charcoal font-sans text-xs tracking-wider uppercase hover:bg-gray-50 transition-all"
              >
                Zamknij
              </button>
              <a
                href="#kontakt"
                onClick={() => {
                  setActiveModalService(null);
                  // Allow modal fade out and scroll smoothly
                  setTimeout(() => {
                    const el = document.getElementById("kontakt");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="px-6 py-3 bg-crimson text-white font-sans text-xs tracking-wider uppercase hover:bg-crimson/95 transition-all text-center"
              >
                Zapytaj o wycenę
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
