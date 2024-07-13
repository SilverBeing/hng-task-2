import { APIKEY, APPID, BASE_URL, ORGANIZATION_ID } from "@/utils";

export const fetchAllProducts = async (page, category = "") => {
  try {
    const res = await fetch(
      `${BASE_URL}/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${page}&size=10&Appid=${APPID}&Apikey=${APIKEY}&category_id=${category}`,
      {
        next: { revalidate: 20000 },
      }
    );

    const data = await res.json();
    const total = data.total;
    const pageNumber = data.page;
    const size = data.size;
    const products = data.items;
    return { total, pageNumber, size, products };
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fetchAllCategories = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/categories?organization_id=${ORGANIZATION_ID}&reverse_sort=false&size=10&Appid=${APPID}&Apikey=${APIKEY}`,
      {
        next: { revalidate: 20000 },
      }
    );

    const data = await res.json();

    const categories = data?.items;
    return { categories };
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fetchProductById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/products/${id}?organization_id=${ORGANIZATION_ID}&reverse_sort=false&Appid=${APPID}&Apikey=${APIKEY}`,
      {
        next: { revalidate: 20000 },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
