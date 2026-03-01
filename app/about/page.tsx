import Container from "@/components/Container";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-ink-700">About</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink-900">
            Pan-American Health Systems Strategy Group
          </h1>

          <div className="mt-6 space-y-5 text-ink-700">
            <p>
              Pan-American Health Systems Strategy Group supports modernization and long-term
              sustainability across Caribbean and Latin American health systems. The firm focuses on
              measurable performance improvement, operational clarity, and scalable analytics
              frameworks designed for geographically complex and resource-constrained environments.
            </p>

            <p>
              PAHSS Group is built around a simple premise: performance improvement requires
              measurement systems that decision-makers can sustain, interpret, and act on, even when
              staffing, connectivity, and data completeness are imperfect.
            </p>

            <div className="glass rounded-3xl p-6">
              <p className="text-sm font-semibold text-ink-900">Our approach</p>
              <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                <li>Practical indicators that support decisions, not dashboards for their own sake</li>
                <li>Operational and population health signals designed for rural and resource-constrained settings</li>
                <li>Governance-ready reporting that supports accountability and sustainability</li>
              </ul>
            </div>

            <p className="text-sm text-ink-700 pill inline-flex rounded-full px-3 py-1">
              Formal launch: January 2027
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}