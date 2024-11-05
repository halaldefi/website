import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MaxWidthWrapper from "../shared/max-width-wrapper";

const halalData = [
  {
    id: "item-1",
    question: "What is Halal DeFi, and how does it work?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi is a Shariah-compliant decentralized finance (DeFi) platform that operates like a blockchain-based venture capital fund. It allows you to invest in high-potential Web3 and blockchain projects while ensuring every investment follows Islamic principles.
        <div style='font-weight:bold;margin-top:30px'>How it Works:</div>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Buy $HDF Tokens:</span> Purchase $HDF tokens through our platform. These tokens represent your share in our investment fund.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Invest:</span> We pool your funds and invest them in Shariah-compliant blockchain projects and engage in ethical, strategic trading.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Grow:</span> As these projects succeed and generate returns, <a target="_blank" href="https://blog.halal.io/how-does-the-hdf-token-go-up-in-value-understanding-halal-defis-business-model/" class="custom-contact-link" style="color: black; text-decoration: underline !important;">the value of your $HDF tokens increases,</a> giving you a profitable and ethical investment.</li>
      </div>
    `,
  },
  {
    id: "item-2",
    question: "Do you have a Shariah certificate, audit, or Shariah board for Halal DeFi's investments?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi does not have a formal Shariah certificate, audit, or traditional Shariah board. Instead, we take a practical approach suited for the dynamic blockchain space. We consult with a trusted network of Islamic finance scholars and conduct in-depth research for each investment. Our guiding principle is rooted in Islamic jurisprudence: everything is considered halal unless proven otherwise. For a deeper dive into our philosophy, <a target="_blank" href="https://blog.halal.io/shariah-compliance-in-crypto-halal-defi-perspective/" class="custom-contact-link" style="color: black; text-decoration: underline !important;">read more here</a>.
      </div>
    `,
  },
  {
    id: "item-3",
    question: "What fees does Halal DeFi charge?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi has a transparent fee structure:
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>1% Assets Under Management (AUM) Fee:</span> We charge a 1% annual fee on the total assets under management (AUM) to cover operational costs, fund management, and ongoing research to identify high-potential investments.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>1% Transaction Fee:</span> A 1% fee is applied to each buy and sell transaction of $HDF tokens. This fee is applied during both the token sale and trading on decentralized exchanges.</li>
        <div style='margin-top:10px'>These fees support the sustainability of the platform and cover the costs associated with managing and securing investments. Fees are collected through smart contracts for full transparency.</div>
      </div>
    `,
  },
  {
    id: "item-4",
    question: "What is Halal DeFi's business model?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi operates as a <span style='font-weight:bold'>Shariah-compliant decentralized venture capital fund,</span> allowing investors to participate in high-potential blockchain and Web3 projects.
        <div style='font-weight:bold;margin-top:30px'>Our business model revolves around two main revenue streams:</div>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Investment Management:</span> Funds from token sales are strategically invested in Shariah-compliant projects, with the goal of delivering long-term value growth for token holders.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Strategic Trading:</span> We engage in ethical trading of blockchain assets to capitalize on market opportunities, generating additional returns for investors.</li>
      </div>
    `,
  },
  {
    id: "item-5",
    question: "How do I start investing with Halal DeFi?",
    isHtml: true,
    answer: `
      <div>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Buy $HDF Tokens:</span> Purchase $HDF tokens on our website. You will also be able to buy/sell tokens on decentralized exchanges like Uniswap and PancakeSwap starting in November 2025.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Store Your Tokens:</span> Keep your tokens in your own wallet—Halal DeFi is non-custodial, meaning you control your assets.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Monitor Growth:</span> Track your $HDF token performance as our investments generate returns.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Trade Anytime:</span> You can buy or sell $HDF tokens without restrictions, 365 days a year.</li>
      </div>
    `,
  },
  {
    id: "item-6",
    question: "When will $HDF tokens be available for trading?",
    isHtml: true,
    answer: `
      <div>
        $HDF tokens will be tradable on major decentralized exchanges, including <span style='font-weight:bold'>PancakeSwap</span> and <span style='font-weight:bold'>Uniswap</span>, starting in <span style='font-weight:bold'> November 2025.</span> These permissionless exchanges allow you to buy and sell freely, without intermediaries or restrictions.
      </div>
    `,
  },
  {
    id: "item-7",
    question: "Why should I invest in $HDF now?",
    isHtml: true,
    answer: `
      <div>
        Investing in $HDF tokens early secures the best price. The price of $HDF starts at <span style='font-weight:bold'>$0.10</span> and increases automatically by <span style='font-weight:bold'>2%</span> for every million tokens sold. By investing early, you lock in a lower price before it rises and benefit as the value of the tokens appreciates.
      </div>
    `,
  },
  {
    id: "item-8",
    question: "What blockchain networks are $HDF tokens on?",
    isHtml: true,
    answer: `
      <div>
        $HDF tokens are deployed on both <span style='font-weight:bold'>Binance Smart Chain (BSC)</span> and <span style='font-weight:bold'>Arbitrum</span>, providing cross-chain compatibility. You can seamlessly move tokens across these networks, ensuring flexibility for trading.
      </div>
    `,
  },
  {
    id: "item-9",
    question: "What kind of returns can I expect from $HDF tokens?",
    isHtml: true,
    answer: `
      <div>
        Returns on $HDF tokens depend on the success of our investments. While we aim for a <a target="_blank" href="https://blog.halal.io/how-halal-defi-targets-a-22-irr-sustainable-ethical-growth/" class="custom-contact-link" style="color: black; text-decoration: underline !important;">22% Internal Rate of Return (IRR)</a> by focusing on early-stage blockchain projects, returns are not guaranteed. The cryptocurrency market is volatile, and returns may vary based on market conditions.
        <br/><br/>
        Islamic finance emphasizes transparency and risk-sharing. Prophet Muhammad (PBUH) said, “The two parties in a business transaction have the right to annul it as long as they have not separated. If they are truthful and transparent, they will be blessed in their transaction, but if they hide the truth and lie, the blessing of the transaction will be erased.” (Sahih Muslim)
      </div>
    `,
  },
  {
    id: "item-10",
    question: "What is the total supply of $HDF tokens?",
    isHtml: true,
    answer: `
      <div>
        The total supply of $HDF tokens is permanently fixed at <span style='font-weight:bold'>100 million tokens</span>. No additional tokens will be created, ensuring scarcity over time.
        <div style='font-weight:bold;margin-top:30px'>Allocation:</div>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>90 million tokens</span> are available for public sale.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>10 million tokens</span> are reserved for liquidity on decentralized exchanges like Uniswap and PancakeSwap, ensuring smooth trading.</li>
      </div>
    `,
  },
  {
    id: "item-11",
    question: "What are the risks of investing in $HDF tokens?",
    isHtml: true,
    answer: `
      <div>
        Like any investment, $HDF tokens carry risks:
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Market Volatility:</span> Prices can fluctuate based on market conditions.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Investment Risk:</span> Projects may underperform or fail, affecting token value.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Liquidity Risk:</span> In periods of low liquidity, it may be harder to buy or sell tokens.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Regulatory Risk:</span> Changes in cryptocurrency regulations may impact the value and tradability of $HDF tokens.</li>
      </div>
    `,
  },
  {
    id: "item-12",
    question: "How does Halal DeFi invest my funds?",
    isHtml: true,
    answer: `
      <div>
        We invest in <a target="_blank" href="https://blog.halal.io/unlocking-early-stage-access-to-high-growth-web3-projects-with-halal-defi/ " class="custom-contact-link" style="color: black; text-decoration: underline !important;">Shariah-compliant Web3 and blockchain projects</a> that have high growth potential. We also engage in <span style='font-weight:bold'>ethical trading </span>on decentralized exchanges. As our investments succeed, the value of $HDF tokens increases.
      </div>
    `,
  },
  {
    id: "item-13",
    question: "Is Halal DeFi regulated by any financial authorities?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi is currently not regulated under traditional financial frameworks, as it operates as a decentralized platform. However, we are transitioning into a <span style='font-weight:bold'>Decentralized Autonomous Organization (DAO)</span> under the <span style='font-weight:bold'>RAK Digital Assets Oasis (RAK DAO)</span> in the UAE, which offers a legal framework for decentralized projects.
      </div>
    `,
  },
  {
    id: "item-14",
    question: "Is Halal DeFi a custodial or non-custodial service?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi is <span style='font-weight:bold'>non-custodial</span>, meaning you control your own wallet and private keys. Your assets remain fully under your control, and Halal DeFi does not hold your funds.
      </div>
    `,
  },
  {
    id: "item-15",
    question: "How does Halal DeFi secure my investments?",
    isHtml: true,
    answer: `
      <div>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Non-Custodial:</span> You maintain full control of your funds.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Safe Vault:</span> Our platform's funds are secured by Safe Vault's multisig wallet, requiring multiple approvals for transactions.</li>
        <li style="margin-left:20px;margin-top:10px"><span style='font-weight:bold'>Blockchain Transparency:</span> All transactions are recorded on the blockchain, ensuring transparency.</li>
      </div>
    `,
  },
  {
    id: "item-16",
    question:
      "How does Halal DeFi differ from traditional Islamic finance products?",
    isHtml: true,
    answer: `
      <div>
        Halal DeFi modernizes Islamic finance by using <span style='font-weight:bold'>blockchain technology</span> to offer more transparency, flexibility, and global access. Unlike traditional Islamic banks, Halal DeFi is decentralized—you control your assets, and all transactions are recorded on the blockchain for real-time transparency. You also gain access to <span style='font-weight:bold'>emerging blockchain projects</span> that have higher growth potential than traditional Islamic finance options.
      </div>
    `,
  },
  {
    id: "item-17",
    question: "What should I do if I have technical issues or need support?",
    isHtml: true,
    answer: `
      <div>
        <li style="margin-left:20px;margin-top:10px">
          <span style='font-weight:bold'>Email Support:</span> 
          Use the <a target="_blank" href="https://forms.gle/FHs4CSRHQkH7MYNT8" class="custom-contact-link" style="color: black; text-decoration: underline !important;">contact form</a> for personalized assistance.
        </li>
        <li style="margin-left:20px;margin-top:10px">
          <span style='font-weight:bold'>Telegram Community:</span> 
          Join our Telegram group for help from team members and other users.
        </li>
      </div>
    `,
  },
  {
    id: "item-18",
    question: "Are there geographic restrictions on who can buy $HDF tokens?",
    isHtml: true,
    answer: `
      <div>
        Halal.io is designed to be globally accessible, allowing users from most countries to buy $HDF tokens. However, some regions may have local regulations that restrict access, so we recommend checking the rules in your country before purchasing.
      </div>
    `,
  },
];

export default function FaqAccordion() {
  return (
    <section>
      <MaxWidthWrapper>
        <Accordion type="multiple" className="w-full">
          {halalData.map((faqItem) => (
            <AccordionItem
              className="mt-4 rounded-xl border-none bg-[#F8F8F8] px-5"
              key={faqItem.id}
              value={faqItem.id}
            >
              <AccordionTrigger className="text-lg">
                {faqItem.question}
              </AccordionTrigger>
              <AccordionContent
                isHtml={faqItem.isHtml}
                className="text-sm sm:text-[15px]"
              >
                {faqItem.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </section>
  );
}
