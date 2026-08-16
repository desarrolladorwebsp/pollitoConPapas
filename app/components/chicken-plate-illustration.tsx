/**
 * Ilustración del plato insignia con acabado cálido tipo fotografía editorial.
 * Sirve como marcador visual mientras se incorpora la fotografía gastronómica
 * definitiva (ver README de la sección Hero para reemplazarla por una <Image>).
 */
export function ChickenPlateIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="h-full w-full"
      role="img"
      aria-label="Pollo asado dorado con papas fritas crujientes sobre un plato"
    >
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#f6ecd4" />
          <stop offset="100%" stopColor="#ecd9ae" />
        </radialGradient>
        <linearGradient id="chicken-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0983f" />
          <stop offset="55%" stopColor="#b3611f" />
          <stop offset="100%" stopColor="#7c3f16" />
        </linearGradient>
        <linearGradient id="chicken-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4c56b" />
          <stop offset="100%" stopColor="#c47a2c" />
        </linearGradient>
        <linearGradient id="fry-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2c869" />
          <stop offset="100%" stopColor="#d99b31" />
        </linearGradient>
        <radialGradient id="sauce-gradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#c94a2e" />
          <stop offset="100%" stopColor="#8f2c1c" />
        </radialGradient>
      </defs>

      <rect width="500" height="500" fill="url(#bg-glow)" />

      {/* Plato */}
      <ellipse cx="250" cy="380" rx="205" ry="34" fill="#2e2013" opacity="0.12" />
      <ellipse cx="250" cy="355" rx="220" ry="70" fill="#f6ecd4" />
      <ellipse cx="250" cy="352" rx="220" ry="70" fill="none" stroke="#c9a05a" strokeWidth="2" opacity="0.5" />
      <ellipse cx="250" cy="352" rx="188" ry="56" fill="none" stroke="#c9a05a" strokeWidth="1.5" opacity="0.4" />

      {/* Papas fritas */}
      {[-165, -140, -118, -95, 95, 118, 140, 165].map((x, i) => (
        <rect
          key={x}
          x={250 + x - 6}
          y={330 - (i % 2 === 0 ? 26 : 12)}
          width="13"
          height={i % 2 === 0 ? 70 : 52}
          rx="4"
          fill="url(#fry-gradient)"
          transform={`rotate(${x / 14} ${250 + x} ${355})`}
        />
      ))}

      {/* Cuenco de salsa */}
      <ellipse cx="405" cy="300" rx="42" ry="30" fill="#e3ce9c" />
      <ellipse cx="405" cy="296" rx="34" ry="22" fill="url(#sauce-gradient)" />

      {/* Pollo asado */}
      <path
        d="M140 320c-10-70 45-135 110-135s122 62 112 132c-6 42-48 66-112 66s-102-24-110-63z"
        fill="url(#chicken-body)"
      />
      <path
        d="M158 300c-8-56 38-108 92-108s102 50 92 108c-10-8-26-14-42-11-14-32-52-54-52-54s-36 22-50 54c-16-3-32 3-40 11z"
        fill="url(#chicken-highlight)"
        opacity="0.55"
      />
      <path
        d="M185 250c14-18 34-28 55-28s41 10 55 28"
        stroke="#5b2c10"
        strokeWidth="3"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M150 305c18 10 40 15 90 15s72-5 90-15"
        stroke="#5b2c10"
        strokeWidth="2"
        fill="none"
        opacity="0.25"
        strokeLinecap="round"
      />

      {/* Vapor */}
      <path
        d="M205 150c-7-12 7-17 2-30M245 140c-7-12 7-18 2-31M285 150c-7-12 7-17 2-30"
        stroke="#c9a05a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
