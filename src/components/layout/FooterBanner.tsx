import React from "react";
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
const FooterBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center py-[20px] border-t border-t-[#E4E4E4]">
      <p className="font-dmsans text-[14px] text-[#434343] font-normal">
        © 2025, All Rights Reserved - MyJewel
      </p>
      <div className="flex justify-center items-center gap-x-[30px]">
        <p className="font-dmsans text-[12px] text-[#434343] font-normal">
          Terms & Conditions
        </p>
        <p className="font-dmsans text-[12px] text-[#434343] font-normal">
          Privacy Policy
        </p>
        <p className="font-dmsans text-[12px] text-[#434343] font-normal">
          Site Map
        </p>
        <LiaFacebook color="#7A7A7A" size={20} />
        <LiaInstagram color="#7A7A7A" size={20} />
      </div>
    </div>
  );
};

export default FooterBanner;
