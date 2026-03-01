import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-baseline gap-2">
      <span className="font-semibold text-ink-900">PAHSS</span>
      <span className="text-ink-700">Group</span>
    </Link>
  );
}