import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PAHSS Group | Pan-American Health Systems Strategy Group",
  description:
    "Supporting better care and outcomes in Caribbean and Latin American health systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "PAHSS Group",
    description:
      "Supporting better care and outcomes in Caribbean and Latin American health systems.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* top spacer so hero breathes */}
          <div className="h-6" />
          {children}
          <div className="h-12" />
        </main>
        <Footer />
      </body>
    </html>
  );
}