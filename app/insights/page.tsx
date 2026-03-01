import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";
import { insights } from "@/content/insights";

export default function InsightsPage() {
  return (
    <Section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-ink-700">Research and Insights</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink-900">Frameworks, briefs, and practical guidance</h1>
          <p className="mt-3 text-ink-700">
            Focused on health system performance and rural-ready measurement across Caribbean and Latin American contexts.
          </p>
        </div>

        <div className="mt-8 grid gap-5">
          {insights.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="group">
              <div className="glass rounded-3xl p-6 hover:bg-white/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h2 className="text-lg font-semibold text-ink-900 group-hover:underline">
                    {post.title}
                  </h2>
                  <span className="text-sm text-ink-700">{post.date}</span>
                </div>
                <p className="mt-2 text-ink-700">{post.excerpt}</p>
                <p className="mt-4 text-sm text-ink-900 underline underline-offset-4">
                  Read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}