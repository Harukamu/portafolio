import { motion } from "framer-motion";
import { useLanguage } from "../../Hooks/useLanguage";

export default function Hero() {
  const{t}=useLanguage();
  return (
    <section id="hero" 
    className="
        min-h-screen 
        flex flex-col md:flex-row 
        items-center justify-center 
        gap-10 md:gap-15 
        text-center md:text-left
      ">
      <motion.img
        src="images/card3.png"
        alt=" "
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-48 h-60 md:w-64 md:h-90 object-cover rounded-full shadow-lg"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">{t.hero.title}
          {""} <span className="text-blue-700">[Katia Mamani Burgos]</span>
        </h1>
        <p className="text-2xl text-gray-700">{t.hero.role}</p>
      </motion.div>
    </section>
  );
}