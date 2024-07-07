import Button from "./common/Button";
import MobileNav from "./common/MobileNav";
import Search from "./common/Search";

export default function HomeNav() {
  return (
    <>
      <div className=" hidden lg:flex w-full items-center gap-[66px]">
        <div className=" flex-1 ">
          <Search />
        </div>
        <div className=" flex gap-6 items-center">
          <Button className=" w-[132px] h-[52px]">Sign Up</Button>
          <Button
            className=" w-[132px] h-[52px] bg-[#FFEEE8]
         border border-solid text-primary border-primary "
          >
            Login
          </Button>
        </div>
      </div>
      <MobileNav />
    </>
  );
}
