import { createContext, useState } from "react";
import { translations } from "../Hooks/index";
import type { Language } from "../Hooks/index";

type LanguageContextType = {
  language: Language;
  t: typeof translations.es;
  changeLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        changeLanguage: setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}