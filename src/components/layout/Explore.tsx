import Image from "next/image";
import React from "react";
import adsjewel from "../../../public/ui/adsjewel.svg";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Explore = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center pt-[50px] md:pt-0">
      <div className="flex flex-col md:pl-[80px] px-[12px]">
        <h4 className="text-[26px] md:text-[32px] font-playfair font-normal text-[#101010]">
          Explore More
        </h4>
        <p className="text-[14px] font-dmsans font-normal text-[#7A7A7A] md:w-[55%] pt-[15px] pb-[31px]">
          Looking for more diamond guides, buying tips or details about the 4Cs?
          Explore more of our diamond education pages:
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-[10px]">
          <div className="md:max-w-[318px] w-full flex justify-between items-center py-[23px]">
            <p className="font-dmsans text-[14px] text-[#434343] font-normal">
              How to Select the Ideal Wedding Band
            </p>
            <div className="w-[50px] h-[50px] border border-[#7A7A7A] rounded-full flex justify-center items-center">
              <BsBoxArrowUpRight size={20} color="#434343" />
            </div>
          </div>
          <div className="md:max-w-[318px] w-full flex justify-between items-center py-[23px]">
            <p className="font-dmsans text-[14px] text-[#434343] font-normal">
              Lab Grown Diamond Guide
            </p>
            <div className="w-[50px] h-[50px] border border-[#7A7A7A] rounded-full flex justify-center items-center">
              <BsBoxArrowUpRight size={20} color="#434343" />
            </div>
          </div>
          <div className="md:not-only-of-type:max-w-[318px] w-full flex justify-between items-center py-[23px]">
            <p className="font-dmsans text-[14px] text-[#434343] font-normal">
              How to Choose the Engagement Ring
            </p>
            <div className="w-[50px] h-[50px] border border-[#7A7A7A] rounded-full flex justify-center items-center">
              <BsBoxArrowUpRight size={20} color="#434343" />
            </div>
          </div>
          <div className="md:max-w-[318px] w-full flex justify-between items-center py-[23px]">
            <p className="font-dmsans text-[14px] text-[#434343] font-normal">
              Ring Size Guide
            </p>
            <div className="w-[50px] h-[50px] border border-[#7A7A7A] rounded-full flex justify-center items-center">
              <BsBoxArrowUpRight size={20} color="#434343" />
            </div>
          </div>
        </div>
      </div>
      <Image src={adsjewel} alt="adsjewel" className="max-w-[597px]  w-full" />
    </section>
  );
};

export default Explore;
