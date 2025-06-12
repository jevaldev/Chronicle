"use client";

import { LeftArrow, RightArrow } from "@/app/assets/svg/arrow";
import { Films } from "@/app/types/movies";
import { useRef } from "react";
import { FilmPoster } from "../molecules/filmPoster";

type Props = {
  movies: Films[];
};

export default function Carousel({ movies }: Props) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-[-20] top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
      >
        <LeftArrow />
      </button>

      <ul
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth scroll-px-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {movies.map((movie) => (
          <li
            key={movie.imdbID}
            className="min-w-[243px] flex-shrink-0 scroll-snap-align-start"
          >
            <FilmPoster {...movie} />
          </li>
        ))}
      </ul>

      <button
        onClick={scrollRight}
        className="absolute right-[-20] top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
      >
        <RightArrow />
      </button>
    </section>
  );
}
