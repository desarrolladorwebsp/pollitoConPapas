export function HeritageStamp() {
  return (
    <div
      className="relative flex h-28 w-28 shrink-0 rotate-[-6deg] flex-col items-center justify-center gap-0.5 rounded-full border-2 border-dashed border-terracotta-dark bg-cream text-center text-terracotta-dark"
      aria-hidden="true"
    >
      <span className="font-sans text-[10px] font-bold uppercase tracking-widest">
        Receta
      </span>
      <span className="font-serif text-2xl font-bold leading-none">100%</span>
      <span className="font-sans text-[10px] font-bold uppercase tracking-widest">
        Chilena
      </span>
      <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5">
        <path d="M10 0l2.4 6.5H19l-5.3 4 2 6.8L10 13.5l-5.7 3.8 2-6.8L1 6.5h6.6L10 0z" />
      </svg>
    </div>
  );
}
