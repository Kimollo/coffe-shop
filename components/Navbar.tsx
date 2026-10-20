"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

const orderButtonClassName =
  "items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-[#A35126]";

export default function Navbar() {
  // menuOpen remembers whether the mobile menu is open.
  // useState returns that value and setMenuOpen, which updates it and re-renders the navbar.
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative flex w-full items-center px-6 py-4">
        <a
          href="/"
          className="font-heading text-xl tracking-tight text-espresso"
        >
          Ember & Oak
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-espresso transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" className={`${orderButtonClassName} ml-auto hidden md:inline-flex`}>
          Order ahead
        </button>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center text-espresso md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-espresso/10 bg-cream px-6 py-6 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-espresso transition-colors hover:text-terracotta"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button type="button" className={`${orderButtonClassName} mt-6 inline-flex w-full`}>
            Order ahead
          </button>
        </div>
      ) : null}
    </header>
  );
}
