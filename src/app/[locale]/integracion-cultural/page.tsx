import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/../public/Baile.jpg";
import Image2 from "@/../public/Canto.jpg";

export default function CulturalIntegrationPage() {
  const t = useTranslations("CulturalIntegration");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50">
      {/* === NAVBAR HORIZONTAL === */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-sky-600 to-indigo-500 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold font-serif">
                {t("nav.title")}
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex space-x-8 mr-[200px]">
                {[
                  { id: "swing", name: t("nav.swing") },
                  { id: "voces", name: t("nav.voces") },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-white hover:text-sky-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-200 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-600">
            {[
              { id: "swing", name: t("nav.swing") },
              { id: "voces", name: t("nav.voces") },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* === HERO SECTION === */}
      <section className="bg-gradient-to-r from-sky-600 via-indigo-500 to-sky-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-1/4 w-48 h-48 bg-sky-300 rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-20 right-1/3 w-60 h-60 bg-indigo-300 rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md font-serif">
            {t("title")}
          </h1>
          <p className="text-sky-100 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-6 animate-pulse">
              <span className="text-5xl">💃</span>
              <span className="text-5xl">🎷</span>
              <span className="text-5xl">🥁</span>
            </div>
          </div>
        </div>
      </section>

      {/* === SWING LATINO SECTION === */}
      <section id="swing" className="py-20 scroll-mt-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2 w-full relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-sky-500 transform hover:rotate-1 transition duration-500">
                <Image
                  src={Image1}
                  alt={t("swing.imageAlt")}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-sky-400 text-indigo-900 px-5 py-2 rounded-xl font-bold rotate-3 shadow-lg text-sm md:text-base">
                ¡BAILA CON ALMA!
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-1 rounded-full inline-block mb-6">
                <div className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {t("nav.swing")}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-6 font-serif">
                {t("swing.title")}
              </h2>
              <div className="space-y-5 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {t("swing.description1")}
                </p>
                <p className="text-lg leading-relaxed">
                  {t("swing.description2")}
                </p>
                <div className="bg-gradient-to-r from-sky-50 to-indigo-50 p-6 rounded-xl border-l-4 border-sky-500 shadow-md mt-8">
                  <h3 className="font-semibold text-sky-800 mb-3 text-lg">
                    {t("howToJoin")}
                  </h3>
                  <p className="mb-5">{t("swing.joinInfo")}</p>
                  <Link
                    href="tg://resolve?domain=@andrealibonatti"
                    className="inline-flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394a.759.759 0 0 1-.6.295h-.005l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                    {t("contactButton")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === VOCES ANDINAS SECTION === */}
      <section
        id="voces"
        className="py-20 scroll-mt-20 bg-gradient-to-b from-teal-50 to-blue-50"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2 w-full order-1 lg:order-2 relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-teal-500 transform hover:-rotate-1 transition duration-500">
                <Image
                  src={Image2}
                  alt={t("voces.imageAlt")}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-teal-400 text-white px-5 py-2 rounded-xl font-bold -rotate-3 shadow-lg text-sm md:text-base">
                ¡SIENTE LA MÚSICA!
              </div>
            </div>
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white p-1 rounded-full inline-block mb-6">
                <div className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {t("nav.voces")}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 font-serif">
                {t("voces.title")}
              </h2>
              <div className="space-y-5 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {t("voces.description1")}
                </p>
                <p className="text-lg leading-relaxed">
                  {t("voces.description2")}
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-l-4 border-teal-500 shadow-md mt-8">
                  <h3 className="font-semibold text-teal-800 mb-3 text-lg">
                    {t("howToJoin")}
                  </h3>
                  <p className="mb-5">{t("voces.joinInfo")}</p>
                  <Link
                    href="tg://resolve?domain=@SaulAndresn"
                    className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394a.759.759 0 0 1-.6.295h-.005l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                    {t("contactButton")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-gradient-to-r from-sky-600 to-indigo-500 py-10 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="text-sky-100 font-medium text-lg">
              {t("footer.text")}
            </p>
            <div className="hidden md:block w-1 h-8 bg-sky-200 rounded-full"></div>
            <Link
              href="/"
              className="text-white hover:text-sky-200 underline text-lg transition-colors duration-300"
            >
              {t("footer.homeLink")}
            </Link>
          </div>
          <div className="mt-6 flex justify-center space-x-6">
            {["🎻", "🎺", "🪕", "🎤", "🪘"].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl hover:scale-125 transition-transform duration-300"
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
