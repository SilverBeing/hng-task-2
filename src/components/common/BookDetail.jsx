import { bigStars } from "@/assets";
import Image from "next/image";
import BookImage from "./BookImage";

export default async function BookDetail({ product }) {
  const { photos, name, description } = product;
  const updatedInfo = JSON?.parse(description || "{}") || {};
  const image = photos?.[0]?.url ?? "";
  return (
    <div className="lg:max-w-[767px]  max-w-[264px] w-full">
      <div className="flex flex-wrap lg:flex-nowrap items-center  lg:gap-6 justify-between pb-2 lg:pb-9 ">
        <div></div>
        <div className="min-w-[233px]  hidden lg:block max-w-[233px]">
          <BookImage
            image={`https://api.timbu.cloud/images/${image}`}
            title={name}
          />
        </div>
        <div>
          <h2 className=" lg:whitespace-nowrap text-[#1C1C1C] mb-2 hidden lg:block text-base lg:text-xl font-medium">
            {name}
          </h2>
          <p className=" text-sm lg:text-base hidden lg:block text-[#73768A] mb-4">
            {updatedInfo.author}
          </p>
          <div className=" w-full hidden flex-wrap lg:flex gap-2 items-center mb-[14px] ">
            <Image src={bigStars} alt="" />
            <p className=" text-sm lg:text-base whitespace-nowrap font-semibold text-[#737373]">
              5430 Reviews
            </p>
          </div>
          <p className=" text-[#1C1C1C] text-xs lg:text-base mb-5">
            {updatedInfo.description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, adipisci itaque repellendus expedita odit sapiente harum, veritatis a molestiae corporis suscipit dolorem in laboriosam ipsum fugiat necessitatibus autem ratione facere?"}
          </p>
          <p className=" text-base lg:text-xl text-[#1C1C1C]">
            1 X {updatedInfo.amount}
          </p>
        </div>
      </div>
    </div>
  );
}
