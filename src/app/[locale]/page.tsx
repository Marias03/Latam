import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import EventFooter from "@/components/Public/EventFooter";
import { bodyFont, headingFont } from "@/app/fonts";

const tickerItems = [
  "Integración Cultural",
  "Swing Latino",
  "Voces Andinas",
  "Comunidad de Apoyo",
  "КФУ · КИУ · КГЭУ · КГАСУ · КАИ",
  "Kazán · Rusia",
];

const memberImages = [
  {
    src: "/amdrea.jpg",
    alt: "amdrea",
  },
  {
    src: "/lucela.jpg",
    alt: "Lucela",
  },
  {
    src: "/santiago.jpg",
    alt: "Santiago",
  },
];

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] shrink-0"
    >
      <path
        fill="currentColor"
        d="M21.5 3.8 18.4 19c-.2 1.1-.9 1.4-1.8.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.2 12.9l-4.7-1.5c-1-.3-1-1 .2-1.5L20 2.8c.9-.3 1.7.2 1.5 1Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] shrink-0"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MembersPreview() {
  const t = useTranslations("Home");

  return (
    <div className="members-preview">
      <div className="members-avatars">
        {memberImages.map((member, index) => (
          <div
            key={member.src}
            className="member-avatar"
            style={{
              zIndex: memberImages.length - index,
            }}
          >
            <Image
              src={member.src}
              alt={member.alt}
              fill
              sizes="38px"
              className="member-avatar-image"
            />
          </div>
        ))}
      </div>

      <div className="members-copy">
        <div className="members-count">{t("hero.membersCount")}</div>

        <div className="members-description">
          {t("hero.membersDescription")}
        </div>
      </div>
    </div>
  );
}

function CulturalAnimation() {
  return (
    <div className="cultural-scene" aria-hidden="true">
      <div className="cultural-background-word">LATAM</div>

      <div className="cultural-glow cultural-glow-one" />
      <div className="cultural-glow cultural-glow-two" />

      <div className="cultural-orbit cultural-orbit-one" />
      <div className="cultural-orbit cultural-orbit-two" />
      <div className="cultural-orbit cultural-orbit-three" />

      <span className="cultural-spark cultural-spark-one">✦</span>
      <span className="cultural-spark cultural-spark-two">✦</span>
      <span className="cultural-spark cultural-spark-three">✦</span>
      <span className="cultural-spark cultural-spark-four">✦</span>
      <span className="cultural-spark cultural-spark-five">✦</span>

      <span className="cultural-note cultural-note-one">♪</span>
      <span className="cultural-note cultural-note-two">♫</span>
      <span className="cultural-note cultural-note-three">♪</span>

      <div className="cultural-hummingbird">
        <span className="hummingbird-body" />
        <span className="hummingbird-wing hummingbird-wing-left" />
        <span className="hummingbird-wing hummingbird-wing-right" />
        <span className="hummingbird-beak" />
      </div>

      <div className="cultural-guitar">
        <span className="guitar-neck" />
        <span className="guitar-head" />
        <span className="guitar-body guitar-body-large" />
        <span className="guitar-body guitar-body-small" />
        <span className="guitar-hole" />
        <span className="guitar-string" />
      </div>

      <div className="cultural-drum">
        <span className="drum-top" />
        <span className="drum-body" />
        <span className="drum-line drum-line-left" />
        <span className="drum-line drum-line-center" />
        <span className="drum-line drum-line-right" />
      </div>

      <div className="cultural-maracas">
        <span className="maraca maraca-left">
          <span className="maraca-head" />
          <span className="maraca-detail" />
          <span className="maraca-handle" />
        </span>

        <span className="maraca maraca-right">
          <span className="maraca-head" />
          <span className="maraca-detail" />
          <span className="maraca-handle" />
        </span>
      </div>

      <div className="leaf-cluster leaf-cluster-left">
        <span className="leaf leaf-one" />
        <span className="leaf leaf-two" />
        <span className="leaf leaf-three" />
        <span className="leaf leaf-four" />
        <span className="leaf-stem" />
      </div>

      <div className="leaf-cluster leaf-cluster-right">
        <span className="leaf leaf-one" />
        <span className="leaf leaf-two" />
        <span className="leaf leaf-three" />
        <span className="leaf leaf-four" />
        <span className="leaf-stem" />
      </div>

      <div className="cultural-flower cultural-flower-left">
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className={`flower-petal flower-petal-${index + 1}`}
          />
        ))}

        <span className="flower-center" />
      </div>

      <div className="cultural-flower cultural-flower-right">
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className={`flower-petal flower-petal-${index + 1}`}
          />
        ))}

        <span className="flower-center" />
      </div>

      <div className="cultural-logo">
        <div className="cultural-logo-ring cultural-logo-ring-outer" />
        <div className="cultural-logo-ring cultural-logo-ring-middle" />
        <div className="cultural-logo-ring cultural-logo-ring-inner" />

        <div className="association-logo-frame">
          <div className="association-logo-wrap">
            <Image
              src="/logo_latam.jpeg"
              alt="Logo de la Asociación Latinoamericana"
              fill
              priority
              sizes="(max-width: 640px) 150px, 230px"
              className="association-logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main
      className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-[#FAF8F3] text-[#1C1A16]`}
    >
      <section className="hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            Казань · Россия — Asociación Latinoamericana
          </div>

          <h1 className="hero-h1">{t("hero.title")}</h1>

          <p className="hero-sub">{t("hero.subtitle")}</p>

          <p className="hero-desc">{t("hero.description")}</p>

          <div className="hero-btns">
            <Link
              href="https://t.me/asopaislatamkzm"
              target="_blank"
              rel="noreferrer"
              className="btn-main"
            >
              <TelegramIcon />
              <span>{t("hero.joinButton")}</span>
            </Link>

            <Link href="/about" className="btn-ghost">
              <span>{t("hero.learnMoreButton")}</span>
              <ArrowIcon />
            </Link>
          </div>

          <MembersPreview />
        </div>

        <div className="hero-right">
          <CulturalAnimation />
        </div>
      </section>

      <div className="ticker-wrapper">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <span key={groupIndex} className="ticker-group">
              {tickerItems.map((item) => (
                <span key={`${groupIndex}-${item}`} className="ticker-item">
                  <span>{item}</span>
                  <span className="ticker-star">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <footer className="home-footer">
        <div className="footer-eyebrow">{t("footer.agenda")}</div>

        <h2 className="footer-title">
          {t("footer.upcomingEvents")} <em>{t("footer.events")}</em>
        </h2>

        <EventFooter />

        <div className="footer-credit">{t("footer.text")}</div>
      </footer>
    </main>
  );
}
