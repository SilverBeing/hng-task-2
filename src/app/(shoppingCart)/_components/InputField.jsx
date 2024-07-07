export default function InputField({ label, icon, placeholder }) {
  return (
    <div className=" w-full">
      <label className=" text-darkBlue  text-[10px] lg:text-sm tracking-[-0.14px] capitalize mb-[6px]">
        {label}
      </label>
      <div
        className={` rounded-[4px] lg:rounded-[8px] border bg-white border-[#E9EAF0] px-[9px] lg:px-[18px] items-center py-[6px] lg:py-[13px]  flex ${
          icon && "divide-x divide-[#E9EAF0]"
        } `}
      >
        {icon && <span className=" mr-3">{icon}</span>}
        <input
          className={`flex-1 min-w-[30px] placeholder:text-[#8C94A3] placeholder:text-[8px] lg:placeholder:text-base ${
            icon && "pl-3"
          }`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
