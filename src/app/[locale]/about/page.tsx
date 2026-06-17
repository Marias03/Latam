"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const TIMELINE_COLORS = ["#C4622D", "#E8A020", "#1A6B3A"];
const VALORES_COLORS = ["#C4622D", "#E8A020", "#1A6B3A", "#1B3A8C"];
const SLIDES = ["history", "mission", "vision", "values"] as const;

export default function AboutPage() {
  const t = useTranslations("About");
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const TIMELINE = [
    {
      year: "2022",
      text: t("history.milestone1").replace("2022: ", ""),
      color: TIMELINE_COLORS[0],
    },
    {
      year: "2024",
      text: t("history.milestone2").replace("2024: ", ""),
      color: TIMELINE_COLORS[1],
    },
    {
      year: "2025",
      text: t("history.milestone3").replace("2025: ", ""),
      color: TIMELINE_COLORS[2],
    },
  ];

  const VALORES = [
    {
      name: t("values.value1Title"),
      desc: t("values.value1Desc"),
      color: VALORES_COLORS[0],
    },
    {
      name: t("values.value2Title"),
      desc: t("values.value2Desc"),
      color: VALORES_COLORS[1],
    },
    {
      name: t("values.value3Title"),
      desc: t("values.value3Desc"),
      color: VALORES_COLORS[2],
    },
    {
      name: t("values.value4Title"),
      desc: t("values.value4Desc"),
      color: VALORES_COLORS[3],
    },
  ];

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    startInterval();
  };

  const slideLabels = [
    t("nav.history"),
    t("nav.mission"),
    t("nav.vision"),
    t("nav.values"),
  ];

  const card = (icon: string, title: string, text: string) => (
    <div
      key={title}
      style={{
        background: "#fff",
        border: "1px solid rgba(28,26,22,0.08)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <span
        style={{ fontSize: "22px", display: "block", marginBottom: "10px" }}
      >
        {icon}
      </span>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "17px",
          fontWeight: 300,
          color: "#C4622D",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 300,
          color: "#5F5E5A",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#FAF8F3",
        minHeight: "100vh",
        color: "#1C1A16",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeSlide { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes progressBar { from{width:0%} to{width:100%} }
        .slide-content { animation: fadeSlide 0.35s ease both; }
        .progress-bar { animation: progressBar 6s linear; }
        .about-wrap { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
        .about-grid { display: grid; grid-template-columns: 1fr 300px; gap: 56px; align-items: start; }
        .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-logo-col { display: none !important; }
        }
        @media (max-width: 600px) {
          .about-cards { grid-template-columns: 1fr; }
          .about-wrap { padding: 0 20px; }
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(28,26,22,0.08)",
          marginBottom: "0",
        }}
      >
        <div
          className="about-wrap"
          style={{
            padding: "28px 40px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <img
            src="/logo_latam.jpeg"
            alt={t("imageAlt")}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 300,
              letterSpacing: "0.5px",
            }}
          >
            Asociación de Países{" "}
            <em style={{ fontStyle: "italic", color: "#C4622D" }}>
              Latinoamericanos
            </em>
          </div>
        </div>
      </header>

      {/* Progress nav */}
      <div style={{ borderBottom: "1px solid rgba(28,26,22,0.06)" }}>
        <div
          className="about-wrap"
          style={{
            paddingTop: "20px",
            paddingBottom: "0",
            display: "flex",
            gap: "28px",
          }}
        >
          {slideLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 0 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: current === i ? "#C4622D" : "rgba(28,26,22,0.35)",
                  transition: "color 0.3s",
                }}
              >
                {label}
              </span>
              <div
                style={{
                  width: "100%",
                  height: "1.5px",
                  background: "rgba(28,26,22,0.06)",
                  position: "relative",
                  minWidth: "56px",
                }}
              >
                {current === i && (
                  <div
                    key={current}
                    className="progress-bar"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "1.5px",
                      background: "#C4622D",
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div
        className="about-wrap"
        style={{ paddingTop: "40px", paddingBottom: "60px" }}
      >
        <div className="about-grid">
          {/* LEFT */}
          <div>
            {/* HISTORIA */}
            {current === 0 && (
              <div key="h" className="slide-content">
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "8px",
                  }}
                >
                  {t("nav.history")}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "34px",
                    fontWeight: 300,
                    marginBottom: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  {t("history.title")}
                </h2>
                <div className="about-cards" style={{ marginBottom: "32px" }}>
                  {card("🌎", t("introTitle"), t("history.content1"))}
                  {card("🎭", t("introText1"), t("history.content2"))}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {TIMELINE.map((item, i) => (
                    <div
                      key={item.year}
                      style={{
                        display: "flex",
                        gap: "18px",
                        alignItems: "flex-start",
                        paddingBottom: i < TIMELINE.length - 1 ? "22px" : 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "9px",
                            height: "9px",
                            borderRadius: "50%",
                            background: item.color,
                            marginTop: "4px",
                          }}
                        />
                        {i < TIMELINE.length - 1 && (
                          <div
                            style={{
                              width: "1px",
                              flex: 1,
                              background: "rgba(28,26,22,0.1)",
                              marginTop: "5px",
                              minHeight: "28px",
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 500,
                            color: item.color,
                            letterSpacing: "1px",
                            marginBottom: "2px",
                          }}
                        >
                          {item.year}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 300,
                            color: "#1C1A16",
                          }}
                        >
                          {item.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MISIÓN */}
            {current === 1 && (
              <div key="m" className="slide-content">
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "8px",
                  }}
                >
                  {t("nav.mission")}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "34px",
                    fontWeight: 300,
                    marginBottom: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  {t("mission.title")}
                </h2>
                <blockquote
                  style={{
                    borderLeft: "2px solid #C4622D",
                    paddingLeft: "18px",
                    marginBottom: "28px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "17px",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "#5F5E5A",
                    lineHeight: 1.7,
                  }}
                >
                  "{t("mission.statement")}"
                </blockquote>
                <div className="about-cards">
                  {card(
                    "🤝",
                    "Apoyo integral",
                    "Acompañamos a cada estudiante en su proceso de adaptación cultural y académica.",
                  )}
                  {card(
                    "🎨",
                    "Cultura viva",
                    "Preservamos y difundimos las tradiciones y el arte latinoamericano en Kazán.",
                  )}
                </div>
              </div>
            )}

            {/* VISIÓN */}
            {current === 2 && (
              <div key="v" className="slide-content">
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "8px",
                  }}
                >
                  {t("nav.vision")}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "34px",
                    fontWeight: 300,
                    marginBottom: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  {t("vision.title")}
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#5F5E5A",
                    lineHeight: 1.8,
                    marginBottom: "32px",
                  }}
                >
                  {t("vision.statement")}
                </p>
                <div className="about-cards">
                  {card(
                    "🌍",
                    "Puentes culturales",
                    "Conectamos la cultura latinoamericana con la sociedad rusa a través del arte y la convivencia.",
                  )}
                  {card(
                    "🎓",
                    "Crecimiento académico",
                    "Apoyamos el desarrollo profesional y académico de nuestros estudiantes en Kazán.",
                  )}
                  {card(
                    "🤲",
                    "Red de apoyo",
                    "Construimos una red sólida donde cada miembro encuentra ayuda, orientación y amistad.",
                  )}
                  {card(
                    "🌱",
                    "Legado duradero",
                    "Dejamos huella en cada generación de estudiantes latinoamericanos que pasan por Kazán.",
                  )}
                </div>
              </div>
            )}

            {/* VALORES */}
            {current === 3 && (
              <div key="val" className="slide-content">
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "8px",
                  }}
                >
                  {t("nav.values")}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "34px",
                    fontWeight: 300,
                    marginBottom: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  {t("values.title")}
                </h2>
                <div className="about-cards">
                  {VALORES.map((v) => (
                    <div
                      key={v.name}
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(28,26,22,0.08)",
                        borderRadius: "8px",
                        padding: "22px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: v.color,
                        }}
                      />
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "20px",
                          fontWeight: 300,
                          color: "#1C1A16",
                          marginBottom: "8px",
                          marginTop: "8px",
                        }}
                      >
                        {v.name}
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 300,
                          color: "#5F5E5A",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — logo sticky */}
          <div
            className="about-logo-col"
            style={{
              position: "sticky",
              top: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/logo_latam.jpeg"
              alt="Logo LATAM"
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                border: "1px solid rgba(28,26,22,0.08)",
              }}
            />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11px",
                fontWeight: 300,
                color: "#8C7B6B",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Kazán · Rusia · desde 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
