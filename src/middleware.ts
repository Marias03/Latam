import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es", "ru"],
  defaultLocale: "en",
  localePrefix: "always", // Asegúrate de tener esto
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
