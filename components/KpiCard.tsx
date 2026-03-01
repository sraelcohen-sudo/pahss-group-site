export default function KpiCard({
  label,
  value,
  delta,
  note
}: {
  label: string;
  value: string;
  delta: string;
  note: string;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <p className="text-xs uppercase tracking-wider text-ink-700">{label}</p>
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <p className="text-2xl font-semibold text-ink-900">{value}</p>
        <span className="pill rounded-full px-3 py-1 text-xs text-ink-700">{delta}</span>
      </div>
      <p className="mt-3 text-sm text-ink-700">{note}</p>
    </div>
  );
}