"use client";
import { fullHeart, heart, star } from "@/assets/icons";
import { formatNumber } from "@/utils";
import useCart from "@/utils/useCart";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import BookDetail from "./BookDetail";
import BookImage from "./BookImage";
import Button from "./Button";
import Modal from "./Modal";

export default function BookCard({ book }) {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(true);

  const { name, description, id, categories, photos } = book;
  const { addToCart, isItemAlreadyInCart } = useCart();
  const updatedInfo = JSON?.parse(description || "{}") || {};
  const itemAmount = Number(updatedInfo.amount);
  const router = useRouter();
  const pathname = usePathname();
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
  const handleAddToCart = () => {
    if (isItemAlreadyInCart(id)) {
      addToCart(itemToAdd);
      toast(`Yeaa💃`, {
        description: `You’ve added more of ${name.toUpperCase()} to your cart.`,
        action: {
          label: pathname === "/cart" ? "Close" : "View Cart",
          onClick: () => router.push("/cart"),
        },
      });
    } else {
      addToCart(itemToAdd);

      toast(`Great choice! 😁`, {
        description: `${name.toUpperCase()} is now in your cart.`,
        action: {
          label: pathname === "/cart" ? "Close" : "View Cart",
          onClick: () => router.push("/cart"),
        },
      });
    }
  };
  return (
    <>
      <div className="lg:min-w-[233px] w-full min-w-[150px]">
        <Link className=" cursor-pointer" href={`/products/${id}`}>
          <BookImage
            title={name}
            image={`https://api.timbu.cloud/images/${image}`}
          />
        </Link>
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
              <Button
                onClick={handleAddToCart}
                className="lg:text-base text-[10px] flex-1 h-10 px-0 py-0"
              >
                Add to Cart
              </Button>
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
      <Modal isShowing={openModal} hide={() => setOpenModal(false)}>
        <BookDetail id={id} />
      </Modal>
    </>
  );
}
