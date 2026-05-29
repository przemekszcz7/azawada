/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreePillars from "./components/ThreePillars";
import ServiceBlock from "./components/ServiceBlock";
import Credentials from "./components/Credentials";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Intersection Observer for scroll-triggered fade-up animations (no JS library)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        root: null,
        threshold: 0.08, // Trigger when 8% is visible
        rootMargin: "0px 0px -40px 0px", // Trigger when item enters near the fold
      }
    );

    // Initial query and observe
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically mounted components (e.g. state modifications if any)
    const handleMutation = () => {
      const currentElements = document.querySelectorAll(".reveal");
      currentElements.forEach((el) => observer.observe(el));
    };
    
    const mutator = new MutationObserver(handleMutation);
    mutator.observe(document.body, { childList: true, subtree: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      mutator.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-charcoal min-h-screen selection:bg-crimson selection:text-white font-sans antialiased">
      {/* Interactive Navigation */}
      <Navbar />

      {/* Hero Welcome Cover */}
      <Hero onConsultationClick={scrollToContact} />

      {/* Typographic Column Pillars */}
      <ThreePillars />

      {/* Standardized Services Display (Usługi) */}
      <ServiceBlock />

      {/* Core Credentials & Authority (Poświadczenia) */}
      <Credentials />

      {/* Horizontal Steps Roadmap (Jak wygląda współpraca) */}
      <Process />

      {/* Biography and Values Overlay (O mnie) */}
      <About onContactClick={scrollToContact} />

      {/* Coordinates and Smart Form Inquiry Panel (Kontakt) */}
      <Contact />

      {/* Modern Global Bottom Floor (Footer) */}
      <Footer />
    </div>
  );
}
