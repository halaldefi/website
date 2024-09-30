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
              <div className="text-md mt-6 flex font-normal">
                <div>
                  <Icons.coins className="mr-3 inline" />{" "}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Total Supply: .</span> 100 million
                  $Halal tokens
                </div>
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div>
                  <Icons.chart_breakout_circle_black className="mr-3 text-black" />{" "}
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold">
                      {" "}
                      85% for Retail Investors:{" "}
                    </span>{" "}
                    Tokens are sold in phases over the next two years, ensuring
                    wide access to the community.
                  </span>{" "}
                </div>
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div>
                  <Icons.coins className="mr-3" />{" "}
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold"> 15% Liquidity Pool: </span>
                    Locked in decentralized exchanges (Uniswap, PancakeSwap,
                    Halal DEX) to ensure consistent liquidity for trading.
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="relative mt-3 min-h-72 w-full flex-1 md:w-1/2">
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

      <div>
        <MaxWidthWrapper className="mt-4">
          <div className="flex flex-col rounded-xl bg-[#F7F6F6] md:flex-row md:items-stretch">
            <div className="relative mt-3 min-h-72 w-full flex-1 md:w-1/2">
              <Image
                src="/_static/tokenomics/frame2.png"
                alt="Background"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="size-5 rounded-xl"
              />
            </div>
            <div className="w-full flex-1 p-8 md:w-1/2">
              <div className="align-center flex flex-row justify-center text-5xl font-semibold">
                No Team Tokens or Airdrops
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div>
                  <Icons.users_x className="mr-3 inline" />
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold"> No Team Tokens: </span> We do
                    not allocate tokens to the team, aligning the interests of
                    the project with the community.
                  </span>{" "}
                </div>
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div>
                  <Icons.gift className="mr-3" />
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold"> No Airdrops: </span> All tokens
                    must be purchased, ensuring the community owns and controls
                    the token supply.
                  </span>{" "}
                </div>
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div>
                  <Icons.wallet className="mr-3 inline" />
                </div>
                <div>
                  <span>
                    <span className="font-bold">
                      {" "}
                      Responsible Venture Fund:
                    </span>
                    Responsible Venture Fund: We are a responsible venture
                    capital project, not a memecoin. Our tokens serve real
                    utility and contribute to ethical investment in Web3.
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div>
        <MaxWidthWrapper className="mt-4">
          <div className="flex flex-col rounded-xl bg-[#F7F6F6] md:flex-row md:items-stretch">
            <div className="w-full flex-1 p-8 md:w-1/2">
              <div className="align-center flex flex-row justify-center text-5xl font-semibold">
                Investment Strategy
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div className="mr-3">
                  <Icons.pie_chart className="mr-3" />
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold">Strategic Investments: </span>
                    <li>
                      Funds from token sales are allocated to high-potential
                      Web3 projects.{" "}
                    </li>
                    <li>
                      We conduct rigorous research and work closely with project
                      founders to identify disruptive opportunities.
                    </li>
                  </span>{" "}
                </div>
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div className="mr-3">
                  <Icons.bar_chart className="mr-3" />
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold"> Active Trading: </span>
                    <li>
                      We engage in active trading on decentralized exchanges to
                      capitalize on market fluctuations, generating additional
                      value for $Halal holders.
                    </li>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="relative mt-3 min-h-72 w-full flex-1 md:w-1/2">
              <Image
                src="/_static/tokenomics/frame3.png"
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

      <div>
        <MaxWidthWrapper className="mt-4">
          <div className="flex flex-col rounded-xl bg-[#F7F6F6] md:flex-row md:items-stretch">
            <div className="relative mt-3 min-h-72 w-full flex-1 md:w-1/2">
              <Image
                src="/_static/tokenomics/frame4.png"
                alt="Background"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="size-5 rounded-xl"
              />
            </div>
            <div className="w-full flex-1 p-8 md:w-1/2">
              <div className="align-center flex flex-row justify-center text-5xl font-semibold">
                Token Value Proposition
              </div>
              <div className="text-md mt-6 font-normal">
                <span>
                  <Icons.arrow_right_up className="mr-3 inline" />
                  <span className="font-bold"> Value Growth: </span>
                  The value of $Halal tokens grows in line with the performance
                  of our investments and trading activities.
                </span>{" "}
              </div>
              <div className="text-md mt-6 font-normal">
                <span>
                  <Icons.coins className="mr-3 inline" />{" "}
                  <span className="font-bold"> Market Flexibility: </span>
                  $Halal tokens can be traded on major decentralized exchanges,
                  including Uniswap, Matcha, and Halal DEX. This ensures
                  liquidity and allows for unrestricted trading.
                </span>{" "}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section className="relative my-10 overflow-hidden rounded-xl py-12 sm:py-12 lg:py-12">
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
