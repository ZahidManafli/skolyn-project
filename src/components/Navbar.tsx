import React, { useEffect, useRef, useState } from "react";
import LoginIcon from "./LoginIcon";
import NavbarIcon from "./NavbarIcon";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

type ChildItem = { key: string; href: string };
type NavItem = { key: string; href?: string; children?: ChildItem[] };

const NAV: NavItem[] = [
  {
    key: "nav.platform.title",
    children: [
      { key: "nav.platform.skolyn_os", href: "#" },
      { key: "nav.platform.clinical_modules", href: "#" },
      { key: "nav.platform.core_technologies", href: "#" },
      { key: "nav.platform.workflow_integration", href: "#" },
    ],
  },
  {
    key: "nav.solutions.title",
    children: [
      { key: "nav.solutions.overview", href: "#" },
      { key: "nav.solutions.clinical_practice", href: "#" },
      { key: "nav.solutions.hospital_management", href: "#" },
      { key: "nav.solutions.research_pharma", href: "#" },
    ],
  },
  {
    key: "nav.technology.title",
    children: [
      { key: "nav.technology.ai_research_philosophy", href: "#" },
      { key: "nav.technology.infrastructure", href: "#" },
      { key: "nav.technology.ethical_ai", href: "#" },
    ],
  },
  {
    key: "nav.validation.title",
    children: [
      { key: "nav.validation.methodology", href: "#" },
      { key: "nav.validation.clinical_studies", href: "#" },
      { key: "nav.validation.publications", href: "#" },
      { key: "nav.validation.regulatory_compliance", href: "#" },
    ],
  },
  {
    key: "nav.insights.title",
    children: [
      { key: "nav.insights.main_feed", href: "#" },
      { key: "nav.insights.white_papers", href: "#" },
      { key: "nav.insights.case_studies", href: "#" },
      { key: "nav.insights.webinars", href: "#" },
      { key: "nav.insights.news_press", href: "#" },
    ],
  },
  {
    key: "nav.partners.title",
    children: [
      { key: "nav.partners.become_partner", href: "#" },
      { key: "nav.partners.clinical_research", href: "#" },
      { key: "nav.partners.technology_integration", href: "#" },
      { key: "nav.partners.investor_relations", href: "#" },
    ],
  },
  {
    key: "nav.company.title",
    children: [
      { key: "nav.company.our_story", href: "#" },
      { key: "nav.company.leadership", href: "#" },
      { key: "nav.company.careers", href: "#" },
      { key: "nav.company.commitment_azerbaijan", href: "#" },
    ],
  },
  {
    key: "nav.contact.title",
    children: [
      { key: "nav.contact.general_inquiry", href: "#" },
      { key: "nav.contact.request_demo", href: "#" },
      { key: "nav.contact.media_press", href: "#" },
      { key: "nav.contact.support", href: "#" },
    ],
  },
];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const currentLangShort = (i18n.language || "en").slice(0, 2).toUpperCase() as
    | "EN"
    | "AZ";

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
    void i18n.changeLanguage(newLang.toLowerCase() as "en" | "az");
    setLangOpen(false);
    setMobileLangOpen(false);
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
                    <li key={item.key}>
                      <a
                        href={item.href ?? "#"}
                        className="inline-block py-2 text-base text-white transition hover:text-[#00A99D] cursor-pointer "
                      >
                        {t(item.key)}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.key} className="relative">
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="inline-flex items-center gap-2 py-2 text-base text-white transition hover:text-[#00A99D] cursor-pointer"
                    >
                      {t(item.key)}
                      <NavbarIcon />
                    </button>

                    {isOpen && (
                      <div
                        role="menu"
                        className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-md border border-[#030F4F] bg-[#030F4F]/70 shadow-xl ring-1 ring-black/5"
                      >
                        <ul className="py-2">
                          {item.children!.map((c) => (
                            <li key={c.key}>
                              <a
                                href={c.href}
                                className="block p-4 ml-2 text-base text-white transition hover:text-[#FFFFFF] "
                                onClick={() => setOpenIndex(null)}
                              >
                                {t(c.key)}
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
                aria-label={t("lang.label")}
                aria-expanded={langOpen}
              >
                {currentLangShort}
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-20 rounded-md bg-[#0b1f45] border border-white/20 shadow-lg">
                  <ul className="py-1 text-xs text-white">
                    <li>
                      <button
                        onClick={() => handleSelectLang("EN")}
                        className="block w-full text-left px-3 py-1 hover:bg-white/10"
                        aria-label={t("lang.en")}
                      >
                        EN
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSelectLang("AZ")}
                        className="block w-full text-left px-3 py-1 hover:bg白/10 hover:bg-white/10"
                        aria-label={t("lang.az")}
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
              aria-label={t("auth.login")}
            >
              <LoginIcon />
              {t("auth.login")}
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
            className="fixed inset-x-0 z-40 top-14
               h-[calc(100dvh-3.5rem)]
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
                      <li key={item.key} className="py-1">
                        <a
                          href={item.href ?? "#"}
                          className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(item.key)}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.key} className="py-1">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-white/90 hover:bg-white/10"
                        aria-expanded={isOpen}
                        onClick={() => setMobileOpenIndex(isOpen ? null : idx)}
                      >
                        <span>{t(item.key)}</span>
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
                            <li key={c.key}>
                              <a
                                href={c.href}
                                className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileOpenIndex(null);
                                }}
                              >
                                {t(c.key)}
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
                    aria-label={t("lang.label")}
                    aria-expanded={mobileLangOpen}
                  >
                    {currentLangShort}
                  </button>
                  {mobileLangOpen && (
                    <div className="absolute left-0 top-full mt-1 w-24 rounded-md bg-[#0b1f45] border border-white/20 shadow-lg">
                      <ul className="py-1 text-xs text-white">
                        <li>
                          <button
                            onClick={() => handleSelectLang("EN")}
                            className="block w-full text-left px-3 py-1 hover:bg-white/10"
                            aria-label={t("lang.en")}
                          >
                            EN
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleSelectLang("AZ")}
                            className="block w-full text-left px-3 py-1 hover:bg-white/10"
                            aria-label={t("lang.az")}
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
                  aria-label={t("auth.login")}
                >
                  <LoginIcon />
                  {t("auth.login")}
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
