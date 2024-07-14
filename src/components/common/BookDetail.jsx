import { bigStars } from "@/assets";
import Image from "next/image";
import AddToCart from "./AddToCart";
import BookImage from "./BookImage";
import Gallery from "./Gallery";

export default async function BookDetail({ product }) {
  const { photos, name, description, id } = product;
  const updatedInfo = JSON?.parse(description || "{}") || {};
  const itemAmount = Number(updatedInfo.amount);
  const image = photos?.[0]?.url ?? "";
  const itemToAdd = {
    image,
    title: name,
    author: updatedInfo.author,
    amount: itemAmount,
    id: id,
    quantity: 1,
    subtotal: itemAmount,
  };

  return (
    <div className="lg:max-w-[767px]  max-w-[350px] w-full">
      <div className="flex flex-wrap lg:flex-nowrap items-center  lg:gap-6 justify-between pb-2 lg:pb-9 ">
        <div></div>
        <div className="min-w-[233px]  hidden lg:block max-w-[233px]">
          <BookImage
            image={`https://api.timbu.cloud/images/${image}`}
            title={name}
          />
        </div>
        <div>
          <h2 className=" capitalize  text-[#1C1C1C] lg:mb-2 text-base lg:text-xl font-medium">
            {name}
          </h2>
          <p className=" capitalize mb-2 text-sm lg:text-base  text-[#73768A] lg:mb-4">
            {updatedInfo.author}
          </p>
          <div className=" w-full  flex-wrap flex gap-2 items-center mb-2 lg:mb-[14px] ">
            <Image src={bigStars} alt="" />
            <p className=" text-sm lg:text-base whitespace-nowrap font-semibold text-[#737373]">
              5430 Reviews
            </p>
          </div>
          <p className=" text-[#1C1C1C] text-xs lg:text-base mb-5">
            {updatedInfo.description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, adipisci itaque repellendus expedita odit sapiente harum, veritatis a molestiae corporis suscipit dolorem in laboriosam ipsum fugiat necessitatibus autem ratione facere?"}
          </p>
          <p className=" text-base lg:text-xl text-[#1C1C1C]">
            1 X {updatedInfo.amount}
          </p>
          <div className="w-full mt-2">
            <AddToCart itemToAdd={itemToAdd} />
          </div>
        </div>
      </div>
      <div className=" ">
        <h3>Book Gallery</h3>
        <Gallery photos={photos} />
      </div>
    </div>
  );
}
