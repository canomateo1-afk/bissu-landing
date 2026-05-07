export default function Pleca({
  size = "default",
  className = "",
}: {
  size?: "default" | "tall";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`block bg-gold-400 ${
        size === "tall" ? "h-14" : "h-7"
      } w-[1.5px] ${className}`}
    />
  );
}
