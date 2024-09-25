import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HalalCard () {
  return (
    <section>
      <div className="align-center flex w-full justify-center bg-[#F8F8F8]">
        <div className="w-[95%] bg-[#F8F8F8] md:w-[98%] lg:w-[98%]">
          <div className="relative z-10 mt-20 grid grid-cols-7 gap-3">
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
                    <p className="text-7xl text-white">
                      Get to know Halal.io better
                    </p>
                    <Link
                      href={""}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                          rounded: "full",
                        }),
                        "my-10 bg-white px-5 ",
                      )}
                    >
                      <p>
                        <span className="sm:inline-block">Meet the team</span>
                      </p>
                    </Link>
                  </div>
                  <div className="relative w-full text-white lg:w-3/5">
                    <p>
                      Halal DeFi is a leading micro venture capital fund, using
                      AI-driven strategies and deep knowledge in Web3 and
                      decentralized finance. Our founders have strong
                      backgrounds in tech, finance, and strategic investing,
                      enabling us to select projects with high growth potential
                      that adhere to Shariah principles.
                    </p>
                    <p className="mt-10">
                      Committed to transparency, we store all assets in
                      multi-signature SAFE vaults and provide regular updates on
                      our holdings, all trackable on the blockchain. Join us to
                      invest in ethical, advanced projects and benefit from our
                      strategic, technology-driven approach. enabling us to
                      select projects with high growth potential that adhere to
                      Shariah principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
