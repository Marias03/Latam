import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "@/globals.css";
import LanguageSwitcher from "@/components/LocaleSwitcher"; // Asegúrate que la ruta es correcta

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tu Aplicación",
  description: "Descripción de tu aplicación",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} relative min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
