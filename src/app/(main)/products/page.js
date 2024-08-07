import BookCollection from "@/components/BookCollection";
import Categories from "@/components/common/Categories";
import MostSearch from "@/components/MostSearch";
import { PaginationI } from "@/components/Pagination";
import { fetchAllCategories, fetchAllProducts } from "@/lib";

export default async function Home({ searchParams }) {
  const nextPage = Number(searchParams.page) + 1;

  const { total, products } = await fetchAllProducts(
    searchParams.page ?? 1,
    searchParams.category ?? " "
  );
  const { products: secondPageProduct } = await fetchAllProducts(
    nextPage.toString(),
    searchParams.category ?? " "
  );
  const { products: mostSearched } = await fetchAllProducts(
    1,
    "3ff5d4050d8642e09d27dd066895de25"
  );

  const { categories } = await fetchAllCategories();

  return (
    <>
      <div id="products" className="mt-[-100px]">
        <Categories data={categories} />
        <BookCollection title="Best Seller" data={products} />
        <div className=" hidden">
          <BookCollection title="Best Seller" data={secondPageProduct} />
        </div>

        <PaginationI total={total} />
        <MostSearch data={mostSearched} />
      </div>
    </>
  );
}
