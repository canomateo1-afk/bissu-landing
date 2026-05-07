const items = [
  "Bissu Abogados",
  "Despacho jurídico",
  "Ciudad de México",
  "Litigio · Concursal · Familiar · Mercantil · Constitucional · MASC",
  "Est. 2017",
  "The Best Lawyers in Mexico",
  "Leaders League 2025",
];

export default function TopMarquee() {
  const list = [...items, ...items, ...items];
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-ink-900 border-b border-bone-50/15 marquee-pause">
      <div className="overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {list.map((it, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-5 font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
                {it}
              </span>
              <span className="pleca pleca-sm" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
