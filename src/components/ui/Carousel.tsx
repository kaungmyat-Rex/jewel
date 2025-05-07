"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { User } from "@/types";
import Image from "next/image";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
interface props {
  testimonials: User[];
}

const Carousel = ({ testimonials }: props) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <div
        onClick={() => {
          sliderRef.current?.slickPrev();
        }}
        className="absolute left-0 top-[50%] -translate-y-[50%] w-[45px] h-[45px] flex justify-center items-center border border-[#C4C4C4] rounded-full bg-white z-20 cursor-pointer"
      >
        <HiOutlineChevronLeft size={24} color="#7A7A7A" />
      </div>
      <div
        onClick={() => {
          sliderRef.current?.slickNext();
        }}
        className="absolute right-0 top-[50%] -translate-y-[50%] w-[45px] h-[45px] flex justify-center items-center border border-[#C4C4C4] rounded-full bg-white z-20 cursor-pointer"
      >
        <HiOutlineChevronRight size={24} color="#7A7A7A" />
      </div>
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[300px] border border-[#E4E4E4] px-[25px] py-[45px]"
            >
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="testImage"
                  className="w-[120px] h-[120px]"
                  objectFit="contain"
                />
                <h4 className="text-[14px] font-dmsans font-semibold text-[#434343]">
                  {item.username}
                </h4>
                <p className="text-[12px] font-dmsans font-normal text-[#505050] pt-2">
                  {item.company.department}
                </p>
                <p className="text-[14px] font-dmsans font-normal text-[#434343] py-[17px]">
                  {item.email}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
