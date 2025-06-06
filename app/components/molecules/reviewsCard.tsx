import { ReviewCardProps } from "@/app/types/cardProps";
import Image from "next/image";
import { StarSVG, HalfStarSVG, EmptyStar } from "@/app/assets/svg/star";

export function ReviewCard({
  image,
  title,
  description,
  rating,
  user,
}: ReviewCardProps) {
  // calcular número de estrellas llenas
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-4 w-full px-6 py-4 transition-all overflow-hidden border-b-1 border-neutral-400">
      <div className="relative w-24 md:w-[160px] h-[213px] flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>
      <section className="flex flex-col gap-2 flex-grow overflow-hidden">
        <header className="flex flex-col gap-0.5">
          <h3 className="text-xl font-bold truncate" title={title}>
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: filledStars }).map((_, i) => (
                <StarSVG key={`star-filled-${i}`} colorSVG="" />
              ))}
              {hasHalfStar && <HalfStarSVG key="half-star" />}
              {Array.from({ length: emptyStars }).map((_, i) => (
                <EmptyStar
                  key={`star-empty-${i}`}
                  colorSVG="oklch(85.2% 0.199 91.936)"
                />
              ))}
            </div>
            <span className="text-sm truncate text-[#011638]">{user}</span>
          </div>
        </header>
        <p className="text-[#4b5c7e] text-base leading-snug overflow-hidden text-ellipsis line-clamp-4">
          {description}
        </p>
      </section>
    </div>
  );
}
