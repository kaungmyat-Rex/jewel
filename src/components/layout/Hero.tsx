import Image from "next/image";
import React from "react";
import innerRight from "../../../public/ui/rightInner.svg";
import diamondOne from "../../../public/ui/jewel1.svg";
import diamondTwo from "../../../public/ui/jewel2.svg";
import diamondThree from "../../../public/ui/jewel3.svg";

const Hero = () => {
  return (
    <div className="w-full h-[420px] bg-[#F0F0F0] relative flex justify-center items-center">
      <Image
        src={innerRight}
        alt="innerRight"
        width={1000}
        height={1000}
        className="absolute w-[268px] h-[228px] md:w-[468px] md:h-[420px] right-0"
      />
      <Image
        src={innerRight}
        alt="innerLeft"
        width={1000}
        height={1000}
        className="absolute w-[268px] h-[228px] md:w-[468px] md:h-[420px] left-0 rotate-180"
      />
      <Image
        src={diamondOne}
        alt="diamond1"
        width={1000}
        height={1000}
        className="w-[172px] h-[132px] md:w-[533px] md:h-[381px] absolute left-0 bottom-0 md:-bottom-[20px]"
        objectFit="contain"
      />
      <Image
        src={diamondTwo}
        alt="diamond2"
        width={1000}
        height={1000}
        className="w-[244px] md:w-[565px] absolute bottom-0 right-0"
        objectFit="contain"
      />
      <Image
        src={diamondThree}
        alt="diamond3"
        width={1000}
        height={1000}
        className="w-[130px] md:w-[200px] absolute right-0 top-0"
        objectFit="contain"
      />
      <div className="flex flex-col gap-y-[30px] justify-center items-center z-10">
        <h4 className="font-playfair text-[48px] text-[#434343] font-normal">
          Custom Jewelry
        </h4>
        <p className="font-dmsans text-[#434343] font-normal text-[20px] text-center">
          Create Your Masterpiece: Bespoke Jewelry Crafted for You
        </p>
      </div>
    </div>
  );
};

export default Hero;
