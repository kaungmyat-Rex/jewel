import CustomJewel from "@/components/layout/CustomJewel";
import Explore from "@/components/layout/Explore";
import Feature from "@/components/layout/Feature";
import Hero from "@/components/layout/Hero";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <main className="w-full pt-[120px]">
      <Hero />
      <section className="w-full px-[12px] md:px-[80px] pb-[100px]">
        <p className="text-[14px] font-normal text-[#434343] py-[20px]">
          Home / Custom Jewelry
        </p>
        <CustomJewel />
      </section>
      <Feature />
      <Explore />
      <Testimonials />
    </main>
  );
}
