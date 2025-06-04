import Image from "next/image";
import backgroundImage from "@/public/frame_background.svg";

export function BackgroundSVG() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={backgroundImage}
        alt="Fondo de la página"
        fill
        className="object-cover opacity-30"
      />
    </div>
  );
}
