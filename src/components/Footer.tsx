/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  const currentDate = "2026"; // Matches user requirement of '© 2026 Agnieszka Zawada-Biszczad.'

  return (
    <footer id="footer" className="bg-[#141414] text-gray-500 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Segment: Brand, Nav, Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8">
          
          {/* Logo Brand Title (Left) */}
          <div className="md:col-span-4 flex items-center gap-3">
            <span className="font-serif text-base text-white/90 tracking-wide font-light">
              Agnieszka Zawada-Biszczad
            </span>
          </div>

          {/* Quick Nav Links (Center) */}
          <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center">
            <a
              href="#uslugi"
              className="font-sans text-[11px] font-medium tracking-widest text-gray-400 hover:text-crimson uppercase transition-colors"
            >
              USŁUGI
            </a>
            <a
              href="#o-mnie"
              className="font-sans text-[11px] font-medium tracking-widest text-gray-400 hover:text-crimson uppercase transition-colors"
            >
              O MNIE
            </a>
            <a
              href="#wspolpraca"
              className="font-sans text-[11px] font-medium tracking-widest text-gray-400 hover:text-crimson uppercase transition-colors"
            >
              WSPÓŁPRACA
            </a>
            <a
              href="#kontakt"
              className="font-sans text-[11px] font-medium tracking-widest text-gray-400 hover:text-crimson uppercase transition-colors"
            >
              KONTAKT
            </a>
          </div>

          {/* Contacts Row (Right) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-1 font-sans text-xs">
            <a
              href="tel:797229577"
              className="text-white font-medium hover:text-crimson transition-colors"
            >
              797 229 577
            </a>
            <a
              href="mailto:agnieszka.biszczad@wp.pl"
              className="text-gray-400 hover:text-crimson transition-colors"
            >
              agnieszka.biszczad@wp.pl
            </a>
          </div>

        </div>

        {/* Thin crimson horizontal divider rule */}
        <div className="h-[1px] bg-crimson/30 w-full mb-6" />

        {/* Bottom Segment: Copyright & Social Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans">
          
          <p className="text-gray-600">
            © {currentDate} Agnieszka Zawada-Biszczad. Wszelkie prawa zastrzeżone.
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=61588579722446"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-crimson uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            Facebook
          </a>

        </div>

      </div>
    </footer>
  );
}
