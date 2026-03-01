"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "roles", label: "Roles" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "hero");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the hero section (first section without id)
    const heroSection = document.querySelector("section:first-of-type");
    if (heroSection) {
      heroSection.id = "hero";
      observer.observe(heroSection);
    }

    // Observe other sections
    sections.slice(1).forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Navigate to ${section.label}`}
        >
          <span
            className={`text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
              activeSection === section.id ? "text-primary" : "text-gray-500"
            }`}
          >
            {section.label}
          </span>
          <span
            className={`transition-all duration-300 rounded-full ${
              activeSection === section.id
                ? "w-4 h-4 bg-primary"
                : "w-2 h-2 bg-gray-300 group-hover:bg-primary/60"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
