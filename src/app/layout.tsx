import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Intégration de la police Amiri (fichiers .ttf)
const amiri = localFont({
  src: "./fonts/Amiri-Regular.ttf", // Chemin vers votre fichier Amiri .ttf
  variable: "--font-amiri",
  weight: "400 700", // Spécifiez les poids disponibles
});

export const metadata: Metadata = {
  title: "التكتل الشبابي",
  description: "لتنمية القدية",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${amiri.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
