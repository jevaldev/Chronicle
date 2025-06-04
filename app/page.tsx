import Image from "next/image";
import welcomeImage from "@/public/dibujo-bienvenida.svg";
import { BackgroundSVG } from "./components/atoms/backgroundSVG";
import { ClipPathDesktop, ClipPathMobile } from "./components/atoms/clipPaths";
import { ReviewCard } from "./components/molecules/reviews";

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <BackgroundSVG />
      <ClipPathDesktop />
      <ClipPathMobile />

      <section className="flex px-8 items-center justify-evenly h-screen relative z-10 flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Bienvenido a Chronicle</h1>
            <p className="text-lg mb-8 text-neutral-500">
              Una aplicación en donde puedes guardar tus reseñas de películas,
              series y videojuegos. Explora reseñas de otros usuarios y comparte
              tus opiniones.
            </p>
            <div className="flex md:justify-start">
              <a
                href="/about"
                className="px-8 py-3 [background-color:#0099FF] text-white rounded-lg hover:[background-color:#364156] transition-colors"
              >
                EXPLORAR RESEÑAS
              </a>
            </div>
          </div>

          <Image
            src={welcomeImage}
            alt="Bienvenida a Chronicle"
            width={500}
            height={300}
            className="mt-8"
          />
        </div>
        <section className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-6 w-full">
            <div className="rotate-[-2deg] md:hover:rotate-0 transition-transform duration-300 w-full md:w-auto">
              <ReviewCard
                image="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                title="Inception"
                description="Una película de ciencia ficción que desafía la realidad y explora el mundo de los sueños."
                rating={4.5}
              />
            </div>
            <div className="rotate-[1.5deg] md:hover:rotate-0 transition-transform duration-300 w-full md:w-auto">
              <ReviewCard
                image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                title="The Witcher"
                description="Una serie de fantasía épica basada en la saga de libros y videojuegos, llena de magia y aventuras."
                rating={4.0}
              />
            </div>
            <div className="rotate-[-1deg] md:hover:rotate-0 transition-transform duration-300 w-full md:w-auto">
              <ReviewCard
                image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                title="The Legend of Zelda: Breath of the Wild"
                description="Un videojuego de aventuras en un mundo abierto, donde los jugadores pueden explorar y descubrir secretos."
                rating={5.0}
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
