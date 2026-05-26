import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GroupEduTech | Automatización · Desarrollo Web · IA · Marketing Digital",
  description:
    "Somos un grupo especializado en automatizaciones, desarrollo de sitios web, formación en Inteligencia Artificial para todos los niveles y Marketing e Imagen Corporativa Digital en Venezuela.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased bg-[#060B18] text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
