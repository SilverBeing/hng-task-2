import { loader } from "@/assets";
import Image from "next/image";

export default function Loading() {
  return (
    <div className=" h-[400px] w-full grid place-items-center">
      <div>
        <Image src={loader} alt="" />
      </div>
    </div>
  );
}
