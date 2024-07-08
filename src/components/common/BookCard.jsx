"use client";
import { fullHeart, heart, star } from "@/assets/icons";
import { useState } from "react";
import BookDetail from "./BookDetail";
import BookImage from "./BookImage";
import Button from "./Button";
import Modal from "./Modal";

export default function BookCard({ book }) {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(true);
  const { image, title, author, amount, rating } = book;
  return (
    <>
      <div className="lg:min-w-[233px]  min-w-[150px]">
        <div className=" ">
          <BookImage image={image} />
        </div>
        <div>
          <div className=" flex mb-4 justify-between ">
            <div className=" mt-[19px]">
              <h3 className=" truncate text-[#1C1C1C] text-[10px] lg:text-base font-medium mb-[4px]">
                {title}
              </h3>
              <p className=" truncate text-[9px] lg:text-sm font-normal text-[#73768A]">
                {author}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span>{star}</span>
              <p className=" text-[#73768A] text-[9px] lg:text-sm ">{rating}</p>
            </div>
          </div>
          <div>
            <p className=" text-[#1C1C1C] font-medium text-[15px] lg:text-[24px] mb-2">
              {amount}
            </p>
            <div className=" flex items-center justify-between  gap-4">
              <Button
                onClick={() => setOpenModal(true)}
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
        <BookDetail book={book} />
      </Modal>
    </>
  );
}
