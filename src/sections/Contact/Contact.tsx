import SectionTitle from "../../components/SectionTitle";
import ButtonContact from "../../components/Button";
import {Linkedin, MessageCircle, Mail, Github} from "lucide-react";
import { useLanguage } from "../../Hooks/useLanguage";

export default function Contact() {
  const {t} = useLanguage();
  const contacts = [
    {
      name: "GitHub",
      icon: <Github size={26} />,
      url: "https://github.com/Harukamu",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={26} />,
      url: "https://www.linkedin.com/in/katia-burgos-a77a24213/",
      color: "hover:bg-blue-700 hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={26} />,
      url: "https://wa.me/51925392741",
      color: "hover:bg-green-600 hover:text-white",
    },
    {
      name: "Correo",
      icon: <Mail size={26} />,
      url: "mailto:olimfactum@gmail.com",
      color: "hover:bg-red-600 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-10">
      <SectionTitle title={t.contact.title} content="" />

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {contacts.map((item) => (
          <ButtonContact
            key={item.name}
            name={item.name}
            icon={item.icon}
            url={item.url}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}