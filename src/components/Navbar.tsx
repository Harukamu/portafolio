import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Tecnologías", href: "#tech" },
  { name: "Educación", href: "#education" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute md:static md:flex gap-6 top-16 right-4 p-5 shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-red-700 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
