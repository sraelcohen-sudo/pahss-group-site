import Container from "@/components/Container";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold text-ink-900">About</h1>

        <div className="mt-6 max-w-3xl space-y-5 text-ink-800">
          <p>
            Pan-American Health Systems Strategy Group supports modernization and long-term
            sustainability across Caribbean and Latin American health systems. The firm focuses on
            measurable performance improvement, operational clarity, and scalable analytics
            frameworks designed for geographically complex and resource-constrained environments.
          </p>

          <h2 className="text-xl font-semibold text-ink-900 pt-4">Founder</h2>
          <p>
            Sarah Groleau is a health systems and analytics strategist with experience in analytical
            operations, strategic leadership, and public health systems research. Her work centers on
            hospital and system performance, rural health strategy, and pragmatic measurement systems
            that decision-makers can use immediately.
          </p>

          <p className="text-sm text-ink-700">
            Formal launch is planned for January 2027.
          </p>
        </div>
      </Container>
    </Section>
  );
}