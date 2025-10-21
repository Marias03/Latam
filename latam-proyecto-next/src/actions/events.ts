"use server";

import { supabase } from "@/lib/supabase";

export async function getEventos() {
  console.log("[getEventos] Iniciando consulta...");

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("fecha", { ascending: true });

  console.log("[getEventos] Respuesta:", {
    data: data?.length,
    error: error?.message,
  });

  if (error) {
    const errorInfo = {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
      stack: new Error().stack,
    };
    console.error("[getEventos] Error Supabase:", errorInfo);
    throw errorInfo; // Lanza el objeto completo
  }

  if (!data || data.length === 0) {
    console.warn("[getEventos] No hay eventos");
    return [];
  }

  return data;
}
