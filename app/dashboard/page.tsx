import Container from "@/components/Container";
import Section from "@/components/Section";
import KpiCard from "@/components/KpiCard";
import Sparkline from "@/components/Sparkline";

const kpis = [
  { label: "Bed occupancy", value: "78%", delta: "+4% MoM", note: "Target 75–85%" },
  { label: "Average length of stay", value: "4.6 days", delta: "-0.3", note: "Down from last month" },
  { label: "Thirty-day readmissions", value: "9.8%", delta: "+0.6%", note: "Watch surgical discharges" },
  { label: "Staffing coverage", value: "92%", delta: "-2%", note: "Coverage gaps on weekends" },
  { label: "Emergency wait (median)", value: "2h 15m", delta: "+12m", note: "Triage bottleneck" },
  { label: "Data completeness", value: "84%", delta: "+5%", note: "Improving reporting adherence" }
];

const spark = [12, 14, 13, 16, 18, 17, 20, 19, 21, 24, 23, 26];

const frictions = [
  { area: "Admissions", issue: "Duplicate demographic entry", impact: "Delays + rework", priority: "High" },
  { area: "Laboratory", issue: "Specimen tracking gaps", impact: "Repeat draws", priority: "High" },
  { area: "Pharmacy", issue: "Stockout visibility delayed", impact: "Treatment disruption", priority: "Medium" },
  { area: "Discharge", issue: "Follow-up not scheduled", impact: "Higher readmissions", priority: "High" },
  { area: "Billing", issue: "Manual coding backlog", impact: "Revenue delay", priority: "Medium" }
];

export default function DashboardPage() {
  return (
    <Section className="py-12">
      <Container>
        <div className="flex flex-col gap-2 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-ink-700">Dashboard</p>
          <h1 className="text-3xl font-semibold text-ink-900">
            Health system performance snapshot
          </h1>
          <p className="text-ink-700">
            Example dashboard layout for rural-ready measurement and executive decision support.
            Replace these values with your pilot hospital data when ready.
          </p>
        </div>

        {/* KPI grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k) => (
            <KpiCard
              key={k.label}
              label={k.label}
              value={k.value}
              delta={k.delta}
              note={k.note}
            />
          ))}
        </div>

        {/* Trend + Executive summary */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="glass rounded-3xl p-6 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-ink-900">Trend: monthly operational signal</p>
                <p className="mt-1 text-sm text-ink-700">
                  Lightweight visualization (no external chart libraries).
                </p>
              </div>
              <span className="pill rounded-full px-3 py-1 text-xs text-ink-700">
                Example signal
              </span>
            </div>

            <div className="mt-4">
              <Sparkline values={spark} />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="text-xs uppercase tracking-wider text-ink-700">Signal</p>
                <p className="mt-1 font-semibold text-ink-900">Patient flow</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="text-xs uppercase tracking-wider text-ink-700">Status</p>
                <p className="mt-1 font-semibold text-ink-900">Stable</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="text-xs uppercase tracking-wider text-ink-700">Next action</p>
                <p className="mt-1 font-semibold text-ink-900">Reduce triage delay</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 lg:col-span-5">
            <p className="text-sm font-semibold text-ink-900">Executive brief (one-page ready)</p>
            <p className="mt-2 text-sm text-ink-700">
              A short summary leaders can review in under 2 minutes.
            </p>

            <div className="mt-4 space-y-3 text-sm text-ink-700">
              <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="font-semibold text-ink-900">What is improving</p>
                <p className="mt-1">
                  Data completeness is rising and length of stay is trending downward.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="font-semibold text-ink-900">What needs attention</p>
                <p className="mt-1">
                  Emergency wait time and readmissions show early warning signals.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="font-semibold text-ink-900">Recommended next steps</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Map triage workflow and remove duplicate steps</li>
                  <li>Standardize discharge follow-up scheduling</li>
                  <li>Track staffing coverage gaps by shift</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Operational frictions table */}
        <div className="mt-8 glass rounded-3xl p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-ink-900">Top operational frictions</p>
              <p className="mt-1 text-sm text-ink-700">
                These are the best places to start if your goal is cost and time reduction.
              </p>
            </div>
            <span className="pill rounded-full px-3 py-1 text-xs text-ink-700">
              Example list
            </span>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-ink-700">
                <tr className="border-b border-[var(--line)]">
                  <th className="text-left font-semibold py-3 pr-4">Area</th>
                  <th className="text-left font-semibold py-3 pr-4">Issue</th>
                  <th className="text-left font-semibold py-3 pr-4">Impact</th>
                  <th className="text-left font-semibold py-3">Priority</th>
                </tr>
              </thead>
              <tbody className="text-ink-800">
                {frictions.map((r) => (
                  <tr key={r.area + r.issue} className="border-b border-[var(--line)]">
                    <td className="py-3 pr-4">{r.area}</td>
                    <td className="py-3 pr-4">{r.issue}</td>
                    <td className="py-3 pr-4">{r.impact}</td>
                    <td className="py-3">
                      <span className="pill rounded-full px-3 py-1 text-xs">
                        {r.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}