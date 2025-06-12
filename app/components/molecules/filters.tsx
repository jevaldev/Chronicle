"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", e.target.value);
    router.push(`/films?${params.toString()}`);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("type", e.target.value);
    router.push(`/films?${params.toString()}`);
  };

  return (
    <>
      <select
        onChange={handleTypeChange}
        defaultValue={searchParams.get("type") || "none"}
        className="border rounded px-3 py-2"
      >
        <option value="none" disabled hidden>
          Tipo de contenido
        </option>
        <option value="movie">Solo películas</option>
        <option value="series">Solo series</option>
      </select>
      <select
        onChange={handleSortChange}
        defaultValue={searchParams.get("sort") || "year-desc"}
        className="border rounded px-3 py-2"
      >
        <option value="none" disabled hidden>
          Ordernar por:
        </option>
        <option value="year-desc">De más nuevo a más viejo</option>
        <option value="year-asc">De más viejo a más nuevo</option>
        <option value="title-asc">A-Z</option>
        <option value="title-desc">Z-A</option>
      </select>
    </>
  );
}
