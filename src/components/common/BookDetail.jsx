import { bigStars } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import BookImage from "./BookImage";

export default function BookDetail({ book }) {
  const { image, title, author, amount, description } = book;
  return (
    <div className="lg:max-w-[767px]  max-w-[264px] w-full">
      <div className="flex flex-wrap lg:flex-nowrap items-center  lg:gap-6 justify-between pb-2 lg:pb-9 border-b border-[#6C7275]">
        <div></div>
        <div className="min-w-[233px]  hidden lg:block max-w-[233px]">
          <BookImage image={image} title={title} />
        </div>
        <div>
          <h2 className=" lg:whitespace-nowrap text-[#1C1C1C] mb-2 hidden lg:block text-base lg:text-xl font-medium">
            {title}
          </h2>
          <p className=" text-sm lg:text-base hidden lg:block text-[#73768A] mb-4">
            {author}
          </p>
          <div className=" w-full hidden flex-wrap lg:flex gap-2 items-center mb-[14px] ">
            <Image src={bigStars} alt="" />
            <p className=" text-sm lg:text-base whitespace-nowrap font-semibold text-[#737373]">
              5430 Reviews
            </p>
          </div>
          <p className=" text-[#1C1C1C] text-xs lg:text-base mb-5">
            {description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, adipisci itaque repellendus expedita odit sapiente harum, veritatis a molestiae corporis suscipit dolorem in laboriosam ipsum fugiat necessitatibus autem ratione facere?"}
          </p>
          <p className=" text-base lg:text-xl text-[#1C1C1C]">1 X {amount}</p>
        </div>
      </div>
      <div className="mt-6 mb-[48px] flex justify-between items-center">
        <span className=" text-xs lg:text-xl font-medium">Subtotal:</span>
        <p className=" text-xs lg:text-xl font-medium"> {amount}</p>
      </div>
      <div>
        <div className=" lg:mb-4">
          <Link
            href="/cart"
            className=" w-full text-xs hover:bg-[#CC522B] hover:shadow-hover-button lg:text-base px-[24px] grid place-items-center rounded-[4px] lg:rounded-[8px] h-[29px] lg:h-[52px] bg-primary text-white"
          >
            View Cart
          </Link>
        </div>
        <Link
          href="/"
          className=" w-full hover:bg-[#FFDDD1]  lg:text-base text-xs px-[24px] grid place-items-center  rounded-[4px] lg:rounded-[8px] h-[29px] lg:h-[52px] bg-[#FFEEE8] text-primary"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
