import { GridFilms } from "../components/organisms/gridFilms";
import { RecommendedFilms } from "../components/organisms/recommendedFilms";
import { getMovies } from "../lib/omdb";

type Props = {
  searchParams: {
    query?: string;
    type?: string;
    sort?: string;
  };
};

export default async function FilmsPage({ searchParams }: Props) {
  const query = searchParams.query || "";
  const sort = searchParams.sort || "year-desc";
  const type = searchParams.type || "";

  const movies = await getMovies(query, type);

  if (sort === "year-desc") movies.sort((a, b) => b.Year.localeCompare(a.Year));
  if (sort === "year-asc") movies.sort((a, b) => a.Year.localeCompare(b.Year));
  if (sort === "title-asc")
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  if (sort === "title-desc")
    movies.sort((a, b) => b.Title.localeCompare(a.Title));

  return (
    <section className="lg:px-0 px-8">
      <article className="flex flex-col gap-8">
        {query === "" ? (
          <RecommendedFilms filmName1="spider-man" filmName2="batman" />
        ) : movies.length === 0 ? (
          <p className="text-neutral-600">
            No se encontraron resultados para {query}.
          </p>
        ) : (
          <>
            <h2 className="text-xl uppercase text-neutral-600 font-bold border-b-2 border-neutral-400 mb-2">
              Resultados para: {query}
            </h2>
            <GridFilms movies={movies} />
          </>
        )}
      </article>
    </section>
  );
}
