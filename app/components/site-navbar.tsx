"use client";

import { motion } from "motion/react";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestro Menú", href: "#menu" },
  { label: "Promociones", href: "#promociones" },
  { label: "Locales", href: "#locales" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

function BrandMark() {
  return (
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
      <span className="font-serif text-2xl font-bold leading-[1.05] text-terracotta-dark">
        Pollitos
      </span>
      <span className="-mt-1 font-serif text-2xl font-bold leading-[1.05] text-terracotta-dark">
        con Papas
      </span>
      <span className="mt-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
        <span className="h-px w-4 bg-gold" aria-hidden="true" />
        Desde 1995
        <span className="h-px w-4 bg-gold" aria-hidden="true" />
      </span>
    </a>
  );
}

export function SiteNavbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-20"
    >
      <nav className="mx-auto flex max-w-7xl items-start justify-between gap-6 px-6 py-8 lg:px-12">
        <BrandMark />

        <ul className="hidden items-center gap-8 rounded-2xl border border-coffee/10 bg-cream/85 px-5 py-3 font-sans text-sm font-medium text-coffee shadow-warm-sm lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.label === "Inicio"
                    ? "border-b-2 border-terracotta-dark pb-1 text-terracotta-dark"
                    : "pb-1 transition-colors hover:text-terracotta-dark"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 pt-1">
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-lg bg-terracotta-dark px-5 py-3 font-sans text-xs font-bold uppercase tracking-wider text-cream shadow-warm-sm transition-colors hover:bg-coffee sm:inline-flex"
          >
            Pedir ahora
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 5h10l-1 8.5a1 1 0 0 1-1 .5H5a1 1 0 0 1-1-.5L3 5Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path
                d="M6 5V3.5a2 2 0 0 1 4 0V5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </motion.a>
          <motion.button
            type="button"
            aria-label="Abrir menú"
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-coffee/15 text-coffee lg:hidden"
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 1h18M0 7h18M0 13h18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
