"use client";

import {
  arrowDown,
  arrowUp,
  menu,
  smallCart,
  smallHeart,
  whiteSearch,
} from "@/assets/icons";
import useOnClickOutside from "@/utils/useOnClickOutsite";
import Link from "next/link";
import { useRef, useState } from "react";

export default function MobileNav({ background = "bg-hero-gradient " }) {
  const data = [
    "BOOK SUBSCRIPTION",
    "JOUR OUR BOOK CLUB",
    "SIGN UP FOR OUR NEWSLETTER",
    "REQUEST FOR A BOOK",
    "BE OUR VENDOR",
    "SIGN UP / LOGIN",
  ];
  const subData = [
    "Philosophy",
    "Religion",
    "Fiction",
    "Childrens Book",
    "Business",
    "Self Help/Motivation",
    "History/Politics",
    "Biography",
    "Memoir",
  ];
  const [dropdown, setDropDown] = useState(false);
  const modalRef = useRef();

  const [modal, setModal] = useState(false);
  const [ref] = useOnClickOutside(modalRef, () => setModal(false));

  return (
    <>
      <div
        className={` z-50 ${background} lg:hidden block fixed w-full top-0 left-0`}
      >
        <div className=" flex items-center justify-between py-5 px-10">
          <button onClick={() => setModal(true)}>{menu}</button>
          <div className=" flex items-center gap-3">
            <span className=" p-[6px] border-[0.5px] border-solid rounded-[6px] border-[#C4C6D3] bg-[#F5F7FA]">
              {smallHeart}
            </span>
            <Link
              href="/cart"
              className=" relative p-[6px] border-[0.5px] border-solid rounded-[6px] border-[#C4C6D3] bg-[#F5F7FA]"
            >
              <div className=" relative">
                <svg
                  className="absolute right-0 top-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                >
                  <circle
                    cx="2.5"
                    cy="2.5"
                    r="2"
                    fill="#FF6636"
                    stroke="white"
                    stroke-width="0.5"
                  />
                </svg>
                {smallCart}
              </div>
            </Link>
          </div>
        </div>
      </div>
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-[#000000B2] overflow-y-scroll remove-scrollbar  min-h-screen  flex
               w-full"
        >
          <div
            ref={ref}
            className=" w-max py-[60px] bg-white px-10  min-h-screen"
          >
            <div className=" max-w-[247px] h-[40px] w-full flex items-center  ">
              <div className="h-full  rounded-tl-[12px] rounded-bl-[12px] px-3 bg-white">
                <input
                  placeholder="Enter Your Email"
                  className="flex-1 truncate placeholder:text-sm placeholder:text-[rgba(110,116,133,0.80] h-full  min-w-[30px]"
                />
              </div>
              <button
                onClick={() => setDropDown(!dropdown)}
                className=" px-[10px]  w-[74px] h-full grid place-items-center text-white bg-primary  rounded-tr-[12px] rounded-br-[12px] text-sm font-semibold"
              >
                {whiteSearch}
              </button>
            </div>
            <div className=" mt-4">
              <div className="w-full">
                <button
                  onClick={() => setDropDown(!dropdown)}
                  className={`${
                    dropdown && "bg-[#FFDDD1]"
                  } flex items-center justify-between text-primary py-4 px-5 w-full text-sm font-medium border-t border-[#EAEAEA] `}
                >
                  SHOP <span>{dropdown ? arrowUp : arrowDown}</span>
                </button>
                {dropdown && (
                  <div className="bg-[#FFDDD1] px-5 space-y-3 py-5">
                    {subData.map((item) => (
                      <div className=" text-sm text-[#1C1C1C] " key={item}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {data.map((item) => (
                <div
                  key={item}
                  className=" text-primary py-4 px-5 text-sm font-medium border-t border-[#EAEAEA]"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
