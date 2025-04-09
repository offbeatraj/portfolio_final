"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Github, Linkedin } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
  { href: "/RAJENDRA_BEHERA_Ψʳ.pdf", icon: <FileText />, external: true },
  { href: "https://github.com/offbeatraj", icon: <Github />, external: true },
  { href: "https://www.linkedin.com/in/rajendra-behera-b8802815b", icon: <Linkedin />, external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-md fixed top-0 z-50">
      <div className="text-white font-bold text-xl tracking-widest">𝛥Ψʳ</div>
      <div className="flex flex-wrap gap-3">
        {links.map((link) =>
          link.icon ? (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                {link.icon}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition"
              >
                {link.icon}
              </Link>
            )
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-4 py-1 rounded-full transition ${
                pathname === link.href ? "bg-primary text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}