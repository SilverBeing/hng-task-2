"use client";

import {
  arrowDown,
  arrowUp,
  heart,
  menu,
  shoppingCart,
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
      <div className={`  bg-transparent lg:hidden block w-full `}>
        <div className=" flex items-center justify-between py-5 px-5">
          <button onClick={() => setModal(true)}>{menu}</button>
          <div className=" flex items-center gap-4">
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
      </div>
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-[#000000B2] overflow-y-scroll remove-scrollbar  min-h-screen  flex
               w-full"
        >
          <div
            ref={ref}
            className="  w-max py-[60px] bg-white px-5  min-h-screen"
          >
            <div className="h-[40px] w-full flex items-center  ">
              <div className="h-full  rounded-tl-[12px] rounded-bl-[12px]  bg-white">
                <input
                  placeholder="Enter Your Email"
                  className=" px-3 max-w-[198px] truncate placeholder:text-sm placeholder:text-[rgba(110,116,133,0.80] h-full  "
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
                  } flex items-center hover:bg-primary hover:text-white justify-between text-primary py-4 px-5 w-full text-sm font-medium border-t border-[#EAEAEA] `}
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
                  className="  hover:bg-primary hover:text-white text-primary py-4 px-5 text-sm font-medium border-t border-[#EAEAEA]"
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
