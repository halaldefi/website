"use client";

import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "lucide-react";

import { IPost } from "../layout/PostCard";
import { Icons } from "../shared/icons";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarousalArrow";

type PropType = {
  options?: EmblaOptionsType;
  slides?: IPost[];
};

const BlogEmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides &&
            slides.map((post, index) => (
              <div className="embla__slide" key={index}>
                <div className="flex">
                  <div className="w-1/2 p-4">
                    <Image
                      src={post.feature_image}
                      alt={post.feature_image_alt ? post.feature_image_alt : ""}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-4">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="line-clamp-2 text-left text-4xl font-semibold">
                          {post.title}
                        </div>
                        <div className="mt-8 pr-32 text-left text-sm">
                          {post.excerpt}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm font-bold">
                          <Icons.clock className="mr-3" />
                          <span className="ml-2">
                            {post.reading_time} Mins Read
                          </span>
                          <div className="ml-4"></div>
                          <Icons.eye />
                          <span className="ml-2">
                            {post.authors[0].name}
                          </span>
                        </div>
                      </div>
                    </div>
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

export default BlogEmblaCarousel;
