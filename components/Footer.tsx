import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold text-ink-900">PAHSS Group</p>
            <p className="mt-2 text-sm text-ink-700">
              Supporting better care and outcomes in Caribbean and Latin American health systems.
            </p>
            <p className="mt-4 text-xs text-ink-700 pill inline-flex rounded-full px-3 py-1">
              Formal launch: January 2027
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink-900">Explore</p>
            <div className="mt-3 grid gap-2 text-sm">
              <Link href="/about" className="text-ink-700 hover:text-ink-900">About</Link>
              <Link href="/focus-areas" className="text-ink-700 hover:text-ink-900">Focus Areas</Link>
              <Link href="/insights" className="text-ink-700 hover:text-ink-900">Research and Insights</Link>
              <Link href="/contact" className="text-ink-700 hover:text-ink-900">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink-900">Contact</p>
            <p className="mt-3 text-sm text-ink-700">
              Collaboration, pilots, partnerships, and speaking invitations.
            </p>
            <p className="mt-3 text-sm">
              <Link href="/contact" className="underline text-ink-900">
                Reach out
              </Link>
            </p>
          </div>
        </div>

        <div className="py-6 border-t border-[var(--line)] text-xs text-ink-700 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} PAHSS Group. All rights reserved.</p>
          <p className="text-ink-700">
            Pan-American Health Systems Strategy Group
          </p>
        </div>
      </Container>
    </footer>
  );
}