import BookCollection from "@/components/BookCollection";
import Categories from "@/components/common/Categories";
import MostSearch from "@/components/MostSearch";
import { PaginationI } from "@/components/Pagination";
import { fetchAllCategories, fetchAllProducts } from "@/lib";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Home({ searchParams }) {
  const { total, products } = await fetchAllProducts(
    searchParams.page ?? 1,
    searchParams.category ?? " "
  );
  const { products: mostSearched } = await fetchAllProducts(
    1,
    "3ff5d4050d8642e09d27dd066895de25"
  );
  const { categories } = await fetchAllCategories();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div id="products" className="mt-[-100px]">
          <Categories data={categories} />
          <BookCollection title="Best Seller" data={products} />

          <PaginationI total={total} />
          <MostSearch data={mostSearched} />
        </div>
      </Suspense>
    </>
  );
}
