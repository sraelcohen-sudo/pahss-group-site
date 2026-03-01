function scale(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(1, max - min);
  return { min, max, span };
}

export default function Sparkline({
  values,
  width = 640,
  height = 140
}: {
  values: number[];
  width?: number;
  height?: number;
}) {
  if (!values || values.length < 2) return null;

  const pad = 12;
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;
  const { min, span } = scale(values);

  const pts = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * innerW;
    const y = pad + (1 - (v - min) / span) * innerH;
    return { x, y };
  });

  const d = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4 overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[520px]">
        <path d={d} fill="none" stroke="rgba(11,124,122,0.9)" strokeWidth="3" />
        {pts.map((p, idx) => (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="white"
            stroke="rgba(7,28,44,0.85)"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between text-xs text-ink-700">
        <span>Earlier</span>
        <span>Later</span>
      </div>
    </div>
  );
}