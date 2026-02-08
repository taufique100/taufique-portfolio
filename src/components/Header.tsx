import React, { useEffect, useMemo, useState } from "react";
import TaufiqueAliAvatar from '@/assets/TaufiqueAliAvatar.jpg'
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const initials = useMemo(() => "TA", []);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="w-full flex justify-start pt-8 lg:mb-2 sm:mb-4">
      <nav className="relative w-full max-w-xl">
        {/* Top pill */}
        <div className="flex items-center justify-between rounded-2xl bg-[#1b1b1b] px-4 py-2 shadow-lg ring-1 ring-white/10">
          {/* Left: Avatar + Name */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-full bg-white/10 ring-2 ring-white/10 flex items-center justify-center text-white text-sm font-semibold">
              {/* {initials} */}
              <img src={TaufiqueAliAvatar} className="rounded-3xl w-full h-full" alt="Taufique Ali Avatar" />
            </div>
            <span className="text-white font-semibold tracking-wide truncate">
              Taufique Ali
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden inline-flex text-white text-3xl items-center justify-center h-10 w-10 rounded-full hover:bg-white/10 transition"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed left-1/2 top-6 z-50 w-[92vw] max-w-md -translate-x-1/2 transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="rounded-3xl bg-[#141414] ring-1 ring-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <span className="text-white font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 text-white rounded-full hover:bg-white/10 transition"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="p-3 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 bg-white/5 hover:bg-white/10 transition"
                >
                  <span className="text-white/90 font-medium">
                    {item.label}
                  </span>
                  <span className="text-white/50">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
