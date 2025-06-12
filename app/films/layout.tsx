import type { ReactNode } from "react";
import SearchBar from "../components/molecules/searcBar";
import Filters from "../components/molecules/filters";
// import FiltersSection from "@/components/organisms/FiltersSection";

export default function FilmsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-8 gap-8">
      {/* <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <FiltersSection />
        </header> */}

      <header className="flex gap-4">
        <SearchBar />
        <Filters />
      </header>

      <main>{children}</main>
    </section>
  );
}
