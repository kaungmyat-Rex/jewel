import React from "react";
import { IconType } from "react-icons";

interface props {
  icon: IconType;
  title: string;
  desc: string;
}
const FeatureCard = ({ icon: Icon, title, desc }: props) => {
  return (
    <div className="max-w-[400px] w-full flex flex-col justify-center items-center py-[23px] px-[30px] shadow-lg bg-[#FFFFFF]">
      <Icon size={35} color="#15274B" />
      <h4 className="text-[20px] font-playfair font-semibold tracking-[0.48px] text-[#15274B] py-[20px]">
        {title}
      </h4>
      <p className="font-dmsans text-[16px] font-normal text-center text-[#7A7A7A]">
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;
