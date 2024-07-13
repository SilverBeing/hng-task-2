import {
  check,
  largeCreditCard,
  mastercard,
  smallCreditCard,
} from "@/assets/icons";
import InputField from "./InputField";

export default function PaymentMethod({ data, handleChange }) {
  const { cardName, cardNumber, date, cvc } = data;

  return (
    <div className="p-[22px] lg:p-10 bg-white w-full border-[0.5px] border-[#6C7275;] rounded-[24px] ">
      <h2 className=" text-base lg:text-[32px] mb-3 lg:mb-10 font-semibold text-darkblue ">
        Payment Method
      </h2>
      <div className=" space-y-6">
        <div className="  rounded-[4px] lg:rounded-[8px] text-sm text-[#4E5566] flex items-center py-[5px] justify-between lg:py-[10px] px-3 lg:px-6 border border-[#E9EAF0]">
          <span>{mastercard}</span>
          <p className=" lg:text-base text-[8px]">5795 **** **** ****</p>
          <p className=" lg:text-base text-[8px]">04/24</p>
          <p className=" lg:text-base text-[8px]">Adelabu Afeez</p>
        </div>
        <div className="  rounded-[4px] lg:rounded-[8px] border-[#23BD33]  border flex py-[10px] px-3 lg:px-6 items-center justify-between">
          <div className=" flex gap-6 items-center">
            <span>{largeCreditCard}</span>
            <p className=" text-[8px] lg:text-sm">New Payment Cards</p>
          </div>
          <span>{check}</span>
        </div>
        <InputField
          value={cardName}
          name="cardName"
          handleChange={handleChange}
          placeholder="Name on card"
          label="Name"
          type="text"
        />
        <InputField
          placeholder="Label"
          label="Card Number"
          icon={smallCreditCard}
          value={cardNumber}
          name="cardNumber"
          handleChange={handleChange}
          type="number"
        />
        <div className="grid grid-cols-2 items-center gap-2 lg:gap-4">
          <InputField
            placeholder="MM/YY"
            label="MM / YY"
            value={date}
            name="date"
            handleChange={handleChange}
          />
          <InputField
            value={cvc}
            name="cvc"
            handleChange={handleChange}
            placeholder="CVC"
            label="Security Code"
            type="number"
            maxLength="3"
          />
        </div>
        <div>
          <label className=" flex gap-1 items-center text-[8px] lg:text-sm text-[#4E5566] ">
            <input type="checkbox" className=" accent-primary text-white" />
            Remember this card, save it on my card list
          </label>
        </div>
      </div>
    </div>
  );
}
