import React from "react";
import Form from "../ui/Form";
import paymentOne from "../../../public/ui/Visa.svg";
import paymentTwo from "../../../public/ui/Mastercard.svg";
import paymentThree from "../../../public/ui/Amex.svg";
import paymentFour from "../../../public/ui/ApplePay.svg";
import paymentFive from "../../../public/ui/teddy.svg";
import Image from "next/image";
import FooterBanner from "./FooterBanner";
const Footer = () => {
  return (
    <footer className="md:px-[80px] px-[12px] md:pt-[86px] pt-[50px] bg-[#f5f4f4]">
      <div className="flex flex-col md:flex-row justify-center items-start gap-x-[30px] pb-[59px]">
        <div className="flex-[3] mt-[20px] md:mt-0">
          <h4 className="font-dmsans font-semibold text-[#434343] text-[16px] py-[5px]">
            CONTACT US
          </h4>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Book Appointment
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Visit Our Stores
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Email Us
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Contact Us
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Schedule a consultation
          </p>
        </div>
        <div className="flex-[3] mt-[20px] md:mt-0">
          <h4 className="font-dmsans font-semibold text-[#434343] text-[16px] py-[5px] uppercase">
            The Art of Gifting
          </h4>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Luxury Gift Wrapping
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Gift Cards
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Private & White-Glove Delivery
          </p>
        </div>
        <div className="flex-[3] mt-[20px] md:mt-0">
          <h4 className="font-dmsans font-semibold text-[#434343] text-[16px] py-[5px] uppercase">
            Bespoke & Services
          </h4>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Custom Jewelry Design
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Private Jewelry Consultations
          </p>
          <p className="font-dmsans font-normal text-[14px] text-[#434343] py-1">
            Jewelry Restoration & Care
          </p>
        </div>
        <div className="flex-[5]">
          <h4 className="text-[16px] text-[#434343] font-semibold font-dmsans pt-1 pb-[10px]">
            Let’s Keep In Touch
          </h4>
          <Form />
          <h4 className="text-[16px] text-[#434343] font-semibold font-dmsans pt-[36px] pb-[10px]">
            Payment Methods
          </h4>
          <div className="flex justify-start items-center gap-x-[15px]">
            <Image
              src={paymentOne}
              alt="pay1"
              className="w-[57px] object-contain"
            />
            <Image
              src={paymentTwo}
              alt="pay2"
              className="w-[57px] object-contain"
            />
            <Image
              src={paymentThree}
              alt="pay3"
              className="w-[57px] object-contain"
            />
            <Image
              src={paymentFour}
              alt="pay4"
              className="w-[57px] object-contain"
            />
            <Image
              src={paymentFive}
              alt="pay5"
              className="w-[57px] object-contain"
            />
          </div>
        </div>
      </div>
      <FooterBanner />
    </footer>
  );
};

export default Footer;
