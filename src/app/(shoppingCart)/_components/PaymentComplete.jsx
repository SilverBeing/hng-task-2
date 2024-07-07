import { complete } from "@/assets";
import Image from "next/image";
import Link from "next/link";
export default function PaymentComplete({ hide }) {
  return (
    <div className=" p-5 lg:p-10 max-w-[201px] lg:max-w-[469px]">
      <Image src={complete} alt="" className=" mx-auto mb-[34px]" />
      <p className=" text-darkBlue  leading-normal text-center text-base lg:text-[36px]">
        Your order has been received
      </p>
      <div className="mt-[34px]">
        <Link
          className=" rounded-[8px]  h-[52px] text-white grid place-items-center bg-primary hover:shadow-hover-button"
          onClick={hide}
          href="/"
        >
          Purchase History
        </Link>
      </div>
    </div>
  );
}
