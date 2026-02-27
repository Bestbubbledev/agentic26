"use client";

import { Icon } from "@iconify/react";

const navLinks = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-sm font-semibold tracking-tighter text-white shadow-inner shadow-white/20">
            A
          </div>
          <span className="text-sm font-medium tracking-tight text-white">
            Agentic26
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <Icon icon="solar:phone-linear" />
            Talk to us
          </a>
          <a
            href="#hero-chat"
            onClick={(e) => scrollTo(e, "#hero-chat")}
            className="bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-neutral-950 transition-all duration-300"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
