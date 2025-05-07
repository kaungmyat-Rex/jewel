import React from "react";

interface props {
  id: number;
  title: string;
  desc: string;
}

const CustomStep = ({ id, title, desc }: props) => {
  return (
    <div className="flex justify-start items-start gap-x-[10px] md:gap-x-[22px] py-[30px] border-b border-b-[#E4E4E4]">
      <p className="md:w-[21px] w-[15px] md:text-[20px] text-[14px] text-[#7A7A7A] font-normal font-dmsans">
        0{id}
      </p>
      <div className="-mt-[2px]">
        <h4 className="font-dmsans text-[16px] md:text-[24px] font-medium text-[#101010] uppercase tracking-[1.6px]">
          {title}
        </h4>
        <p className="font-dmsans text-[14px] md:text-[20px] font-normal text-[#7A7A7A] mt-[10px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CustomStep;
