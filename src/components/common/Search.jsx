import { logo } from "@/assets";
import { heart, person, search, shoppingCart } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  return (
    <div className=" hidden  lg:flex items-center  justify-between py-5 w-full gap-[42px] px-10 bg-white rounded-[12px] h-[88px] ">
      <div className=" flex items-center gap-[42px] flex-1">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className="  border-[0.5px] border-solid border-[#C4C6D3)] rounded-[12px] max-[538px] px-[18px] bg-[#F5F7FA] w-full flex gap-3 items-center py-3 text-[#1D2026]">
          <span>{search}</span>
          <input
            className=" placeholder:text-[#8C94A3] text-base bg-transparent w-full"
            placeholder="Search"
          />
        </div>
      </div>
      <div className=" flex items-center gap-4  ">
        <span className=" hover:opacity-[0.8] text-[] p-3 border-[0.5px] border-solid rounded-[12px] border-[#C4C6D3] bg-[#F5F7FA]">
          {person}
        </span>
        <span className=" hover:opacity-[0.8] p-3 border-[0.5px] border-solid rounded-[12px] border-[#C4C6D3] bg-[#F5F7FA]">
          {heart}
        </span>
        <Link
          href="/cart"
          className=" hover:opacity-[0.8] relative p-3 border-[0.5px] border-solid rounded-[12px] border-[#C4C6D3] bg-[#F5F7FA]"
        >
          <div className=" relative">
            <svg
              className="absolute right-1 top-0"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="4" fill="#FF6636" stroke="white" />
            </svg>
            {shoppingCart}
          </div>
        </Link>
      </div>
    </div>
  );
}
