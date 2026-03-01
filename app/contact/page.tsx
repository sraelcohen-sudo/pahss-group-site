import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold text-ink-900">Contact</h1>
        <p className="mt-3 text-ink-800 max-w-3xl">
          For collaboration, pilots, speaking invitations, or partnership discussions, use the email
          below.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 p-6 max-w-2xl">
          <p className="text-sm uppercase tracking-wider text-ink-700">Email</p>
          <p className="mt-2 text-lg font-semibold text-ink-900">pahssgroup@email.com</p>
          <p className="mt-3 text-sm text-ink-700">
            Replace this email with your official address once you purchase your domain.
          </p>
        </div>
      </Container>
    </Section>
  );
}