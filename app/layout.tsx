import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbaar } from "./components/templates/navbar";
import { FooterSection } from "./components/templates/footerSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chronicle",
  description:
    "Una aplicación en donde puedes guardar tus reseñas de películas, series y videojuegos. Explora reseñas de otros usuarios y comparte tus opiniones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbaar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
