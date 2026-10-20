import FadeIn from "@/components/FadeIn";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-espresso px-6 py-16 text-cream">
      <FadeIn>
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
          <div>
            <p className="font-heading text-2xl tracking-tight">Ember & Oak</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-cream/80">
              Roasted on Loop Street. Served without a hurry.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-medium tracking-wide text-cream/70 uppercase">
              Quick links
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-medium tracking-wide text-cream/70 uppercase">
              Find us
            </p>
            <p className="mt-4 text-sm leading-6">
              <a href="#visit" className="transition-colors hover:text-terracotta">
                12 Loop Street, Cape Town
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-cream/80">
              Mon–Fri 7am–5pm
              <br />
              Sat 8am–4pm · Sun 8am–2pm
            </p>
            <p className="mt-3 text-sm">
              <a
                href="mailto:hello@emberandoak.co.za"
                className="transition-colors hover:text-terracotta"
              >
                hello@emberandoak.co.za
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-cream/15 pt-6">
          <p className="text-sm text-cream/70">
            © 2026 Ember & Oak. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
