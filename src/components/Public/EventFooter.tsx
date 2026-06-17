"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useTranslations } from "next-intl";

type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
};

export default function EventFooter() {
  const t = useTranslations("Home");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    supabase
      .from("events")
      .select("id, name, date, location")
      .order("date", { ascending: true })
      .limit(3)
      .then(({ data }) => {
        if (data) setEvents(data);
      });
  }, []);

  const formatDate = (d: string) => {
    const date = new Date(d);
    return isNaN(date.getTime())
      ? t("footer.comingsoon")
      : date.toLocaleDateString("es-ES", {
          day: "numeric",
          month: "short",
        });
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {events.length === 0 ? (
        <div
          style={{ fontSize: "12px", color: "#8C7B6B", fontStyle: "italic" }}
        >
          Próximamente...
        </div>
      ) : (
        events.map((ev) => (
          <div
            key={ev.id}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "24px",
              alignItems: "center",
              padding: "22px 0",
              borderBottom: "1px solid rgba(28,26,22,0.08)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#C4622D",
                  margin: "0 auto 8px",
                }}
              />
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8C7B6B",
                }}
              >
                {formatDate(ev.date)}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 300,
                  color: "#1C1A16",
                  marginBottom: "4px",
                }}
              >
                {ev.name}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#8C7B6B",
                  letterSpacing: "0.5px",
                }}
              >
                {ev.location}
              </div>
            </div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8C7B6B",
                border: "1px solid rgba(28,26,22,0.15)",
                padding: "6px 14px",
                whiteSpace: "nowrap",
              }}
            >
              Por confirmar
            </div>
          </div>
        ))
      )}
    </div>
  );
}
