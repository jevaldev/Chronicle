import { ContentListCardProps } from "@/app/types/cardProps";
import Image from "next/image";

export const ListCard = (list: ContentListCardProps) => {
  return (
    <a
      key={list.id}
      href={`/lists/${list.id}`}
      className="p-4 flex flex-col gap-2 border-b-1 border-neutral-400 hover:bg-[#f6f7f9] transition-colors cursor-pointer"
      aria-label={`Ver lista de contenido: ${list.name}`}
      role="listitem"
    >
      <header>
        <h3 className="text-base font-semibold text-neutral-600">
          {list.name}
        </h3>
      </header>

      <div className="flex items-center" role="list">
        {list.items.slice(0, 6).map((item, index) => (
          <div
            key={item.contentId}
            className={`relative h-[150px] ${
              index === 0 ? "w-[120px]" : "w-[70px] -ml-2"
            } rounded overflow-hidden [box-shadow:4px_0px_8px_rgba(0,0,0,0.2)]`}
            style={{ zIndex: 10 - index }}
            role="listitem"
          >
            <Image
              fill
              priority
              src={item.image}
              alt={`Imagen de ${item.title}`}
              title={item.title}
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>

      <footer className="flex gap-1">
        <p className="text-sm text-neutral-500">
          creado por <span className="text-[#011638]">{list.user}</span> -
        </p>
        <p className="text-neutral-500 text-sm">
          contiene {list.items.length} elementos
        </p>
      </footer>
    </a>
  );
};
