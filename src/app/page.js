import About from "@/components/About";
import BookCollection from "@/components/BookCollection";
import HeroSection from "@/components/HeroSection";
import MostSearch from "@/components/MostSearch";
import Pagination from "@/components/Pagination";
import { books } from "@/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <BookCollection title="Best Seller" data={books["best-seller"]} />
      <BookCollection title="Editor's Pick" data={books["editor-pack"]} />
      <MostSearch />
      <Pagination />
    </>
  );
}
