import InputField from "./InputField";

export default function ContactInfo({ contactInfo, handleChange }) {
  const { firstName, lastName, phone, email } = contactInfo;
  const data = [
    {
      label: "last name",
      placeholder: "First name",
      value: lastName,
      name: "lastName",
      type: "text",

      id: 1,
    },
    {
      label: "First Name",
      placeholder: "First name",
      value: firstName,
      name: "firstName",
      type: "text",

      id: 2,
    },
    {
      label: "Phone Number",
      placeholder: "Phone Number",
      value: phone,

      name: "phone",
      type: "number",

      id: 3,
    },
    {
      label: "Email Address",
      placeholder: "Email",
      value: email,
      name: "email",
      type: "email",

      id: 4,
    },
  ];
  return (
    <div className=" p-[22px] lg:p-10 bg-white border-[0.5px] border-[#6C7275;] rounded-[24px] ">
      <h2 className=" text-base lg:text-[32px] mb-3 lg:mb-10 font-semibold text-darkblue ">
        Contact Information
      </h2>
      <div className=" grid grid-cols-2 gap-2 lg:gap-4">
        {data.map((item) => (
          <InputField
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
            value={item.value}
            name={item.name}
            handleChange={handleChange}
            type={item.type}
            required
          />
        ))}
      </div>
    </div>
  );
}
