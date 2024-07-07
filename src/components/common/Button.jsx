import { cn } from "@/utils";

export default function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={cn(
        "px-4 py-[10px] truncate hover:bg-[#CC522B] hover:shadow-hover-button hover:text-white bg-primary text-white font-medium text-base grid place-items-center rounded-[8px]",
        className
      )}
    >
      {children}
    </button>
  );
}
