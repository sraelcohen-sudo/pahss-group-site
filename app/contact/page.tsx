import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-ink-700">Contact</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink-900">Institutional inquiries</h1>
          <p className="mt-3 text-ink-700">
            For collaboration, pilots, partnerships, or advisory discussions related to health system
            performance and strategic analytics in Caribbean and Latin American contexts.
          </p>

          <div className="mt-8 glass rounded-3xl p-6">
            <p className="text-sm font-semibold text-ink-900">Email</p>
            <p className="mt-2 text-lg text-ink-900">pahssgroup@email.com</p>
            <p className="mt-3 text-sm text-ink-700">
              Replace this address after you purchase your domain and configure a professional inbox.
            </p>
          </div>

          <div className="mt-6 glass rounded-3xl p-6">
            <p className="text-sm font-semibold text-ink-900">Pre-launch note</p>
            <p className="mt-2 text-sm text-ink-700">
              PAHSS Group is publishing frameworks and practical guidance throughout 2026 in advance of
              formal launch in January 2027.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}