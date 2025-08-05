"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface EventoData {
  name: string; // Cambiado de 'nombre' a 'name'
  location: string; // Cambiado de 'lugar' a 'location'
  date: string; // Cambiado de 'fecha' a 'date'
  hora: string;
  description?: string;
  createdBy: string; // Necesario según tu modelo
}

export async function crearEvento(
  userId: string, // ID del usuario que crea el evento
  _state: any,
  form: FormData
): Promise<{
  message: string;
  status: number;
  evento?: any;
}> {
  try {
    // 1. Extraer y validar datos (usando nombres en inglés)
    const name = form.get("name")?.toString() || ""; // Cambiado de 'nombre'
    const location = form.get("location")?.toString() || ""; // Cambiado de 'lugar'
    const date = form.get("date")?.toString() || ""; // Cambiado de 'fecha'
    const hora = form.get("hora")?.toString() || "";
    const description = form.get("description")?.toString() || "";

    if (!name || !location || !date || !hora || !userId) {
      return {
        message: "Todos los campos son requeridos",
        status: 400,
      };
    }

    // 2. Formatear fecha correctamente
    const fechaCompleta = new Date(`${date}T${hora}:00`);

    // 3. Crear evento usando los nombres correctos del modelo
    const evento = await prisma.event.create({
      data: {
        name, // Usando 'name' en lugar de 'nombre'
        location, // Usando 'location' en lugar de 'lugar'
        date: fechaCompleta,
        description,
        createdBy: userId, // Requerido por tu modelo
      },
    });

    // 4. Revalidar caché
    revalidatePath("/eventos");
    revalidatePath("/admin/events");

    // 5. Retornar respuesta
    return {
      message: "Event created successfully",
      status: 201,
      evento: {
        id: evento.id,
        name: evento.name,
        location: evento.location,
        date: evento.date.toISOString(),
        description: evento.description,
      },
    };
  } catch (error: any) {
    console.error("Error creating event:", {
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
    return {
      message: error.message || "Server error",
      status: 500,
    };
  }
}
