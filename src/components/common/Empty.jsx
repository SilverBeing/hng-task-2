import { empty } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Empty() {
  return (
    <div className=" h-full w-full flex items-center justify-center ">
      <div className="space-y-3">
        <div className="text-center w-max mx-auto">
          <Image src={empty} alt="   text-center" />
        </div>
        <p className=" text-darkBlue font-semibold text-sm">
          Add Books to cart, don&apos;t worry I will pay😊
        </p>
        <Link
          className=" h-[52px] truncate w-full px-6 py-[10px] hover:bg-[#CC522B] hover:shadow-hover-button hover:text-white bg-primary text-white font-medium text-base grid place-items-center rounded-[8px]"
          href={"/products"}
        >
          Go to Products
        </Link>
      </div>
    </div>
  );
}
