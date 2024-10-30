import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HalalCard() {
  return (
    <section>
      <div className="align-center flex w-full justify-center bg-[#F8F8F8]">
        <div className="w-[95%] bg-[#F8F8F8] md:w-[98%] lg:w-[98%]">
          <div className="relative z-10 grid grid-cols-7 gap-3">
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
                <div className="relative z-20 flex w-full flex-col flex-wrap p-8 lg:p-16 lg:flex-row">
                  <div className="w-full lg:w-2/5">
                    <p className="text-6xl font-semibold text-white">
                      Who We Are
                    </p>
                    <Link
                      href={"about"}
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                          rounded: "full",
                        }),
                        "my-10 bg-white px-5",
                      )}
                    >
                      <p>
                        <span className="sm:inline-block">Meet our team</span>
                      </p>
                    </Link>
                  </div>
                  <div className="relative w-full text-white lg:w-3/5">
                    <p>
                      Halal DeFi is the first “Halal” micro venture capital fund
                      on the blockchain, giving you early access to high-growth
                      Web3 investments. Our team combines expertise in AI &
                      blockchain technology, and Islamic compliance to ensure
                      your investments are managed ethically and responsibly.
                    </p>
                    <p className="mt-10">
                      We are supported by a team of advisors with expertise in
                      Web3, entrepreneurship, and Islamic finance. This includes
                      blockchain professionals, business leaders, and Islamic
                      scholars who ensure our investments align with both growth
                      potential and Shariah principles.
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
