import { MenuType } from "@/types";
import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  MENU: MenuType[];
  pathname?: string;
}

const MobileNav = ({ toggle, MENU, setToggle }: Props) => {
  return (
    <div
      className={`sidenav-section ${toggle ? "sidenav-section-show" : ""} z-30`}
    >
      <div className="w-full mt-16 px-[12px] pt-[40px] relative ">
        <RxCross2
          size={30}
          color="#434343"
          className="absolute left-[10px] -top-[20px]"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <nav className="flex flex-col items-start justify-center gap-y-[30px]">
          {MENU.map((item, index) => {
            return (
              <Link
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className={`text-[20px] font-normal tracking-[1.28px] font-dmsans text-[#434343] cursor-pointer uppercase flex justify-center items-center gap-x-[4px] px-[20px]`}
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
      </div>
    </div>
  );
};

export default MobileNav;
