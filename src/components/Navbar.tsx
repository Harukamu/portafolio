import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageContext } from "./LanguageContext";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "tech", href: "#tech" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, changeLanguage, t } = useContext(LanguageContext);
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">{t.navbar.portfolio}</h1>
        {/* Mobile */}
        <button
          className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute md:static md:flex gap-6 top-16 right-4 p-5 shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href} className="hover:text-red-700 transition">
                  {t.navbar[link.key as keyof typeof t.navbar]}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                changeLanguage(language === "es" ? "en" : "es")
              }
              className="border px-1 py-1 rounded text-sm hover:bg-blue-500 transition"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
