import Image from "next/image";
import Link from "next/link";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title: "Tokenomics – Halal.io",
  description:
    "Halal DeFi is a Shariah-compliant venture fund on the blockchain, providing access to high-growth opportunities in Web3. Each investment aligns with the principles of Islamic finance—no riba, no compromise.",
});

export default async function Tokenomics() {
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
            Halal DeFi Tokenomics:
            <div className="text-gradient_halal">
              Transparent, Secure, and Community-Driven
            </div>
          </h1>
        </div>
      </section>
      <div>
        <MaxWidthWrapper>
          <div className="flex flex-col rounded-xl bg-[#F7F6F6] md:flex-row md:items-stretch">
            <div className="w-full flex-1 p-8 md:w-1/2">
              <div className="align-center flex flex-row justify-center text-5xl font-semibold">
                Token Supply and Distribution
              </div>
              <div className="text-md mt-6 font-normal">
                <span>
                  <Icons.coins className="mr-3 inline" /> Total Supply: 100
                  million $Halal tokens.
                </span>{" "}
              </div>
              <div className="text-md mt-6 font-normal">
                <span>
                  <Icons.chart_breakout_circle_black className="mr-3 inline text-black" />{" "}
                  <span className="font-bold"> 85% for Retail Investors: </span>{" "}
                  Tokens are sold in phases over the next two years, ensuring
                  wide access to the community.
                </span>{" "}
              </div>
              <div className="text-md mt-6 font-normal">
                <span>
                  <Icons.coins className="mr-3 inline" />{" "}
                  <span className="font-bold"> 15% Liquidity Pool: </span>
                  Locked in decentralized exchanges (Uniswap, PancakeSwap, Halal
                  DEX) to ensure consistent liquidity for trading.
                </span>{" "}
              </div>
            </div>
            <div className="relative min-h-72 w-full flex-1 mt-3 md:w-1/2">
              <Image
                src="/_static/tokenomics/frame1.png"
                alt="Background"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="size-5 rounded-xl"
              />
            </div>
          </div>
        </MaxWidthWrapper>
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
                href={"/"}
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
                    $invest in Halal
                  </span>
                </p>
              </Link>
              <Link
                href={"/"}
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
