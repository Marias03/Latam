import {
  AcademicCapIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from "next-intl";
import EventSection from "@/components/Public/Eventsection";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t("hero.title")} <br />
              <span className="text-amber-300">{t("hero.subtitle")}</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://t.me/asopaislatamkzm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md text-center"
              >
                {t("hero.joinButton")}
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg transition duration-300 text-center"
              >
                {t("hero.learnMoreButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">
            <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
              {t("features.title")}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <GlobeAmericasIcon className="w-8 h-8 text-blue-600" />
                  </div>
                ),
                title: t("features.culturalIntegration.title"),
                description: t("features.culturalIntegration.description"),
                bgColor: "bg-blue-50",
                href: "/integracion-cultural", // Nueva propiedad para la ruta
              },
              {
                icon: (
                  <div className="mx-auto bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <UserGroupIcon className="w-8 h-8 text-amber-600" />
                  </div>
                ),
                title: t("features.community.title"),
                description: t("features.community.description"),
                bgColor: "bg-amber-50",
                href: "/comunidad-de-apoyo", // Nueva propiedad para la ruta
              },
            ].map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className={`${feature.bgColor} p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 block`}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <EventSection />
      <footer className="bg-blue-900 py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="text-blue-100 font-medium">{t("footer.text")}</p>
            <div className="hidden md:block w-1 h-6 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
