import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { NewsletterForm } from "../forms/newsletter-form";
import Image from "next/image";

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
            <p className="font-semibold text-sm">© 2024 halal.io . All right Reserved</p>
          </div>
        </div>
        <div className="col-span-full flex flex-col sm:col-span-1 lg:col-span-1"></div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className="text-sm font-medium text-foreground">
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
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
    </footer>
  );
}
