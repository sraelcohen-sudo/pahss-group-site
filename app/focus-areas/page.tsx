import Container from "@/components/Container";
import Section from "@/components/Section";

export default function FocusAreasPage() {
  return (
    <Section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold text-ink-900">Focus Areas</h1>
        <p className="mt-3 text-ink-800 max-w-3xl">
          PAHSS Group concentrates on practical, measurable improvements that strengthen systems
          over time, especially in rural and resource-constrained settings.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h2 className="text-xl font-semibold">Health system performance and operational efficiency</h2>
            <ul className="mt-4 space-y-2 text-ink-800 list-disc pl-5">
              <li>Operational efficiency and workflow mapping</li>
              <li>Cost structure clarity and avoidable burden identification</li>
              <li>Workforce allocation and service coverage modeling</li>
              <li>Key performance indicator selection and implementation</li>
              <li>Executive-ready reporting and governance support</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h2 className="text-xl font-semibold">Population health and strategic analytics</h2>
            <ul className="mt-4 space-y-2 text-ink-800 list-disc pl-5">
              <li>Regional measurement frameworks and benchmarking</li>
              <li>Data governance and reporting standards</li>
              <li>Rural health system strategy and service design</li>
              <li>Resource allocation and scenario planning</li>
              <li>Dashboards that support real decisions, not vanity metrics</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Technology direction</h3>
          <p className="mt-2 text-ink-800 max-w-3xl">
            PAHSS Group is building toward a performance intelligence platform that helps hospitals
            and regional systems measure operational reality, identify high-friction processes, and
            improve outcomes with clearer management signals.
          </p>
        </div>
      </Container>
    </Section>
  );
}