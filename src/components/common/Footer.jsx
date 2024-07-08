import {
  apple,
  facebook,
  instagram,
  linkedIn,
  playStore,
  twitter,
  youtube,
} from "@/assets/icons";

export default function Footer() {
  const data = [facebook, instagram, linkedIn, twitter, youtube];
  return (
    <footer className=" bg-darkBlue px-4 py-5 lg:px-[100px] lg:py-[76px]">
      <div className="flex lg:flex-nowrap gap-6 flex-wrap justify-between lg:gap-[100px]">
        <div className="lg:max-w-[645px] w-full text-white">
          <h2 className=" text-white lg:text-left text-center text-base md:text-[24px] font-semibold mb-5">
            About Goodness Bookstore
          </h2>
          <p className=" lg:text-base lg:text-left text-center text-xs font-normal lg:leading-[36px]  mb-4 ">
            At Goodness Books, we believe in the power of stories to transform
            lives. Our carefully curated collection spans various genres,
            ensuring there is something for every reader. We are passionate
            about fostering a love for reading and building a community of book
            enthusiasts. Whether you are searching for the latest bestseller or
            a timeless classic, our knowledgeable staff is here to guide you.
            Join us in celebrating the joy of reading and discover your next
            great adventure with Goodness Books.
          </p>
          <div className=" flex gap-3 justify-center lg:justify-normal">
            {data.map((item, index) => (
              <span
                className={`p-[14px] ${
                  index === 2
                    ? "bg-primary shadow-hover-button"
                    : "bg-[rgba(54,59,71,0.40)]"
                } hover:bg-primary hover:shadow-hover-button rounded-[8px] `}
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className=" lg:max-w-[495px] w-full  text-white">
          <h2 className=" text-white lg:text-left text-center text-base lg:text-[24px] font-semibold mb-5">
            Join Our Newsletter
          </h2>
          <p className=" lg:text-base text-xs font-normal lg:text-left text-center lg:leading-[36px]  mb-4 ">
            Stay connected with Goodness Books by subscribing to our newsletter!
            Be the first to know about new arrivals, exclusive offers, upcoming
            events, and book recommendations tailored just for you.{" "}
          </p>
          <div className=" lg:max-w-[267px]  h-[40px] w-full flex items-center  ">
            <div className="h-full flex-1 lg:w-max  rounded-tl-[12px] rounded-bl-[12px]  bg-white">
              <input
                placeholder="Enter Your Email"
                className="w-full rounded-tl-[12px] rounded-bl-[12px] placeholder:text-sm placeholder:text-[rgba(110,116,133,0.80] h-full px-3  min-w-[30px]"
              />
            </div>
            <button className=" px-[10px] hover:bg-[#CC522B] hover:shadow-hover-button   w-[74px] h-full grid place-items-center text-white bg-primary  rounded-tr-[12px] rounded-br-[12px] text-sm font-semibold">
              Join
            </button>
          </div>
          <div className="lg:mt-[48px] mt-6">
            <p className=" text-sm font-medium uppercase">Download our app</p>
            <div className="mt-5 flex gap-3">
              <div className=" rounded-[12px] items-center flex gap-[14px] px-5 py-3 bg-[rgba(54,59,71,0.40)]">
                <span>{apple}</span>
                <div>
                  <p className=" text-[10px] text-[#B7BAC7]">Download now</p>
                  <p className=" text-white text-base font-medium ">
                    App Store
                  </p>
                </div>
              </div>
              <div className=" rounded-[12px] items-center flex gap-[14px] px-5 py-3 bg-[rgba(54,59,71,0.40)]">
                <span>{playStore}</span>
                <div>
                  <p className=" text-[10px] text-[#B7BAC7]">Download now</p>
                  <p className=" text-white text-base font-medium ">
                    App Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
