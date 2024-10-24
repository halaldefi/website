import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const halalData = [
  {
    id: "item-1",
    question: "Buy $HDF Token",
    answer:
      "Purchase $HDF tokens directly from our website. Simply connect your existing wallet or create one with your email or phone. It’s a quick and beginner-friendly process to get started.",
  },
  {
    id: "item-2",
    question: "Price Increases as Tokens Sell",
    answer:
      "The earlier you buy, the better the price. The $HDF token starts at $0.10, but its price automatically increases by 2% every time 1 million tokens are sold. This means the sooner you invest, the more value you lock in.",
  },
  {
    id: "item-3",
    question: "We Invest in High-Growth, Shariah-Compliant Projects",
    answer:
      "Once you hold $HDF, your funds are allocated to vetted, Shariah-compliant Web3 and blockchain projects. As these projects grow, the value of our overall investments increases, which in turn raises the underlying value of your $HDF tokens.",
  },
  {
    id: "item-4",
    question: "Track and Trade Your Tokens",
    answer:
      "All transactions are recorded on the blockchain, providing full transparency. Starting in May 2025, you can trade your $HDF tokens on decentralized exchanges like PancakeSwap and Uniswap. Hold your tokens for long-term growth or trade them at your convenience—there’s no lock-up period.",
  },
];

export default function HalalAccordion () {
  return (
    <section>
      <div className="align-center flex w-full justify-center bg-[#F8F8F8]">
        <div className="w-[95%] bg-[#F8F8F8] md:w-4/5 lg:w-4/5">
          <div className="relative z-10 my-10 grid grid-cols-7 gap-3">
            <div className="relative col-span-full flex overflow-hidden rounded-2xl bg-white lg:col-span-7">
              <div className="card relative size-full overflow-hidden rounded-3xl">
                <div className="z-20 flex w-full flex-col flex-wrap p-10 lg:flex-row">
                  <div className="flex w-full flex-col justify-between lg:w-2/5">
                    <p className="text-6xl font-semibold text-black">How Halal.io Works</p>
                    {/* <p className="mt-4 text-sm text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p> */}
                  </div>
                  <div className="relative w-full text-black lg:w-1/5"></div>
                  <div className="relative w-full text-black lg:w-2/5">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue={halalData[0].id}
                    >
                      {halalData.map((faqItem) => (
                        <AccordionItem key={faqItem.id} value={faqItem.id}>
                          <AccordionTrigger>
                            {faqItem.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
                            {faqItem.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
