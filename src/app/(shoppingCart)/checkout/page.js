import ContactInfo from "../_components/ContactInfo";
import OrderSummary from "../_components/OrderSummary";
import PaymentMethod from "../_components/PaymentMethod";
// 689
// 406
export default function page() {
  return (
    <div className=" flex flex-wrap  justify-between mt-6 lg:mt-[60px] mb-[63px]">
      <div className=" space-y-6 w-full mb-6 lg:mb-0 lg:w-[55.5%]">
        <ContactInfo />
        <PaymentMethod />
      </div>
      <div className="w-full lg:w-[33%]">
        <OrderSummary />
      </div>
    </div>
  );
}
