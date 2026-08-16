import { DashedChickenDivider } from "@/app/components/hero-section";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

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
  icon: React.ReactNode;
};

function DrumstickIcon({ label }: { label: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={label}
      className="text-terracotta-dark"
    >
      <path
        d="M40 14c6 4 9 11 6 18-2 5-6 8-9 12-3 4-3 8 0 11a5 5 0 1 1-7 7c-5-5-6-11-3-17l-9-9c-6 3-12 2-17-3a5 5 0 1 1 7-7c3 3 7 3 11 0 4-3 7-7 12-9 3-1.3 6.5-2 9-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FriesIcon({ label }: { label: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={label}
      className="text-terracotta-dark"
    >
      <path
        d="M16 28 12 52a3 3 0 0 0 3 3.4h34a3 3 0 0 0 3-3.4l-4-24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 28h36" stroke="currentColor" strokeWidth="2" />
      {[20, 27, 34, 41, 48].map((x, i) => (
        <rect
          key={x}
          x={x - 2.5}
          y={i % 2 === 0 ? 10 : 15}
          width="5"
          height={i % 2 === 0 ? 20 : 15}
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      ))}
    </svg>
  );
}

function SandwichIcon({ label }: { label: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={label}
      className="text-terracotta-dark"
    >
      <path
        d="M10 40h44a4 4 0 0 1 0 8H10a4 4 0 0 1 0-8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 40c2-10 8-18 18-18s16 8 18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 32c4-2 8-2 14 0s10 2 14 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EmpanadaIcon({ label }: { label: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={label}
      className="text-terracotta-dark"
    >
      <path
        d="M12 32c0-13 9-22 20-22s20 9 20 22-9 20-20 20-20-7-20-20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      {[20, 27, 34, 41].map((x) => (
        <path
          key={x}
          d={`M${x - 3} 44l6-6`}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

const DISHES: Dish[] = [
  {
    name: "Pollo con Papas",
    category: "Pollos",
    description:
      "Pollo dorado al horno acompañado de papas fritas bien crujientes.",
    price: "$6.990",
    icon: <DrumstickIcon label="Fotografía de Pollo con Papas" />,
  },
  {
    name: "Chorrillana",
    category: "Comida Chilena",
    description:
      "Papas fritas con carne, cebolla caramelizada y huevo, para compartir.",
    price: "$9.990",
    icon: <FriesIcon label="Fotografía de Chorrillana" />,
  },
  {
    name: "Completo Italiano",
    category: "Comida Chilena",
    description: "Vienesa, palta, tomate y mayonesa en pan caliente.",
    price: "$3.490",
    icon: <SandwichIcon label="Fotografía de Completo Italiano" />,
  },
  {
    name: "Empanada de Pino",
    category: "Comida Chilena",
    description: "Empanada horneada rellena de pino casero tradicional.",
    price: "$2.490",
    icon: <EmpanadaIcon label="Fotografía de Empanada de Pino" />,
  },
  {
    name: "Pollo Crispy",
    category: "Pollos",
    description: "Trozos de pollo crocante por fuera y jugoso por dentro.",
    price: "$5.990",
    icon: <DrumstickIcon label="Fotografía de Pollo Crispy" />,
  },
  {
    name: "Papas Caseras",
    category: "Papas y acompañamientos",
    description: "Papas cortadas a mano, doradas y crujientes al horno.",
    price: "$3.990",
    icon: <FriesIcon label="Fotografía de Papas Caseras" />,
  },
];

function DishCard({ name, category, description, price, icon }: Dish) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-warm-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-cream-dark to-paper transition-transform duration-300 group-hover:scale-[1.03]">
        {icon}
      </div>

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

        <a
          href={getWhatsAppLink(`Hola, quiero pedir: ${name}`)}
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      </div>
    </article>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="bg-cream px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-coffee sm:text-5xl">
            Nuestro Menú
          </h2>

          <div className="my-6 flex justify-center">
            <DashedChickenDivider />
          </div>

          <p className="font-sans text-lg leading-relaxed text-coffee-soft">
            Sabores tradicionales, preparados para disfrutar.
          </p>
        </div>

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

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
