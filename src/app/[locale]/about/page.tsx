import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo_latam.jpeg";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-900 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center overflow-x-auto py-3 space-x-8">
            {["history", "mission", "vision", "values"].map((item) => (
              <Link
                href={`#${item}`}
                key={item}
                className="whitespace-nowrap px-3 py-3 text-gray-700 hover:text-blue-600 font-medium transition relative group"
              >
                {t(`nav.${item}`)}
                <span className="absolute bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Intro - Contenedor modificado (más alto) */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-2/3 w-full relative">
            <div className="relative h-[700px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={logo}
                alt={t("imageAlt")}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              {t("introTitle")}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t("introText1")}</p>
              <p>{t("introText2")}</p>
            </div>
          </div>
        </div>

        {/* History */}
        <section id="history" className="py-16 scroll-mt-20">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 shadow-inner">
              <span className="text-blue-800 text-xl">📜</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              {t("history.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {t("history.content1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("history.content2")}
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">
                {t("history.milestones")}
              </h3>
              <ul className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      {item}
                    </span>
                    <span className="text-gray-700">
                      {t(`history.milestone${item}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="py-16 scroll-mt-20">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 shadow-inner">
              <span className="text-amber-800 text-xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              {t("mission.title")}
            </h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-amber-500"></div>
            <p className="text-gray-700 text-lg italic leading-relaxed">
              "{t("mission.statement")}"
            </p>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="py-16 scroll-mt-20">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 shadow-inner">
              <span className="text-blue-800 text-xl">👁️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              {t("vision.title")}
            </h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-amber-500"></div>
            <p className="text-gray-700 text-lg italic leading-relaxed">
              "{t("vision.statement")}"
            </p>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="py-16 scroll-mt-20">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 shadow-inner">
              <span className="text-amber-800 text-xl">❤️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              {t("values.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shadow-inner">
                  <span className="text-blue-600 text-xl">
                    {["🌱", "🤝", "✨", "🌎", "🏛️"][item - 1]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {t(`values.value${item}Title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`values.value${item}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="text-blue-100 font-medium">{t("footer.text")}</p>
            <div className="hidden md:block w-1 h-6 bg-blue-400 rounded-full"></div>
            <Link
              href="/"
              className="text-white hover:text-blue-200 underline transition-colors duration-300"
            >
              {t("footer.homeLink")}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
