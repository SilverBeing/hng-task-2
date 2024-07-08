import { stars } from "@/assets";
import { cancel } from "@/assets/icons";
import Image from "next/image";
import QuantityControl from "./QuantityControl";

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
              <span className=" hidden lg:block">{cancel}</span>
              <span className=" lg:hidden block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.70433 2.63462C2.83288 2.50607 3.04131 2.50607 3.16986 2.63462L4.91221 4.37697L6.65455 2.63462C6.7831 2.50607 6.99153 2.50607 7.12009 2.63462C7.24864 2.76318 7.24864 2.97161 7.12009 3.10016L5.37774 4.8425L7.12009 6.58485C7.24864 6.7134 7.24864 6.92183 7.12009 7.05039C6.99153 7.17894 6.7831 7.17894 6.65455 7.05039L4.91221 5.30804L3.16986 7.05039C3.04131 7.17894 2.83288 7.17894 2.70433 7.05039C2.57577 6.92183 2.57577 6.7134 2.70433 6.58485L4.44667 4.8425L2.70433 3.10016C2.57577 2.97161 2.57577 2.76318 2.70433 2.63462Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </span>
              <p className=" lg:text-sm text-[6px] font-medium text-[#1C1C1C]">
                Remove
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <QuantityControl quantity={quantity} />
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
