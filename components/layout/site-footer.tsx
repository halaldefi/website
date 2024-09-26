import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { NewsletterForm } from "../forms/newsletter-form";
import Image from "next/image";
import { ModeToggle } from "@/components/layout/mode-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid grid-cols-2 gap-6 py-14 md:grid-cols-10">
        <div className="col-span-full flex flex-col sm:col-span-1 lg:col-span-4">
          <div>
            <Image
              src="/_static/landing/logo.png"
              alt="Background"
              width={40}
              height={40}
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="mt-4">
            <p>Halal DeFi is a Shariah-compliant micro VC fund on the blockchain, driving ethical investments in Web3 and DeFi. We see crypto as the future of freedom—empowering people, ideas, and markets.</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-semibold">© 2024 halal.io . All right Reserved</p>
          </div>
        </div>
        <div className="col-span-full flex flex-col sm:col-span-1 lg:col-span-1"></div>
        {footerLinks.map((section) => (
          <div key={section.id}>
            <span className="text-sm font-medium text-foreground">
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-full flex flex-col items-end sm:col-span-1 md:col-span-3">
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          <p className="text-left text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              mickasmt
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            . Illustrations by{" "}
            <Link
              href="https://popsy.co"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Popsy
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
