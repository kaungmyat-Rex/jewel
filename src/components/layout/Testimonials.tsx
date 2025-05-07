import React from "react";
import Carousel from "../ui/Carousel";
import getTestimonials from "@/lib/getTestimonials";

const Testimonials = async () => {
  const testimonials = await getTestimonials();
  return (
    <section className="w-full px-[12px] md:px-[80px] py-[100px]">
      <h4 className="text-[36px] text-[#101010] font-playfair font-normal text-center py-[15px]">
        Testimonials
      </h4>
      <Carousel testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
