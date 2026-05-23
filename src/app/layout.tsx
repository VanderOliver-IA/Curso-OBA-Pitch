import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scripts } from "@/components/Scripts";

export const metadata: Metadata = {
  title: "Oficina Belas Artes - Sua Jornada Artística Começa Aqui",
  description: "Descubra seu potencial artístico na Oficina Belas Artes. Aulas de desenho, mangá e pintura no Méier e Tijuca. Arte para todos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Scripts />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
