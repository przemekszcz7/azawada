/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface HeroProps {
  onConsultationClick: () => void;
}

export default function Hero({ onConsultationClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-charcoal flex items-center overflow-hidden pt-20"
    >
      {/* Background Cover Image with High-authority Dark Charcoal Mix Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 28, 28, 0.78), rgba(28, 28, 28, 0.78)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')`,
        }}
      />

      {/* Grid Pattern Decorative Subsystem */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-20 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        
        {/* Thin Crimson Horizontal Line Above Name */}
        <div 
          className="opacity-0 animate-hero-fade-up w-[60px] h-[2px] bg-crimson mb-6"
          style={{ animationFillMode: "forwards" }}
        />

        {/* Main Display Heading */}
        <h1 
          className="opacity-0 animate-hero-fade-up animation-delay-100 font-serif font-light text-white leading-[1.05] tracking-tight mb-4 text-[4rem] md:text-[5.5rem] lg:text-[7rem] max-w-4xl"
          style={{ animationFillMode: "forwards" }}
        >
          Agnieszka<br />
          Zawada-Biszczad
        </h1>

        {/* Subtitle / Professions */}
        <p 
          className="opacity-0 animate-hero-fade-up animation-delay-200 font-sans text-xs md:text-sm font-medium tracking-widest-plus text-gray-400 mb-6 uppercase"
          style={{ animationFillMode: "forwards" }}
        >
          Kierownik Budowy <span className="text-crimson mx-1.5">·</span> Nadzory Budowlane <span className="text-crimson mx-1.5">·</span> Nieruchomości
        </p>

        {/* Italic Cormorant Tagline */}
        <p 
          className="opacity-0 animate-hero-fade-up animation-delay-300 font-serif italic text-white/90 text-xl md:text-2xl lg:text-3xl font-light mb-10 tracking-wide"
          style={{ animationFillMode: "forwards" }}
        >
          Doświadczenie. Wiedza. Bezpieczeństwo.
        </p>

        {/* CTA Buttons Row */}
        <div 
          className="opacity-0 animate-hero-fade-up animation-delay-400 flex flex-col sm:flex-row gap-4 sm:items-center max-w-md md:max-w-xl"
          style={{ animationFillMode: "forwards" }}
        >
          <button
            onClick={onConsultationClick}
            className="px-8 py-4 bg-crimson text-white font-sans text-xs font-semibold tracking-wider hover:bg-crimson/90 active:bg-crimson/95 transition-all text-center uppercase"
            id="hero-cta-consult"
          >
            UMÓW KONSULTACJĘ
          </button>
          
          <a
            href="tel:797229577"
            className="px-8 py-4 border border-white/30 text-white font-sans text-xs font-semibold tracking-wider hover:border-white hover:bg-white/5 active:bg-white/10 transition-all text-center uppercase"
            id="hero-cta-phone"
          >
            797 229 577
          </a>
        </div>

        {/* First consultation free indicator */}
        <div 
          className="opacity-0 animate-hero-fade-up animation-delay-400 mt-16 sm:mt-24 border-t border-white/10 pt-4 flex items-center gap-3"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="w-1.5 h-1.5 bg-crimson" />
          <span className="font-sans text-[11px] md:text-xs text-gray-400 tracking-wider uppercase">
            Pierwsza konsultacja bezpłatna i niezobowiązująca
          </span>
        </div>

      </div>
    </section>
  );
}
