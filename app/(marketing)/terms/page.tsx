import Image from "next/image";
import Link from "next/link";

import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Terms of use – Halal.io",
  description:
    "Halal DeFi is a Shariah-compliant venture fund on the blockchain, providing access to high-growth opportunities in Web3. Each investment aligns with the principles of Islamic finance—no riba, no compromise.",
});

export default async function TermsOfUse() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
        Terms of use
    </div>
  );
}
