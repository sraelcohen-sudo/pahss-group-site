import Container from "@/components/Container";
import Section from "@/components/Section";
import { insights } from "@/content/insights";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;

  const post = insights.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <Section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-ink-700">{post.date}</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink-900">{post.title}</h1>
          <p className="mt-4 text-ink-800 whitespace-pre-line">{post.body}</p>
        </div>
      </Container>
    </Section>
  );
}