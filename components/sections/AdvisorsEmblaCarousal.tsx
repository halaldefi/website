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

const AdvisorsEmblaCarousel: React.FC<PropType> = (props) => {
  const slides = [
    {
      img: "HazikMohamed.jpeg",
      name: "Dr. Hazik Mohamed",
      role: "Director at Stellar Consulting Group",
      linkedin: "https://www.linkedin.com/in/hazikm/",
      place: "Singapore",
    },
    {
      img: "RezaRayman.jpeg",
      name: "Reza Rayman",
      role: "Compliance Manager at TakaDAO",
      linkedin: "https://www.linkedin.com/in/reza-rayman-a1199626/",
      place: "South Africa",
    },
    {
      img: "AjmalMuhammad.jpeg",
      name: "Dr. Ajmal Muhammad",
      role: "Senior Blockchain Engineer at Enoda",
      linkedin: "https://www.linkedin.com/in/ajmal-muhammad-06082256/",
      place: "United Kingdom",
    },
    {
      img: "OthmanAlDuwaiki.jpeg",
      name: "Othman Al Duwaiki",
      role: "Shariah Advisor at Ethis",
      linkedin:
        "https://www.linkedin.com/in/othman-al-duwaiki-msc-csaa-epmif-594699149/",
      place: "Oman",
    },
    {
      img: "Naquib.jpeg",
      name: "Naquib Mohammed",
      role: "Founder at MRHB.NETWORK",
      linkedin: "https://www.linkedin.com/in/mohammednaquib/",
      place: "Australia",
    },
    {
      img: "MajdAlaily.jpeg",
      name: "Majd Alaily",
      role: "Founder at Ruya Advisory",
      linkedin: "https://www.linkedin.com/in/majdalaily/",
      place: "Lebanon",
    },
    {
      img: "AlmasS.jpeg",
      name: "Almas Sayyed",
      role: "Founder at PuneDAO",
      linkedin: "https://www.linkedin.com/in/almassayyed/",
      place: "India",
    },
    {
      img: "SaifUllah.jpeg",
      name: "Saif Ullah",
      role: "Co-Founder at Dolf DeFi",
      linkedin: "https://www.linkedin.com/in/ullahsaif/",
      place: "India",
    },
    {
      img: "yahia.jpeg",
      name: "Yehia Tarek",
      role: "Blockchain Engineer at Nethermind",
      linkedin: "https://www.linkedin.com/in/yehia-tarek-abdelmonem/ ",
      place: "Azerbaijan",
    },
    {
      img: "farhan.jpeg",
      name: "Farhan Khwaja",
      role: "Software Engineer at ThirdWeb",
      linkedin: "https://www.linkedin.com/in/khwajafarhan/ ",
      place: "United States",
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
    <section className="embla2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div>
                <div className="relative mt-2 min-h-72 w-full flex-1">
                  <div className="absolute left-2 top-1 z-10 rounded-xl bg-white px-2 py-1 text-xs text-black">
                    {item.place}
                  </div>
                  <Image
                    src={`/_static/advisors/${item.img}`}
                    alt={`${item.name}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="rounded-xl grayscale"
                  />
                </div>
                <div className="mt-2 text-lg font-bold">{item.name}</div>
                <div className="mt-1 min-h-[40px] text-sm">{item.role}</div>
                <div className="mt-1 w-fit rounded-3xl border-2 border-black px-3 py-1 text-xs font-bold">
                  <a rel="nofollow" target="_blank" href={item.linkedin}>
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default AdvisorsEmblaCarousel;
