import { Films } from "@/app/types/movies";
import Image from "next/image";

export function FilmPoster({ Title, Year, Poster, Type }: Films) {
  return (
    <picture className="group w-full flex justify-center relative aspect-[2/3] cursor-pointer">
      <Image
        src={Poster}
        fill
        alt={`Poster de la película ${Title}, ${Year}`}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center text-white p-4 transition-opacity duration-300 ease-in-out border-[3px] border-[#0099FF] gap-4">
        <header>
          <h2 className="text-xl">{Title}</h2>
          <p className="text-2xl font-bold te">{Year}</p>
        </header>
        <p className="text-sm capitalize text-neutral-300">{Type}</p>
      </div>
    </picture>
  );
}
