"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/About", label: "ABOUT US" },
  { href: "/Services", label: "SERVICES" },
  { href: "/Roles", label: "CAREERS" },
  { href: "/Contact", label: "CONTACT" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white py-6"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="FIGO CARE LTD - Home">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/Contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Hire Staff
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all font-medium hover:text-primary hover:bg-primary/5 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 font-semibold border-l-4 border-primary"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-4">
              <a
                href="tel:+442081294836"
                className="flex items-center gap-2 text-gray-600 py-3 px-4"
              >
                <Phone className="w-4 h-4" />
                <span>020 8129 4836</span>
              </a>
              <Link
                href="/Contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl text-center font-semibold transition-all block mt-2"
              >
                Hire Staff
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
