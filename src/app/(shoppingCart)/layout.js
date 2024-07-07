import CartNav from "@/app/(shoppingCart)/_components/CartNav";
import Title from "@/app/(shoppingCart)/_components/Title";
import MobileNav from "@/components/common/MobileNav";
import Search from "@/components/common/Search";

export default function layout({ children }) {
  return (
    <div>
      <MobileNav background={"bg-[#F9F9FB]"} />
      <div className="  hidden lg:block pt-10 max-w-[1058px] mx-auto w-full">
        <Search />
      </div>
      <div className="mt-[118px] lg:px-[100px] px-4">
        <div className=" mb-10">
          <Title />
        </div>
        <div>
          <CartNav />
          {children}
        </div>
      </div>
    </div>
  );
}
