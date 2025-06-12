"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../atoms/button";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    router.push(`/films?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 items-center w-full">
      <label htmlFor="search-films" className="sr-only">
        Buscar contenido
      </label>
      <input
        type="text"
        id="search-films"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar contenido peliculas o series..."
        className="border-1 border-[#364156] rounded p-2 grow"
      />
      <Button text="Buscar" />
    </form>
  );
}

// #0099FF
