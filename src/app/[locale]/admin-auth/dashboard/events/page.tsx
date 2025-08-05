"use client";
import { useState, useEffect } from "react";

export default function AdminEventos() {
  const [eventos, setEventos] = useState<any>([]);
  const [form, setForm] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
    hora: "",
  });

  // Cargar eventos al iniciar
  useEffect(() => {
    fetch("/api/eventos")
      .then((res) => res.json())
      .then(setEventos);
  }, []);

  // Guardar evento
  const guardarEvento = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        fecha: `${form.fecha}T${form.hora}`, // Combina fecha y hora
      }),
    });
    const nuevoEvento = await res.json();
    setEventos([...eventos, nuevoEvento]);
    setForm({ nombre: "", lugar: "", fecha: "", hora: "" });
  };

  // Eliminar evento
  const eliminarEvento = async (id: any) => {
    await fetch(`/api/eventos?id=${id}`, { method: "DELETE" });
    setEventos(eventos.filter((e: any) => e.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Añadir Eventos</h1>

      {/* Formulario minimalista */}
      <form onSubmit={guardarEvento} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Nombre del evento"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Lugar"
          value={form.lugar}
          onChange={(e) => setForm({ ...form, lugar: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="date"
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="time"
            value={form.hora}
            onChange={(e) => setForm({ ...form, hora: e.target.value })}
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Añadir Evento
        </button>
      </form>

      {/* Lista de eventos para eliminar */}
      <div className="space-y-2">
        {eventos.map((evento: any) => (
          <div
            key={evento.id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{evento.nombre}</p>
              <p className="text-sm text-gray-600">
                {new Date(evento.fecha).toLocaleDateString()} - {evento.lugar}
              </p>
            </div>
            <button
              onClick={() => eliminarEvento(evento.id)}
              className="text-red-500 text-sm p-1"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
