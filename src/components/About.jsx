import { diversity, globe, premium } from "@/assets/icons";

export default function About() {
  const data = [
    {
      id: 1,
      icon: diversity,
      title: "Join Our Community",
      description:
        "Connect with fellow book lovers, attend exclusive events, and enjoy personalized recommendations",
    },
    {
      id: 2,
      icon: globe,
      title: "Adventure and Discovery",
      description:
        "Embark on an Adventure at our Goodness Bookstore.Every Book is a New Journey",
    },
    {
      id: 3,
      icon: premium,
      title: "Exclusive and Premium",
      description:
        "Experience literary luxury at Goodness Bookstore. Curated collections for discerning readers",
    },
  ];
  return (
    <div className=" px-[25px] py-10 lg:px-0 lg:py-0">
      <div className="flex max-w-[1048px]  flex-wrap lg:flex-nowrap lg:top-[-120px] relative mx-auto   bg-white p-2 items-center shadow-about-card gap-6 rounded-[12px]">
        {data.map((item) => (
          <div className=" text-center px-10 py-[35px] " key={item.id}>
            <div className=" w-max mx-auto text-center">{item.icon}</div>
            <h2 className=" my-[10px] lg:whitespace-nowrap font-medium text-base lg:text-xl text-darkBlue">
              {item.title}
            </h2>
            <p className=" text-grey text-xs lg:text-sm tracking-[0.2px] leading-[20px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
