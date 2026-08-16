"use client";

import { motion } from "motion/react";
import { DashedChickenDivider } from "@/app/components/hero-section";
import { getWhatsAppLink } from "@/app/lib/whatsapp";
import { FadeIn, StaggerContainer, fadeUpVariants } from "@/app/components/motion-primitives";

type Testimonial = {
  name: string;
  initials: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carolina Muñoz",
    initials: "CM",
    quote:
      "El pollo queda igual de dorado y jugoso que el de mi abuela. Pedimos todos los domingos para la familia.",
  },
  {
    name: "Rodrigo Fuentes",
    initials: "RF",
    quote:
      "Las papas son las más crujientes que he probado en Santiago. Se nota que la receta es de verdad casera.",
  },
  {
    name: "Javiera Soto",
    initials: "JS",
    quote:
      "Pedimos la Chorrillana para compartir y no quedó nada. Buen sabor, buena porción y atención muy amable.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0l2.4 6.5H19l-5.3 4 2 6.8L10 13.5l-5.7 3.8 2-6.8L1 6.5h6.6L10 0z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.4 0 6.4 1.2 8.8 3.5l6.6-6.6C35.3 2.5 30 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.7 6C12.2 13 17.6 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.6c-.5 3-2.1 5.5-4.5 7.2l7.2 5.6C43.6 37.9 46.5 31.8 46.5 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.3 19.2c-.5 1.5-.8 3.1-.8 4.8s.3 3.3.8 4.8l-7.7 6C1 31.4 0 27.8 0 24s1-7.4 2.6-10.8l7.7 6z"
      />
      <path
        fill="#34A853"
        d="M24 48c6 0 11.3-2 15-5.4l-7.2-5.6c-2 1.4-4.6 2.2-7.8 2.2-6.4 0-11.8-3.5-13.7-8.7l-7.7 6C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  );
}

function TestimonialCard({ name, initials, quote }: Testimonial) {
  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex flex-col gap-4 rounded-2xl bg-cream p-6 shadow-warm-sm transition-shadow duration-300 hover:shadow-warm"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-dark font-serif text-sm font-bold text-cream">
            {initials}
          </span>
          <div>
            <p className="font-sans text-sm font-semibold text-coffee">{name}</p>
            <StarRating />
          </div>
        </div>
        <GoogleMark />
      </div>

      <p className="font-sans text-sm leading-relaxed text-coffee-soft">
        “{quote}”
      </p>
    </motion.article>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-cream-dark px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-coffee sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>

          <div className="my-6 flex justify-center">
            <DashedChickenDivider />
          </div>

          <p className="font-sans text-lg leading-relaxed text-coffee-soft">
            Reseñas reales de quienes ya probaron nuestro sabor casero.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-coffee/15 bg-cream px-5 py-3 shadow-warm-sm">
            <GoogleMark />
            <span className="font-serif text-lg font-bold text-coffee">4.8</span>
            <StarRating />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-coffee-soft">
              Reseñas en Google
            </span>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1} className="mt-14 text-center">
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-lg bg-terracotta-dark px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-cream shadow-warm-sm transition-colors hover:bg-coffee"
          >
            Pedir ahora por WhatsApp
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
