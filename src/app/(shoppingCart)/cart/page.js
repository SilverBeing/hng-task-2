import CartItems from "../_components/CartItems";
import CartSummary from "../_components/CartSummary";

export default function page() {
  return (
    <div className=" flex flex-wrap items-center h-max justify-between mt-6 lg:mt-[60px] mb-[76px]">
      <CartItems />
      <CartSummary />
    </div>
  );
}
