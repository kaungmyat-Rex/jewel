import Image from "next/image";
import React from "react";
import cjewelOne from "../../../public/ui/cjewel1.svg";
import cjewelTwo from "../../../public/ui/cjewel2.svg";
import CustomStep from "../ui/CustomStep";
import { CUSTOM_JEWELRY_STEPS } from "@/constants/step";
const CustomJewel = () => {
  return (
    <div className="mt-[57px] flex flex-col md:flex-row justify-between items-start gap-x-[90px]">
      <div>
        <div className="flex flex-col gap-y-[20px] md:pb-[30px]">
          <h4 className="font-playfair text-[26px] md:text-[36px] text-[#101010] font-normal">
            Custom Jewelry
          </h4>
          <p className="font-dmsans text-[14px] md:text-[20px] text-[#434343] md:w-[65%] leading-[160%] tracking-[3%]">
            Create Your Masterpiece: Bespoke Jewelry Crafted for You
          </p>
        </div>
        <div className="relative w-[511px] h-full hidden md:block">
          <Image
            src={cjewelOne}
            alt="cjewelOne"
            objectFit="contain"
            className="w-[373px] h-[476px]"
          />
          <Image
            src={cjewelTwo}
            alt="cjewelTwo"
            objectFit="contain"
            className="w-[239px] h-[317px] border-[6px] border-white absolute -bottom-[32%] -right-[5px]"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-col-reverse md:flex-col">
        <p className="font-dmsans text-[#434343] text-[14px] md:text-[16px] font-normal md:w-[75%] mt-5 md:mt-0">
          Exquisite design, flawless craftsmanship, and timeless elegance—your
          vision, perfectly crafted.
        </p>
        <div className="mt-0 md:mt-[20px]">
          {CUSTOM_JEWELRY_STEPS.map((step) => {
            return (
              <CustomStep
                key={step.id}
                id={step.id}
                title={step.title}
                desc={step.desc}
              />
            );
          })}
        </div>
      </div>
      <div className="relative max-w-[311px] w-full h-full md:hidden mt-5">
        <Image
          src={cjewelOne}
          alt="cjewelOne"
          objectFit="contain"
          className="w-[250px] h-auto md:w-[373px] md:h-[476px]"
        />
        <Image
          src={cjewelTwo}
          alt="cjewelTwo"
          objectFit="contain"
          className="w-[150px] h-auto md:w-[239px] md:h-[317px] border-[6px] border-white absolute -bottom-[32%] -right-[5px]"
        />
      </div>
    </div>
  );
};

export default CustomJewel;
