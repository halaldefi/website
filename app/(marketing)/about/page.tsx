import Image from "next/image";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import AdvisorsEmblaCarousel from "@/components/sections/AdvisorsEmblaCarousal";
import TeamEmblaCarousel from "@/components/sections/TeamEmblaCarousal";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title:
    "About Halal DeFi - Halal Micro Venture Capital Fund on the Blockchain",
  description:
    "Learn about Halal DeFi, the first Shariah-compliant micro VC for blockchain. Our team combines expertise in finance, blockchain, and Islamic principles to deliver ethical, transparent investing.",
  keywords: ["Shariah-compliant VC", "blockchain micro VC", "ethical crypto investing", "Halal DeFi team", "Web3 investments", "Islamic finance"]  
});

export default async function About() {
  const OPTIONS: EmblaOptionsType = { align: "start" };

  return (
    <div>
      <section className="relative overflow-hidden py-12 sm:py-36 lg:py-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/_static/landing/Vector.webp"
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
        <div className="container relative z-20 flex flex-col items-center gap-5 text-center">
          <div className="flex flex-col rounded-xl md:flex-row md:items-stretch">
            <div className="w-full p-4 md:w-3/5 md:p-8 lg:p-8 xl:p-8">
              <div className="align-center flex flex-row justify-center text-left text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                Aspiring to be wealthy is an admirable goal, but so is staying
                true to your values.
              </div>
            </div>
            <div className="relative mt-3 flex min-h-72 w-full items-end p-8 md:w-2/5">
              <p className="font-semibold">
                Investing according to Islamic principles isn&apos;t just about
                financial gain—it&apos;s a commitment to aligning your wealth
                with your values. Halal investing is not exclusive to Muslims;
                it offers a disciplined and ethical framework for growing wealth
                that can benefit everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative flex min-h-[500px] w-full items-center justify-center">
        <Image
          src="/_static/about/about-full-image.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="relative z-10 max-w-[90%] rounded-xl bg-white p-8 lg:max-w-[30%]">
          <div className="text-balance text-center font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
            Our <span className="text-gradient_halal">Mission</span>
          </div>
          <div className="mt-6 text-center">
            Our mission is simple: to offer a platform where you can invest with
            confidence, knowing your money aligns with your values. We bridge
            the gap between faith and innovation, giving you access to the
            future of finance without compromising your principles.
          </div>
        </div>
      </div>

      <div className="bg-[#F7F6F6] py-10 lg:py-10 xl:py-10">
        <MaxWidthWrapper>
          <div className="rounded-xl bg-white p-0 md:p-8 lg:p-8 xl:p-8">
            <div className="rounded-xl p-6 pt-0 md:items-stretch">
              <div className="text-balance py-4 font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:py-0 md:text-6xl lg:text-[50px]">
                Why We <span className="text-gradient_halal">Exist</span>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="relative flex items-center">
                  <Image
                    src="/_static/about/frame1.png"
                    alt="Background"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className="rounded-xl"
                  />
                </div>
                <div className="w-full p-8">
                  <div className="font-semibold">
                    We offer more than just Shariah-compliant investments:
                  </div>
                  <div className="mt-2 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_glob className="mr-3 inline size-4" />
                    </div>
                    <div>
                      Global Accessibility: Invest from anywhere in the world
                      without restrictions.
                    </div>
                  </div>
                  <div className="mt-6 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_coins_hand className="mr-3 size-4" />
                    </div>
                    <div>
                      Liquidity: Unlike traditional venture capital, Halal DeFi
                      offers liquidity, allowing you to sell your tokens
                      anytime.
                    </div>
                  </div>
                  <div className="mt-6 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_search className="mr-3 inline size-4" />
                    </div>
                    <div>
                      Thorough Research: We rigorously research every project,
                      focusing on both innovation and Shariah adherence.
                    </div>
                  </div>
                  <div className="mt-2 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_login className="mr-3 inline size-4" />
                    </div>
                    <div>
                      Exclusive Access: Through our networks, we secure early
                      entry into high-potential Web3 opportunities.
                    </div>
                  </div>
                  <div className="mt-2 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_cpu_chip className="mr-3 inline size-4" />
                    </div>
                    <div>
                      AI-Driven Insights: Advanced data analytics guide our
                      investment decisions, balancing risk and maximizing
                      potential growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 pt-0 md:items-stretch">
              <div className="text-balance py-4 font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:py-6 md:text-6xl lg:text-[50px]">
                Our<span className="text-gradient_halal"> Business Model</span>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="relative flex items-center">
                  <Image
                    src="/_static/about/frame2.png"
                    alt="Background"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className="rounded-xl"
                  />
                </div>
                <div className="w-full p-8">
                  <div className="font-semibold">
                    Our revenue model is simple and straightforward, ensuring
                    that we can continue to grow while offering our community a
                    secure and ethical platform for investment.
                  </div>
                  <div className="mt-2 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_coins_hand className="mr-3 inline size-4" />
                    </div>
                    <div>
                      1% Assets Under Management Fee: We charge a 1% annual fee
                      on the total assets under management. This fee covers
                      operational costs, fund management, and ongoing research
                      to identify high-potential investments.
                    </div>
                  </div>
                  <div className="mt-6 flex text-sm font-normal">
                    <div className="flex items-center">
                      <Icons.about_coin_swap className="mr-3 size-4" />
                    </div>
                    <div>
                      1% Transaction Fee: A 1% fee is applied to all buy and
                      sell transactions of $HDF tokens. This fee applies during
                      the token sale and when trading on decentralized
                      exchanges. It helps maintain liquidity and covers
                      operational costs, ensuring the long-term sustainability
                      of the platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-10 border-t bg-[#F7F6F6]"></div>
            <div className="align-center mb-10 flex flex-row justify-center text-left text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
              Meet With Our Team
            </div>
            <TeamEmblaCarousel options={OPTIONS} />
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="bg-[#F7F6F6]">
        <MaxWidthWrapper>
          <div className="rounded-xl p-0 md:p-8 lg:p-8 xl:p-8">
            <div className="mb-10 text-center text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
              Advisors
            </div>
            <AdvisorsEmblaCarousel options={OPTIONS} />
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section>
          <div className="align-center flex w-full justify-center">
            <div className="relative z-10 my-10 grid grid-cols-7 gap-3">
              <div className="relative col-span-full flex overflow-hidden rounded-2xl lg:col-span-7">
                <div
                  className="card relative size-full overflow-hidden rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at top right, #402d21 20%, #000000 100%)",
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src="/_static/landing/vector2.png"
                      alt="Background"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="z-20 flex w-full flex-col flex-wrap p-16 lg:flex-row">
                    <div className="w-full lg:w-2/5">
                      <p className="text-2xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[50px]">
                        Join Us on This Journey
                      </p>
                    </div>
                    <div className="relative w-full text-white lg:w-3/5">
                      <p>
                        Halal DeFi isn’t just about investing—it&apos;s about
                        making a difference. When you join us, you’re part of a
                        community that values integrity, growth, and innovation.
                        Together, we can build a financial future that’s true to
                        your values and beneficial for all.
                      </p>
                      <div className="mt-3 space-x-2 md:space-x-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
