"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { bodyFont, headingFont } from "@/app/fonts";
import styles from "./IntegrationPage.module.css";

type ProgramKey = "swing" | "voces";

type ProgramData = {
  label: string;
  title: string;
  imageAlt: string;
  description1: string;
  description2: string;
  joinInfo: string;
  imageSrc: string;
  imagePosition: string;
  accentColor: string;
  decorativeImage: string;
  decorativePosition: string;
};

function MusicIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
      <path
        d="M9 18V5l11-2v13M9 9l11-2M6.5 21C4.6 21 3 19.9 3 18.5S4.6 16 6.5 16 10 17.1 10 18.5 8.4 21 6.5 21Zm11 0c-1.9 0-3.5-1.1-3.5-2.5s1.6-2.5 3.5-2.5 3.5 1.1 3.5 2.5-1.6 2.5-3.5 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
      <path
        fill="currentColor"
        d="M21.5 3.8 18.4 19c-.2 1.1-.9 1.4-1.8.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.2 12.9l-4.7-1.5c-1-.3-1-1 .2-1.5L20 2.8c.9-.3 1.7.2 1.5 1Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
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

function ProgramImage({
  src,
  alt,
  position,
}: {
  src: string;
  alt: string;
  position: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 850px) 100vw, 48vw"
      className={styles.programImage}
      style={{
        objectPosition: position,
      }}
    />
  );
}

function DecorativeFigure({
  src,
  position,
}: {
  src: string;
  position: string;
}) {
  return (
    <div className={styles.decorativeFigure} aria-hidden="true">
      <div className={styles.figureGlow} />

      <Image
        src={src}
        alt=""
        fill
        sizes="320px"
        className={styles.decorativeFigureImage}
        style={{
          objectPosition: position,
        }}
      />

      <span className={styles.figureNote}>♪</span>
      <span className={styles.figureSpark}>✦</span>
    </div>
  );
}

export default function CulturalIntegrationPage() {
  const t = useTranslations("CulturalIntegration");
  const locale = useLocale();

  const [activeProgram, setActiveProgram] = useState<ProgramKey>("swing");

  const programs: Record<ProgramKey, ProgramData> = {
    swing: {
      label: t("nav.swing"),
      title: t("swing.title"),
      imageAlt: t("swing.imageAlt"),
      description1: t("swing.description1"),
      description2: t("swing.description2"),
      joinInfo: t("swing.joinInfo"),

      imageSrc: "/baile.jpg",
      imagePosition: "center",

      accentColor: "#C4622D",

      decorativeImage: "/latam-swing-art.png",
      decorativePosition: "center",
    },

    voces: {
      label: t("nav.voces"),
      title: t("voces.title"),
      imageAlt: t("voces.imageAlt"),
      description1: t("voces.description1"),
      description2: t("voces.description2"),
      joinInfo: t("voces.joinInfo"),

      imageSrc: "/canto.jpg",
      imagePosition: "center",

      accentColor: "#2F7656",

      decorativeImage: "/latam-voces-art.png",
      decorativePosition: "center",
    },
  };

  const activeContent = programs[activeProgram];

  return (
    <main
      className={`${bodyFont.variable} ${headingFont.variable} ${styles.page}`}
      style={
        {
          "--active-color": activeContent.accentColor,
        } as CSSProperties
      }
    >
      <section className={styles.hero}>
        <Image
          src="/cultural-integration-hero.png"
          alt={t("title")}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />
        <div className={styles.heroLight} />

        <div className={styles.heroDecorations} aria-hidden="true">
          <span className={`${styles.note} ${styles.noteOne}`}>♪</span>

          <span className={`${styles.note} ${styles.noteTwo}`}>♫</span>

          <span className={`${styles.note} ${styles.noteThree}`}>♪</span>

          <span className={`${styles.spark} ${styles.sparkOne}`}>✦</span>

          <span className={`${styles.spark} ${styles.sparkTwo}`}>✦</span>

          <span className={`${styles.spark} ${styles.sparkThree}`}>✦</span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span />
            {t("nav.title")}
          </div>

          <h1 className={styles.heroTitle}>{t("title")}</h1>

          <p className={styles.heroSubtitle}>{t("subtitle")}</p>

          <div className={styles.heroProgramButtons}>
            <button
              type="button"
              className={`${styles.heroProgramButton} ${
                activeProgram === "swing" ? styles.heroProgramButtonActive : ""
              }`}
              onClick={() => setActiveProgram("swing")}
            >
              <MusicIcon />
              <span>{t("nav.swing")}</span>
            </button>

            <button
              type="button"
              className={`${styles.heroProgramButton} ${
                activeProgram === "voces" ? styles.heroProgramButtonActive : ""
              }`}
              onClick={() => setActiveProgram("voces")}
            >
              <MusicIcon />
              <span>{t("nav.voces")}</span>
            </button>
          </div>
        </div>

        <div className={styles.heroWave} aria-hidden="true" />
      </section>

      <section className={styles.programSection}>
        <div className={styles.backgroundDecoration} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className={styles.programLayout}>
          <div className={styles.programVisual}>
            <div
              key={`image-${activeProgram}`}
              className={styles.programImageContainer}
            >
              <ProgramImage
                src={activeContent.imageSrc}
                alt={activeContent.imageAlt}
                position={activeContent.imagePosition}
              />

              <div className={styles.programImageOverlay} />
            </div>

            <div className={styles.programVisualOrbit} />

            <span className={styles.programFloatingNote} aria-hidden="true">
              ♪
            </span>
          </div>

          <div
            key={`content-${activeProgram}`}
            className={styles.programContent}
          >
            <div className={styles.programEyebrow}>
              <span />
              {activeContent.label}
              <span />
            </div>

            <h2 className={styles.programTitle}>{activeContent.title}</h2>

            <div className={styles.programDescriptions}>
              <p>{activeContent.description1}</p>
              <p>{activeContent.description2}</p>
            </div>

            <div className={styles.joinCard}>
              <div className={styles.joinCardText}>
                <span className={styles.joinLabel}>{t("howToJoin")}</span>

                <p>{activeContent.joinInfo}</p>

                <Link
                  href="https://t.me/asopaislatamkzm"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactButton}
                >
                  <TelegramIcon />
                  <span>{t("contactButton")}</span>
                  <ArrowIcon />
                </Link>
              </div>

              <DecorativeFigure
                src={activeContent.decorativeImage}
                position={activeContent.decorativePosition}
              />
            </div>

            <Link href={`/${locale}`} className={styles.homeLink}>
              <span aria-hidden="true">←</span>
              {t("footer.homeLink")}
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{t("footer.text")}</span>

        <span className={styles.footerDivider}>✦</span>

        <span>{t("nav.slogan")}</span>
      </footer>
    </main>
  );
}
