"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Title() {
  const pathname = usePathname();
  const router = useRouter();
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
    <div>
      <button className=" hidden lg:block" onClick={() => router.push("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <mask
            id="mask0_357_728"
            style={{ "mask-type": "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="48"
            height="48"
          >
            <rect width="48" height="48" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_357_728)">
            <path
              d="M15.65 26L26.85 37.2L24 40L8 24L24 8L26.85 10.8L15.65 22H40V26H15.65Z"
              fill="#1C1C1C"
            />
          </g>
        </svg>
      </button>
      <button className=" lg:hidden block" onClick={() => router.push("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_357_732"
            style={{ "mask-type": "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_357_732)">
            <path
              d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
              fill="#1C1C1C"
            />
          </g>
        </svg>
      </button>

      <h1 className=" lg:mt-4 text-[36px] lg:text-[57px] font-medium text-[#1C1C1C] text-center">
        {data[pathname].title}
      </h1>
    </div>
  );
}
