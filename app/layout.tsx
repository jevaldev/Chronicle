import type { Metadata } from "next";
import "./globals.css";
import { Navbaar } from "./components/organisms/navbar";
import { FooterSection } from "./components/organisms/footer";

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
