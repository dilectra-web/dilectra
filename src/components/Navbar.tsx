"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-40">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/logoblanco.png"
            alt="Dilectra Arquitectura & Ingeniería"
            width={680}
            height={190}
            className="h-36 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase font-heading font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-green"
                    : "text-brand-gray hover:text-brand-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contacto"
            className="inline-block px-6 py-2.5 bg-brand-green text-white text-sm font-heading font-semibold tracking-widest uppercase hover:bg-brand-green-dark transition-colors duration-200"
          >
            Contáctenos
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-brand-black/95 backdrop-blur-md ${
          menuOpen ? "max-h-96 border-b border-white/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-sm tracking-widest uppercase font-heading font-medium py-2 transition-colors ${
                  pathname === link.href ? "text-brand-green" : "text-brand-gray"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="block w-full text-center px-6 py-3 bg-brand-green text-white text-sm font-heading font-semibold tracking-widest uppercase mt-2"
            >
              Contáctenos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
