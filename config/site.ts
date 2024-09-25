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
    id: 1,
    items: [
      { title: "Home", href: "#", id: 1 },
      { title: "Trade", href: "#", id: 2 },
      { title: "About Us", href: "#", id: 3 },
      { title: "Tokenomics", href: "#", id: 4 },
    ],
  },
  {
    title: "",
    id: 2,
    items: [
      { title: "Blog", href: "#", id: 5 },
      { title: "FAQs", href: "#", id: 6 },
      { title: "Terms of use", href: "#", id: 7 },
      { title: "Contact Us", href: "#", id: 8 },
    ],
  },
];
