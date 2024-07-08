"use client";
import { minus, plus } from "@/assets/icons";
import { useState } from "react";

export default function QuantityControl({ quantity }) {
  const [count, setCount] = useState(quantity);
  return (
    <>
      <div className="max-w-[54px] hidden lg:max-w-[96px] lg:flex items-center   bg-white ">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className=" w-[33px] rounded-tl-[8px] rounded-bl-[8px]   border border-[#73768A]  h-[33px] grid place-items-center [&>svg]"
        >
          {minus}
        </button>
        <span className=" text-[#1C1C1C] border-y border-[#73768A] w-[33px] h-[33px] grid place-items-center  text-[24px]">
          {count}
        </span>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className=" w-[33px]   border border-[#73768A]  h-[33px] grid place-items-center rounded-tr-[8px] rounded-br-[8px] "
        >
          {plus}
        </button>
      </div>
      <div className="max-w-[54px] lg:hidden  lg:max-w-[96px] flex items-center   bg-white ">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className=" w-[19px] rounded-tl-[4px] rounded-bl-[4px]   border border-[#73768A]  h-[19px] grid place-items-center [&>svg]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.00293 7.93695H12.7998"
              stroke="#1D2026"
              stroke-width="0.890625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <span className=" text-[#1C1C1C] border-y border-[#73768A] w-[19px] h-[19px] grid place-items-center  text-sm">
          {count}
        </span>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className=" w-[19px]   border border-[#73768A]  h-[19px] grid place-items-center rounded-tr-[4px] rounded-br-[4px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.00293 7.93695H12.7998"
              stroke="#1D2026"
              stroke-width="0.890625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.90137 3.03851V12.8354"
              stroke="#1D2026"
              stroke-width="0.890625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
