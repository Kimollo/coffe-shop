const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

const socials = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-espresso px-6 py-16 text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
        <div>
          <p className="font-heading text-2xl tracking-tight">Ember & Oak</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-cream/80">
            A neighborhood roastery and café in Cape Town.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-medium tracking-wide text-cream/70 uppercase">
            Quick links
          </p>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm transition-colors hover:text-terracotta">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-medium tracking-wide text-cream/70 uppercase">
            Follow
          </p>
          <ul className="mt-4 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-cream/30 px-3 text-sm transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  {social.label === "Instagram"
                    ? "Ig"
                    : social.label === "Facebook"
                      ? "Fb"
                      : "✉"}
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-cream/15 pt-6">
        <p className="text-sm text-cream/70">© 2026 Ember & Oak. All rights reserved.</p>
      </div>
    </footer>
  );
}
