import FadeIn from "./FadeIn";

export default function SectionLabel({
  n,
  label,
}: {
  n: string;
  label: string;
}) {
  return (
    <FadeIn>
      <div className="flex items-center gap-5">
        <span className="pleca pleca-md" aria-hidden />
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold-600 font-medium">
            {n}
          </span>
          <span className="font-sans text-[12px] tracking-[0.22em] uppercase text-bone-50 font-medium">
            {label}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
