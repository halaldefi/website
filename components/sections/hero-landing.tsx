import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default function HeroLanding() {
  return (
    <section className="relative space-y-6 overflow-hidden py-12 sm:py-20 lg:py-20">
      {/* Background layers */}
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
            "radial-gradient(circle at bottom center, rgba(255, 199, 114, 0.3) 0%, rgba(255, 199, 114, 0.4) 5%, rgba(255, 255, 255, 0) 70%)",
          transform: "scale(1.5)",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-20 flex max-w-5xl flex-col items-center gap-5 text-center">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            " cursor-default px-4" ,
          )}
          target="_blank"
        >
          <span className="mr-3">
            <Icons.solid className="ml-2 size-3.5" />
          </span>
          <span className="hidden md:flex">
            Start investing with just $10. Open to everyone.
          </span>
        </Link>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Shaping the Future of Web3 with Integrity
        </h1>

        <p className="max-w-4xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Halal DeFi is a Shariah-compliant venture fund on the blockchain,
          providing access to high-growth opportunities in Web3. Each investment
          aligns with the principles of Islamic finance—no riba, no compromise.
        </p>

        <div className="flex justify-center space-x-2 md:space-x-4">
          <Link
            href="#"
            prefetch={true}
            className={cn(
              buttonVariants({ rounded: "full" }),
              "gap-2 pl-2 pr-4",
            )}
          >
            <Icons.right_double_arrow className="mr-2 size-4" />
            <span> Invest in $HDF</span>
          </Link>
          <Link
            href={siteConfig.links.github}
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
              <span className="sm:inline-block">Learn More</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
