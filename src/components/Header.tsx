
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Network, X } from "lucide-react";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our approach", href: "/#approach" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="relative z-50 border-b border-[#e6e5df] bg-[#faf9f6]">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Kirk IT home"
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center bg-[#24483f] text-white">
            <Network size={19} strokeWidth={1.5} />
          </span>

          <span className="text-[20px] font-semibold tracking-[-1px]">
            KIRK <span className="font-normal text-[#718078]">IT</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-[#58645e] transition-colors hover:text-[#24483f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-3 bg-[#24483f] px-5 py-3 text-[12px] font-medium text-white transition-colors hover:bg-[#19372f] sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center border border-[#e3e3dc] text-[#24483f] md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[#e6e5df] bg-[#faf9f6] px-5 py-5 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[#e6e5df] py-4 text-sm text-[#344d43]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 items-center justify-between bg-[#24483f] px-4 text-sm font-medium text-white"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
