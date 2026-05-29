/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface AboutProps {
  onContactClick: () => void;
}

export default function About({ onContactClick }: AboutProps) {
  return (
    <section id="o-mnie" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="font-sans text-xs font-semibold tracking-widest-plus text-crimson mb-2 block uppercase text-center">
            O MNIE
          </span>
          <h2 className="font-serif font-light text-charcoal text-3xl md:text-5xl leading-tight tracking-tight mb-8 text-center max-w-3xl mx-auto">
            Buduję zaufanie tak samo starannie jak nadzoruję budowy
          </h2>

          {/* Bio paragraphs in high-authority professional Polish */}
          <div className="flex flex-col gap-6 text-xs md:text-sm text-midgray font-light leading-relaxed max-w-2xl mx-auto text-justify">
            <p>
              Nazywam się Agnieszka Zawada-Biszczad. Praca na budowie oraz analiza rynku nieruchomości to moje codzienne rzemiosło i pasja. Łączę rygorystyczne wykształcenie techniczne z gruntowną znajomością procedur prawno-administracyjnych, co gwarantuje moim Partnerom i Klientom precyzyjne odzwierciedlenie ich interesów w trudnym procesie inwestycyjnym. 
            </p>
            <p>
              Jako Kierownik Budowy i Inspektor Nadzoru Inwestorskiego kładę bezwzględny nacisk na jakość, normatywność i zgodność z projektem. Moim celem jest minimalizowanie ryzyka wykonawczego oraz demaskowanie ukrytych usterek i wad technologicznych na wczesnym etapie, zanim staną się one źródłem kosztownych sporów deweloperskich.
            </p>
            <p>
              Wierzę, że sukces każdej inwestycji — czy to budowy domu jednorodzinnego, czy też transakcji zakupu mieszkania — tkwi w szczególe i absolutnym braku kompromisów jakościowych. Dbam o to, aby Twoje cele zostały zrealizowane bez stresu, opóźnień budżetowych i niepewności technicznej.
            </p>
          </div>

          {/* Values row separated by thin red vertical lines */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 md:gap-x-6 my-10 border-t border-b border-gray-100 py-4 max-w-xl mx-auto">
            <span className="font-sans text-[11px] font-semibold tracking-widest-plus text-charcoal uppercase">
              DOŚWIADCZENIE
            </span>
            <span className="w-[1px] h-3 bg-crimson" />
            <span className="font-sans text-[11px] font-semibold tracking-widest-plus text-charcoal uppercase">
              WIEDZA
            </span>
            <span className="w-[1px] h-3 bg-crimson" />
            <span className="font-sans text-[11px] font-semibold tracking-widest-plus text-charcoal uppercase">
              BEZPIECZEŃSTWO
            </span>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-crimson text-white font-sans text-xs font-semibold tracking-wider hover:bg-crimson/95 transition-all uppercase"
            >
              SKONTAKTUJ SIĘ
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
