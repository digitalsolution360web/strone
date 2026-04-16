import BgLayout from "@/components/layouts/bgLayout";
import About from "@/components/sections/about";
import Faqs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/homeProducts";
import House from "@/components/sections/house";

export default function Home() {
  return (
    <BgLayout>
      <Hero/>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <About/>
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4f01]/20 to-transparent" />
      <Products/>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <House/>
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4f01]/20 to-transparent" />
      <Faqs/>
    </BgLayout>
  );
}
