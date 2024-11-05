import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import { NewsletterForm } from "../forms/newsletter-form";
import { Icons } from "../shared/icons";
import { LanToggle } from "./lan-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid grid-cols-2 gap-6 px-6 pb-10 pt-14 md:grid-cols-9 md:px-16">
        <div className="col-span-full flex flex-col sm:col-span-1 lg:col-span-3">
          <div className="flex">
            <Image
              src="/_static/landing/Logo.png"
              alt="Background"
              width={40}
              height={40}
              objectFit="cover"
              quality={100}
            />
            <div className="ml-3 flex items-center text-lg font-semibold">
              Halal <span className="text-gradient_halal ml-1">DeFi</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              Halal DeFi is a Shariah-compliant micro VC fund on the blockchain,
              driving ethical investments in Web3 and DeFi. We see crypto as the
              future of freedom—empowering people, ideas, and markets.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly sm:col-span-1 lg:col-span-3">
          {footerLinks.map((section) => (
            <div key={section.id}>
              <span className="text-sm font-medium text-foreground">
                {section.title}
              </span>
              <ul className="list-inside space-y-3">
                {section.items?.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                      target={link.id === 8 ? "_blank" : "_self"}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-full flex flex-col items-end justify-start sm:col-span-1 md:col-span-3">
          <NewsletterForm />
        </div>
      </div>
      <div className="container mt-8 grid grid-cols-1 gap-6 px-6 pb-2 md:grid-cols-9 md:px-16">
        <div className="col-span-full flex flex-col sm:col-span-1 lg:col-span-3">
          <LanToggle />
        </div>
        <div className="flex flex-col items-center sm:col-span-1 sm:flex-row sm:justify-evenly lg:col-span-3">
          <p className="text-md font-semibold">
            © 2025 Halal DeFi. All rights reserved
          </p>
        </div>
        <div className="col-span-full flex flex-col items-center sm:col-span-1 sm:flex-row sm:items-end sm:justify-end md:col-span-3">
          <div className="mt-6 flex space-x-4 sm:mt-0">
            <a
              href="https://twitter.com/HalalDeFi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.twitter className="size-8 cursor-pointer rounded-full border p-2" />
            </a>
            <a
              href="https://github.com/halaldefi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.gitHub className="size-8 cursor-pointer rounded-full border p-2" />
            </a>
            <a
              href="https://t.me/yourTelegramProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.telegram className="size-8 cursor-pointer rounded-full border p-2" />
            </a>
            <a
              rel="noopener noreferrer"
            >
              <Icons.youtube className="size-8 cursor-pointer rounded-full border p-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
