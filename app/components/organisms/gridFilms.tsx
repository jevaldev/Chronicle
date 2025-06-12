import { Films } from "@/app/types/movies";
import { FilmPoster } from "../molecules/filmPoster";

type GridProps = {
  movies: Films[];
};

export function GridFilms({ movies }: GridProps) {
  return (
    <section className="">
      <ul className="grid grid-cols-5 gap-4">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="">
            <FilmPoster {...movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
