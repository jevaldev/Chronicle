import { ReviewCardProps } from "@/app/types/ReviewCardProps";
import Image from "next/image";
import { StarSVG, HalfStarSVG, EmptyStar } from "@/app/assets/svg/star";

export function ReviewCard({
  image,
  title,
  description,
  rating,
}: ReviewCardProps) {
  // calcular número de estrellas llenas
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-4 max-w-[480px] h-[180px] [background-color:#364156] px-6 py-4 shadow-md transition-all overflow-hidden">
      <div className="relative w-28 h-full flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>
      <section className="flex flex-col gap-2 flex-grow overflow-hidden">
        <header>
          <h2 className="text-lg text-white font-bold truncate" title={title}>
            {title}
          </h2>

          <div className="flex items-center gap-1 text-yellow-400">
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
        </header>
        <p className="text-[#E9F8FF] text-sm leading-snug overflow-hidden text-ellipsis line-clamp-4">
          {description}
        </p>
      </section>
    </div>
  );
}
