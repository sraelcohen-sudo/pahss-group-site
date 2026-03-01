import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";
import { insights } from "@/content/insights";

export default function InsightsPage() {
  return (
    <Section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold text-ink-900">Research and Insights</h1>
        <p className="mt-3 text-ink-800 max-w-3xl">
          Short briefs and longer frameworks focused on health system performance and rural-ready
          measurement across Caribbean and Latin American contexts.
        </p>

        <div className="mt-8 space-y-4">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="block rounded-2xl border border-gray-200 p-6 hover:bg-gray-50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h2 className="text-lg font-semibold text-ink-900">{post.title}</h2>
                <span className="text-sm text-ink-700">{post.date}</span>
              </div>
              <p className="mt-2 text-ink-800">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}