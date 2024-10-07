"use client";

import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarousalArrow";

type PropType = {
  options?: EmblaOptionsType;
};

const TeamEmblaCarousel: React.FC<PropType> = (props) => {
  const slides = [
    {
      img: "SS.jpg",
      name: "Shuhaib Shariff",
      role: "Co-founder, CEO",
      linkedin: "https://in.linkedin.com/in/shuhaib",
    },
    {
      img: "Hamza.jpeg",
      name: "Hamza Ahmed",
      role: "Lead Engineer",
      linkedin: "https://in.linkedin.com/in/ahmed-hamza-679067104",
    },
    {
      img: "John.jpg",
      name: "John Hashim",
      role: "Lead Engineer",
      linkedin: "https://www.linkedin.com/in/john-hashim/",
    },
  ];

  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla1 mx-20">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div>
                <div className="relative mt-3 min-h-96 w-full flex-1">
                  <Image
                    src={`/_static/about/${item.img}`}
                    alt={`${item.name}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="rounded-xl"
                  />
                </div>
                <div className="mt-3 text-center text-lg font-bold">
                  {item.name}
                </div>
                <div className="mt-1 text-center text-sm">{item.role}</div>
                <div className="mt-1 w-fit rounded-3xl mx-auto border-2 border-black px-3 py-1 text-xs font-bold">
                  <a rel="nofollow" target="_blank" href={item.linkedin}>
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls lg:hidden xl:hidden">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default TeamEmblaCarousel;
