export type Films = {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
};

export interface OmdbApiResponse {
  Search?: Films[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}
