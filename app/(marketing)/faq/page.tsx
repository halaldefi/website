import Image from "next/image";
import Link from "next/link";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FaqAccordion from "@/components/sections/faq-accordion";
import HeroLanding from "@/components/sections/hero-landing";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title: "Halal DeFi FAQ - Ethical Blockchain Investments Explained",
  description:
    "Get answers on Halal DeFi’s ethical, Shariah-compliant investments in blockchain. Learn about $HDF token risks, returns, and Islamic finance compliance for secure, transparent crypto investing.",
  keywords: ["Halal DeFi FAQ", "ethical blockchain investment", "Shariah-compliant DeFi", "$HDF tokens", "Islamic finance", "crypto transparency"]
});

export default async function FAQ() {
  return (
    <div>
      <section className="relative space-y-6 overflow-hidden py-12 sm:py-36 lg:py-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/_static/landing/Vector.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at top center, rgba(255, 199, 114, 0.1) 0%, rgba(255, 199, 114, 0.2) 5%, rgba(255, 255, 255, 0) 50%)",
            transform: "scale(1.5)",
          }}
        ></div>
        <div className="container relative z-20 flex max-w-5xl flex-col items-center gap-5 text-center">
          <h1 className="text-balance font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      <div className="my-5">
        <FaqAccordion />
      </div>
      <MaxWidthWrapper>
        <section className="relative overflow-hidden rounded-xl py-12 sm:py-12 lg:py-12">
          {/* Background layers */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/_static/landing/Vector.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at top right, #402d21 20%, #000000 100%)",
            }}
          ></div>

          {/* Content */}
          <div className="container relative z-20 flex max-w-5xl flex-col items-center gap-5 text-center">
            <h1 className="text-balance font-urban text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[50px]">
              Have a more Questions?
            </h1>

            <div className="flex justify-center space-x-2 md:space-x-4">
              <Link
                href="https://getwaitlist.com/waitlist/8535"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                    rounded: "full",
                  }),
                  "px-5, bg-white",
                )}
              >
                <p>
                  <span className="text-black sm:inline-block">
                    Invest in $HDF
                  </span>
                </p>
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUL1wFrpYtOwlNd2w7P1l1tAr3wjgZzaoXJWoA6Gsosn51sg/viewform"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                    rounded: "full",
                  }),
                  "px-5",
                )}
              >
                <p>
                  <span className="text-white hover:text-black sm:inline-block">
                    Contact Us
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
