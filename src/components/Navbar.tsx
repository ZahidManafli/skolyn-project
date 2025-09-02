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
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  const [lang, setLang] = useState<"EN" | "AZ">("EN");
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
        setLangOpen(false);
        setMobileLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
        setMobileOpenIndex(null);
        setLangOpen(false);
        setMobileLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSelectLang = (newLang: "EN" | "AZ") => {
    setLang(newLang);
    setLangOpen(false);
    setMobileLangOpen(false);
    // Burada i18n entegrasyonunu eklenebilir
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-[#030F4F]/95 backdrop-blur border-b border-black/10 shadow-md py-2"
          : "bg-transparent border-b border-transparent py-3",
      ].join(" ")}
    >
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
                        className="inline-block py-2 text-base text-white transition hover:text-[#00A99D] cursor-pointer "
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
                      className="inline-flex items-center gap-2 py-2 text-base text-white transition hover:text-[#00A99D] cursor-pointer"
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
                                className="block p-4 ml-2 text-base text-white transition hover:text-[#FFFFFF] "
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

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex h-9 items-center rounded-md border border-white px-2 text-xs text-white transition hover:border-[#00A99D] cursor-pointer hover:text-[#00A99D]"
                aria-label="Language"
                aria-expanded={langOpen}
              >
                {lang}
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-20 rounded-md bg-[#0b1f45] border border-white/20 shadow-lg">
                  <ul className="py-1 text-xs text-white">
                    <li>
                      <button
                        onClick={() => handleSelectLang("EN")}
                        className="block w-full text-left px-3 py-1 hover:bg-white/10"
                      >
                        EN
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSelectLang("AZ")}
                        className="block w-full text-left px-3 py-1 hover:bg-white/10"
                      >
                        AZ
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a
              href="/login"
              className="inline-flex h-9 items-center gap-2 bg-teal-500 px-3 text-sm font-medium text-white transition hover:bg-[#0C9187] active:scale-[0.99]"
            >
              <LoginIcon />
              Login
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/20 text-white"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              className={`h-5 w-5 transition-transform ${
                mobileOpen ? "rotate-90 opacity-0 absolute" : "opacity-100"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg
              className={`h-5 w-5 transition-transform ${
                mobileOpen ? "opacity-100" : "opacity-0 absolute -rotate-90"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-x-0 z-40 top-14  /* top = h-14 (56px) */
               h-[calc(100dvh-3.5rem)]  /* 100dvh - 56px */
               bg-[#0b1f45]/95 backdrop-blur
               border-t border-white/10
               overflow-y-auto"
          >
            <div className="p-2">
              <ul className="divide-y divide-white/10">
                {NAV.map((item, idx) => {
                  const hasChildren = !!item.children?.length;
                  const isOpen = mobileOpenIndex === idx;

                  if (!hasChildren) {
                    return (
                      <li key={item.label} className="py-1">
                        <a
                          href={item.href ?? "#"}
                          className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label} className="py-1">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-white/90 hover:bg-white/10"
                        aria-expanded={isOpen}
                        onClick={() => setMobileOpenIndex(isOpen ? null : idx)}
                      >
                        <span>{item.label}</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
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

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="py-1 pl-3">
                          {item.children!.map((c) => (
                            <li key={c.label}>
                              <a
                                href={c.href}
                                className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileOpenIndex(null);
                                }}
                              >
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex items-center gap-3 px-2 pb-4">
                <div className="relative">
                  <button
                    onClick={() => {
                      setMobileLangOpen((v) => !v);
                      setLangOpen(false);
                    }}
                    className="inline-flex h-9 items-center rounded-md border border-white px-2 text-xs text-white transition hover:border-[#00A99D] hover:text-[#00A99D]"
                    aria-label="Language"
                    aria-expanded={mobileLangOpen}
                  >
                    {lang}
                  </button>
                  {mobileLangOpen && (
                    <div className="absolute left-0 top-full mt-1 w-24 rounded-md bg-[#0b1f45] border border-white/20 shadow-lg">
                      <ul className="py-1 text-xs text-white">
                        <li>
                          <button
                            onClick={() => handleSelectLang("EN")}
                            className="block w-full text-left px-3 py-1 hover:bg-white/10"
                          >
                            EN
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleSelectLang("AZ")}
                            className="block w-full text-left px-3 py-1 hover:bg-white/10"
                          >
                            AZ
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href="/login"
                  className="inline-flex h-9 items-center gap-2 bg-teal-500 px-3 text-sm font-medium text-white transition hover:bg-[#0C9187] active:scale-[0.99]"
                  onClick={() => setMobileOpen(false)}
                >
                  <LoginIcon />
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
