import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const halalData = [
  {
    id: "item-1",
    question: "Buy $Halal Token",
    answer:
      "Purchase $Halal tokens on our decentralized exchange, Halal DEX. The process is simple—sign up with your email or phone and buy crypto with a card, or trade directly on platforms like 1Inch.",
  },
  {
    id: "item-2",
    question: "We Invest in Shariah-Compliant Projects for You",
    answer:
      "As your fund managers, we allocate your investment into carefully selected Web3 projects that are fully vetted for Shariah compliance. You don’t need to pick projects—we manage the entire process.",
  },
  {
    id: "item-3",
    question: "Track Your Investment Anytime",
    answer:
      "All transactions are recorded on the blockchain, giving you full visibility. You can track your investment in real-time and monitor how your money is growing with complete transparency.",
  },
  {
    id: "item-4",
    question: "Flexible Growth or Withdrawal",
    answer:
      "As the projects we invest in grow, the value of your $Halal tokens increases. You can choose to hold your tokens for long-term growth or sell them anytime on decentralized exchanges—no lock-up periods or restrictions.",
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
                    <p className="mt-4 text-sm text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
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
