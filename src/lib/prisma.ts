// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Evita instancias múltiples en desarrollo (Hot Reload)
declare global {
  var prisma: PrismaClient | undefined;
}

// Crea o reutiliza la instancia existente
const prisma = globalThis.prisma || new PrismaClient();

// En desarrollo, guarda la instancia en globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
