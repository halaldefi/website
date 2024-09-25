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
    question: "Fund Allocation",
    answer:
      "Purchase $Halal tokens on our decentralized exchange, Halal DEX. The process is simple—sign up with your email or phone and buy crypto with a card, or trade directly on platforms like 1Inch.",
  },
  {
    id: "item-3",
    question: "Strategic Trading and Transparency",
    answer:
      "Purchase $Halal tokens on our decentralized exchange, Halal DEX. The process is simple—sign up with your email or phone and buy crypto with a card, or trade directly on platforms like 1Inch.",
  },
  {
    id: "item-4",
    question: "Grow and Trade Your Investment",
    answer:
      "Purchase $Halal tokens on our decentralized exchange, Halal DEX. The process is simple—sign up with your email or phone and buy crypto with a card, or trade directly on platforms like 1Inch.",
  },
];

export default function () {
  return (
    <section>
      <div className="align-center flex w-full justify-center bg-[#F8F8F8]">
        <div className="w-[95%] bg-[#F8F8F8] md:w-[80%] lg:w-[80%]">
          <div className="relative z-10 my-10 grid grid-cols-7 gap-3">
            <div className="relative col-span-full flex overflow-hidden rounded-2xl bg-white lg:col-span-7">
              <div className="card relative h-full w-full overflow-hidden rounded-3xl">
                <div className="z-20 flex w-full flex-col flex-wrap p-10 lg:flex-row">
                  <div className="flex w-full flex-col justify-between lg:w-2/5">
                    <p className="text-7xl text-black">How Halal.io Works</p>
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
