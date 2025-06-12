// app/lib/omdb/getMovies.ts
import { Films, OmdbApiResponse } from "@/app/types/movies";

export async function getMovies(query: string, type: string): Promise<Films[]> {
  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    throw new Error("Lo siento hubo un error al obtener los datos de busqueda");
  }

  const fetchMovies = async (page: number) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
        query
      )}&page=${page}&type=${type}`,
      { cache: "force-cache" }
    );

    if (!res.ok) {
      throw new Error(
        `Error al obtener los datos de la API OMDB (page ${page}).`
      );
    }

    const data: OmdbApiResponse = await res.json();

    if (data.Response === "False") {
      console.warn(
        `Error por parte del proveedor OMDb al obtener los datos de busqueda: ${data.Error}`
      );
      return [];
    }

    const filteredResults = data.Search?.filter(
      (movie) => movie.Poster !== "N/A" && movie.Poster.startsWith("http")
    );

    return filteredResults;
  };

  const [page1, page2] = await Promise.all([fetchMovies(1), fetchMovies(2)]);

  return [...(page1 || []), ...(page2 || [])];
}
