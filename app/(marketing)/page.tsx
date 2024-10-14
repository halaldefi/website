import HeroLanding from "@/components/sections/hero-landing";
import WhyHalal from "@/components/sections/why-halal";
import HalalCard from "@/components/sections/halal-card";
import HalalAccordion from "@/components/sections/halal-accordion";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <WhyHalal />
      <HalalAccordion />
      <HalalCard />
      <FeaturedBlogs />
    </>
  );
}
