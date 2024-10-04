import Image from "next/image";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";

import { cn, constructMetadata } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import AdvisorsEmblaCarousel from "@/components/sections/AdvisorsEmblaCarousal";
import TeamEmblaCarousel from "@/components/sections/TeamEmblaCarousal";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = constructMetadata({
  title: "About – Halal.io",
  description:
    "Halal DeFi is a Shariah-compliant venture fund on the blockchain, providing access to high-growth opportunities in Web3. Each investment aligns with the principles of Islamic finance—no riba, no compromise.",
});

export default async function About() {
  const OPTIONS: EmblaOptionsType = { align: "start" };

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
            <div className="w-full p-4 md:w-3/5 md:p-8 lg:p-8 xl:p-8">
              <div className="align-center flex flex-row justify-center text-left text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                Aspiring to be wealthy is an admirable goal, but so is staying
                true to your values.
              </div>
            </div>
            <div className="relative mt-3 flex min-h-72 w-full items-end p-8 md:w-2/5">
              <p className="font-semibold">
                Investing according to Islamic principles isn&apos;t just about
                financial gain, it&apos;s a commitment to aligning your wealth with
                your values. Halal investing is not exclusive to Muslims; it
                offers a disciplined and ethical framework for growing wealth
                that can benefit everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F7F6F6] py-0 md:py-10 lg:py-10 xl:py-10">
        <MaxWidthWrapper>
          <div className="rounded-xl bg-white p-0 md:p-8 lg:p-8 xl:p-8">
            <div className="flex flex-col justify-between md:flex-row md:items-stretch">
              <div className="relative p-4 md:w-1/5">
                <div className="text-balance font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
                  Our
                  <div className="text-gradient_halal">Mission</div>
                </div>
              </div>
              <div className="mt-4 p-4 font-light md:w-4/5 lg:mt-0">
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
              <div className="relative p-4 md:w-1/5">
                <div className="flex">
                  <div className="text-balance font-urban text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
                    Why we
                    <div className="text-gradient_halal">Exist</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 font-light md:w-4/5 lg:mt-0">
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
            <div className="mb-10 text-left text-2xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
              Halal.io Advisors
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
                        Halal DeFi isn’t just about investing—it&apos;s about making
                        a difference. When you join us, you’re part of a
                        community that values integrity, growth, and innovation.
                        Together, we can build a financial future that’s true to
                        your values and beneficial for all.
                      </p>
                      <div className="mt-3 space-x-2 md:space-x-4">
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
                              Invest in $HDF
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
