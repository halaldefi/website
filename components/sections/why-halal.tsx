import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function WhyHalal() {
  const newLocal =
    "absolute right-10 top-0 hidden overflow-hidden p-5 lg:block";
  return (
    <section>
      <div
        className="align-center flex w-full justify-center"
        style={{
          background:
            "linear-gradient(rgba(255, 199, 114, 0.2) 0%, #F7F7F8 100%)",
        }}
      >
        <div className="w-[95%] rounded-2xl bg-white md:w-[98%] lg:w-[98%]">
          <MaxWidthWrapper className="mt-14">
            <HeaderSection title="Why Halal DeFi?" />

            <div className="relative z-10 mt-20 grid grid-cols-7 gap-3">
              <div className="relative col-span-full flex overflow-hidden rounded-2xl bg-[#F8F8F8] lg:col-span-7">
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
                    <div className="w-full lg:w-3/5">
                      <p className="text-4xl text-white lg:w-3/5">
                        Early Access to High-Growth Web3 Projects
                      </p>
                      <p className="mt-10 text-lg text-white">
                        As a micro venture fund, Halal DeFi gives you
                        early-stage access to blockchain and decentralized
                        finance (DeFi) projects that are typically reserved for
                        institutional investors. This means you can invest in
                        promising projects before they reach the mainstream
                        market.
                      </p>
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
                          "px-5",
                          "mt-10",
                          "bg-white",
                          "relative",
                        )}
                      >
                        <p>
                          <span className="sm:inline-block">
                            Try it for free!
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="relative w-full lg:w-2/5">
                      <div className="absolute top-0">
                        <Icons.line_chart />
                      </div>
                      <div className="absolute right-56 top-0">
                        <Icons.dotted_y_line />
                      </div>
                      <div className="absolute right-20 top-24 h-10 w-32">
                        <Image
                          src="/_static/landing/halal-widget2.png"
                          alt="Background"
                          layout="fill"
                          quality={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* First card */}
              <div className="relative col-span-full flex overflow-hidden rounded-2xl bg-[#F8F8F8] lg:col-span-3">
                <div className="absolute mb-12 hidden lg:block">
                  <Icons.market_up className="w-full" />
                </div>
                <div className="z-10 my-6 block space-y-1.5 px-6 lg:flex lg:items-end lg:justify-center">
                  <h1 className="text-4xl font-semibold text-foreground lg:mr-2 lg:text-2xl xl:mr-10 xl:text-4xl">
                    Ethical Investments
                  </h1>
                  <p className="text-left text-[14px] text-muted-foreground">
                    Our commitment to Islamic financial principles guides every
                    investment decision. We strictly avoid riba (interest),
                    gambling, and other non-permissible activities, focusing
                    only on projects that meet both your ethical standards and
                    financial objectives.
                  </p>
                </div>
              </div>

              {/* Second card */}
              <div className="relative col-span-full flex overflow-hidden rounded-2xl bg-[#F8F8F8] lg:col-span-4">
                <div className="relative h-64 w-full lg:h-80">
                  <div className="absolute right-0 top-0 hidden size-72 overflow-hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#F8F8F8]"></div>
                    <Icons.xy_grid className="size-full" />
                  </div>
                  <div className="absolute bottom-0 z-10 mb-6 space-y-1.5 px-6">
                    <h1 className="mr-16 text-4xl font-semibold text-foreground lg:mb-10 lg:w-2/4">
                      Sustainable, High-Value Returns
                    </h1>
                    <p className="text-left text-[14px] text-muted-foreground lg:w-2/4">
                      We aim for a target Internal Rate of Return (IRR) of 22%
                      through disciplined project selection and active asset
                      management. Our focus is on delivering sustainable growth
                      for all our investors.
                    </p>
                  </div>
                  <div className={newLocal}>
                    <div className="relative flex size-52 items-center justify-center rounded-full bg-white shadow-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-yellow-600">
                          22%
                        </span>
                        <span className="text-base text-gray-600">
                          Internal Rate of Return
                        </span>
                      </div>

                      <div className="absolute left-2 top-2 size-12 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src="/_static/landing/user2.png"
                          alt="Background"
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                      <div className="card-gradient_halal absolute bottom-2 right-2 flex size-12 items-center justify-center rounded-full">
                        <Icons.chart_breakout_circle className="size-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second row */}
              <div className="relative col-span-full overflow-hidden rounded-2xl bg-[#F8F8F8] sm:col-span-3 lg:col-span-4">
                <div className="z-10 flex h-full">
                  <div className="hidden w-2/6 items-center justify-center p-4 lg:flex">
                    <Icons.shield_yellow />
                  </div>
                  <div className="z-10 my-6 items-center justify-center gap-4 space-y-1.5 px-10 lg:my-0 lg:flex lg:w-4/6 lg:flex-col">
                    <h1 className="mr-16 text-4xl font-semibold text-foreground">
                      Transparent and Secure
                    </h1>
                    <p className="text-left text-[14px] text-muted-foreground">
                      Transparency is paramount in our operations. Every
                      transaction is publicly recorded, and all funds are stored
                      in multi-signature vaults, adding extra layers of security
                      to protect your investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative col-span-full flex overflow-hidden rounded-2xl bg-[#F8F8F8] lg:col-span-3">
                <div className="relative h-72 w-full">
                  <div className="absolute right-0 top-0 hidden size-72 overflow-hidden opacity-70 lg:block">
                    <div className="absolute inset-0 from-transparent to-[#F8F8F8]"></div>
                    <Image
                      src="/_static/landing/worldmap.png"
                      alt="Background"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="absolute z-10 mb-6 space-y-1.5 px-6 lg:bottom-0">
                    <h1 className="mb-4 mt-6 text-4xl font-semibold text-foreground lg:mb-10 lg:mr-16 lg:w-3/5">
                      Global Reach, Shared Values
                    </h1>
                    <p className="w-[70%] text-left text-[14px] text-muted-foreground">
                      With over 1.8 billion Muslims worldwide, Halal DeFi taps
                      into a growing market of investors who are seeking both
                      financial returns and ethical alignment. Join a global
                      movement that’s shaping the future of finance.
                    </p>
                  </div>
                  <div className="absolute right-0 hidden overflow-hidden lg:block">
                    <div className="relative flex size-72 items-center justify-center">
                      <div className="absolute left-52 top-20 size-8 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src="/_static/landing/country1.png"
                          alt="Background"
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                      <div className="absolute left-52 top-40 size-8 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src="/_static/landing/country2.png"
                          alt="Background"
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                      <div className="absolute left-32 top-40 size-8 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src="/_static/landing/country3.png"
                          alt="Background"
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                      <div className="absolute left-28 top-20 size-8 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src="/_static/landing/country5.png"
                          alt="Background"
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative col-span-full flex overflow-hidden rounded-2xl lg:col-span-7">
                <div className="z-20 flex w-full flex-col flex-wrap py-8 lg:flex-row lg:py-16">
                  <div className="w-full lg:w-2/4">
                    <p className="text-6xl font-semibold text-black">
                      No Long Lock-Ups, Full Control
                    </p>
                    <p className="mt-10 text-[14px] text-black">
                      Traditional venture capital locks your funds for years,
                      but with Halal DeFi, you have full liquidity. You can buy
                      or sell{" "}
                      <span className="font-bold">$HDF tokens anytime.</span>{" "}
                      Starting May 2025, $HDF will be listed on major
                      decentralized exchanges like PancakeSwap and Uniswap,
                      where you can trade freely without restrictions or
                      intermediaries.
                    </p>
                    <Link
                      href="https://getwaitlist.com/waitlist/8535"
                      prefetch={true}
                      target="_blank"
                      className={cn(
                        buttonVariants({ rounded: "full" }),
                        "mt-10 gap-2 p-4",
                      )}
                    >
                      <span> Invest in $HDF</span>
                    </Link>
                  </div>
                  <div className="relative size-full rounded-3xl lg:w-2/4">
                    <div className="card relative size-full overflow-hidden rounded-3xl">
                      <div className="content relative flex h-full justify-center">
                        <div className="left flex items-center justify-center">
                          <Image
                            src="/_static/landing/frame3.png"
                            alt="Buy Halal"
                            width={600}
                            height={600}
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </section>
  );
}
