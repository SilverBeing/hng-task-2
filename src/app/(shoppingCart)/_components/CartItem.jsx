import { stars } from "@/assets";
import { cancel, minus, plus } from "@/assets/icons";
import Image from "next/image";

export default function CartItem({ item }) {
  const { image, title, author, amount, subTotal, id, quantity } = item;
  return (
    <tr>
      <td className=" ">
        <div
          className={` ${
            id === 1 && "mt-[42px] pt-0"
          }  py-4 flex gap-2 items-center`}
        >
          <div className="lg:px-[10px] px-1 w-[50px] lg:w-[100px]  py-[10px] bg-white shadow-book-card rounded-[11px]">
            <Image
              src={image}
              alt={title}
              className=" w-[42px] lg:w-[85px] mx-auto"
            />
          </div>
          <div>
            <h2 className=" text-[#1C1C1C] mb-1 text-[10px] lg:text-sm font-medium">
              {title}
            </h2>
            <p className=" mb-1 text-[8px] lg:text-xs text-normal text-[#73768A]">
              {author}
            </p>

            <Image src={stars} alt="" className="lg:block hidden" />
            <p className=" text-[8px] hidden lg:block font-semibold tracking-[0.111px] text-[#737373]">
              5430 Reviews
            </p>
            <div className=" mt-2 flex gap-2 items-center">
              <span>{cancel}</span>
              <p className=" lg:text-sm text-[6px] font-medium text-[#1C1C1C]">
                Remove
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="max-w-[54px] lg:max-w-[96px] flex items-center   bg-white ">
          <span className=" w-[33px] rounded-tl-[8px] rounded-bl-[8px]   border border-[#73768A]  h-[33px] grid place-items-center [&>svg]">
            {minus}
          </span>
          <span className=" text-[#1C1C1C] border-y border-[#73768A] w-[33px] h-[33px] grid place-items-center  text-[24px]">
            {quantity}
          </span>
          <span className=" w-[33px]   border border-[#73768A]  h-[33px] grid place-items-center rounded-tr-[8px] rounded-br-[8px] ">
            {plus}
          </span>
        </div>
      </td>
      <td>
        <div>
          <p className=" text-[10px] lg:text-[20px] font-medium text-[#1C1C1C]">
            {amount}
          </p>
        </div>
      </td>
      <td>
        <div>
          <p className="  text-[10px] lg:text-[20px] font-medium text-[#1C1C1C]">
            {subTotal}
          </p>
        </div>
      </td>
    </tr>
  );
}
