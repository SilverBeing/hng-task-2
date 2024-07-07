"use client";
import { heroImage1, heroImage2, logo } from "@/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./common/Button";
import HomeNav from "./HomeNav";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className=" py-10 md:px-10 px-4 lg:px-[102px] min-h-[877px] bg-hero-gradient ">
      <HomeNav />
      <div className=" mt-[65px] flex flex-wrap lg:items-center justify-center lg:justify-between">
        <div className="lg:w-[46.5%] max-w-[574px] w-full ">
          <div className=" lg:hidden ">
            <Image src={logo} alt="" className="mx-auto" />
          </div>
          <h1 className=" lg:text-left text-center  text-[36px] leading-[44px]  text-darkBlue lg:text-[64px] font-bold tracking-[-0.25px] lg:leading-[64px] mb-2">
            Discover Your Next Great Read
          </h1>
          <p className=" text-grey lg:text-left text-center text-sm leading-[20px] lg:text-xl font-normal lg:leading-[160%] mb-6">
            Explore a world of stories, knowledge, and inspiration at Goodness
            Bookstore. Whether you are seeking the latest bestsellers, timeless
            classics, or hidden gems, our curated selection has something for
            every reader.
          </p>
          <Button className=" w-full mx-auto lg:mx-0 md:w-[182px] px-6 py-4 rounded-[12px] text-base font-medium text-primary bg-white ">
            Shop Now
          </Button>
        </div>
        <div className="lg:w-[48%] w-full mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="mx-auto  lg:mx-0"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
