"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("About");

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
              border: "1.5px solid rgba(255,107,0,0.4)",
              animation: "spin1 8s linear infinite",
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
              border: "3px solid rgba(255,107,0,0.5)",
              position: "relative",
            }}
          >
            <Image
              src="/logo_latam.jpeg"
              alt="Logo ASOPAIS LATAM"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Texto */}
      <div style={{ zIndex: 2 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(255,107,0,0.15)",
            color: "#FF9F50",
            fontSize: "11px",
            fontWeight: 500,
            padding: "4px 12px",
            borderRadius: "20px",
            marginBottom: "16px",
            border: "0.5px solid rgba(255,107,0,0.3)",
          }}
        >
          🌎 ASOPAIS LATAM · Kazán, Rusia
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "52px",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "14px",
          }}
        >
          {t("introTitle").split(" ")[0]}{" "}
          <span style={{ color: "#FF6B00", fontStyle: "italic" }}>
            nosotros
          </span>
          <br />y nuestra{" "}
          <span style={{ color: "#00C48C", fontStyle: "italic" }}>
            historia
          </span>
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: "400px",
            marginBottom: "28px",
          }}
        >
          {t("introText1")} {t("introText2")}
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          {[
            { n: "2022", l: "fundación" },
            { n: "7", l: "universidades" },
            { n: "3", l: "años" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "32px",
                    background: "rgba(255,255,255,0.1)",
                    margin: "0 20px",
                  }}
                />
              )}
              <div>
                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 500,
                    color: "#FFD700",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    marginTop: "2px",
                  }}
                >
                  {s.l}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
