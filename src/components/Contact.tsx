/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-charcoal text-white relative">
      {/* Background vector accents */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="reveal">
          <span className="font-sans text-xs font-semibold tracking-widest-plus text-crimson mb-3 block uppercase">
            KONTAKT
          </span>
          <h2 className="font-serif font-light text-white text-3.5xl md:text-5xl leading-tight tracking-tight mb-12 max-w-2xl mx-auto">
            Porozmawiajmy o Twojej inwestycji
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-14">
            
            {/* Extremely Large Clickable Phone Element */}
            <div className="flex flex-col items-center">
              <span className="font-sans text-[11px] text-gray-400 uppercase tracking-widest-plus block mb-3">
                ZADZWOŃ BEZPOŚREDNIO
              </span>
              <a
                href="tel:797229577"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-crimson hover:text-crimson/90 leading-none transition-colors tracking-tight font-light inline-block"
                id="contact-phone-direct"
              >
                797 229 577
              </a>
            </div>

            {/* Email Contact Block */}
            <div className="flex flex-col items-center">
              <span className="font-sans text-[11px] text-gray-400 uppercase tracking-widest-plus block mb-3">
                NAPISZ E-MAIL
              </span>
              <a
                href="mailto:agnieszka.biszczad@wp.pl"
                className="font-serif text-2xl md:text-3xl lg:text-3.5xl text-white hover:text-crimson transition-colors tracking-tight font-light inline-block border-b border-white/20 pb-1"
                id="contact-email-direct"
              >
                agnieszka.biszczad@wp.pl
              </a>
            </div>

          </div>

          {/* First consultation statement */}
          <p className="font-serif italic text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Pierwsza konsultacja budowlana lub analiza oferty jest bezpłatna.
          </p>

          {/* Premium Flat Social Button */}
          <div className="pt-8 border-t border-white/10 max-w-lg mx-auto">
            <a
              href="https://www.facebook.com/profile.php?id=61588579722446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-sans text-xs font-semibold tracking-widest hover:border-white hover:bg-white/5 active:bg-white/10 transition-all uppercase"
              id="contact-facebook-btn"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Odwiedź Profil Facebook
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
