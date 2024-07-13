"use client";
import { usePathname } from "next/navigation";

export default function CartNav() {
  const pathname = usePathname();
  const data = [
    {
      id: 1,
      href: "/cart",
      title: "Shopping Cart",
    },
    {
      id: 2,
      href: "/checkout",
      title: "Checkout details",
    },
  ];
  return (
    <div className=" grid grid-cols-2  border-b border-solid  border-[#FFDDD1]">
      {data.map((item) => (
        <div
          key={item.id}
          className={`  ${
            pathname === item.href ? "text-darkBlue" : "text-[#B1B5C3] "
          } bg-transparent lg:text-base text-xs  group justify-center gap-3 w-full flex items-center py-5`}
        >
          <span
            className={` ${
              pathname === item.href
                ? "text-white bg-[#23262F]"
                : "bg-[#B1B5C3] text-[#FCFCFD] "
            } lg:text-base text-xs  w-[24px] lg:w-[42px] lg:h-[42px] h-[24px] g grid place-items-center rounded-full`}
          >
            {item.id}
          </span>
          {item.title}
        </div>
      ))}
    </div>
  );
}
