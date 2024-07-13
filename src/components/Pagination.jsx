"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
export default function Pagination() {
  return (
    <>
      <div className="flex my-[48px] lg:my-[129px] mx-auto w-max border shadow-paginate rounded-[8px] border-[#BDBDBD] lg:rounded-[12px]">
        <span className="text-sm lg:rounded-tl-[12px]  rounded-tl-[8px] lg:rounded-bl-[12px] rounded-bl-[8px] font-bold text-[#BDBDBD] lg:p-[25px]  p-[17px] bg-[#F3F3F3] border-r border-[#BDBDBD]">
          First
        </span>
        <span className=" cursor-pointer hover:bg-primary hover:text-white text-sm bg-white font-bold text-primary   lg:px-5 px-[13px] py-[17px] lg:py-[25px] border-r border-[#E9E9E9] ">
          1
        </span>
        <span className="cursor-pointer text-sm bg-primary font-bold text-white  text- g:px-5 px-[13px] py-[17px] lg:py-[25px] border-r border-[#E9E9E9]">
          2
        </span>
        <span className=" cursor-pointer hover:bg-primary hover:text-white text-sm font-bold text-primary bg-white   text- g:px-5 px-[13px] py-[17px] lg:py-[25px] ]border-r border-[#E9E9E9">
          3
        </span>
        <span className="text-sm  cursor-pointer lg:rounded-tr-[12px] rounded-tr-[8px] lg:rounded-br-[12px] rounded-br-[8px] hover:bg-primary hover:text-white  font-bold p-[17px] lg:p-[25px]  bg-white text-primary border-r border-[#BDBDBD]">
          Next
        </span>
      </div>
    </>
  );
}

export function PaginationI({ total }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10) - 1; // convert page to zero-indexed value
  const pageCount = Math.ceil(total / 10);

  const handlePageClick = ({ selected: selectedPage }) => {
    router.push(`?page=${selectedPage + 1}`);
  };

  return (
    <div className="z-50 my-8 flex justify-between items-center">
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={currentPage} // Ensure the active page is controlled
        breakLabel=""
        activeLinkClassName="activeLink"
        containerClassName="list-none no-underline flex my-[48px] lg:my-[129px] mx-auto w-max border shadow-paginate rounded-[8px] border-[#BDBDBD] lg:rounded-[12px]"
        previousLinkClassName="text-sm cursor-pointer lg:rounded-tl-[12px] rounded-tl-[8px] lg:rounded-bl-[12px] rounded-bl-[8px] hover:bg-primary hover:text-white font-bold p-[17px] lg:p-[25px] bg-white text-primary border-l border-[#BDBDBD]"
        nextLinkClassName="text-sm cursor-pointer lg:rounded-tr-[12px] rounded-tr-[8px] lg:rounded-br-[12px] rounded-br-[8px] hover:bg-primary hover:text-white font-bold p-[17px] lg:p-[25px] bg-white text-primary border-r border-[#BDBDBD]"
        pageLinkClassName="cursor-pointer hover:bg-primary hover:text-white text-sm font-bold text-primary bg-white lg:px-5 px-[13px] py-[17px] lg:py-[25px] border-r border-[#E9E9E9]"
      />
    </div>
  );
}
