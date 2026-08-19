export function EyebrowLabel({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`flex items-center gap-2.5 mb-5 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-px w-5 rounded-full bg-[#fe6601]/45" />
      <span className="font-mono text-[0.6rem] font-medium tracking-[0.22em] uppercase leading-none text-[#fe6601]/75">
        {children}
      </span>
      <span className="h-px w-5 rounded-full bg-[#fe6601]/45" />
    </div>
  );
}

export function DotTexture({ opacity = 0.03, spacing = 28 }: { opacity?: number; spacing?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity,
      }}
    />
  );
}

export function GraphPaper({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: [
          "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
        opacity,
      }}
    />
  );
}

export function TopoRings({
  className = "",
  stroke = "rgba(254,102,1,0.07)",
  radii = [50, 90, 136, 188, 248, 316, 392],
}: {
  className?: string;
  stroke?: string;
  radii?: number[];
}) {
  return (
    <svg aria-hidden viewBox="0 0 500 500" className={`pointer-events-none ${className}`}>
      <g fill="none" stroke={stroke} strokeWidth="1">
        {radii.map((r) => (
          <ellipse key={r} cx="250" cy="250" rx={r} ry={Math.round(r * 0.75)} />
        ))}
      </g>
    </svg>
  );
}
