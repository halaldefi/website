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
    question: "Cryptocurrency: Is it Haram or Halal?",
    isHtml: true,
    answer:
      "<div>Most scholars lean towards cryptocurrency being Halal, <span class='text-gradient_halal' style='font-weight:bold'>especially when the digital asset has clear utility and is free from prohibited elements like interest (riba).</span> Bitcoin, Ethereum, and asset-backed stablecoins, for instance, are generally considered Halal. Scholars like Mufti Muhammad Abu-Bakar and Mufti Faraz Adam recognize these as valuable digital assets with real-world use, aligning with Shariah principles. <div style='margin-top:30px'>While some cryptocurrencies may be deemed Haram due to involvement in interest-based activities, many can be permissible, especially when they are used as legitimate digital assets. As with any investment, careful research is essential to ensure Shariah compliance.</div>",
  },
  {
    id: "item-2",
    question: "What is Halal DeFi, and how does it work?",
    answer:
      "<div> <span class='text-gradient_halal' style='font-weight:bold'> Halal DeFi is a Shariah-compliant decentralized finance platform </span> that functions similarly to a venture capital fund on the blockchain. Our platform enables you to invest in ethical Web3 and blockchain projects while strictly adhering to Islamic finance principles, ensuring that all investments are free from interest (riba), excessive uncertainty (gharar), and other prohibited activities.</div><div style='font-weight:bold;margin-top:30px'>How it works</div> <li>Invest: Purchase $Halal tokens, which represent a share in our investment portfolio.</li><li>Allocate : Funds from token sales are strategically invested in high-potential, Shariah-compliant blockchain projects and used for ethical trading.</li><li>Grow: As these investments generate returns, the value of $Halal tokens increases, offering you a profitable and compliant investment opportunity.</li>",
    isHtml: true,
  },
  {
    id: "item-3",
    question: "Is Halal DeFi compliant with Islamic finance principles?",
    isHtml: true,
    answer:
      "<span class='text-gradient_halal' style='font-weight:bold'> Yes, Halal DeFi is compliant with Islamic finance principles. </span> We consult with a qualified Shariah Advisor (Mufti) to ensure that all our investments (tokens) align with Shariah guidelines. This means our activities are free from riba (interest), excessive uncertainty (gharar), and prohibited (haram) industries, allowing you to invest ethically and in accordance with your faith.",
  },
  {
    id: "item-4",
    question: "Who is behind Halal DeFi?",
    isHtml: true,
    answer:
      "Halal DeFi was founded by a team of experienced professionals with backgrounds in technology, finance, and ethical investing.<span class='text-gradient_halal' style='font-weight:bold'>  Our founders are passionate about creating a platform that combines innovation with Islamic finance principles </span> , making it easier for Muslims to invest in the future of Web3. We also work closely with a Shariah Advisor (Mufti) who ensures that all our activities comply with Shariah guidelines, maintaining the integrity and ethical focus of our platform. <div style='margin-top:30px'> To learn more about our team, visit our <a href='about'> About Us page </a>.</div>",
  },
  {
    id: "item-5",
    question: "How do I start investing with Halal DeFi?",
    isHtml: true,
    answer:
      "Starting with Halal DeFi is<span class='text-gradient_halal' style='font-weight:bold'> simple and straightforward: </span> <li style='margin-top:10px'>Get $Halal Tokens: Purchase $Halal tokens on our Halal DEX or other supported exchanges like Uniswap, PancakeSwap, or 1Inch. You can sign up using your email or phone number, and even buy crypto using your debit or credit card. </li><li>Store Your Tokens: Securely store your $Halal tokens in your own wallet. We are a non-custodial service, meaning you control your wallet and private keys, ensuring that your assets are fully under your control. </li><li>Monitor Your Investment: As we invest in and trade high-potential blockchain projects, you can track the value of your $Halal tokens as they grow.</li><li>Trade Anytime: You can trade your $Halal tokens on any supported exchange whenever you choose, with no restrictions.</li>",
  },
  {
    "id": "item-6",
    "question": "Is Halal DeFi a custodial or non-custodial service? What does that mean, and what are the legal implications?",
    "isHtml": true,
    "answer": "<span class='text-gradient_halal' style='font-weight:bold'>Halal DeFi is a non-custodial service,</span> meaning you control your wallet and private keys—your assets are entirely in your hands.<li style='margin-top:10px'>What this means:</li><li>Non-Custodial: You have full ownership and responsibility for your funds. We do not have access to your assets.</li><li>Custodial: In contrast, custodial services (like Binance & Coinbase) hold your funds and control your private keys.</li><li style='margin-top:10px'>Legal Implications:</li><li>Get $Halal Tokens: Purchase $Halal tokens on our <span class='text-gradient_halal' style='font-weight:bold'>Halal DEX</span> or other supported exchanges like Uniswap, PancakeSwap, or 1Inch. You can sign up using your email or phone number, and even buy crypto using your debit or credit card.</li><li>Store Your Tokens: Securely store your $Halal tokens in your own wallet. We are a non-custodial service, meaning you control your wallet and private keys, ensuring that your assets are fully under your control.</li><li>Monitor Your Investment: As we invest in and trade high-potential blockchain projects, <span class='text-gradient_halal' style='font-weight:bold'>you can track the value of your $Halal tokens as they grow.</span></li><li>Trade Anytime: You can trade your $Halal tokens on any supported exchange whenever you choose, with no restrictions.</li><li style='margin-top:10px'>This approach gives you greater control over your investments, aligned with decentralized finance principles.</li>"
  },  
  {
    id: "item-7",
    question:
      "What are the benefits of using Halal DeFi over traditional financial platforms?",
    isHtml: true,
    answer:
      "Halal DeFi offers several advantages over traditional financial platforms:<li style='margin-top:10px'>Shariah Compliance: Our investments align with Islamic finance principles, ensuring they are free from riba (interest), gharar (excessive uncertainty), and haram (prohibited) activities.</li><li>Full Control: You have complete control over your assets. As a non-custodial platform, you manage your own wallet and private keys, and can buy or sell $Halal tokens anytime, 365 days a year.</li><li>No KYC Required: Halal DeFi respects your privacy—there’s no need for lengthy KYC (Know Your Customer) processes, allowing you to invest anonymously and securely.</li><li><span class='text-gradient_halal' style='font-weight:bold'>No Transaction Limits:</span> Unlike traditional platforms, there are no restrictions on how much you can invest or withdraw. You can transact freely without limitations.</li><li>Transparency: All transactions and investments are recorded on the blockchain, offering complete transparency and allowing you to track your investments in real time.</li><li>Global Accessibility: Accessible from anywhere in the world, Halal DeFi allows you to invest in high-potential projects without the constraints of traditional banking.</li><li>Potential for High Returns: By focusing on early-stage blockchain projects, Halal DeFi aims to deliver significant returns, potentially outpacing traditional investment vehicles.</li>",
  },
  {
    id: "item-8",
    question: "Is Halal DeFi compliant with Islamic finance principles?",
    isHtml: true,
    answer:
      "<span class='text-gradient_halal' style='font-weight:bold'> Yes, Halal DeFi is compliant with Islamic finance principles. </span> We consult with a qualified Shariah Advisor (Mufti) to ensure that all our investments (tokens) align with Shariah guidelines. This means our activities are free from riba (interest), excessive uncertainty (gharar), and prohibited (haram) industries, allowing you to invest ethically and in accordance with your faith.",
  },
  {
    id: "item-9",
    question:
      "What kind of returns can I expect from investing in $Halal tokens?",
    isHtml: true,
    answer:
      "The returns on $Halal tokens depend on the success of our investments and trading activities. While we aim to achieve significant growth by investing in high-potential Web3 and blockchain projects, <span class='text-gradient_halal' style='font-weight:bold'>it’s important to understand that returns can vary based on market conditions and the performance of these projects.</span><li style='margin-top:10px'>Potential Returns:</li><li>Growth-Oriented Investments: By focusing on early-stage projects with strong potential, we aim to deliver substantial returns. However, specific returns are not guaranteed and can fluctuate over time.</li><li>Token Value Appreciation: As our portfolio grows and succeeds, the value of $Halal tokens is expected to increase, reflecting the underlying assets' performance.</li><li>Important Note: While we strive for positive returns, all investments carry risk. It’s essential to consider your risk tolerance and invest wisely.</li>",
  },
  {
    id: "item-10",
    question:
      "What are the risks of investing in $Halal tokens? Can the value decrease?",
    isHtml: true,
    answer:
      "Investing in $Halal tokens, like any investment, comes with risks, and the value of your tokens can indeed decrease. Here are some of the key risks to be aware of:<li style='margin-top:10px'>Market Volatility: The value of $Halal tokens can fluctuate due to changes in market conditions, <span class='text-gradient_halal' style='font-weight:bold'>including the performance of the broader cryptocurrency market.</span> These fluctuations can lead to both gains and losses.</li><li>Investment Risk: The success of our investments in Web3 and blockchain projects is not guaranteed. If the projects we invest in underperform or fail, it could negatively impact the value of $Halal tokens.</li><li>Liquidity Risk: While $Halal tokens can be traded on decentralized exchanges, the liquidity of these tokens may vary. In periods of low liquidity, it may be more challenging to buy or sell tokens without affecting the market price.</li><li>Regulatory Risk: Changes in regulations affecting cryptocurrency and DeFi could impact the value and tradability of $Halal tokens.</li><li>Yes, the value of $Halal tokens can decrease due to the factors mentioned above. It’s important to carefully consider these risks and invest according to your risk tolerance.</li>",
  },
  {
    id: "item-11",
    question: "What is the total supply of $Halal tokens?",
    isHtml: true,
    answer:
      "<span class='text-gradient_halal' style='font-weight:bold'>The total supply of $Halal tokens is fixed at 100 million.</span> This means there will never be more than 100 million $Halal tokens in circulation, ensuring scarcity and helping to maintain the value of the tokens as demand grows.",
  },
  {
    id: "item-12",
    question: "How can I purchase or trade $Halal tokens?",
    isHtml: true,
    answer:
      "You can easily purchase or trade $Halal tokens on several decentralized exchanges:<li style='margin-top:10px'><span class='text-gradient_halal' style='font-weight:bold'>Halal DEX:</span> Visit our Halal DEX for a beginner-friendly experience. You can sign up using your email or phone number, create a wallet, and even buy crypto using a debit or credit card.</li><li>Uniswap, PancakeSwap, and 1Inch: $Halal tokens are also available on popular decentralized exchanges like Uniswap, PancakeSwap, and 1Inch. Simply connect your wallet and trade $Halal tokens on your preferred platform.</li><li>Steps to Buy or Trade:</li><li>Choose Your Exchange: Select Halal DEX or any of the supported DEXs.</li><li>Connect Your Wallet: Ensure your wallet is connected to the exchange.</li><li>Buy or Trade: Enter the amount of $Halal tokens you want to buy or trade and complete the transaction.</li><li>You can buy or sell $Halal tokens anytime, 365 days a year, <span class='text-gradient_halal' style='font-weight:bold'>without restrictions.</span></li>",
  },
  {
    id: "item-13",
    question: "Can I use $Halal tokens for governance or voting?",
    isHtml: true,
    answer:
      "Currently, $Halal tokens do not have governance or voting rights. <span class='text-gradient_halal' style='font-weight:bold'>However, we are exploring the possibility of introducing governance features in the future,</span> where token holders could participate in key decisions regarding the platform's direction and investments.<li style='margin-top:10px'>Stay tuned for updates as we continue to develop and expand the utility of $Halal tokens.</li>",
  },

  {
    id: "item-14",
    question: "How does Halal DeFi secure my investments?",
    isHtml: true,
    answer:
      "Halal DeFi takes multiple steps to ensure the security of your investments:<li style='margin-top:10px'><span class='text-gradient_halal' style='font-weight:bold'>Non-Custodial Platform:</span> You maintain full control of your assets, as Halal DeFi does not hold or manage your funds. Your $Halal tokens are stored in your own wallet, protected by your private keys.</li><li>Safe Vault Protection: Our platform's investment funds are stored in Safe Vault, a highly secure multisignature (multisig) wallet provided by safe.global. This means that multiple approvals are required for any transaction, reducing the risk of unauthorized access.</li><li>Blockchain Transparency: All transactions and investments are recorded on the blockchain, ensuring full transparency and allowing you to verify the security and integrity of your investments at any time.</li><li>These measures combine to provide a robust layer of security, keeping your investments safe while you retain full ownership and control.</li>",
  },
  {
    id: "item-15",
    question: "What should I do if I have technical issues or need support?",
    isHtml: true,
    answer:
      "If you encounter any technical issues or need assistance with Halal DeFi, we're here to help:<li style='margin-top:10px'>Email Support: Reach out to our support team directly by <span class='text-gradient_halal' style='font-weight:bold'>email at support@halal.io</span> for personalized assistance.</li><li>Telegram Community: You can also get help from our community on Telegram, where other users and team members are available to assist with any questions or concerns.</li><li>Please note: We are a non-custodial platform and you are fully responsible for managing your wallet and private keys. <span class='text-gradient_halal' style='font-weight:bold'>We do not have access to your funds</span> and cannot assist with issues related to wallet security or recovery.</li>",
  },
  {
    id: "item-16",
    question: "Is Halal DeFi regulated by any financial authorities?",
    isHtml: true,
    answer:
      "Halal DeFi is in the process of <span class='text-gradient_halal' style='font-weight:bold'>becoming a DAO</span> (Decentralized Autonomous Organization) through RAK Digital Assets Oasis (RAK DAO), a dedicated Free Zone in the UAE that provides legal and regulatory frameworks for decentralized projects.<li style='margin-top:10px'>As a DeFi platform, Halal DeFi operates outside traditional financial regulations, offering you greater control over your assets without the constraints of centralized authorities. While this provides flexibility, it’s important to remember that users are responsible for <span class='text-gradient_halal' style='font-weight:bold'>their own investments in this unregulated environment.</span></li>",
  },
  {
    id: "item-17",
    question: "Are there geographic restrictions on who can buy $Halal tokens?",
    isHtml: true,
    answer:
      "Halal.io is designed to be globally accessible, and <span class='text-gradient_halal' style='font-weight:bold'>$Halal tokens can be purchased by users from most countries.</span> However, due to regulatory restrictions, residents of certain jurisdictions may be unable to participate in the purchase of $Halal tokens.<li style='margin-top:10px'>We recommend that you check the specific regulations in your country before purchasing tokens.</li>",
  },
  {
    id: "item-18",
    question:
      "How does Halal DeFi differ from traditional Islamic finance products?",
    isHtml: true,
    answer:
      "Halal DeFi modernizes Islamic finance by using blockchain and DeFi principles, while adhering to Shariah guidelines:<li style='margin-top:10px'><span class='text-gradient_halal' style='font-weight:bold'>Decentralization:</span> Unlike traditional Islamic banks, Halal DeFi operates without a central authority. <span class='text-gradient_halal' style='font-weight:bold'>You retain full control of your assets.</span></li><li>Global Access: Halal DeFi is accessible worldwide, without the geographic and institutional limitations of traditional Islamic finance.</li><li>Transparency: Transactions are recorded on the blockchain, providing real-time transparency that traditional products may lack.</li><li>Innovation: Halal DeFi offers access to cutting-edge Web3 and blockchain projects, potentially offering higher returns compared to more conservative traditional Islamic finance options.</li>",
  },
  {
    id: "item-19",
    question: "How does Halal DeFi invest my funds?",
    isHtml: true,
    answer:
      "When you hold $Halal tokens, you're participating in the growth of our carefully selected investments. <span class='text-gradient_halal' style='font-weight:bold'>As a non-custodial platform, Halal DeFi does not control your funds;</span> instead, the value of your tokens reflects the performance of our overall portfolio.<li style='margin-top:10px'>Here's how we manage investments:</li><li>Strategic Investments: We invest in early-stage Web3 and blockchain projects that have high growth potential and comply with Shariah principles. These investments drive the value of $Halal tokens.</li><li>Active Trading: We also engage in trading on decentralized exchanges, taking advantage of market opportunities. Successful trades contribute to the increase in your token's value.</li><li>Token Value Growth: As our investments and trades succeed, the value of $Halal tokens increases. You maintain full control of your tokens, with the ability to buy or sell them at any time on supported DEXs.</li><li>Your tokens remain fully under your control, and you benefit from the growth of our portfolio without us holding or managing your assets directly.</li>",
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
