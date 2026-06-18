import type { Metadata } from "next";
import { Montserrat, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dilectra — Arquitectura & Ingeniería",
  description:
    "Somos su mejor aliado para su proyecto. Servicios profesionales en Ingeniería, Arquitectura y Construcción en todo Costa Rica.",
  keywords: "arquitectura, ingeniería, construcción, Costa Rica, Dilectra",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${archivo.variable}`}
    >
      <body className="bg-brand-black text-brand-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
