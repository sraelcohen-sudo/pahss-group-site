import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <Container>
        <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-ink-700">
          <p>© {new Date().getFullYear()} PAHSS Group. All rights reserved.</p>
          <p>
            <Link href="/insights" className="underline underline-offset-4">
              Research and Insights
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}