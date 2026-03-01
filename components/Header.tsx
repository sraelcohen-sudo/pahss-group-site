import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/insights", label: "Research and Insights" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-800 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden text-sm text-ink-700">
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}