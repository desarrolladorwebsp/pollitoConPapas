/** Ilustración lineal muy discreta (granja/casa) usada como fondo del bloque de marca en el HERO. */
export function FarmhouseLineArt() {
  return (
    <svg
      viewBox="0 0 320 140"
      className="h-full w-full text-terracotta-dark/15"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 120h320" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M40 120V80l30-22 30 22v40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M40 80h60" stroke="currentColor" strokeWidth="1.5" />
      <path d="M60 120V96h20v24" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M150 120c0-30 10-55 10-55s10 25 10 55"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="160" cy="55" r="18" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M210 120V70M210 70l-14 14M210 70l14 14M210 90l-10 8M210 90l10 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M240 120c6-18 18-18 24 0M270 120c6-18 18-18 24 0"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
