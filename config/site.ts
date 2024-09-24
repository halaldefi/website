import { SidebarNavItem, SiteConfig } from "types";

const site_url = "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "SaaS Starter",
  description:
    "Get your project off to an explosive start with SaaS Starter! Harness the power of Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui and Stripe to build your next big thing.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
  },
  mailSupport: "support@saas-starter.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "",
    items: [
      { title: "Home", href: "#" },
      { title: "Trade", href: "#" },
      { title: "About Us", href: "/terms" },
      { title: "Tokenomics", href: "/privacy" },
    ],
  },
  {
    title: "",
    items: [
      { title: "Blog", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Terms of use", href: "#" },
      { title: "Contact Us", href: "#" },
    ],
  },
];
