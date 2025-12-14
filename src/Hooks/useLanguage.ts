import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

export const useLanguage = () => useContext(LanguageContext);