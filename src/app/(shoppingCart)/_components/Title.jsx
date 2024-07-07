"use client";

import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();
  const data = {
    "/cart": {
      title: "Cart",
    },
    "/checkout": {
      title: "Checkout",
    },
    "/order-completed": {
      title: "Order Completed",
    },
  };
  return (
    <h1 className=" text-[36px] lg:text-[57px] font-medium text-[#1C1C1C] text-center">
      {data[pathname].title}
    </h1>
  );
}
