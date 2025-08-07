"use server";

import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";

export async function login(
  _state: any,
  form: FormData
): Promise<{ message: string; status: number; user?: any }> {
  try {
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const user = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (!user.data) {
      return {
        message: "Credenciales inválidas o no tienes privilegios",
        status: 401,
      };
    }

    const isValid = password === user.data.password;
    if (!isValid) {
      return {
        message: "Credenciales inválidas",
        status: 401,
      };
    }

    const token = crypto.randomUUID();
    (await cookies()).set("user_token", token);

    await supabase
      .from("users")
      .update({
        token,
      })
      .eq("id", user.data.id);

    return {
      user: user.data,
      message: "signed in",
      status: 200,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Error en el servidor",
      status: 500,
    };
  }
}
