"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DashedChickenDivider } from "@/app/components/hero-section";
import { FadeIn } from "@/app/components/motion-primitives";

const ADDRESS = "Pasaje Chañaral 510, Copiapó, Tercera Región, Chile";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_DIRECTIONS_HREF = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const GALLERY = [
  {
    title: "Nuestro local en Copiapó",
    src: "/images/us/1.png",
    alt: "Fachada de Pollito con Papas en Copiapó",
  },
  {
    title: "Mesas familiares para compartir",
    src: "/images/us/2.png",
    alt: "Comedor interior de Pollito con Papas",
  },
  {
    title: "El sabor de siempre",
    src: "/images/us/3.png",
    alt: "Pollo asado con arroz y papas fritas",
  },
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
                  className="absolute inset-0"
                >
                  <Image
                    src={GALLERY[index].src}
                    alt={GALLERY[index].alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee/70 to-transparent px-6 pb-6 pt-16">
                    <p className="font-serif text-lg font-bold text-cream">
                      {GALLERY[index].title}
                    </p>
                  </div>
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
