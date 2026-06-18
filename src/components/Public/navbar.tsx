"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  const changeLanguage = (locale: string) => {
    const segments = pathname.split("/");
    const newPath =
      segments.length <= 2
        ? `/${locale}`
        : `/${locale}/${segments.slice(2).join("/")}`;
    router.push(newPath);
  };

  const locales = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const links = [
    { href: `/${currentLocale}/about`, label: t("nosotros") },
    { href: `/${currentLocale}/integracion-cultural`, label: t("integracion") },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        .nav-link:hover { opacity: 1 !important; }
        .lang-btn:hover { background: #C4622D !important; color: #FAF8F3 !important; }
      `}</style>

      <div style={{ position: "relative", zIndex: 30 }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(28,26,22,0.1)",
            background: "#FAF8F3",
            position: "sticky",
            top: 0,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px",
                fontWeight: 300,
                letterSpacing: "4px",
                color: "#1C1A16",
                textTransform: "uppercase",
              }}
            >
              LAT<em style={{ fontStyle: "italic", color: "#C4622D" }}>AM</em>
            </span>
          </Link>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ gap: "28px", alignItems: "center" }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#1C1A16",
                  opacity: 0.5,
                  textDecoration: "none",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  transition: "opacity 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ display: "flex", gap: "4px" }}>
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => changeLanguage(loc.code)}
                  className="lang-btn"
                  style={{
                    background:
                      currentLocale === loc.code ? "#C4622D" : "transparent",
                    color: currentLocale === loc.code ? "#FAF8F3" : "#1C1A16",
                    border: "1px solid rgba(196,98,45,0.3)",
                    padding: "4px 10px",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "1.5px",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.2s",
                  }}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: lang + hamburger */}
          <div
            className="flex md:hidden"
            style={{ alignItems: "center", gap: "10px" }}
          >
            <div style={{ display: "flex", gap: "3px" }}>
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => changeLanguage(loc.code)}
                  style={{
                    background:
                      currentLocale === loc.code ? "#C4622D" : "transparent",
                    color: currentLocale === loc.code ? "#FAF8F3" : "#1C1A16",
                    border: "1px solid rgba(196,98,45,0.3)",
                    padding: "3px 7px",
                    fontSize: "10px",
                    fontWeight: 500,
                    cursor: "pointer",
                    borderRadius: "2px",
                  }}
                >
                  {loc.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
              aria-label="Menú"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "#1C1A16",
                  transition: "all 0.25s",
                  transform: menuOpen
                    ? "rotate(45deg) translateY(6px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "#1C1A16",
                  transition: "all 0.25s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "#1C1A16",
                  transition: "all 0.25s",
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-6px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#FAF8F3",
              borderBottom: "1px solid rgba(28,26,22,0.1)",
              padding: "8px 20px 16px",
              display: "flex",
              flexDirection: "column",
              zIndex: 29,
              boxShadow: "0 4px 20px rgba(28,26,22,0.08)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#1C1A16",
                  textDecoration: "none",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  opacity: 0.6,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(28,26,22,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
