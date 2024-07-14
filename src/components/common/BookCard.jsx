"use client";
import { fullHeart, heart, star } from "@/assets/icons";
import { formatNumber } from "@/utils";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AddToCart from "./AddToCart";
import BookImage from "./BookImage";

export default function BookCard({ book }) {
  const [like, setLike] = useState(true);
  const { name, description, id, photos } = book;
  const updatedInfo = JSON?.parse(description || "{}") || {};
  const itemAmount = Number(updatedInfo.amount);
  const router = useRouter();

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
    <>
      <div className="lg:min-w-[233px] w-full min-w-[150px]">
        <button
          onClick={() => router.push(`/products/${id}`)}
          className=" cursor-pointer"
        >
          <BookImage
            title={name}
            image={`https://api.timbu.cloud/images/${image}`}
          />
        </button>
        <div>
          <div className=" flex mb-4 justify-between ">
            <div className=" mt-[19px]">
              <h3 className=" w-full capitalize max-w-[120px] lg:max-w-[233px] truncate block text-ellipsis  text-[#1C1C1C] text-[10px] lg:text-base font-medium mb-[4px]">
                {name}
              </h3>
              <p className=" truncate text-[9px] lg:text-sm font-normal text-[#73768A]">
                {updatedInfo.author}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span>{star}</span>
              <p className=" text-[#73768A] text-[9px] lg:text-sm ">
                {" "}
                {updatedInfo.rating}
              </p>
            </div>
          </div>
          <div>
            <p className=" text-[#1C1C1C] font-medium text-[15px] lg:text-[24px] mb-2">
              ₦{formatNumber(itemAmount)}
            </p>
            <div className=" flex items-center justify-between  gap-4">
              <AddToCart itemToAdd={itemToAdd} />
              <button
                onClick={() => setLike(!like)}
                className=" py-[6px] lg:py-2 px-2 lg:px-3 rounded-[8px] bg-[#FFEEE8]"
              >
                {like ? fullHeart : heart}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
