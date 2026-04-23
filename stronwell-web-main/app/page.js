import BgLayout from "@/components/layouts/bgLayout";
import OurStory from "@/components/sections/ourStory";
import CoreValues from "@/components/sections/coreValues";
import Faqs from "@/components/sections/faqs";
import HomeCTA from "@/components/sections/homeCTA";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/homeProducts";
import House from "@/components/sections/house";
import FeatureShowcase from "@/components/sections/featureShowcase";

export default function Home() {
  return (
    <BgLayout>
      <Hero/>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <OurStory/>
      <CoreValues/>
      <House/>
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4f01]/20 to-transparent" />
      <Products/>
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4f01]/20 to-transparent" />
      <FeatureShowcase/>
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4f01]/20 to-transparent" />
      <Faqs/>
      <HomeCTA/>
    </BgLayout>
  );
}
