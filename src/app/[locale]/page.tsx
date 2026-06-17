import Link from "next/link";
import { useTranslations } from "next-intl";
import EventFooter from "@/components/Public/EventFooter";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes drift { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-8px); } }
        @keyframes ticker { 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); } }
        @keyframes rotateSlow { from{ transform:rotate(0deg); } to{ transform:rotate(360deg); } }
        @keyframes scaleIn { from{ opacity:0; transform:scale(.94); } to{ opacity:1; transform:scale(1); } }
        .hero-h1 { animation: fadeUp 0.6s 0.1s ease both; }
        .hero-sub { animation: fadeUp 0.6s 0.2s ease both; }
        .hero-desc { animation: fadeUp 0.6s 0.25s ease both; }
        .hero-btns { animation: fadeUp 0.6s 0.3s ease both; }
        .hero-right { animation: scaleIn 0.8s 0.2s ease both; }
        .flag-1 { animation: drift 3s 0.0s ease-in-out infinite; }
        .flag-2 { animation: drift 3s 0.5s ease-in-out infinite; }
        .flag-3 { animation: drift 3s 1.0s ease-in-out infinite; }
        .flag-4 { animation: drift 3s 1.5s ease-in-out infinite; }
        .flag-5 { animation: drift 3s 2.0s ease-in-out infinite; }
        .flag-6 { animation: drift 3s 2.5s ease-in-out infinite; }
        .btn-main:hover { background: transparent !important; color: #C4622D !important; }
        .btn-ghost:hover { border-color: #1C1A16 !important; }
        .cormorant { font-family: 'Cormorant Garamond', serif !important; }
        .dm-sans { font-family: 'DM Sans', sans-serif !important; }
      `}</style>

      <main className="dm-sans bg-[#FAF8F3] text-[#1C1A16]">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 lg:px-14 py-14 lg:py-20 border-b border-black/5">
            <div className="text-[10px] font-medium tracking-[3px] uppercase text-[#C4622D] mb-5">
              Казань · Россия — Asociación Latinoamericana
            </div>
            <h1 className="hero-h1 cormorant text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-[#1C1A16] mb-3">
              {t("hero.title")}
            </h1>
            <p className="hero-sub cormorant text-lg lg:text-xl font-light italic text-[#8C7B6B] mb-3">
              {t("hero.subtitle")}
            </p>
            <p className="hero-desc text-sm font-light text-[#8C7B6B] leading-relaxed mb-10">
              {t("hero.description")}
            </p>
            <div className="hero-btns flex flex-col sm:flex-row gap-3 max-w-sm">
              <Link
                href="https://t.me/asopaislatamkzm"
                target="_blank"
                className="btn-main text-center text-[11px] font-medium tracking-[2px] uppercase px-7 py-4 border border-[#C4622D] bg-[#C4622D] text-[#FAF8F3] transition-all duration-200"
              >
                {t("hero.joinButton")}
              </Link>
              <Link
                href="/about"
                className="btn-ghost text-center text-[11px] font-medium tracking-[2px] uppercase px-7 py-4 border border-black/20 bg-transparent text-[#1C1A16] transition-all duration-200"
              >
                {t("hero.learnMoreButton")}
              </Link>
            </div>
          </div>

          {/* Right — solo en desktop */}
          <div className="hero-right hidden lg:flex bg-[#F0EBE3] items-center justify-center relative overflow-hidden border-b border-black/5 min-h-[480px]">
            <div className="cormorant text-[120px] font-light text-[#C4622D]/5 absolute whitespace-nowrap pointer-events-none select-none">
              LATAM
            </div>
            <div className="relative z-10 text-center p-10">
              <div className="w-[200px] h-[200px] relative mx-auto mb-6">
                <div
                  className="absolute inset-0 rounded-full border border-[#C4622D]/20"
                  style={{ animation: "rotateSlow 30s linear infinite" }}
                />
                <div className="absolute inset-5 rounded-full border border-[#C4622D]/30" />
                <div className="absolute inset-11 rounded-full bg-[#C4622D]/6 border border-[#C4622D]/25" />
                <div className="absolute inset-0 flex items-center justify-center flex-wrap gap-1 p-14">
                  <span className="flag-1 text-2xl block">🇨🇴</span>
                  <span className="flag-2 text-2xl block">🇪🇨</span>
                  <span className="flag-3 text-2xl block">🇻🇪</span>
                  <span className="flag-4 text-2xl block">🇲🇽</span>
                  <span className="flag-5 text-2xl block">🇵🇪</span>
                  <span className="flag-6 text-2xl block">🇦🇷</span>
                </div>
              </div>
              <div className="text-[10px] tracking-[3px] uppercase text-[#8C7B6B] font-light">
                de paises latinoamericanos
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="border-y border-black/8 py-3 overflow-hidden bg-[#FAF8F3]">
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{ animation: "ticker 25s linear infinite" }}
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-12">
                {[
                  "Integración Cultural",
                  "Swing Latino",
                  "Voces Andinas",
                  "Comunidad de Apoyo",
                  "КФУ · КИУ · КГЭУ · КГАСУ · КАИ",
                  "Kazán · Rusia",
                ].map((item, j) => (
                  <span key={j} className="inline-flex gap-12 items-center">
                    <span className="text-[10px] font-light text-[#8C7B6B] tracking-[2.5px] uppercase">
                      {item}
                    </span>
                    <span className="text-[#C4622D] opacity-50">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-[#FAF8F3] px-8 lg:px-14 py-10 border-t border-black/8">
          <div className="text-[10px] font-medium tracking-[3px] uppercase text-[#C4622D] mb-2">
            {t("footer.agenda")}
          </div>
          <h2 className="cormorant text-3xl font-light text-[#1C1A16] mb-8">
            {t("footer.upcomingEvents")}{" "}
            <em className="italic">{t("footer.events")}</em>
          </h2>
          <EventFooter />
          <div className="mt-8 pt-6 border-t border-black/8 text-[11px] text-[#8C7B6B] tracking-wide">
            {t("footer.text")}
          </div>
        </footer>
      </main>
    </>
  );
}
