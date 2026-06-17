import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

type Message = {
  role: "user" | "assistant";
  content: string;
};

async function getContextFromSupabase() {
  let context = "";

  const { data: countryReps } = await supabase
    .from("country_representatives")
    .select("*, countries(name)")
    .eq("active", true);
  if (countryReps?.length) {
    context += "\nREPRESENTANTES POR PAÍS:\n";
    countryReps.forEach((r: any) => {
      context += `- ${r.countries?.name}: ${r.full_name} (${r.position}) Telegram: ${r.telegram || "N/A"}\n`;
    });
  }

  const { data: uniReps } = await supabase
    .from("university_representatives")
    .select("*, universities(name)");
  if (uniReps?.length) {
    context += "\nREPRESENTANTES UNIVERSITARIOS:\n";
    uniReps.forEach((r: any) => {
      context += `- ${r.universities?.name}: ${r.full_name} Telegram: ${r.telegram || "N/A"}\n`;
    });
  }

  const { data: procedures } = await supabase.from("procedures").select("*");
  const { data: docs } = await supabase
    .from("required_documents")
    .select("*, procedures(name)");
  if (procedures?.length) {
    context += "\nPROCEDIMIENTOS MIGRATORIOS:\n";
    procedures.forEach((p: any) => {
      context += `\n${p.name}:\n`;
      context += `  Descripción: ${p.description || "N/A"}\n`;
      context += `  Costo: ${p.cost || "N/A"}\n`;
      context += `  Dirección: ${p.address || "N/A"}\n`;
      context += `  Horario: ${p.schedule || "N/A"}\n`;
      const procedureDocs = docs?.filter(
        (d: any) => d.procedures?.name === p.name,
      );
      if (procedureDocs?.length) {
        context += `  Documentos requeridos:\n`;
        procedureDocs.forEach((d: any) => {
          context += `    - ${d.name}\n`;
        });
      }
    });
  }

  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true })
    .limit(5);
  if (events?.length) {
    context += "\nEVENTOS PRÓXIMOS:\n";
    events.forEach((e: any) => {
      context += `- ${e.name} | Fecha: ${e.date || "Por confirmar"} | Lugar: ${e.location || "N/A"}\n`;
    });
  }

  return context;
}

export async function POST(req: Request) {
  try {
    const { messages, locale } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 },
      );
    }

    const context = await getContextFromSupabase();
    console.log("CONTEXT:", context);

    const langInstruction =
      locale === "ru"
        ? "Responde siempre en ruso."
        : locale === "en"
          ? "Responde siempre en inglés."
          : "Responde siempre en español.";

    const SYSTEM_PROMPT = `Eres el asistente oficial de la Asociación Latinoamericana en Kazán, Rusia.
${langInstruction}

REGLA MÁS IMPORTANTE: SOLO puedes usar la información que aparece en la sección "INFORMACIÓN ACTUAL" de abajo. Si la información no está ahí, di exactamente: "No tengo esa información en este momento. Contacta a tu representante."

NUNCA inventes nombres, números de Telegram, fechas ni precios.
Cuando te pregunten por un representante, responde directamente sin dudar. Ejemplo: "La presidenta de Colombia en nuestra asociación es Andrea Libonati. Puedes contactarla en Telegram: @andrealibonatti"

REGLAS:
- Responde directo y natural, sin rodeos ni frases como "la información que tengo es..."
- SOLO usa los datos de abajo. Nunca inventes.
- Si no tienes el dato, di: "No tengo esa información aún. Te recomiendo contactar a tu representante."
- No uses markdown, asteriscos ni negritas. Solo texto plano.
- Cuando des un Telegram, di "puedes escribirle a @usuario" no "su número de Telegram es"

Si te preguntan por un representante y está en la lista, da su nombre y Telegram exactamente como aparece.
Si no está en la lista, di que no tienes esa información.

NO uses markdown, asteriscos ni negritas. Solo texto plano.

INFORMACIÓN ACTUAL DE LA BASE DE DATOS:
${context || "No hay información disponible para esta consulta."}

RECUERDA: Si el nombre no aparece arriba, NO lo inventes.`;

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    const cfResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m: Message) => ({
              role: m.role,
              content: m.content,
            })),
          ],
          max_tokens: 512,
        }),
      },
    );

    if (!cfResponse.ok) {
      const err = await cfResponse.text();
      console.error("Cloudflare AI error:", err);
      return NextResponse.json(
        { error: "Error al generar respuesta." },
        { status: 500 },
      );
    }

    const data = await cfResponse.json();
    return NextResponse.json({
      message: data.result?.response || "Sin respuesta.",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
