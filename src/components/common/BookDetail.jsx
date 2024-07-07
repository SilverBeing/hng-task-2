import { bigStars } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import BookImage from "./BookImage";

export default function BookDetail({ book }) {
  const { image, title, author, amount, description } = book;
  return (
    <div className="max-w-[767px] w-full">
      <div className="flex flex-wrap lg:flex-nowrap items-center  gap-6 justify-between pb-9 border-b border-[#6C7275]">
        <div className="min-w-[233px]  max-w-[233px]">
          <BookImage image={image} title={title} />
        </div>
        <div>
          <h2 className=" lg:whitespace-nowrap text-[#1C1C1C] mb-2 text-base lg:text-xl font-medium">
            {title}
          </h2>
          <p className=" text-sm lg:text-base text-[#73768A] mb-4">{author}</p>
          <div className=" w-full flex-wrap flex gap-2 items-center mb-[14px] ">
            <Image src={bigStars} alt="" />
            <p className=" text-sm lg:text-base whitespace-nowrap font-semibold text-[#737373]">
              5430 Reviews
            </p>
          </div>
          <p className=" text-[#1C1C1C] text-base mb-5">{description}</p>
          <p className=" text-base lg:text-xl text-[#1C1C1C]">1 X {amount}</p>
        </div>
      </div>
      <div className="mt-6 mb-[48px] flex justify-between items-center">
        <span className=" text-base lg:text-xl font-medium">Subtotal:</span>
        <p className=" text-xl font-medium"> {amount}</p>
      </div>
      <div>
        <div className=" mb-4">
          <Link
            href="/cart"
            className=" w-full pt-[10px] text-base px-[24px] grid place-items-center rounded-[8px] h-[52px] bg-primary text-white"
          >
            View Cart
          </Link>
        </div>
        <Link
          href="/"
          className=" w-full pt-[10px] text-base px-[24px] grid place-items-center rounded-[8px] h-[52px] bg-[#FFEEE8] text-primary"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
