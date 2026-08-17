"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DashedChickenDivider } from "@/app/components/hero-section";
import { getWhatsAppLink } from "@/app/lib/whatsapp";
import { FadeIn, staggerContainerVariants, fadeUpVariants } from "@/app/components/motion-primitives";

const CATEGORIES = [
  "Pollos",
  "Papas y acompañamientos",
  "Comida Chilena",
  "Bebidas",
  "Postres",
];

type Dish = {
  name: string;
  category: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

const DISHES: Dish[] = [
  {
    name: "Trutro con Papas",
    category: "Pollos",
    description:
      "Trutro de pollo dorado acompañado de arroz y papas fritas caseras.",
    price: "$6.990",
    imageSrc: "/images/menu/trutro.png",
    imageAlt: "Trutro de pollo dorado con arroz y papas fritas",
  },
  {
    name: "Pollo Completo",
    category: "Pollos",
    description: "Pollo entero dorado y jugoso, ideal para compartir con papas y acompañamientos.",
    price: "$13.000",
    imageSrc: "/images/menu/pollo-entero.png",
    imageAlt: "Pollo entero dorado y jugoso",
  },
  {
    name: "Medio Pollo",
    category: "Pollos",
    description: "Medio pollo a la brasa con papas fritas y sabor casero de la casa.",
    price: "$7.000",
    imageSrc: "/images/menu/pollo-entero.png",
    imageAlt: "Medio pollo dorado con papas fritas",
  },
  {
    name: "Empanada de Pino",
    category: "Comida Chilena",
    description: "Empanada horneada rellena de pino casero tradicional.",
    price: "$2.490",
    imageSrc: "/images/menu/empanada-de-pino.png",
    imageAlt: "Empanadas de pino horneadas",
  },
  {
    name: "Cazuela de la Casa",
    category: "Comida Chilena",
    description: "Caldo casero con pollo, arroz, papa, zapallo y verduras.",
    price: "$7.990",
    imageSrc: "/images/menu/casuela.png",
    imageAlt: "Cazuela casera con pollo, arroz y verduras",
  },
  {
    name: "Porotos con Riendas",
    category: "Comida Chilena",
    description: "Porotos guisados con tallarines, longaniza y sabor casero.",
    price: "$6.990",
    imageSrc: "/images/menu/porotos-con-rienda.png",
    imageAlt: "Porotos con riendas y longaniza",
  },
];

function DishCard({ name, category, description, price, imageSrc, imageAlt }: Dish) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <motion.article
        variants={fadeUpVariants}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream shadow-warm-sm transition-shadow duration-300 hover:shadow-warm"
      >
        <button
          type="button"
          aria-label={`Ver imagen completa: ${name}`}
          onClick={() => setIsImageOpen(true)}
          className="relative aspect-[4/5] w-full overflow-hidden bg-cream-dark text-left transition-transform duration-300 group-hover:scale-[1.03]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 80vw"
            className="object-cover"
          />
        </button>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
          {category}
        </span>

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-bold leading-snug text-coffee">
            {name}
          </h3>
          <span className="shrink-0 font-serif text-lg font-bold text-terracotta-dark">
            {price}
          </span>
        </div>

        <p className="flex-1 font-sans text-sm leading-relaxed text-coffee-soft">
          {description}
        </p>

        <motion.a
          href={getWhatsAppLink(`Hola, quiero pedir: ${name}`)}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta-dark px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-cream transition-colors hover:bg-coffee"
        >
          Pedir ahora
          <svg width="14" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path
              d="M1 6h13M9 1l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
      </motion.article>

      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Imagen completa: ${name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-coffee/85 p-5 sm:p-10"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-full w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                type="button"
                aria-label="Cerrar imagen"
                onClick={() => setIsImageOpen(false)}
                className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-coffee shadow-warm-sm"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  x
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CarouselArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="14" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path
        d={direction === "right" ? "M1 6h13M9 1l5 5-5 5" : "M15 6H2M7 1 2 6l5 5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.85 * (direction === "right" ? 1 : -1);
    track.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section id="menu" className="bg-cream px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-coffee sm:text-5xl">
            Nuestro Menú
          </h2>

          <div className="my-6 flex justify-center">
            <DashedChickenDivider />
          </div>

          <p className="font-sans text-lg leading-relaxed text-coffee-soft">
            Sabores tradicionales, preparados para disfrutar.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category, index) => (
              <li key={category}>
                <span
                  className={
                    index === 0
                      ? "inline-block rounded-lg border-2 border-terracotta-dark bg-terracotta-dark px-4 py-2 font-sans text-xs font-bold uppercase tracking-wider text-cream"
                      : "inline-block rounded-lg border border-coffee/15 bg-cream-dark px-4 py-2 font-sans text-xs font-bold uppercase tracking-wider text-coffee-soft"
                  }
                >
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="relative mt-14">
          <motion.button
            type="button"
            aria-label="Plato anterior"
            onClick={() => scrollByCard("left")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-coffee/15 bg-cream text-terracotta-dark shadow-warm-sm sm:flex h-11 w-11"
          >
            <CarouselArrowIcon direction="left" />
          </motion.button>

          <motion.div
            ref={trackRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainerVariants}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {DISHES.map((dish) => (
              <div
                key={dish.name}
                className="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
              >
                <DishCard {...dish} />
              </div>
            ))}
          </motion.div>

          <motion.button
            type="button"
            aria-label="Plato siguiente"
            onClick={() => scrollByCard("right")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-coffee/15 bg-cream text-terracotta-dark shadow-warm-sm sm:flex h-11 w-11"
          >
            <CarouselArrowIcon direction="right" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
