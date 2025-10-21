"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { supabase } from "@/lib/supabase";

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
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error || !data) {
        console.error(error.message);
      }

      setEvents(data as Event[]);
      setLoading(false);
    };

    fetchEvents();

    // Escuchar cambios en el localStorage para actualizar en tiempo real
    const handleStorageChange = () => {
      fetchEvents();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Fecha por definir"
      : date.toLocaleDateString("es-ES", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-100 to-amber-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            <span className="border-b-4 border-amber-500 pb-2">
              {t("title")}
            </span>
          </h2>
          <div className="text-center text-gray-600">{t("loading")}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-amber-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          <span className="border-b-4 border-amber-500 pb-2">{t("title")}</span>
        </h2>

        {events.length === 0 ? (
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                  >
                    <div className="text-blue-800 font-medium mb-2">
                      {t("title")}
                    </div>
                    <p className="text-gray-600">{t("description")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                  index % 2 === 0 ? "border-blue-500" : "border-amber-500"
                } hover:shadow-xl transition`}
              >
                <div className="text-blue-600 font-medium mb-2">
                  {formatDate(event.date)}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {event.name}
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">{t("location")}:</span>{" "}
                  {event.location}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
