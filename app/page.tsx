import { BackgroundSVG } from "./components/atoms/backgroundSVG";
import { ClipPathDesktop, ClipPathMobile } from "./components/atoms/clipPaths";
import { ReviewCard } from "./components/molecules/reviewsCard";
import { contentLists, reviews, users } from "@/app/lib/mockData";
import { FeatureSection } from "./components/templates/featureSection";
import { HeroSection } from "./components/templates/heroSection";
import { ListCard } from "./components/molecules/listCard";

export default function Home() {
  const reviewsWithUsername = reviews.map((review) => {
    const user = users.find((u) => u.id === review.userId);
    return {
      ...review,
      user: user?.username ? user?.username : "Usuario desconocido",
    };
  });

  const contentListsWithUsernames = contentLists.map((list) => {
    const user = users.find((u) => u.id === list.userId);
    return {
      ...list,
      user: user?.username ? user?.username : "Usuario desconocido",
    };
  });

  return (
    <main className="relative">
      <BackgroundSVG />
      <ClipPathDesktop />
      <ClipPathMobile />

      <section className="px-8 h-screen relative z-10 flex-col">
        <HeroSection />
        <FeatureSection />

        <section className="py-16 relative z-10 grid gap-8 grid-cols-3 max-w-7xl mx-auto">
          <div className="col-span-2 flex flex-col gap-2">
            <header className="flex items-center justify-between border-b-2 border-neutral-400 pb-2">
              <h2 className="text-xl font-bold text-neutral-700 ">
                Reseñas recientes
              </h2>
              <a className="text-neutral-500 cursor-pointer hover:underline hover:text-neutral-700 transition-colors">
                Ver más reseñas
              </a>
            </header>
            <div className="flex flex-col gap-4 w-full">
              {reviewsWithUsername.map((review, index) => (
                <ReviewCard
                  key={index}
                  image={review.image}
                  title={review.title}
                  description={review.description}
                  rating={review.rating}
                  user={review.user}
                />
              ))}
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-2">
            <header className="flex items-center justify-between border-b-2 border-neutral-400 pb-2">
              <h2 className="text-xl font-bold text-neutral-700 ">
                Listas de contenido
              </h2>
              <a className="text-neutral-500 cursor-pointer hover:underline hover:text-neutral-700 transition-colors">
                Ver más Listas
              </a>
            </header>
            <div className="flex flex-col gap-4 w-full" role="list">
              {contentListsWithUsernames.map((list) => (
                <ListCard key={list.id} {...list} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
