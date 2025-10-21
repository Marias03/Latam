"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split("/");
    const isRoot = segments.length <= 2;
    const newPath = isRoot
      ? `/${newLocale}`
      : `/${newLocale}/${segments.slice(2).join("/")}`;
    router.push(newPath);
  };

  if (pathname.endsWith("admin-auth")) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-sky-700 rounded-lg shadow-md p-1 hover:bg-sky-600 transition-colors">
      <select
        value={currentLocale}
        onChange={changeLanguage}
        className="bg-transparent text-white font-medium py-1 px-2 cursor-pointer focus:outline-none appearance-none"
      >
        <option value="en">🇬🇧 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="ru">🇷🇺 Русский</option>
      </select>
    </div>
  );
}
