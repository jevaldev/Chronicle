import type { Metadata } from "next";
import "./globals.css";
import { Navbaar } from "./components/templates/navbar";
import { FooterSection } from "./components/templates/footerSection";

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
      <body className={``}>
        <Navbaar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
