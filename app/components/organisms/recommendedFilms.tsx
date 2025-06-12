import Carousel from "./carousel";
import { getMovies } from "@/app/lib/omdb";

type FilmsProps = {
  filmName1: string;
  filmName2: string;
};

export async function RecommendedFilms({ filmName1, filmName2 }: FilmsProps) {
  const movies1 = await getMovies(filmName1, "");
  const movies2 = await getMovies(filmName2, "");

  return (
    <>
      <div>
        <h2 className="text-xl uppercase text-neutral-600 font-bold border-b-2 border-neutral-400 mb-2">
          Películas de {filmName1}
        </h2>
        <Carousel movies={movies1} />
      </div>
      <div>
        <h2 className="text-xl uppercase text-neutral-600 font-bold border-b-2 border-neutral-400 mb-2">
          Películas de {filmName2}
        </h2>
        <Carousel movies={movies2} />
      </div>
    </>
  );
}
