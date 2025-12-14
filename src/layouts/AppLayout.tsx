import { LanguageProvider } from "../components/LanguageContext";
import Navbar from "../components/Navbar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-20">{children}</main>
    </LanguageProvider>
  );
}