"use client";
import React, { useState } from "react";
import Navbanner from "./Navbanner";
import { MENU } from "@/constants/menu";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import MobileNav from "../ui/MobileNav";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="w-full fixed top-0 bg-white z-30">
      <Navbanner />
      <div className="flex justify-between items-center border-b border-b-[#E4E4E4]">
        <div className="flex md:hidden justify-center items-center gap-x-[10px] ml-[16px]">
          <TbMenu2
            size={17}
            color="#434343"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
          <HiOutlineCalendarDays size={17} color="#434343" />
        </div>
        <h4 className="font-playfair text-[26px] md:text-[36px] text-[#101010] font-normal px-[65px] md:border-r md:border-r-[#E4E4E4] py-[10px]">
          MyJewel
        </h4>
        <nav className="hidden md:flex flex-row justify-center items-center gap-x-[15px]">
          {MENU.map((item, index) => {
            return (
              <Link
                className={`text-[13px] font-normal tracking-[1.28px] font-dmsans text-[#434343] cursor-pointer uppercase flex justify-center items-center gap-x-[4px] px-[20px]`}
                key={item.id}
                href={item.path}
              >
                {item.title}
                {index === 0 || index === 1 || index === 2 ? (
                  <FiChevronDown size={13} color="#434343" />
                ) : (
                  <></>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex md:hidden justify-center items-center gap-x-[10px] mr-[16px]">
          <IoMdHeartEmpty size={17} color="#434343" />
          <IoBagOutline size={17} color="#434343" />
          <IoSearchOutline
            size={17}
            color="#434343"
            className="cursor-pointer"
          />
        </div>
        <div className="border-l border-l-[#E4E4E4] px-[40px] py-[32px] hidden md:block">
          <IoSearchOutline
            size={20}
            color="#434343"
            className="cursor-pointer"
          />
        </div>
      </div>
      <MobileNav toggle={toggle} setToggle={setToggle} MENU={MENU} />
    </header>
  );
};

export default Header;
