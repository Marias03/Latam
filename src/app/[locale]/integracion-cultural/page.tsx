import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/../public/Baile.jpg";
import Image2 from "@/../public/Canto.jpg";

export default function CulturalIntegrationPage() {
  const t = useTranslations("CulturalIntegration");

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#FAF8F3",
        color: "#1C1A16",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes glow { 0%,100%{opacity:0.08} 50%{opacity:0.15} }
        .emoji-float { animation: float 3s ease-in-out infinite; display:inline-block; font-size:48px }
        .ef2 { animation-delay: 0.5s }
        .ef3 { animation-delay: 1s }
        .tg-btn-swing:hover { opacity: 0.85 }
        .tg-btn-voces:hover { opacity: 0.85 }
        .hl-swing:hover { background: rgba(196,98,45,0.35) !important }
        .hl-voces:hover { background: rgba(26,107,58,0.35) !important }
        .img-hover:hover { transform: scale(1.03); transition: transform 0.5s }
      `}</style>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#1A0800 0%,#2D1200 50%,#0A1A10 100%)",
          padding: "56px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "#FF6B00",
            filter: "blur(80px)",
            opacity: 0.1,
            top: "-80px",
            right: "60px",
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
            left: "160px",
            animation: "glow 3s 1s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

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
              marginBottom: "14px",
              border: "0.5px solid rgba(255,107,0,0.3)",
            }}
          >
            🎭 ASOPAIS LATAM · {t("title")}
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "42px",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#FF6B00", fontStyle: "italic" }}>
              {t("title")}
            </span>
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: "380px",
              marginBottom: "20px",
            }}
          >
            {t("subtitle")}
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="#swing"
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                background: "rgba(196,98,45,0.2)",
                color: "#FF9F50",
                border: "0.5px solid rgba(196,98,45,0.4)",
                textDecoration: "none",
              }}
              className="hl-swing"
            >
              💃 {t("nav.swing")}
            </a>
            <a
              href="#voces"
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                background: "rgba(26,107,58,0.2)",
                color: "#4FC87A",
                border: "0.5px solid rgba(26,107,58,0.4)",
                textDecoration: "none",
              }}
              className="hl-voces"
            >
              🎶 {t("nav.voces")}
            </a>
          </div>
        </div>

        <div
          style={{
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <span className="emoji-float">💃</span>
          <span className="emoji-float ef2">🎷</span>
          <span className="emoji-float ef3">🥁</span>
        </div>
      </section>

      {/* SUBNAV */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid rgba(28,26,22,0.08)",
          display: "flex",
          padding: "0 48px",
        }}
      >
        <a
          href="#swing"
          style={{
            padding: "16px 0",
            marginRight: "28px",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#C4622D",
            borderBottom: "2px solid #C4622D",
            textDecoration: "none",
          }}
        >
          {t("nav.swing")}
        </a>
        <a
          href="#voces"
          style={{
            padding: "16px 0",
            marginRight: "28px",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "rgba(28,26,22,0.35)",
            borderBottom: "2px solid transparent",
            textDecoration: "none",
          }}
        >
          {t("nav.voces")}
        </a>
      </div>

      {/* SWING LATINO */}
      <section
        id="swing"
        style={{
          padding: "56px 48px",
          background: "#fff",
          scrollMarginTop: "56px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid rgba(196,98,45,0.25)",
              aspectRatio: "4/3",
            }}
          >
            <Image
              src={Image1}
              alt={t("swing.imageAlt")}
              fill
              className="img-hover"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                right: "-8px",
                padding: "8px 16px",
                borderRadius: "10px",
                fontSize: "11px",
                fontWeight: 500,
                color: "#fff",
                background: "#C4622D",
                transform: "rotate(2deg)",
              }}
            >
              ¡BAILA CON EL ALMA!
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#C4622D",
                marginBottom: "8px",
              }}
            >
              {t("nav.swing")}
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                fontWeight: 300,
                marginBottom: "14px",
                lineHeight: 1.2,
              }}
            >
              {t("swing.title")}
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "#5F5E5A",
                lineHeight: 1.8,
                marginBottom: "12px",
              }}
            >
              {t("swing.description1")}
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "#5F5E5A",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {t("swing.description2")}
            </p>
            <div
              style={{
                background: "rgba(196,98,45,0.06)",
                borderLeft: "3px solid #C4622D",
                borderRadius: "12px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#C4622D",
                  marginBottom: "6px",
                }}
              >
                {t("howToJoin")}
              </div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#5F5E5A",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                {t("swing.joinInfo")}
              </p>
              <Link
                href="tg://resolve?domain=@andrealibonatti"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A4EA6",
                  background: "rgba(26,78,166,0.1)",
                  border: "0.5px solid rgba(26,78,166,0.3)",
                  textDecoration: "none",
                }}
                className="tg-btn-swing"
              >
                ✈ {t("contactButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VOCES ANDINAS */}
      <section
        id="voces"
        style={{
          padding: "56px 48px",
          background: "#FAF8F3",
          scrollMarginTop: "56px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              order: 2,
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid rgba(26,107,58,0.25)",
              aspectRatio: "4/3",
            }}
          >
            <Image
              src={Image2}
              alt={t("voces.imageAlt")}
              fill
              className="img-hover"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "-8px",
                padding: "8px 16px",
                borderRadius: "10px",
                fontSize: "11px",
                fontWeight: 500,
                color: "#fff",
                background: "#1A6B3A",
                transform: "rotate(-2deg)",
              }}
            >
              ¡SIENTE LA MÚSICA!
            </div>
          </div>
          <div style={{ order: 1 }}>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#1A6B3A",
                marginBottom: "8px",
              }}
            >
              {t("nav.voces")}
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                fontWeight: 300,
                marginBottom: "14px",
                lineHeight: 1.2,
              }}
            >
              {t("voces.title")}
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "#5F5E5A",
                lineHeight: 1.8,
                marginBottom: "12px",
              }}
            >
              {t("voces.description1")}
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "#5F5E5A",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {t("voces.description2")}
            </p>
            <div
              style={{
                background: "rgba(26,107,58,0.06)",
                borderLeft: "3px solid #1A6B3A",
                borderRadius: "12px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A6B3A",
                  marginBottom: "6px",
                }}
              >
                {t("howToJoin")}
              </div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#5F5E5A",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                {t("voces.joinInfo")}
              </p>
              <Link
                href="tg://resolve?domain=@SaulAndresn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A4EA6",
                  background: "rgba(26,78,166,0.1)",
                  border: "0.5px solid rgba(26,78,166,0.3)",
                  textDecoration: "none",
                }}
                className="tg-btn-voces"
              >
                ✈ {t("contactButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "linear-gradient(135deg,#1A0800,#0A1A10)",
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          {["🎻", "🎺", "🪕", "🎤", "🪘"].map((e, i) => (
            <span key={i} style={{ fontSize: "20px", cursor: "pointer" }}>
              {e}
            </span>
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          {t("footer.text")}
        </span>
        <Link
          href="/"
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
          }}
        >
          ← {t("footer.homeLink")}
        </Link>
      </footer>
    </div>
  );
}
