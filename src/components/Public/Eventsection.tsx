"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Event = {
  id: string;
  name: string;
  location: string;
  date: string;
  description: string;
};

export default function EventSection() {
  const t = useTranslations("Events");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (res.ok) {
          const data = await res.json();
          setEvents(data.events);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-100 to-amber-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            <span className="border-b-4 border-amber-500 pb-2">
              {t("title")}
            </span>
          </h2>
          <div className="text-center text-gray-600">
            {t("loading")}
          </div>
        </div>
      </section>
    );
  }

  // Si no hay eventos de la API, mostrar eventos predeterminados
  const displayEvents = events.length > 0 ? events : [
    {
      id: "1",
      name: t("latinoNight.title"),
      location: t("latinoNight.location"),
      date: new Date().toISOString(),
      description: t("latinoNight.description"),
    },
    {
      id: "2",
      name: t("russianWorkshop.title"),
      location: t("russianWorkshop.location"),
      date: new Date().toISOString(),
      description: t("russianWorkshop.description"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-amber-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          <span className="border-b-4 border-amber-500 pb-2">
            {t("title")}
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {displayEvents.map((event, index) => (
            <div
              key={event.id || index}
              className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${index % 2 === 0 ? "border-blue-500" : "border-amber-500"} hover:shadow-xl transition`}
            >
              <div className="text-blue-600 font-medium mb-2">
                {new Date(event.date).toLocaleDateString()}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {event.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">{t("location")}:</span> {event.location}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}