import Image from "next/image";
import Link from "next/link";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title: "Halal DeFi Tokenomics - $HDF Token Distribution",
  description:
    "Discover Halal DeFi’s $HDF tokenomics, with 100M tokens allocated for ethical investing and liquidity on decentralized exchanges. No team tokens; community ownership drives value and transparency in blockchain investments.",
  keywords: ["$HDF tokenomics", "Shariah-compliant crypto", "decentralized exchanges", "blockchain transparency", "ethical investment", "community-driven fund", "Halal DeFi"] 
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
              <div className="align-center flex flex-row text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                Token Supply and Distribution
              </div>
              <div className="mt-6 font-bold">
                We maintain transparency by clearly defining the token
                distribution:
              </div>
              <div className="text-md mt-2 flex font-normal">
                <div>
                  <Icons.coins className="mr-3 inline" />{" "}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Total Supply: .</span> 100 million
                  $HDFokens
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
                      90% for Retail Investors:{" "}
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
                    <span className="font-bold"> 10% Liquidity Pool: </span>
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
              <div className="align-center flex flex-row text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                No Team Tokens or Airdrops
              </div>
              <div className="mt-6 font-bold">
                Unlike many projects, Halal.io does not reserve tokens for the
                team, influencers, or advisors.
              </div>
              <div className="text-md mt-2 flex font-normal">
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
              <div className="align-center flex flex-row text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                Investment Strategy
              </div>
              <div className="mt-6 font-bold">
                Our strategy revolves around two key elements:
              </div>
              <div className="text-md mt-2 flex font-normal">
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
                      value for $HDF holders.
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
        <MaxWidthWrapper className="mb-10 mt-4">
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
              <div className="align-center flex flex-row justify-center text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                Token Value Proposition
              </div>
              <div className="text-md mt-6 flex font-normal">
                <div className="mr-3 mt-2">
                  <Icons.arrow_right_up className="mr-3" />
                </div>
                <div>
                  {" "}
                  <span>
                    <span className="font-bold"> Value Growth: </span>
                    The value of $HDF tokens grows in line with the performance
                    of our investments and trading activities.
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
                    <span className="font-bold"> Market Flexibility: </span>
                    $HDF tokens can be traded on major decentralized exchanges,
                    including Uniswap, Matcha, and Halal DEX. This ensures
                    liquidity and allows for unrestricted trading.
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="bg-[#F7F6F6] py-10">
        <MaxWidthWrapper>
          <div className="rounded-xl bg-white p-8">
            <div className="flex items-center justify-center">
              <p className="w-2/4 text-center text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                {" "}
                Security and Risk Management
              </p>
            </div>
            <div className="align-centre relative mt-3 flex min-h-56 w-full justify-center">
              <Image
                src="/_static/tokenomics/frame5.png"
                alt="Background"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="size-5 rounded-xl"
              />
            </div>
            <div className="mt-8 flex flex-col justify-between rounded-xl md:flex-row md:items-stretch">
              <div className="relative rounded-xl bg-[#F7F6F6] p-4 md:w-[48%]">
                <div className="flex">
                  <Icons.shield_black />
                  <p className="ml-3 text-lg font-semibold">
                    Safe Vault Protection
                  </p>
                </div>
                <div className="mt-6">
                  We prioritize the safety of your funds using Safe Vault, a
                  multisignature (multisig) wallet provided by Safe(Wallet).
                  Multisig wallets require multiple parties to approve
                  transactions, reducing the risk of unauthorized access and
                  ensuring that your investments are protected at all times.
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[#F7F6F6] p-4 md:w-[48%] lg:mt-0">
                <div className="flex">
                  <Icons.check_verified />
                  <p className="ml-3 text-lg font-semibold">
                    Trusted by Industry Leaders
                  </p>
                </div>
                <div className="mt-6">
                  Safe.Global is a trusted platform, securing over $100 billion
                  in assets for leading projects, including Ethereum co-founder
                  Vitalik Buterin. By using this industry-standard multisig
                  technology, we ensure top-tier protection for the funds
                  backing $HDF tokens.
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col justify-between overflow-hidden rounded-xl md:flex-row md:items-stretch">
              <div className="relative w-full bg-[#F7F6F6] p-4 lg:w-2/4 xl:w-2/4">
                <div className="flex">
                  <p className="ml-3 w-4/5 text-xl font-semibold lg:text-6xl xl:text-6xl">
                    Token Utility and Use Cases
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="https://getwaitlist.com/waitlist/8535"
                    target="_blank"
                    prefetch={true}
                    className={cn(
                      buttonVariants({ rounded: "full" }),
                      "gap-2 px-4",
                    )}
                  >
                    <span> Invest in $HDF</span>
                  </Link>
                </div>
              </div>
              <div className="mt-4 w-full bg-[#F7F6F6] p-4 lg:mt-0 lg:w-2/4 xl:w-2/4">
                <div className="flex">
                  <Icons.scales />
                  <p className="ml-3 text-lg font-semibold">
                    Governance (Future)
                  </p>
                </div>
                <div className="mt-3">
                  Token holders will eventually have voting rights to decide on
                  key project matters.
                </div>
                <div className="mt-3 flex">
                  <Icons.coins />
                  <p className="ml-3 text-lg font-semibold">
                    Staking & Rewards (Future)
                  </p>
                </div>
                <div className="mt-3">
                  Staking mechanisms will allow holders to lock tokens and earn
                  rewards, further incentivizing long-term participation.
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section className="relative my-10 overflow-hidden rounded-xl p-10">
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

          <div className="container relative z-20 flex max-w-5xl flex-col items-center gap-5 rounded-xl bg-[#f1740011] p-8 text-center backdrop-blur-sm">
            <h1 className="text-balance font-urban text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[50px]">
              Contract Addresses
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
                    Coming Soon
                  </span>
                </p>
              </Link>
            </div>
          </div>
          <div className="container relative z-20 mt-12 flex max-w-5xl flex-col items-center gap-5 rounded-xl p-8 text-center">
            <h1 className="text-balance font-urban text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[50px]">
              Risk and Disclaimer
            </h1>
            <h1 className="text-balance font-urban text-lg tracking-tight text-white">
              Check Terms of Use for full risk disclosures.
            </h1>
            <div className="mt-8 flex flex-col justify-between rounded-xl text-white md:flex-row md:items-stretch">
              <div className="rounded-xl bg-[#de85310D] p-4 backdrop-blur-md md:w-[30%] lg:mt-0">
                <div className="flex items-center">
                  <Icons.alert_triangle />
                  <p className="ml-3 text-lg font-semibold">
                    Market Volatility
                  </p>
                </div>
                <div className="mt-6">
                  Market volatility, liquidity issues, and regulatory changes
                  are inherent risks in cryptocurrency investments.
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[#de85310D] p-4 backdrop-blur-md md:w-[30%] lg:mt-0">
                <div className="flex items-center">
                  <Icons.key />
                  <p className="ml-3 text-lg font-semibold">
                    Security Measures
                  </p>
                </div>
                <div className="mt-6">
                  While we implement robust security and strategic practices,
                  investors must be aware of these risks.
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[#de85310D] p-4 backdrop-blur-md md:w-[30%] lg:mt-0">
                <div className="flex items-center">
                  <Icons.line_chart_down />
                  <p className="text-md ml-3 font-semibold">
                    Investment Disclaimer
                  </p>
                </div>
                <div className="mt-6">
                  Please note, past performance is not indicative of future
                  results, and all investments carry the potential for loss.
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 md:space-x-4">
              <Link
                href={"terms"}
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
                    Terms of Use
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
