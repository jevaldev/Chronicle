import Image from "next/image";

export const FeatureSection = () => {
  return (
    <section className="py-24 flex flex-col items center justify center w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-24">
        <article className="gap-6 flex flex-col grid-cols-2 md:grid md:grid-cols-2">
          <picture className="w-full aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Imagen de reseñas organizadas por categorías"
              fill
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </picture>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold [color:#364156]">
              Explora Reseñas por Categorías
            </h2>
            <p className="text-lg text-neutral-500">
              Descubre reseñas organizadas por categorías de películas, series y
              videojuegos. Encuentra recomendaciones y comparte tus opiniones
              con la comunidad.
            </p>
          </div>
        </article>
        <article className="flex flex-col md:grid md:grid-cols-5 gap-6">
          <picture className="aspect-square relative col-span-2 lg:w-full w-8/12">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Imagen para guardar contenido por ver o jugar"
              fill
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </picture>
          <div className="flex flex-col col-span-3 lg:col-span-2 justify-center gap-4">
            <h2 className="text-3xl font-bold [color:#364156]">
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
          <picture className="w-full aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Imagen de comunidad y opiniones"
              fill
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </picture>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold [color:#364156]">
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
