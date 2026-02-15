import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import KappaNavbar from "@/components/KappaNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coeficiente Kappa (κ) - Diacua Viva",
  description: "Transformando la entropía interna en activos de soberanía exportadora. Sistema de medición de vitalidad organizacional para empresas exportadoras.",
  keywords: ["coeficiente kappa", "vitalidad organizacional", "exportación", "piedemonte llanero", "colombia"],
  authors: [{ name: "Francisco Javier Valenzuela Forero" }],
  openGraph: {
    title: "Coeficiente Kappa (κ) - Diacua Viva",
    description: "La métrica definitiva que separa a los productores locales de los exportadores globales",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <KappaNavbar />
        {children}
      </body>
    </html>
  );
}
