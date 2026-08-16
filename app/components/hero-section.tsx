import { SiteNavbar } from "@/app/components/site-navbar";
import { HeritageStamp } from "@/app/components/heritage-stamp";
import { ChickenPlateIllustration } from "@/app/components/chicken-plate-illustration";
import { FarmhouseLineArt } from "@/app/components/farmhouse-line-art";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

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
      className="relative min-h-[720px] overflow-hidden bg-cream-dark lg:min-h-[820px]"
    >
      <SiteNavbar />

      {/* Fondo ilustrado discreto de granja, apoya el bloque de marca/insignia */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full max-w-md">
        <FarmhouseLineArt />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-40 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-12 lg:pb-24 lg:pt-48">
        {/* Contenido */}
        <div className="relative z-10 lg:col-span-5">
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-coffee sm:text-5xl lg:text-[3.4rem]">
            El sabor de siempre,
            <br />
            <span className="text-terracotta-dark">como en casa</span>
          </h1>

          <div className="my-6">
            <DashedChickenDivider />
          </div>

          <p className="max-w-sm font-sans text-lg leading-relaxed text-coffee">
            Pollos dorados, papas crujientes y todo
            <br />
            el sabor de la tradición chilena.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-lg bg-terracotta-dark px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-cream shadow-warm-sm transition-colors hover:bg-coffee"
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
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-base font-semibold text-coffee underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-terracotta-dark"
            >
              Pedir ahora
            </a>
          </div>
        </div>

        {/* Espaciador: la fotografía se ancla en un bloque a pantalla completa */}
        <div className="hidden lg:col-span-7 lg:block" aria-hidden="true" />
      </div>

      {/* Fotografía / ilustración gastronómica a sangre, protagonista del HERO */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
        <div className="relative h-full w-full">
          <ChickenPlateIllustration />

          <p className="absolute right-6 top-24 max-w-[13rem] text-right font-script text-2xl leading-tight text-cream drop-shadow-sm sm:top-28 sm:text-3xl">
            Más que un pollo, una tradición que nos une. ✶
          </p>

          <div className="absolute -bottom-6 left-4 z-10 sm:left-8 lg:-left-10">
            <HeritageStamp />
          </div>
        </div>
      </div>
    </section>
  );
}
