import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rajendra Behera Portfolio",
  description: "AI Portfolio built with Next.js, Spline, Tailwind, Drei, Framer Motion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}