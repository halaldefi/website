import Image from "next/image";
import Link from "next/link";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title: "About – Halal.io",
  description:
    "Halal DeFi is a Shariah-compliant venture fund on the blockchain, providing access to high-growth opportunities in Web3. Each investment aligns with the principles of Islamic finance—no riba, no compromise.",
});

export default async function About() {
  return (
    <div>
      <section className="relative overflow-hidden py-12 sm:py-36 lg:py-36">
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
        <div className="container relative z-20 flex flex-col items-center gap-5 text-center">
          <div className="flex flex-col rounded-xl md:flex-row md:items-stretch">
            <div className="w-full p-4 md:p-8 lg:p-8 xl:p-8 md:w-3/5">
              <div className="align-center flex flex-row justify-center text-left text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                Aspiring to be wealthy is an admirable goal, but so is staying
                true to your values.
              </div>
            </div>
            <div className="relative mt-3 flex min-h-72 w-full items-end p-8 md:w-2/5">
              <p className="font-semibold">
                Investing according to Islamic principles isn't just about
                financial gain—it's a commitment to aligning your wealth with
                your values. Halal investing is not exclusive to Muslims; it
                offers a disciplined and ethical framework for growing wealth
                that can benefit everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-0 lg:py-10 md:py-10 xl:py-10 bg-[#F7F6F6]">
        <MaxWidthWrapper>
          <div className="rounded-xl bg-white p-0 lg:p-8 md:p-8 xl:p-8">
            <div className="flex flex-col justify-between md:flex-row md:items-stretch">
              <div className="relative p-4 md:w-[20%]">
                <div className="text-balance font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
                  Our
                  <div className="text-gradient_halal">Mission</div>
                </div>
              </div>
              <div className="mt-4 p-4 font-light md:w-[80%] lg:mt-0">
                At Halal DeFi, our mission is simple:{" "}
                <span className="font-extrabold">
                  to provide a platform where you can invest with confidence,
                  knowing that your money is working in harmony with your
                  values.
                </span>{" "}
                We’re here to bridge the gap between faith and innovation,
                creating <span className="font-extrabold"></span> opportunities
                that allow you to participate in the future of finance while
                staying true to your principles.
              </div>
            </div>
            <div className="mt-8 flex flex-col justify-between md:flex-row md:items-stretch">
              <div className="relative p-4 md:w-[20%]">
                <div className="flex">
                  <div className="text-balance font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                    Why we
                    <div className="text-gradient_halal">Exist</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 font-light md:w-[80%] lg:mt-0">
                In a world where financial growth often comes at the cost of
                ethical compromise, we stand firm in our commitment to
                <span className="font-bold">
                  integrity, transparency, and meaningful impact.
                </span>
                Ethical investing goes beyond avoiding what’s forbidden; it’s
                about actively seeking ventures that contribute positively to
                society and the economy. When you invest with Halal.io, you’re
                choosing to align your wealth with your beliefs, creating
                benefits that extend far beyond personal gain.
                <div className="mt-4">
                  Our foundation is built on trust and expertise.
                  <span className="font-bold">
                    {" "}
                    With decades of experience in technology, finance, and
                    strategic investing, our founders are passionate about
                    merging ethical values with cutting-edge innovation.
                  </span>{" "}
                  By leveraging our extensive networks and advanced AI, we
                  identify opportunities that not only adhere to Islamic
                  principles but also offer substantial growth potential.
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
