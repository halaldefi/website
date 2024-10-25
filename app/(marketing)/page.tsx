import FeaturedBlogs from "@/components/sections/FeaturedBlogs";
import HalalAccordion from "@/components/sections/halal-accordion";
import HalalCard from "@/components/sections/halal-card";
import HeroLanding from "@/components/sections/hero-landing";
import WhyHalal from "@/components/sections/why-halal";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Halal DeFi - Ethical Web3 & Cryptocurrency Investments | Shariah-Compliant",
  description:
    "Invest ethically in Web3 and DeFi with Halal DeFi’s Shariah-compliant venture fund. Explore $HDF tokens, ensuring liquidity and growth, all with transparent, Islamic finance principles.",
  keywords: ["ethical Web3 investments", "Shariah-compliant blockchain", "halal venture capital", "$HDF tokens", "transparent crypto", "Islamic finance", "decentralized finance"],
});

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
