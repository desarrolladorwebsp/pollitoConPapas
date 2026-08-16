import { getWhatsAppLink } from "@/app/lib/whatsapp";

const EXPLORE_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestro Menú", href: "#menu" },
  { label: "Promociones", href: "#promociones" },
  { label: "Locales", href: "#locales" },
  { label: "Nosotros", href: "#nosotros" },
];

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6 3H3.6a1.6 1.6 0 0 0-1.6 1.7c.4 6 5.3 10.9 11.3 11.3A1.6 1.6 0 0 0 15 14.4V12l-3.7-1.2-1.5 1.5a9 9 0 0 1-4-4l1.5-1.5L6 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.3" cy="5.7" r="0.9" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M12.5 6.5h-1.7c-.6 0-1 .5-1 1.1v1.8h2.6l-.4 2.6h-2.2V18h-2.7v-6h-2V9.4h2V7.3c0-2 1.5-3.6 3.6-3.6h1.8v2.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 17l1.1-3.2a6.8 6.8 0 1 1 2.6 2.6L4 17Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 8.4c.2 2.1 1.9 3.8 4 4 .5 0 1-.4.9-.9l-.1-.6-1.4-.5-.8.7a4.3 4.3 0 0 1-2.2-2.2l.7-.8-.5-1.4-.6-.1c-.5-.1-.9.4-.9.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "WhatsApp", href: "#", icon: <WhatsAppIcon /> },
];

function FooterBrandMark() {
  return (
    <div className="max-w-xs">
      <a href="#inicio" className="flex flex-col items-start">
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          aria-hidden="true"
          className="mb-1 text-gold"
        >
          <path
            d="M11 15V6M11 6c-3-1-5-3-5-6 3 0 5 2 5 5M11 6c3-1 5-3 5-6-3 0-5 2-5 5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-serif text-2xl font-bold leading-[1.05] text-cream">
          Pollitos
        </span>
        <span className="-mt-1 font-serif text-2xl font-bold leading-[1.05] text-cream">
          con Papas
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-4 bg-gold" aria-hidden="true" />
          Desde 1995
          <span className="h-px w-4 bg-gold" aria-hidden="true" />
        </span>
      </a>

      <p className="mt-4 font-sans text-sm leading-relaxed text-cream/70">
        Pollo dorado, papas crujientes y el sabor casero de la tradición
        chilena, hecho con cariño para toda la familia.
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-coffee text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
        <FooterBrandMark />

        <div>
          <h3 className="font-serif text-lg font-bold text-cream">Explora</h3>
          <ul className="mt-4 flex flex-col gap-3 font-sans text-sm text-cream/70">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-cream">Contacto</h3>
          <ul className="mt-4 flex flex-col gap-3 font-sans text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-gold">
                <LocationIcon />
              </span>
              Av. Providencia 1234, Santiago
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gold">
                <PhoneIcon />
              </span>
              +56 9 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gold">
                <ClockIcon />
              </span>
              Lun a dom, 12:00 - 22:30
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-cream">Síguenos</h3>
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cream/15 text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-terracotta-dark px-5 py-3 font-sans text-xs font-bold uppercase tracking-wider text-cream shadow-warm-sm transition-colors hover:bg-terracotta"
          >
            Pedir ahora
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-sans text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} Pollitos con Papas. Todos los derechos reservados.</p>
          <p>Hecho con cariño en Chile</p>
        </div>
      </div>
    </footer>
  );
}
