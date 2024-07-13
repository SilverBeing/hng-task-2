import Image from "next/image";

export default function BookImage({ image, title }) {
  return (
    <div className=" p-[14px] lg:px-[18px]  w-full lg:py-[23px] bg-white shadow-book-card rounded-[15px] lg:rounded-[24px]">
      <Image
        width={603}
        height={608}
        className="mx-auto lg:w-auto w-[127px] h-[153px] lg:h-[238px]"
        src={image}
        alt={title}
      />
    </div>
  );
}
