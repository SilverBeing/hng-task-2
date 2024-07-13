"use client";
import useCart from "@/utils/useCart";
import { useState } from "react";
import { toast } from "sonner";
import ContactInfo from "./ContactInfo";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

export default function CheckoutContainer() {
  const data = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    cardName: "",
    cardNumber: "",
    date: "",
    cvc: "",
  };
  const [formData, setFormData] = useState(data);
  const [open, setOpen] = useState(false);
  const { firstName, lastName, phone, email, cardName, cardNumber, date, cvc } =
    formData;
  const checkEmptyKeys = () => {
    for (let key in formData) {
      if (formData[key] === "") {
        return true;
      }
    }
    return false;
  };
  const { resetCart, cartItems } = useCart();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      let input = value.replace(/\D/g, "");
      let formattedDate = "";
      if (input.length <= 2) {
        formattedDate = input;
      } else {
        const month = parseInt(input.substring(0, 2), 10);
        const year = input.substring(2, 4);
        if (month > 12) {
          formattedDate = "12/" + year;
        } else {
          formattedDate = input.substring(0, 2) + "/" + year;
        }
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkEmptyKeys(formData)) {
      toast("Please fill in all fields");
    } else {
      setOpen(true);
      setFormData(data);
      resetCart();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-wrap  justify-between mt-6 lg:mt-[60px] mb-[63px]"
    >
      <div className=" space-y-6 w-full mb-6 lg:mb-0 lg:w-[55.5%]">
        <ContactInfo
          contactInfo={{ firstName, lastName, phone, email }}
          handleChange={handleChange}
        />
        <PaymentMethod
          data={{ cardNumber, date, cvc, cardName }}
          handleChange={handleChange}
        />
      </div>
      <div className="w-full lg:w-[33%]">
        <OrderSummary open={open} setOpen={setOpen} check={checkEmptyKeys} />
      </div>
    </form>
  );
}
