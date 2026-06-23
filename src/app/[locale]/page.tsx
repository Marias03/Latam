import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
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
    alt: "Andrea",
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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="home-button-icon">
      <path
        fill="currentColor"
        d="M21.5 3.8 18.4 19c-.2 1.1-.9 1.4-1.8.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.2 12.9l-4.7-1.5c-1-.3-1-1 .2-1.5L20 2.8c.9-.3 1.7.2 1.5 1Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="home-button-icon">
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
    <div className="home-members-preview">
      <div className="home-members-avatars">
        {memberImages.map((member, index) => (
          <div
            key={member.src}
            className="home-member-avatar"
            style={{
              zIndex: memberImages.length - index,
            }}
          >
            <Image
              src={member.src}
              alt={member.alt}
              fill
              sizes="42px"
              className="home-member-avatar-image"
            />
          </div>
        ))}
      </div>

      <div className="home-members-copy">
        <strong>{t("hero.membersCount")}</strong>
        <span>{t("hero.membersDescription")}</span>
      </div>
    </div>
  );
}

function HomeCulturalVisual() {
  return (
    <div className="home-cultural-visual">
      <div className="home-cultural-glow" />

      <div className="home-cultural-orbit home-cultural-orbit-one" />
      <div className="home-cultural-orbit home-cultural-orbit-two" />

      <span
        className="home-cultural-note home-cultural-note-one"
        aria-hidden="true"
      >
        ♪
      </span>

      <span
        className="home-cultural-note home-cultural-note-two"
        aria-hidden="true"
      >
        ♫
      </span>

      <span
        className="home-cultural-spark home-cultural-spark-one"
        aria-hidden="true"
      >
        ✦
      </span>

      <span
        className="home-cultural-spark home-cultural-spark-two"
        aria-hidden="true"
      >
        ✦
      </span>

      <div className="home-cultural-image-container">
        <Image
          src="/latam-home-rio.png"
          alt="Música y paisajes de Latinoamérica"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 50vw"
          className="home-cultural-main-image"
        />

        <div className="home-cultural-image-overlay" />
        <div className="home-cultural-light-sweep" />
      </div>

      <div className="home-cultural-logo-area">
        <div className="home-cultural-logo-glow" />

        <div className="home-cultural-logo-orbit home-cultural-logo-orbit-outer" />
        <div className="home-cultural-logo-orbit home-cultural-logo-orbit-inner" />

        <div className="home-cultural-logo-frame">
          <Image
            src="/logo_latam.jpeg"
            alt="Logo de la Asociación Latinoamericana"
            fill
            priority
            unoptimized
            sizes="170px"
            className="home-cultural-logo-image"
          />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <main className={`${bodyFont.variable} ${headingFont.variable} home-page`}>
      <section className="home-main-hero">
        {/* TEXTO A LA IZQUIERDA */}
        <div className="home-content-column">
          <div className="home-eyebrow">
            Казань · Россия — Asociación Latinoamericana
          </div>

          <h1 className="home-main-title">{t("hero.title")}</h1>

          <p className="home-main-subtitle">{t("hero.subtitle")}</p>

          <p className="home-main-description">{t("hero.description")}</p>

          <div className="home-main-buttons">
            <Link
              href="https://t.me/asopaislatamkzm"
              target="_blank"
              rel="noreferrer"
              className="home-primary-button"
            >
              <TelegramIcon />
              <span>{t("hero.joinButton")}</span>
            </Link>

            <Link href={`/${locale}/about`} className="home-secondary-button">
              <span>{t("hero.learnMoreButton")}</span>
              <ArrowIcon />
            </Link>
          </div>

          <MembersPreview />
        </div>

        {/* IMAGEN A LA DERECHA */}
        <div className="home-visual-column">
          <HomeCulturalVisual />
        </div>
      </section>

      <div className="home-ticker-wrapper">
        <div className="home-ticker-track">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <span key={`ticker-${groupIndex}`} className="home-ticker-group">
              {tickerItems.map((item) => (
                <span
                  key={`${groupIndex}-${item}`}
                  className="home-ticker-item"
                >
                  <span>{item}</span>

                  <span className="home-ticker-star" aria-hidden="true">
                    ✦
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <footer className="home-main-footer">
        <div className="home-footer-eyebrow">{t("footer.agenda")}</div>

        <h2 className="home-footer-title">
          {t("footer.upcomingEvents")} <em>{t("footer.events")}</em>
        </h2>

        <EventFooter />

        <div className="home-footer-credit">{t("footer.text")}</div>
      </footer>
    </main>
  );
}
