import React from "react";
import FeatureCard from "../ui/FeatureCard";
import { WHY_CHOOSE_US } from "@/constants/choice";
import Image from "next/image";
import Bcircle from "../../../public/ui/Bcircle.svg";
import Scircle from "../../../public/ui/Scircle.svg";
const Feature = () => {
  return (
    <section className="relative pb-[100px]">
      <Image
        src={Bcircle}
        alt="Bcircle"
        className="md:w-[463px] w-[400px] absolute -right-[120px] md:right-0 bottom-0 -z-10"
      />
      <Image
        src={Scircle}
        alt="Scircle"
        className="md:w-[317px] w-full absolute right-0 md:right-[320px] bottom-0 -z-10"
      />
      <div className="px-[12px] md:px-[80px] ">
        <h4 className="text-[36px] font-playfair font-normal text-[#101010] text-center mt-[77px]">
          Why Choose MyJewel?
        </h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-[20px] md:gap-x-[40px] py-[40px]">
          {WHY_CHOOSE_US.map((item, index) => {
            return (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
