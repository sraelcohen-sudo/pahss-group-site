import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-10 pb-8">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 pill rounded-full px-3 py-1 text-xs text-ink-700">
                <span className="h-2 w-2 rounded-full bg-[rgba(21,166,160,0.75)]" />
                Formal launch January 2027
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">
                PAHSS Group
              </h1>

              <p className="mt-4 text-lg text-ink-800 max-w-2xl">
                Supporting better care and outcomes in Caribbean and Latin American health systems.
              </p>

              <p className="mt-5 text-ink-700 max-w-2xl">
                Pan-American Health Systems Strategy Group publishes practical frameworks and
                decision tools to strengthen performance, resource allocation, and long-term system
                sustainability, with special attention to rural and resource-constrained settings.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/focus-areas"
                  className="rounded-xl bg-ink-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90"
                >
                  Focus areas
                </Link>
                <Link
                  href="/insights"
                  className="rounded-xl border border-[var(--line)] bg-white/60 px-5 py-3 text-sm font-medium text-ink-900 hover:bg-white"
                >
                  Research and insights
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-[var(--line)] bg-white/30 px-5 py-3 text-sm font-medium text-ink-900 hover:bg-white"
                >
                  Discuss a pilot
                </Link>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-5">
              <div className="glass rounded-3xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-ink-900">What we work on</p>

                <div className="mt-4 grid gap-4">
                  <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                    <p className="text-sm font-semibold text-ink-900">Health system performance</p>
                    <p className="mt-1 text-sm text-ink-700">
                      Operational efficiency, cost clarity, measurable indicators, governance-ready reporting.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                    <p className="text-sm font-semibold text-ink-900">Population health and strategic analytics</p>
                    <p className="mt-1 text-sm text-ink-700">
                      Rural-ready measurement frameworks, data governance, resource allocation, benchmarking.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                    <p className="text-sm font-semibold text-ink-900">Technology direction</p>
                    <p className="mt-1 text-sm text-ink-700">
                      Building toward a performance intelligence platform designed for emerging systems.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-ink-700">
                  <span className="pill rounded-full px-3 py-1">Caribbean-first</span>
                  <span className="pill rounded-full px-3 py-1">Rural-ready</span>
                  <span className="pill rounded-full px-3 py-1">Practical analytics</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DIVIDER SECTION */}
      <Section className="py-10">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-3xl p-6">
              <p className="text-sm font-semibold text-ink-900">Designed for real constraints</p>
              <p className="mt-2 text-sm text-ink-700">
                Frameworks that work when staffing, connectivity, and data completeness are imperfect.
              </p>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-sm font-semibold text-ink-900">Executive-ready measurement</p>
              <p className="mt-2 text-sm text-ink-700">
                A small set of indicators that supports decisions, not dashboards for their own sake.
              </p>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-sm font-semibold text-ink-900">Regional context matters</p>
              <p className="mt-2 text-sm text-ink-700">
                Caribbean and Latin American systems have distinct geography, workforce, and governance realities.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-10">
        <Container>
          <div className="rounded-3xl border border-[var(--line)] bg-white/70 p-8 glass">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-2xl font-semibold text-ink-900">
                  Interested in early collaboration or a pilot site?
                </h2>
                <p className="mt-2 text-ink-700 max-w-2xl">
                  PAHSS Group is building practical performance intelligence tools. Early partners help shape what
                  hospitals and systems actually need.
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded-xl bg-ink-900 text-white px-6 py-3 text-sm font-medium hover:opacity-90"
              >
                Contact PAHSS Group
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}