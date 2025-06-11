import Carousel from "../components/templates/carousel";
import { Movie } from "../types/movies";

async function getMovies(query: string): Promise<Movie[]> {
  const apiKey = process.env.OMDB_API_KEY;

  const resPage1 = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=1`
  );
  const dataPage1 = await resPage1.json();

  const resPage2 = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=2`
  );
  const dataPage2 = await resPage2.json();

  const combinedResults = [...dataPage1.Search, ...dataPage2.Search];

  return combinedResults;
}

export default async function FilmsPage() {
  const batmanMovies = await getMovies("batman");
  const spiderManMovies = await getMovies("spider-man");

  return (
    <main className="max-w-7xl mx-auto py-8 lg:px-0 px-8">
      <section className="flex flex-col gap-8">
        <div>
          <h2 className="text-xl uppercase text-neutral-600 font-bold border-b-2 border-neutral-400 mb-2">
            Películas de Batman
          </h2>
          <Carousel movies={batmanMovies} />
        </div>
        <div>
          <h2 className="text-xl uppercase text-neutral-600 font-bold border-b-2 border-neutral-400 mb-2">
            Películas de Spider-Man
          </h2>
          <Carousel movies={spiderManMovies} />
        </div>
      </section>
    </main>
  );
}
