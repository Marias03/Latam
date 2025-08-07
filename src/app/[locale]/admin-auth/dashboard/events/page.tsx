"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Evento = {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
};

export default function AdminEventos() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    fecha: "",
    hora: "12:00",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar eventos desde Supabase al iniciar
  useEffect(() => {
    const cargarEventos = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) {
          throw error;
        }

        setEventos(data || []);
      } catch (error) {
        console.error("Error al cargar eventos:", error);
        setError("Error al cargar eventos");
      } finally {
        setIsLoading(false);
      }
    };

    cargarEventos();
  }, []);

  const guardarEvento = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fecha) {
      alert("Por favor ingrese una fecha");
      return;
    }

    setIsLoading(true);
    try {
      const fechaCompleta = new Date(
        `${form.fecha}T${form.hora}:00`
      ).toISOString();

      console.log(form);

      const { data, error } = await supabase
        .from("events")
        .insert([
          {
            name: form.name,
            description: form.description,
            location: form.location,
            date: new Date(fechaCompleta),
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      if (data) {
        setEventos([...data, ...eventos]);
        setForm({
          name: "",
          description: "",
          location: "",
          fecha: "",
          hora: "12:00",
        });
        alert("¡Evento guardado con éxito!");
      }
    } catch (error) {
      console.error("Error al guardar evento:", error);
      alert("Error al guardar el evento");
    } finally {
      setIsLoading(false);
    }
  };

  const eliminarEvento = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este evento?")) return;

    setIsLoading(true);
    try {
      const { error } = await supabase.from("events").delete().eq("id", id);

      if (error) {
        throw error;
      }

      setEventos(eventos.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Error al eliminar evento:", error);
      alert("Error al eliminar el evento");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && eventos.length === 0) {
    return (
      <div className="max-w-md mx-auto p-4">
        <p>Cargando eventos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Panel Admin - Eventos</h1>
        <Link
          href="/admin-auth/dashboard"
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
        >
          Volver a la pagina principal
        </Link>
      </div>

      <form onSubmit={guardarEvento} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Nombre del evento"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
          disabled={isLoading}
        />

        <textarea
          placeholder="Descripción del evento"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded min-h-[100px]"
          required
          disabled={isLoading}
        />

        <input
          type="text"
          placeholder="Lugar"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full p-2 border rounded"
          required
          disabled={isLoading}
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            type="date"
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
            className="p-2 border rounded"
            required
            disabled={isLoading}
          />
          <input
            type="time"
            value={form.hora}
            onChange={(e) => setForm({ ...form, hora: e.target.value })}
            className="p-2 border rounded"
            required
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Guardando..." : "Añadir Evento"}
        </button>
      </form>

      <div className="space-y-2">
        {eventos.length === 0 ? (
          <p className="text-center text-gray-500">
            No hay eventos programados
          </p>
        ) : (
          eventos.map((evento) => (
            <div key={evento.id} className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{evento.name}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {evento.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    📅 {new Date(evento.date).toLocaleString("es-ES")} | 📍{" "}
                    {evento.location}
                  </p>
                </div>
                <button
                  onClick={() => eliminarEvento(evento.id)}
                  className="text-red-500 text-sm p-1 disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Eliminando..." : "Eliminar"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
