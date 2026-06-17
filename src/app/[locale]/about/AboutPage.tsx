"use client";

import { useState } from "react";
import styles from "./AboutPage.module.css";

type Tab = "Historia" | "Misión" | "Visión" | "Valores";

const TABS: Tab[] = ["Historia", "Misión", "Visión", "Valores"];

const TIMELINE = [
  {
    year: "2022",
    text: "Fundación de la Asociación en Kazán",
    color: "#C4430A",
  },
  {
    year: "2024",
    text: "Celebración del primer Día de Latinoamérica y evento deportivo",
    color: "#E8A020",
  },
  { year: "2025", text: "Primer Reinado Latinoamericano", color: "#1A6B3A" },
];

const STATS = [
  { num: "3+", label: "Años activos" },
  { num: "10+", label: "Países representados" },
  { num: "100+", label: "Miembros" },
];

const VALORES = [
  {
    name: "Identidad",
    desc: "Orgullosos de nuestras raíces y herencia cultural latinoamericana.",
    color: "#C4430A",
  },
  {
    name: "Comunidad",
    desc: "Construimos juntos un espacio de apoyo, amistad y pertenencia.",
    color: "#E8A020",
  },
  {
    name: "Inclusión",
    desc: "Abrimos nuestros brazos a toda persona que comparta nuestro espíritu.",
    color: "#1A6B3A",
  },
  {
    name: "Excelencia",
    desc: "Promovemos el talento y el crecimiento personal de cada miembro.",
    color: "#1B3A8C",
  },
];

export default function AboutPage() {
  const [active, setActive] = useState<Tab>("Historia");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img
            src="/logo_latam.jpeg"
            alt="Logo"
            className={styles.headerLogo}
          />
          <span className={styles.headerTitle}>
            Asociación de Países <span>Latinoamericanos</span>
          </span>
        </div>
      </header>

      <nav className={styles.navTabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${active === tab ? styles.tabActive : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className={styles.content}>
        {active === "Historia" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🌎</span>
                <h3 className={styles.cardTitle}>Nuestros orígenes</h3>
                <p className={styles.cardText}>
                  Nacimos en 2022 como resultado del esfuerzo de varios
                  estudiantes latinoamericanos residentes en Kazán, buscando un
                  espacio de unión y pertenencia.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🎭</span>
                <h3 className={styles.cardTitle}>Nuestra comunidad</h3>
                <p className={styles.cardText}>
                  Promovemos la cultura, los talentos y la identidad latina
                  mediante eventos, bailes, presentaciones y actividades que nos
                  conectan.
                </p>
              </div>
            </div>
            <div className={styles.timeline}>
              {TIMELINE.map((item) => (
                <div key={item.year} className={styles.tlItem}>
                  <div
                    className={styles.tlDot}
                    style={{ background: item.color }}
                  />
                  <p className={styles.tlYear}>{item.year}</p>
                  <p className={styles.tlText}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {active === "Misión" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Nuestra Misión</h2>
            <blockquote className={styles.misionBlock}>
              "Nuestra misión es apoyar y acompañar a los estudiantes
              latinoamericanos durante su adaptación en Rusia. Nos comprometemos
              a promover, enseñar y preservar la rica cultura latinoamericana,
              fortaleciendo así un sentido de identidad y pertenencia."
            </blockquote>
            <div className={styles.grid} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🤝</span>
                <h3 className={styles.cardTitle}>Apoyo integral</h3>
                <p className={styles.cardText}>
                  Acompañamos a cada estudiante en su proceso de adaptación
                  cultural y académica.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🎨</span>
                <h3 className={styles.cardTitle}>Cultura viva</h3>
                <p className={styles.cardText}>
                  Preservamos y difundimos las tradiciones y el arte
                  latinoamericano en Kazán.
                </p>
              </div>
            </div>
          </section>
        )}

        {active === "Visión" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Nuestra Visión</h2>
            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <p className={styles.statNum}>{s.num}</p>
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              ))}
            </div>
            <p className={styles.visionText}>
              Aspiramos a ser el referente de la comunidad latinoamericana en
              Rusia, creando puentes entre culturas y generando oportunidades
              para cada uno de nuestros miembros.
            </p>
          </section>
        )}

        {active === "Valores" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
            <div className={styles.valoresGrid}>
              {VALORES.map((v) => (
                <div key={v.name} className={styles.valorCard}>
                  <div
                    className={styles.valorBar}
                    style={{ background: v.color }}
                  />
                  <p className={styles.valorName}>{v.name}</p>
                  <p className={styles.valorDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
