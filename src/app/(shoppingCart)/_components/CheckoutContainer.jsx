"use client";
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
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmptyKeys(formData)) {
      console.log(formData);
      toast("Please fill in all fields");
    } else {
      console.log(formData);
      setOpen(true);
      setFormData(data);
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
