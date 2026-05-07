export default function Logo({
  size = "default",
  className = "",
}: {
  size?: "default" | "small" | "large";
  className?: string;
}) {
  const sizes = {
    small: { wordmark: "text-lg", descriptor: "text-[8px]" },
    default: { wordmark: "text-2xl", descriptor: "text-[9px]" },
    large: { wordmark: "text-4xl", descriptor: "text-[11px]" },
  };
  const s = sizes[size];

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <span className={`font-display font-normal text-bone-50 ${s.wordmark} leading-none tracking-tight`}>
        Bissu
      </span>
      <span
        className={`font-sans uppercase text-bone-50 ${s.descriptor} mt-1 tracking-[0.42em]`}
      >
        Abogados
      </span>
    </div>
  );
}
