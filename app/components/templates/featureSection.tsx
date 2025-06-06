import Image from "next/image";
import exploreCategoriesImage from "@/public/explore-categories.svg";
import toDoListImage from "@/public/to-do-list.svg";
import shareReviewsImage from "@/public/share-reviews.svg";

export const FeatureSection = () => {
  return (
    <section className="py-24 flex flex-col items center justify center w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-24">
        <article className="gap-6 flex flex-col grid-cols-2 md:grid md:grid-cols-2">
          <picture className="relative lg:w-[600px] lg:h-[420px] flex justify-center md:justify-start">
            <Image
              src={exploreCategoriesImage}
              alt="Imagen de reseñas organizadas por categorías"
              fill
              className="hidden lg:block object-cover rounded"
              loading="lazy"
            />
            <Image
              src={exploreCategoriesImage}
              alt="Imagen de reseñas organizadas por categorías"
              width={400}
              height={300}
              className="lg:hidden object-cover rounded"
              loading="lazy"
            />
          </picture>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold [color:#364156]">
              Explora Reseñas por Categorías
            </h2>
            <p className="text-lg text-neutral-500">
              Descubre reseñas organizadas por categorías de películas, series y
              videojuegos. Encuentra recomendaciones y comparte tus opiniones
              con la comunidad.
            </p>
          </div>
        </article>
        <article className="gap-6 flex flex-col md:grid md:grid-cols-5">
          <picture className="relative lg:w-[480px] lg:h-[260px] md:h-auto aspect-[16/9] md:col-span-2">
            <Image
              src={toDoListImage}
              alt="Imagen de reseñas organizadas por categorías"
              fill
              className="object-cover rounded"
              loading="lazy"
            />
          </picture>

          <div className="flex flex-col justify-center gap-4 md:col-span-2">
            <h2 className="text-2xl font-bold [color:#364156]">
              Guarda Contenido por Ver o Jugar
            </h2>
            <p className="text-lg text-neutral-500">
              Mantén un registro de las películas, series y videojuegos que
              deseas ver o jugar. Organiza tu lista y nunca te pierdas de tus
              contenidos favoritos.
            </p>
          </div>
        </article>
        <article className="gap-6 flex flex-col grid-cols-2 md:grid md:grid-cols-2">
          <picture className="relative  flex justify-center md:justify-start">
            <Image
              src={shareReviewsImage}
              alt="Imagen de reseñas organizadas por categorías"
              width={600}
              height={350}
              className="hidden lg:block object-cover rounded"
              loading="lazy"
            />
            <Image
              src={shareReviewsImage}
              alt="Imagen de reseñas organizadas por categorías"
              width={400}
              height={300}
              className="lg:hidden block object-cover rounded items-center"
              loading="lazy"
            />
          </picture>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold [color:#364156]">
              Comparte tus Opiniones con la Comunidad
            </h2>
            <p className="text-lg text-neutral-500">
              Únete a una comunidad apasionada por el cine, las series y los
              videojuegos. Comparte tus reseñas, descubre nuevas recomendaciones
              y participa en discusiones sobre tus contenidos favoritos.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
