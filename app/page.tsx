import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Section className="pt-14 pb-10">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-ink-700">
              Pan-American Health Systems Strategy Group
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">
              PAHSS Group
            </h1>
            <p className="mt-4 text-lg text-ink-800">
              Supporting better care and outcomes in Caribbean and Latin American health systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/focus-areas"
                className="rounded-xl bg-ink-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90"
              >
                Explore Focus Areas
              </Link>
              <Link
                href="/insights"
                className="rounded-xl border border-ink-700 px-5 py-3 text-sm font-medium text-ink-900 hover:bg-gray-50"
              >
                Read Research and Insights
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 p-5 bg-white">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Formal launch:</span> January 2027.
                <br />
                In 2026, PAHSS Group is publishing frameworks and practical guidance for
                strengthening health system performance in resource-constrained and rural contexts.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-10 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold text-ink-900">What we focus on</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Health system performance</h3>
              <p className="mt-2 text-ink-800">
                Practical approaches to operational efficiency, cost structure clarity,
                and measurable performance indicators tailored to Caribbean and Latin American settings.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Population health and strategic analytics</h3>
              <p className="mt-2 text-ink-800">
                Scalable decision frameworks to strengthen data governance, resource allocation,
                and long-term system sustainability.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-ink-900">
              Building toward a performance intelligence platform
            </h2>
            <p className="mt-3 text-ink-800">
              PAHSS Group is developing proprietary tools that help hospitals and regional systems
              measure what matters, identify avoidable burden, and support better decisions across
              rural and resource-constrained environments.
            </p>
            <p className="mt-4 text-sm text-ink-700">
              Interested in collaboration, pilots, or academic partnership?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Contact us
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}