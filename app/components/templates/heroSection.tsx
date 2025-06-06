import Image from "next/image";
import welcomeImage from "@/public/dibujo-bienvenida.svg";
// import { reviews, users } from "@/app/lib/mockData";
// import { ReviewCard } from "../molecules/reviews";
// import clsx from "clsx";

export const HeroSection = () => {
  // const reviewsWithUsername = reviews.map((review) => {
  //   const user = users.find((u) => u.id === review.userId);
  //   return {
  //     ...review,
  //     user: user?.username ? user?.username : "Usuario desconocido",
  //   };
  // });

  return (
    <div className=" flex flex-col items-center justify-center gap-8">
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="max-w-2xl flex flex-col items-center justify-center md:block">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a Chronicle</h1>
          <p className="text-lg md:text-start  text-center mb-8 text-neutral-500">
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
      {/* <section className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row flex-wrap gap-6 w-full">
          {reviewsWithUsername.map((review, index) => (
            <div
              key={index}
              className={clsx(
                index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]",
                "lg:hover:rotate-0",
                "transition-transform duration-300",
                index === 1
                  ? "self-end lg:self-auto"
                  : "self-start lg:self-auto",
                "flex-1 min-w-[280px] max-w-full md:max-w-[480px]"
              )}
            >
              <ReviewCard
                image={review.image}
                title={review.title}
                description={review.description}
                rating={review.rating}
                user={review.user}
              />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};
