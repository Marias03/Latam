"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const t = useTranslations("Loader");
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.centerContent}>
        <div className={styles.logoLoader}>
          <img src="/logo_latam.jpeg" alt="Logo" />
        </div>
        <p className={styles.loaderTitle}>
          {t("title")} <span>{t("subtitle")}</span>
        </p>
        <p className={styles.loaderSub}>{t("location")}</p>
        <div className={styles.progressWrap}>
          <div className={styles.progressBar} />
        </div>
      </div>
      <div className={styles.stripeBottom}>
        {[
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
        ].map((c, i) => (
          <div key={i} style={{ flex: 1, background: c }} />
        ))}
      </div>
    </div>
  );
}
