"use client";
import Empty from "@/components/common/Empty";
import useCart from "@/utils/useCart";
import CartItem from "./CartItem";

export default function CartItems() {
  const { cartItems } = useCart();
  return (
    <div className="  w-full overflow-hidden  lg:w-[61%]">
      <div className=" h-[463px] scroll-style overflow-y-auto  border border-[#6C7275] rounded-[24px] py-5 px-3 lg:p-10 bg-white">
        {cartItems.length !== 0 ? (
          <table className="w-full ">
            <thead className=" border-b border-[#6C7275]">
              <tr className="  text-left">
                <th className=" pb-6 text-black text-xs lg:text-base font-medium">
                  Product
                </th>
                <th className=" pb-6 text-black text-xs lg:text-base font-medium">
                  Quantity
                </th>
                <th className="pb-6 text-black text-xs lg:text-base font-medium">
                  Price
                </th>
                <th className=" pb-6 text-black text-xs lg:text-base font-medium">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody
              style={{ borderSpacing: "0 20px", marginTop: "26px" }}
              className=" divide-y divide-[#E8ECEF] "
            >
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
