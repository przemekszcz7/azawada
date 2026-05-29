/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "USŁUGI", href: "#uslugi" },
    { label: "O MNIE", href: "#o-mnie" },
    { label: "WSPÓŁPRACA", href: "#wspolpraca" },
    { label: "KONTAKT", href: "#kontakt" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white border-b border-crimson py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <span
              className={`font-serif text-lg md:text-xl tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              A. Zawada-Biszczad
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-xs font-medium tracking-wider-plus transition-all duration-300 hover:text-crimson relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-crimson after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-charcoal" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Group */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:797229577"
              className="font-sans text-sm font-medium tracking-wide text-crimson transition-opacity hover:opacity-80"
              id="nav-phone"
            >
              797 229 577
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588579722446"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className={`transition-colors duration-300 hover:text-crimson ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburguer Icon */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:797229577"
              className="font-sans text-xs font-medium text-crimson"
            >
              797 229 577
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-charcoal z-40 flex flex-col justify-center items-center px-12 transition-all duration-300 animate-fade-in"
        >
          {/* Header spacer */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="font-serif text-lg tracking-wide text-white">
              A. Zawada-Biszczad
            </span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white hover:text-crimson focus:outline-none"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-sm font-medium tracking-widest text-white hover:text-crimson transition-colors"
                style={{
                  animation: `heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${idx * 100}ms`,
                  opacity: 0,
                }}
              >
                {link.label}
              </a>
            ))}
            <div
              className="mt-6 flex flex-col items-center gap-4 border-t border-white/10 pt-8"
              style={{
                animation: "heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 400ms",
                opacity: 0,
              }}
            >
              <a
                href="tel:797229577"
                className="font-sans text-xl font-medium text-crimson"
              >
                797 229 577
              </a>
              <a
                href="mailto:agnieszka.biszczad@wp.pl"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors"
              >
                agnieszka.biszczad@wp.pl
              </a>
              
              <a
                href="https://www.facebook.com/profile.php?id=61588579722446"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-white hover:text-crimson flex items-center gap-2 border border-white/20 px-6 py-2 uppercase font-sans text-xs tracking-wider"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
