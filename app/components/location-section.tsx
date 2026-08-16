"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DashedChickenDivider } from "@/app/components/hero-section";
import { FadeIn } from "@/app/components/motion-primitives";

const ADDRESS = "Av. Providencia 1234, Santiago, Chile";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_DIRECTIONS_HREF = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

function StorefrontIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="text-terracotta-dark">
      <path d="M8 26v26h48V26" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M6 14h52l4 12a6 6 0 0 1-11 4 6 6 0 0 1-11 0 6 6 0 0 1-11 0 6 6 0 0 1-11 0 6 6 0 0 1-11-4l4-12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M24 52V36h16v16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="text-terracotta-dark">
      <ellipse cx="32" cy="26" rx="22" ry="8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 26v8c0 4.4 9.8 8 22 8s22-3.6 22-8v-8" stroke="currentColor" strokeWidth="2" />
      <path d="M18 42v10M46 42v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CounterIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="text-terracotta-dark">
      <path d="M6 30h52v10a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V30Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 30l6-16h40l6 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const GALLERY = [
  { title: "Nuestro local en Providencia", icon: <StorefrontIcon /> },
  { title: "Mesas familiares para compartir", icon: <TableIcon /> },
  { title: "Atención cercana en el mesón", icon: <CounterIcon /> },
];

function useAutoRotate(length: number, intervalMs = 4000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);

  return [index, setIndex] as const;
}

export function LocationSection() {
  const [index, setIndex] = useAutoRotate(GALLERY.length);

  return (
    <section id="locales" className="bg-cream-dark px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-coffee sm:text-5xl">
            Nuestros Locales
          </h2>

          <div className="my-6 flex justify-center">
            <DashedChickenDivider />
          </div>

          <p className="font-sans text-lg leading-relaxed text-coffee-soft">
            Ven a conocer el lugar donde preparamos cada receta con cariño.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Galería de fotos del local, cambia sola cada pocos segundos */}
          <FadeIn className="relative overflow-hidden rounded-[2rem] bg-cream shadow-warm">
            <div className="relative aspect-[4/3] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-cream-dark to-paper"
                >
                  {GALLERY[index].icon}
                  <p className="font-serif text-lg font-bold text-coffee">
                    {GALLERY[index].title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {GALLERY.map((photo, photoIndex) => (
                <button
                  key={photo.title}
                  type="button"
                  aria-label={`Ver foto: ${photo.title}`}
                  onClick={() => setIndex(photoIndex)}
                  className={
                    photoIndex === index
                      ? "h-2 w-6 rounded-full bg-terracotta-dark transition-all"
                      : "h-2 w-2 rounded-full bg-coffee/20 transition-all hover:bg-coffee/40"
                  }
                />
              ))}
            </div>
          </FadeIn>

          {/* Ubicación y texto de atención */}
          <FadeIn delay={0.15} className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold leading-snug text-coffee">
                Atención cálida y familiar
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-coffee-soft">
                En Pollitos con Papas te recibimos como en casa: un equipo cercano,
                mesas pensadas para compartir en familia y el mismo cariño de
                siempre en cada pedido, ya sea que vengas a comer o pases a
                retirar tu pollo.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-warm-sm">
              <iframe
                src={MAP_EMBED_SRC}
                title="Ubicación de Pollitos con Papas en Google Maps"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>

            <motion.a
              href={MAP_DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-terracotta-dark px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-cream shadow-warm-sm transition-colors hover:bg-coffee"
            >
              Cómo llegar
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </motion.a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
