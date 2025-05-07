import React from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
const Navbanner = () => {
  return (
    <div className="flex justify-center md:justify-between items-center w-full px-[40px] py-[8px] bg-white border border-[#E4E4E4]">
      <div className="hidden justify-center items-center gap-x-[6px] md:flex  ">
        <HiOutlineCalendarDays size={20} color="#15274B" />
        <p className="font-Open_Sans font-normal text-[10px] text-[#15274B]">
          BOOK AN APPOINTMENT
        </p>
      </div>
      <div>
        <p className="font-dmsans font-normal text-[8px] md:text-[11px] text-[#15274B]">
          Exclusive Collection Launch: Discover Timeless Elegance Today
        </p>
      </div>
      <div className="hidden md:flex justify-center items-center gap-x-[20px]">
        <HiOutlineUserCircle size={17} color="#15274B" />
        <IoMdHeartEmpty size={17} color="#15274B" />
        <IoBagOutline size={17} color="#15274B" />
      </div>
    </div>
  );
};

export default Navbanner;
