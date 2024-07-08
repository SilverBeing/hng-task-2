"use client";
import { arrowRight } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";

export default function CartSummary() {
  const [data, setData] = useState("Pick up");
  return (
    <div className="w-full mt-6 lg:mt-0 lg:w-[32.5%]  ">
      <div className="lg:p-10 p-8    rounded-[24px]  border-[0.5px] border-[#6C7275] bg-white">
        <div>
          <h2 className=" text-black  text-base lg:text-[20px] font-medium mb-6">
            Cart Summary
          </h2>
          <label
            htmlFor="pickUp"
            onClick={() => setData("Pick up")}
            className={` ${
              data === "Pick up" ? "bg-[#FFEEE8]" : "bg-[#FEFEFE]"
            } border-[0.5px] flex gap-4 items-center rounded-[8px] px-4  text-sm lg:text-base text-[#1C1C1C] cursor-pointer mb-4 py-3 border-[#6C7275]`}
          >
            <input
              type="radio"
              name="pickUp"
              value="Pick up"
              onChange={() => setData("Pick up")}
              checked={data === "Pick up"}
              className=" accent-black"
            />
            Pick Up
          </label>
          <label
            htmlFor="shipping"
            onClick={() => setData("Shipping")}
            className={` ${
              data === "Shipping" ? "bg-[#FFEEE8]" : "bg-[#FEFEFE]"
            } border-[0.5px] flex gap-4 mb-6 items-center rounded-[8px] px-4 text-sm lg:text-base cursor-pointer text-[#1C1C1C] py-3 border-[#6C7275]`}
          >
            <input
              type="radio"
              name="shipping"
              value={"Shipping"}
              checked={data === "Shipping"}
              className=" accent-black"
              onChange={() => setData("Shipping")}
            />
            Express Shipping
          </label>
          <div className=" divide-y divide-[#EAEAEA] ">
            <div className=" py-3 flex items-center justify-between">
              <span className=" text-sm lg:text-base text-[#1C1C1C]">
                Subtotal
              </span>
              <p className=" text-[#1C1C1C]  text-sm lg:text-base font-medium">
                ₦17,000
              </p>
            </div>

            <div className=" py-3 flex items-center justify-between">
              <span className=" text-base lg:text-xl text-[#1C1C1C]">
                Total
              </span>
              <p className=" text-[#1C1C1C] text-base lg:text-xl font-medium">
                ₦17,000
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/checkout"
              className=" h-[52px] truncate w-full px-6 py-[10px] hover:bg-[#CC522B] hover:shadow-hover-button hover:text-white bg-primary text-white font-medium text-base grid place-items-center rounded-[8px]"
            >
              <div className=" gap-[10px] flex items-center ">
                <p>Proceed To Checkout</p>
                <span>{arrowRight}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
