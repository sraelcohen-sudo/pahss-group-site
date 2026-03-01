"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/insights", label: "Research and Insights" },
  { href: "/contact", label: "Contact" }
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      className={[
        "text-sm transition-colors",
        active ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-[var(--line)]">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="hidden lg:inline text-xs text-ink-700 pill rounded-full px-3 py-1">
                Caribbean + Latin America
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-7">
              {nav.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            {/* Minimal mobile: single CTA */}
            <div className="md:hidden">
              <Link
                href="/contact"
                className="rounded-xl bg-ink-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="rounded-xl bg-ink-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                Discuss a pilot
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}