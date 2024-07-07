"use client";
import Link from "next/link";
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
        <Link
          key={item.id}
          href={item.href}
          className={`   text-[#B1B5C3] bg-transparent lg:text-base text-xs visited:text-darkBlue group justify-center gap-3 w-full flex items-center py-5`}
        >
          <span
            className={` lg:text-base text-xs bg-[#B1B5C3] text-[#FCFCFD] w-[24px] lg:w-[42px] lg:h-[42px] h-[24px] group-visited:bg-[#23262F] group-visited:text-white grid place-items-center rounded-full`}
          >
            {item.id}
          </span>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
