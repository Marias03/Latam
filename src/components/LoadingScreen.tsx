"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./LoadingScreen.module.css";

const STRIPE_COLORS = [
  "#009B3A",
  "#FEDF00",
  "#C8102E",
  "#003087",
  "#CE1126",
  "#FFFFFF",
  "#003893",
  "#CF142B",
  "#F4C300",
  "#009E60",
];

export default function LoadingScreen() {
  const t = useTranslations("Loader");
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setVisible(true);

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  if (!mounted || !visible) {
    return null;
  }

  return createPortal(
    <div
      className={styles.loader}
      role="status"
      aria-live="polite"
      aria-label={t("title")}
    >
      <div className={styles.centerContent}>
        <div className={styles.logoLoader}>
          <img
            src="/logo_latam.jpeg"
            alt="Logo de la Asociación Latinoamericana"
          />
        </div>

        <p className={styles.loaderTitle}>
          {t("title")} <span>{t("subtitle")}</span>
        </p>

        <p className={styles.loaderSub}>{t("location")}</p>

        <div className={styles.progressWrap}>
          <div className={styles.progressBar} />
        </div>
      </div>

      <div className={styles.stripeBottom} aria-hidden="true">
        {STRIPE_COLORS.map((color, index) => (
          <div
            key={`${color}-${index}`}
            style={{
              flex: 1,
              background: color,
            }}
          />
        ))}
      </div>
    </div>,
    document.body,
  );
}
