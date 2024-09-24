import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import WhyHalal from "@/components/sections/why-halal";
import HalalCard from "@/components/sections/halal-card";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      {/* <PreviewLanding /> */}
      {/* <Powered /> */}
      <WhyHalal />
      <HalalCard />
      {/* <BentoGrid /> */}
      {/* <InfoLanding data={infos[0]} reverse={true} /> */}
      {/* <InfoLanding data={infos[1]} /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
    </>
  );
}
