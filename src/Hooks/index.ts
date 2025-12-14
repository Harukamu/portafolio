import { es } from "../Hooks/es";
import { en } from "../Hooks/en";

export const translations = { es, en };
export type Language = keyof typeof translations;