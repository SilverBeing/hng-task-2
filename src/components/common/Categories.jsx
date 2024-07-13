"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Categories({ data }) {
  const router = useRouter();
  return (
    <Select
      defaultValue="All Products"
      onValueChange={(value) => {
        if (value === "All Products") {
          return router.push(`/products`);
        }
        router.push(`/products?category=${value}`);
      }}
      className=" max-w-[350px] mx-auto mb-[62px]"
    >
      <SelectTrigger className="max-w-[350px] mx-auto capitalize mb-[62px] py-4 px-6 rounded-[12px] ">
        <SelectValue
          className="capitalize lg:text-[31px]"
          placeholder="Select"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="capitalize cursor-pointer" value="All Products">
          All Products
        </SelectItem>

        {data?.map((category) => (
          <SelectItem
            key={category.id}
            className="capitalize cursor-pointer"
            value={category.id}
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
