export default function Pagination() {
  return (
    <div className="flex my-[48px] lg:my-[129px] mx-auto w-max border shadow-paginate rounded-[8px] border-[#BDBDBD] lg:rounded-[12px]">
      <span className="text-sm lg:rounded-tl-[12px]  rounded-tl-[8px] lg:rounded-bl-[12px] rounded-bl-[8px] font-bold text-[#BDBDBD] lg:p-[25px]  p-[17px] bg-[#F3F3F3] border-r border-[#BDBDBD]">
        First
      </span>
      <span className=" text-sm bg-white font-bold text-primary   lg:px-5 px-[13px] py-[17px] lg:py-[25px] border-r border-[#E9E9E9] ">
        1
      </span>
      <span className=" text-sm bg-primary font-bold text-white  text- g:px-5 px-[13px] py-[17px] lg:py-[25px] border-r border-[#E9E9E9]">
        2
      </span>
      <span className=" text-sm font-bold text-primary bg-white   text- g:px-5 px-[13px] py-[17px] lg:py-[25px] ]border-r border-[#E9E9E9">
        3
      </span>
      <span className="text-sm lg:rounded-tr-[12px] rounded-tr-[8px] lg:rounded-br-[12px] rounded-br-[8px]  font-bold p-[17px] lg:p-[25px]  bg-white text-primary border-r border-[#BDBDBD]">
        Next
      </span>
    </div>
  );
}
