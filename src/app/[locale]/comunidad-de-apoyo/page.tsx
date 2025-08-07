import { useTranslations } from "next-intl";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/../public/kfu.jpeg";
import Image2 from "@/../public/kiu.jpeg";
import Image3 from "@/../public/kai.jpeg";
import Image4 from "@/../public/kagasu.jpeg";
import Image5 from "@/../public/energetica.jpeg";
import Image6 from "@/../public/universidadJosep.jpeg";
import Image7 from "@/../public/universidadsofia.jpeg";
import Image8 from "@/../public/Isaac.jpg";
import Image9 from "@/../public/joan.jpg";
import Image10 from "@/../public/galapagos.jpg";
import Image11 from "@/../public/amdrea.jpg";
import Image12 from "@/../public/lala.jpg";
import Image13 from "@/../public/lucela.jpg";
import Image14 from "@/../public/santiago.jpg";

// Definición de tipos
type Representative = {
  id: number;
  name: string;
  university: string;
  photo: StaticImageData;
  description: string;
  telegram: string;
};

type Leader = {
  role: string;
  name: string;
  photo: StaticImageData;
  description: string;
  telegram: string;
};

type CountryLeaders = {
  association: Leader[];
  colombia: Leader[];
  ecuador: Leader[];
};

// Datos de ejemplo - reemplaza con tus datos reales
const universityReps: Representative[] = [
  {
    id: 1,
    name: "Valeria Mejia",
    university: "КФУ",
    photo: Image1,
    description: "Representante",
    telegram: "@valelum",
  },
  {
    id: 2,
    name: "Tatiana Cortes",
    university: "КИУ",
    photo: Image2,
    description: "Representante",
    telegram: "@Tatiisc2807",
  },
  {
    id: 3,
    name: "Diego Guerrero",
    university: "КГЭУ",
    photo: Image5,
    description: "Representante",
    telegram: "@Dagf22",
  },
  {
    id: 4,
    name: "Maria Manrique",
    university: "КГАСУ",
    photo: Image4,
    description: "Representante",
    telegram: "@Mariamanrique23",
  },
  {
    id: 5,
    name: "John Lobo",
    university: "КАИ",
    photo: Image3,
    description: "Representante",
    telegram: "@JhonLobo",
  },
  {
    id: 6,
    name: "Sofia Novoa",
    university: "КГMY",
    photo: Image7,
    description: "Representante",
    telegram: "@sofiinov",
  },
  {
    id: 7,
    name: "Joseph",
    university: "КНИТУ",
    photo: Image6,
    description: "Representante",
    telegram: "@Yoyo2205va",
  },
];

const countryLeaders: CountryLeaders = {
  association: [
    {
      role: "Presidente",
      name: "VALERIA MEJIA",
      photo: Image13,
      description: "Presidenta de la Asociación Latinoamericana",
      telegram: "@valelum",
    },
  ],
  colombia: [
    {
      role: "Presidente",
      name: "ANDREA LIBONATI",
      photo: Image11,
      description: "Presidente de la comunidad colombiana",
      telegram: "@andrealibonatti",
    },
    {
      role: "Vicepresidente",
      name: "JOAN MORENO",
      photo: Image9,
      description: "Vicepresidente de la comunidad colombiana",
      telegram: "@cappuccinazo",
    },
    {
      role: "Vicepresidente",
      name: "SANTIAGO CASTILLO",
      photo: Image14,
      description: "Vicepresidente de la comunidad colombiana",
      telegram: "@el_rolito",
    },
    {
      role: "secretaria",
      name: "LAURA ESQUIVEL",
      photo: Image12,
      description: "Secretaria de la comunidad colombiana",
      telegram: "@Lalaesquivel",
    },
  ],
  ecuador: [
    {
      role: "Presidente",
      name: "ISAAC QUIJANO",
      photo: Image8,
      description: "Presidente de la comunidad Ecuatoriana",
      telegram: "@isaacquijano",
    },
    {
      role: "Vicepresidente",
      name: "SHIRLEY SUAREZ",
      photo: Image10,
      description: "Vicepresidente de la comunidad Ecuatoriana",
      telegram: "@Shirlysc_21",
    },
  ],
};

// Componente reutilizable para tarjetas de líderes con tipado
function LeaderCard({ leader }: { leader: Leader }) {
  const t = useTranslations("SupportCommunity");

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 w-full max-w-md mx-auto">
      <div className="relative h-80 w-full">
        <Image
          src={leader.photo}
          alt={`Foto de ${leader.name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
            {leader.role}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{leader.description}</p>
        {leader.telegram && (
          <Link
            href={`https://t.me/${leader.telegram.replace("@", "")}`}
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            target="_blank"
          >
            <span className="mr-2">✉️</span> {t("contactTelegram")}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function SupportCommunity() {
  const t = useTranslations("SupportCommunity");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navbar Horizontal */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link
              href="#university-reps"
              className="nav-link px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-blue-600"
            >
              {t("universityReps")}
            </Link>
            <Link
              href="#country-leaders"
              className="nav-link px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-blue-600"
            >
              {t("countryLeaders")}
            </Link>
          </div>
        </div>
      </nav>

      {/* Sección Representantes Universitarios */}
      <section id="university-reps" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("universityReps")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {universityReps.map((rep) => (
              <div
                key={rep.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={rep.photo}
                    alt={`Foto de ${rep.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {rep.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {rep.university}
                  </p>
                  <p className="text-gray-600 mb-4">{rep.description}</p>
                  {rep.telegram && (
                    <Link
                      href={`https://t.me/${rep.telegram.replace("@", "")}`}
                      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                      target="_blank"
                    >
                      <span className="mr-2">📨</span> {t("contactTelegram")}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Líderes de Países */}
      <section id="country-leaders" className="py-20 bg-blue-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("communityLeaders")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Presidente de la Asociación */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
              {t("associationLeaders")}
            </h3>
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                {countryLeaders.association.map((leader, index) => (
                  <LeaderCard key={index} leader={leader} />
                ))}
              </div>
            </div>
          </div>

          {/* Colombia */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
              {t("colombianCommunity")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {countryLeaders.colombia.map((leader, index) => (
                <LeaderCard key={index} leader={leader} />
              ))}
            </div>
          </div>

          {/* Ecuador */}
          <div>
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
              {t("ecuadorianCommunity")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {countryLeaders.ecuador.map((leader, index) => (
                <LeaderCard key={index} leader={leader} />
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
