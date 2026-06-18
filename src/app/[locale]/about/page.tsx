"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SLIDE_COLORS = ["#C4622D", "#E8A020", "#1A6B3A", "#1B3A8C"];

export default function AboutPage() {
  const t = useTranslations("About");
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDES = [
    {
      tag: t("nav.history"),
      title: t("history.title"),
      text: t("history.content1"),
      milestones: [
        { year: "2022", text: t("history.milestone1").replace("2022: ", "") },
        { year: "2024", text: t("history.milestone2").replace("2024: ", "") },
        { year: "2025", text: t("history.milestone3").replace("2025: ", "") },
      ],
    },
    {
      tag: t("nav.mission"),
      title: t("mission.title"),
      text: t("mission.statement"),
      milestones: null,
    },
    {
      tag: t("nav.vision"),
      title: t("vision.title"),
      text: t("vision.statement"),
      milestones: null,
    },
    {
      tag: t("nav.values"),
      title: t("values.title"),
      text: null,
      values: [
        { name: t("values.value1Title"), desc: t("values.value1Desc") },
        { name: t("values.value2Title"), desc: t("values.value2Desc") },
        { name: t("values.value3Title"), desc: t("values.value3Desc") },
        { name: t("values.value4Title"), desc: t("values.value4Desc") },
      ],
    },
  ];

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    startInterval();
  };

  const slide = SLIDES[current];
  const color = SLIDE_COLORS[current];

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#1A0800 0%,#2D1200 50%,#0A1A10 100%)",
        minHeight: "calc(100vh - 56px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes spin1 { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes spin2 { 0%{transform:rotate(0deg)} 100%{transform:rotate(-360deg)} }
        @keyframes glow { 0%,100%{opacity:0.08} 50%{opacity:0.15} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes progress { from{width:0%} to{width:100%} }
        .slide-in { animation: fadeUp 0.35s ease both; }
        .progress-anim { animation: progress 5s linear; }
      `}</style>

      {/* Glows */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#FF6B00",
          filter: "blur(90px)",
          opacity: 0.1,
          top: "-80px",
          right: "80px",
          animation: "glow 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "#00C48C",
          filter: "blur(70px)",
          opacity: 0.08,
          bottom: "-60px",
          left: "200px",
          animation: "glow 3s 1s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "#FFD700",
          filter: "blur(60px)",
          opacity: 0.07,
          top: "10px",
          right: "10px",
          animation: "glow 5s 0.5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Logo animado */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "240px",
            height: "240px",
            animation: "float 4s ease-in-out infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              borderRadius: "50%",
              border: `1.5px solid ${color}60`,
              animation: "spin1 8s linear infinite",
              transition: "border-color 0.5s",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-24px",
              borderRadius: "50%",
              border: "1px dashed rgba(255,215,0,0.25)",
              animation: "spin2 12s linear infinite",
            }}
          />
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              overflow: "hidden",
              border: `3px solid ${color}80`,
              position: "relative",
              transition: "border-color 0.5s",
            }}
          >
            <Image
              src="/logo_latam.jpeg"
              alt={t("imageAlt")}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Carrusel derecha */}
      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Dots nav */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "0",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color:
                    current === i ? SLIDE_COLORS[i] : "rgba(255,255,255,0.25)",
                  transition: "color 0.3s",
                }}
              >
                {s.tag}
              </span>
              <div
                style={{
                  width: "48px",
                  height: "1.5px",
                  background: "rgba(255,255,255,0.1)",
                  position: "relative",
                }}
              >
                {current === i && (
                  <div
                    key={current}
                    className="progress-anim"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "1.5px",
                      background: SLIDE_COLORS[i],
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Slide content */}
        <div key={current} className="slide-in">
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color,
              marginBottom: "8px",
            }}
          >
            {slide.tag}
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "36px",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            {slide.title}
          </h2>

          {/* Texto normal */}
          {slide.text && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                maxWidth: "400px",
                fontStyle: current === 1 || current === 2 ? "italic" : "normal",
              }}
            >
              {current === 1 || current === 2 ? `"${slide.text}"` : slide.text}
            </p>
          )}

          {/* Timeline Historia */}
          {slide.milestones && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "4px",
              }}
            >
              {slide.milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
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
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: TIMELINE_COLORS[i],
                        marginTop: "4px",
                      }}
                    />
                    {i < slide.milestones!.length - 1 && (
                      <div
                        style={{
                          width: "1px",
                          height: "20px",
                          background: "rgba(255,255,255,0.1)",
                          marginTop: "4px",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        color: TIMELINE_COLORS[i],
                        letterSpacing: "1px",
                        marginBottom: "2px",
                      }}
                    >
                      {m.year}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Valores */}
          {slide.values && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "4px",
              }}
            >
              {slide.values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `0.5px solid ${SLIDE_COLORS[i % SLIDE_COLORS.length]}40`,
                    borderRadius: "8px",
                    padding: "14px",
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
                      height: "2px",
                      background: SLIDE_COLORS[i % SLIDE_COLORS.length],
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "16px",
                      fontWeight: 300,
                      color: "#fff",
                      marginBottom: "4px",
                      marginTop: "4px",
                    }}
                  >
                    {v.name}
                  </div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TIMELINE_COLORS = ["#C4622D", "#E8A020", "#1A6B3A"];
