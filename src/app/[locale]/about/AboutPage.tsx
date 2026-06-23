"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import { bodyFont, headingFont } from "@/app/fonts";
import styles from "./AboutPage.module.css";

const SECTION_COLORS = ["#C4622D", "#E8A020", "#2F7656", "#5677D6"];

const TIMELINE_COLORS = ["#C4622D", "#E8A020", "#2F7656"];

const CAROUSEL_IMAGES = [
  "/about-carousel-dance.png",
  "/about-carousel-music.png",
  "/about-carousel-community.png",
  "/about-carousel-sports.png",
];

const SECTION_DURATION = 6500;
const IMAGE_DURATION = 4500;

type Milestone = {
  year: string;
  text: string;
};

type ValueItem = {
  name: string;
  description: string;
};

type AboutSlide = {
  tag: string;
  title: string;
  paragraphs: string[];
  statement: string | null;
  milestones: Milestone[];
  values: ValueItem[];
};

function CarouselVisual({
  imageAlt,
  accentColor,
}: {
  imageAlt: string;
  accentColor: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const imageTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startImageTimer = useCallback(() => {
    if (imageTimerRef.current) {
      clearInterval(imageTimerRef.current);
    }

    imageTimerRef.current = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % CAROUSEL_IMAGES.length;
      });
    }, IMAGE_DURATION);
  }, []);

  useEffect(() => {
    startImageTimer();

    return () => {
      if (imageTimerRef.current) {
        clearInterval(imageTimerRef.current);
      }
    };
  }, [startImageTimer]);

  const selectImage = (index: number) => {
    setCurrentImage(index);
    startImageTimer();
  };

  const previousImage = () => {
    setCurrentImage((previous) => {
      return (previous - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
    });

    startImageTimer();
  };

  const nextImage = () => {
    setCurrentImage((previous) => {
      return (previous + 1) % CAROUSEL_IMAGES.length;
    });

    startImageTimer();
  };

  return (
    <div
      className={styles.carouselScene}
      style={
        {
          "--accent-color": accentColor,
        } as CSSProperties
      }
    >
      <div className={styles.carouselGlow} />

      <div className={`${styles.carouselOrbit} ${styles.carouselOrbitOne}`} />

      <div className={`${styles.carouselOrbit} ${styles.carouselOrbitTwo}`} />

      <span
        className={`${styles.carouselNote} ${styles.carouselNoteOne}`}
        aria-hidden="true"
      >
        ♪
      </span>

      <span
        className={`${styles.carouselNote} ${styles.carouselNoteTwo}`}
        aria-hidden="true"
      >
        ♫
      </span>

      <span
        className={`${styles.carouselNote} ${styles.carouselNoteThree}`}
        aria-hidden="true"
      >
        ♪
      </span>

      <span
        className={`${styles.carouselSpark} ${styles.carouselSparkOne}`}
        aria-hidden="true"
      >
        ✦
      </span>

      <span
        className={`${styles.carouselSpark} ${styles.carouselSparkTwo}`}
        aria-hidden="true"
      >
        ✦
      </span>

      <span
        className={`${styles.carouselSpark} ${styles.carouselSparkThree}`}
        aria-hidden="true"
      >
        ✦
      </span>

      <div className={styles.carouselImageArea}>
        <div key={currentImage} className={styles.carouselImageAnimation}>
          <Image
            src={CAROUSEL_IMAGES[currentImage]}
            alt=""
            fill
            priority={currentImage === 0}
            sizes="(max-width: 900px) 100vw, 52vw"
            className={styles.carouselImage}
          />
        </div>
      </div>

      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
        onClick={previousImage}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
        onClick={nextImage}
        aria-label="Next image"
      >
        ›
      </button>

      <div className={styles.carouselDots}>
        {CAROUSEL_IMAGES.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`${styles.carouselDot} ${
              currentImage === index ? styles.carouselDotActive : ""
            }`}
            onClick={() => selectImage(index)}
            aria-label={`Image ${index + 1}`}
          >
            <span />
          </button>
        ))}
      </div>

      <div className={styles.carouselLogo}>
        <div className={styles.carouselLogoGlow} />
        <div className={styles.carouselLogoOrbit} />

        <div className={styles.carouselLogoImageWrap}>
          <Image
            src="/logo_latam.jpeg"
            alt={imageAlt}
            fill
            priority
            sizes="130px"
            className={styles.carouselLogoImage}
          />
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations("About");
  const locale = useLocale();

  const [currentSection, setCurrentSection] = useState(0);

  const sectionTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides: AboutSlide[] = [
    {
      tag: t("nav.history"),
      title: t("history.title"),
      paragraphs: [t("history.content1"), t("history.content2")],
      statement: null,
      milestones: [
        {
          year: "2022",
          text: t("history.milestone1").replace("2022: ", ""),
        },
        {
          year: "2024",
          text: t("history.milestone2").replace("2024: ", ""),
        },
        {
          year: "2025",
          text: t("history.milestone3").replace("2025: ", ""),
        },
      ],
      values: [],
    },
    {
      tag: t("nav.mission"),
      title: t("mission.title"),
      paragraphs: [],
      statement: t("mission.statement"),
      milestones: [],
      values: [],
    },
    {
      tag: t("nav.vision"),
      title: t("vision.title"),
      paragraphs: [],
      statement: t("vision.statement"),
      milestones: [],
      values: [],
    },
    {
      tag: t("nav.values"),
      title: t("values.title"),
      paragraphs: [],
      statement: null,
      milestones: [],
      values: [
        {
          name: t("values.value1Title"),
          description: t("values.value1Desc"),
        },
        {
          name: t("values.value2Title"),
          description: t("values.value2Desc"),
        },
        {
          name: t("values.value3Title"),
          description: t("values.value3Desc"),
        },
        {
          name: t("values.value4Title"),
          description: t("values.value4Desc"),
        },
        {
          name: t("values.value5Title"),
          description: t("values.value5Desc"),
        },
      ],
    },
  ];

  const startSectionTimer = useCallback(() => {
    if (sectionTimerRef.current) {
      clearInterval(sectionTimerRef.current);
    }

    sectionTimerRef.current = setInterval(() => {
      setCurrentSection((previous) => {
        return (previous + 1) % 4;
      });
    }, SECTION_DURATION);
  }, []);

  useEffect(() => {
    startSectionTimer();

    return () => {
      if (sectionTimerRef.current) {
        clearInterval(sectionTimerRef.current);
      }
    };
  }, [startSectionTimer]);

  const selectSection = (index: number) => {
    setCurrentSection(index);
    startSectionTimer();
  };

  const slide = slides[currentSection];
  const accentColor = SECTION_COLORS[currentSection];

  return (
    <main
      className={`${bodyFont.variable} ${headingFont.variable} ${styles.page}`}
    >
      <div className={styles.backgroundGlowOne} />
      <div className={styles.backgroundGlowTwo} />

      <section className={styles.layout}>
        <div className={styles.visualColumn}>
          <CarouselVisual imageAlt={t("imageAlt")} accentColor={accentColor} />
        </div>

        <div className={styles.contentColumn}>
          <Link href={`/${locale}`} className={styles.backLink}>
            <span aria-hidden="true">←</span>
            {t("footer.homeLink")}
          </Link>

          <nav className={styles.tabs} aria-label={t("title")}>
            {slides.map((item, index) => {
              const isActive = index === currentSection;

              return (
                <button
                  key={`${item.tag}-${index}`}
                  type="button"
                  className={`${styles.tab} ${
                    isActive ? styles.tabActive : ""
                  }`}
                  style={
                    {
                      "--tab-color": SECTION_COLORS[index],
                    } as CSSProperties
                  }
                  onClick={() => selectSection(index)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.tag}</span>

                  {isActive && (
                    <span
                      key={`progress-${currentSection}`}
                      className={styles.tabProgress}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <article
            key={currentSection}
            className={styles.slide}
            style={
              {
                "--accent-color": accentColor,
              } as CSSProperties
            }
          >
            <div className={styles.slideTag}>
              <span />
              {slide.tag}
            </div>

            <h1 className={styles.slideTitle}>{slide.title}</h1>

            {slide.paragraphs.length > 0 && (
              <div className={styles.historyText}>
                {slide.paragraphs.map((paragraph, index) => (
                  <p key={`${index}-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {slide.statement && (
              <blockquote className={styles.statement}>
                “{slide.statement}”
              </blockquote>
            )}

            {slide.milestones.length > 0 && (
              <div className={styles.timeline}>
                {slide.milestones.map((milestone, index) => (
                  <article
                    key={`${milestone.year}-${index}`}
                    className={styles.milestoneCard}
                    style={
                      {
                        "--milestone-color": TIMELINE_COLORS[index],
                      } as CSSProperties
                    }
                  >
                    <div className={styles.timelineMarker}>
                      <span className={styles.timelineDot} />

                      {index < slide.milestones.length - 1 && (
                        <span className={styles.timelineLine} />
                      )}
                    </div>

                    <span className={styles.milestoneYear}>
                      {milestone.year}
                    </span>

                    <p className={styles.milestoneText}>{milestone.text}</p>
                  </article>
                ))}
              </div>
            )}

            {slide.values.length > 0 && (
              <div className={styles.valuesGrid}>
                {slide.values.map((value, index) => (
                  <article
                    key={`${value.name}-${index}`}
                    className={styles.valueCard}
                    style={
                      {
                        "--value-color":
                          SECTION_COLORS[index % SECTION_COLORS.length],
                      } as CSSProperties
                    }
                  >
                    <span className={styles.valueAccent} />

                    <h2>{value.name}</h2>

                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
