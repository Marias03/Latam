"use server";

import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";

export async function login(_state: any, form: FormData) : Promise<{message: string; status: number; user?: any}> {
  try {
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    console.log("dwqdqwd")
    console.log(email)

    const user = await prisma.user.findUnique({
      where: { email, role: "ADMIN" },
    });

    console.log(user)

    if (!user) {
      return {
        message: "Credenciales inválidas o no tienes privilegios",
        status: 401 
      }
    }

    const isValid = password === user.password;
    if (!isValid) {
      return {
        message: "Credenciales inválidas" ,
        status: 401 
      }
    }

    const { password: _, ...userData } = user;

    return { 
        user: userData,
        message: "signed in",
        status: 200,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Error en el servidor",
      status: 500 
    }
  }
}
