"use client";

import { SiteNavbar } from "@/app/components/site-navbar";
import { HeritageStamp } from "@/app/components/heritage-stamp";
import { ChickenPlateIllustration } from "@/app/components/chicken-plate-illustration";
import { FarmhouseLineArt } from "@/app/components/farmhouse-line-art";
import { getWhatsAppLink } from "@/app/lib/whatsapp";
import { fadeUpVariants, staggerContainerVariants } from "@/app/components/motion-primitives";
import { motion } from "motion/react";

export function DashedChickenDivider() {
  return (
    <div className="flex items-center gap-3 text-gold" aria-hidden="true">
      <span className="h-px w-12 border-t-2 border-dashed border-gold" />
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path
          d="M10 17V7M10 7C6 6 4 3 4 0c3 0 5 2 6 5m0 2c4-1 6-4 6-7-3 0-5 2-6 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px w-12 border-t-2 border-dashed border-gold" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-background relative min-h-[max(100svh,210.76vw)] overflow-hidden bg-cream lg:min-h-[min(100svh,66.67vw)]"
    >

      <SiteNavbar />

      <div className="relative z-10 mx-auto grid min-h-[inherit] max-w-7xl gap-10 px-6 pb-16 pt-36 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-12 lg:pb-24 lg:pt-48">
        {/* Contenido */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
          className="relative z-10 flex max-w-xl flex-col lg:col-span-5 lg:block"
        >
          <motion.h1
            variants={fadeUpVariants}
            className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-coffee sm:text-5xl lg:text-[3.4rem]"
          >
            El sabor de siempre,
            <br />
            <span className="text-terracotta-dark">como en casa</span>
          </motion.h1>

          <motion.div variants={fadeUpVariants} className="my-6">
            <DashedChickenDivider />
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-sm font-sans text-lg leading-relaxed text-coffee"
          >
            Pollos dorados, papas crujientes y todo
            <br />
            el sabor de la tradición chilena.
          </motion.p>

          {/* En móvil el CTA baja al pie de la sección para dejar libre la vista del plato */}
          <motion.div variants={fadeUpVariants} className="mt-auto flex flex-wrap items-center gap-6 pt-14 lg:mt-9 lg:pt-0">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-lg bg-terracotta-dark px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-cream shadow-[0_14px_28px_rgba(95,43,30,0.25)] ring-1 ring-cream/30 transition-colors hover:bg-coffee"
            >
              Ver nuestro menú
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path
                  d="M1 6h13M9 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:col-span-7 lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
