import { SidebarNavItem, SiteConfig } from "types";

const site_url = "https://halal.io";

export const siteConfig: SiteConfig = {
  name: "halal.io",
  description:
    "Halal DeFi is a Shariah-compliant venture fund on the blockchain, providing access to high-growth opportunities in Web3. Each investment aligns with the principles of Islamic finance—no riba, no compromise.",
  url: site_url,
  ogImage: `${site_url}_static/halal.jpg`,
  links: {
    twitter: "https://twitter.com/halal_io",
    github: "https://github.com/halaldefi",
  },
  mailSupport: "support@halal.io",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "",
    id: 1,
    items: [
      { title: "Home", href: "/", id: 1 },
      { title: "Trade", href: "trade", id: 2 },
      { title: "About Us", href: "about", id: 3 },
      { title: "Tokenomics", href: "tokenomics", id: 4 },
    ],
  },
  {
    title: "",
    id: 2,
    items: [
      { title: "Blog", href: "#", id: 5 },
      { title: "FAQs", href: "faq", id: 6 },
      { title: "Terms of Use", href: "terms", id: 7 },
      { title: "Contact Us", href: "https://docs.google.com/forms/d/e/1FAIpQLSeUL1wFrpYtOwlNd2w7P1l1tAr3wjgZzaoXJWoA6Gsosn51sg/viewform", id: 8 },
    ],
  },
];
