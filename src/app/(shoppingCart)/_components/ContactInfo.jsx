import InputField from "./InputField";

export default function ContactInfo() {
  const data = [
    {
      label: "last name",
      placeholder: "First name",

      id: 1,
    },
    {
      label: "First Name",
      placeholder: "First name",

      id: 2,
    },
    {
      label: "Phone Number",
      placeholder: "Phone Number",

      id: 3,
    },
    {
      label: "Email Address",
      placeholder: "Email",

      id: 4,
    },
  ];
  return (
    <div className=" p-[22px] lg:p-10 bg-white border-[0.5px] border-[#6C7275;] rounded-[24px] ">
      <h2 className=" text-base lg:text-[32px] mb-10 font-semibold text-darkblue ">
        Contact Information
      </h2>
      <div className=" grid grid-cols-2 gap-2 lg:gap-4">
        {data.map((item) => (
          <InputField
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
          />
        ))}
      </div>
    </div>
  );
}
