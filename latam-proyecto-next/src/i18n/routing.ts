import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "ru"],
  defaultLocale: "en",
  // Opcional: prefijos de locale para todas las rutas
  localePrefix: "always", // o "as-needed"
});

// Exporta los locales para uso en otros archivos
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
export type Locale = (typeof locales)[number];
