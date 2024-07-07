"use client";
import { minus, plus } from "@/assets/icons";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { cartItems } from "@/data";
import Image from "next/image";
import { useState } from "react";
import PaymentComplete from "./PaymentComplete";

export default function OrderSummary() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:p-10 p-7 flex-1  rounded-[17px] lg:rounded-[24px]  border-[0.5px] border-[#6C7275] bg-white">
        <div>
          <h2 className=" text-black text-base lg:text-[20px] font-medium mb-6">
            Order Summary
          </h2>
        </div>
        <div className="">
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`  border-b border-solid border-[#EAEAEA] py-4 flex gap-2 items-center justify-between`}
              >
                <div className={`  flex gap-4 items-center`}>
                  <div className="px-[10px] w-[74px] lg:w-[100px]  py-[10px] bg-white shadow-book-card rounded-[11px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="lg:w-[85px] w-[62px] mx-auto"
                    />
                  </div>
                  <div>
                    <h2 className=" text-[#1C1C1C] mb-1 lg:text-sm text-xs font-medium">
                      {item.title}
                    </h2>
                    <p className=" mb-1 text-xs text-normal text-[#73768A]">
                      {item.author}
                    </p>
                    <div className="max-w-[54px] lg:max-w-[96px] flex items-center   bg-white ">
                      <span className=" w-[33px] rounded-tl-[8px] rounded-bl-[8px]   border border-[#73768A]  h-[33px] grid place-items-center [&>svg]">
                        {minus}
                      </span>
                      <span className=" text-[#1C1C1C] border-y border-[#73768A] w-[33px] h-[33px] grid place-items-center  text-[24px]">
                        {item.quantity}
                      </span>
                      <span className=" w-[33px]   border border-[#73768A]  h-[33px] grid place-items-center rounded-tr-[8px] rounded-br-[8px] ">
                        {plus}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className=" text-xs lg:text-[20px] font-medium text-[#1C1C1C]">
                    {item.subTotal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" py-3 mt-4 border-b border-solid border-[#EAEAEA]  flex items-center justify-between">
            <span className=" text-xs lg:text-sm text-[#6E7485]">Subtotal</span>
            <p className=" text-[#1C1C1C] text-xs lg:text-sm font-medium">
              ₦17,000
            </p>
          </div>
          <div className=" py-3 border-b border-solid border-[#EAEAEA]  mt-4 flex items-center justify-between">
            <span className=" text-xs lg:text-sm text-[#6E7485]">
              Coupon Discount
            </span>
            <p className=" text-[#1C1C1C] text-xs lg:text-sm font-medium">8%</p>
          </div>
          <div className="pt-4">
            <p className=" text-xs lg:text-sm mb-1">Apply Coupon</p>
            <div className=" mb-4 h-[48px] w-full border pr-[9px] pl-[18px] py-[6px] rounded-[8px] flex items-center justify-between ">
              <input
                placeholder="Coupon Code"
                className="flex-1  min-w-[30px]"
              />
              <button className=" px-3 lg:px-4   h-10 grid place-items-center text-white bg-darkBlue rounded-[8px] text-[10px] lg:text-sm font-semibold">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className=" py-3  flex items-center justify-between">
          <span className=" text-sm lg:text-xl text-[#1C1C1C]">Total</span>
          <p className=" text-[#1C1C1C] text-base lg:text-xl font-medium">
            ₦17,000
          </p>
        </div>
        <div className="mt-10">
          <Button
            onClick={() => setOpen(true)}
            className=" h-[52px] w-full px-6 py-[10px]"
          >
            Complete Payment
          </Button>
        </div>
      </div>

      <Modal isShowing={open} hide={() => setOpen(false)}>
        <PaymentComplete hide={() => setOpen(false)} />
      </Modal>
    </>
  );
}
