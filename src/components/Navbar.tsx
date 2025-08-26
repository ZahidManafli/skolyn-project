import React, { useEffect, useRef, useState } from "react";
import LoginIcon from "./LoginIcon";
import NavbarIcon from "./NavbarIcon";

type ChildItem = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: ChildItem[] };

const NAV: NavItem[] = [
  {
    label: "Platform",
    children: [
      { label: "The Skolyn OS", href: "#" },
      { label: "Clinical Modules", href: "#" },
      { label: "Core Technologies", href: "#" },
      { label: "Workflow Integration", href: "#" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Overview", href: "#" },
      { label: "Clinical Practice", href: "#" },
      { label: "Hospital Management", href: "#" },
      { label: "Research & Pharma", href: "#" },
    ],
  },
  {
    label: "Technology",
    children: [
      { label: "AI Research Philosophy", href: "#" },
      { label: "Infrastructure", href: "#" },
      { label: "Ethical Al", href: "#" },
    ],
  },
  {
    label: "Validation",
    children: [
      { label: "Our Methodology", href: "#" },
      { label: "Clinical Studies", href: "#" },
      { label: "Publications", href: "#" },
      { label: "Regulatory Compliance", href: "#" },
    ],
  },
  {
    label: "Insights",
    children: [
      { label: "Main Feed", href: "#" },
      { label: "White Papers", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "News and Press", href: "#" },
    ],
  },
  {
    label: "Partners",
    children: [
      { label: "Become a Partner", href: "#" },
      { label: "Clinical and Research", href: "#" },
      { label: "Technology and Integration", href: "#" },
      { label: "Investor Relations", href: "#" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "Our Story", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Our Commitment to Azerbaijan", href: "#" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "General Inquiry", href: "#" },
      { label: "Resquest a Demo", href: "#" },
      { label: "Media and Press", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpenIndex(null);
    };
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenIndex(null);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white py-3">
      <div ref={rootRef} className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-end gap-6">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex flex-wrap items-center gap-x-6">
              {NAV.map((item, idx) => {
                const isOpen = openIndex === idx;
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href ?? "#"}
                        className="inline-block py-2 text-base text-white hover:text-[#00A99D] transition"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="inline-flex items-center gap-3 py-2 text-base text-white hover:text-[#00A99D] transition"
                    >
                      {item.label}
                      <NavbarIcon />
                    </button>

                    {isOpen && (
                      <div
                        role="menu"
                        className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-md border border-[#030F4F] bg-[#030F4F]/70 shadow-xl ring-1 ring-black/5"
                      >
                        <ul className="py-2">
                          {item.children!.map((c) => (
                            <li key={c.label}>
                              <a
                                href={c.href}
                                className="block p-4 ml-4 text-base text-white hover:text-[#00A99D] transition"
                                onClick={() => setOpenIndex(null)}
                              >
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Dil ve Login */}
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-9 items-center rounded-md border border-white px-2 text-xs text-white hover:border-[#00A99D] hover:text-[#00A99D] transition"
              aria-label="Language"
            >
              EN
            </button>
            <a
              href="/login"
              className="inline-flex h-9 items-center gap-2  bg-teal-500 px-3 text-sm font-medium text-white hover:bg-[#0C9187] active:scale-[0.99]"
            >
              <LoginIcon />
              Login
            </a>
          </div>
        </div>

        {/* Mobil görünümü */}
        <div className="md:hidden">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 py-2">
            {NAV.map((item, idx) => {
              const isOpen = openIndex === idx;
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.href ?? "#"}
                      className="text-sm text-white/90 hover:text-teal-300"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="inline-flex items-center gap-1 text-sm text-white/90"
                  >
                    {item.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      className={`transition ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#0b1f45]/95 shadow-xl"
                    >
                      <ul className="py-2">
                        {item.children!.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10"
                              onClick={() => setOpenIndex(null)}
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
