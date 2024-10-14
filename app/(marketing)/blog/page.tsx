import Image from "next/image";
import { getPosts } from "@/actions/getPosts";
import { getTags } from "@/actions/getTags";

import PostCard, { IPost, ITag } from "@/components/layout/PostCard";
import BlogEmblaCarousel from "@/components/sections/BlogEmblaCarousal";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { EmblaOptionsType } from "embla-carousel";

export default async function Blog() {
  const posts: IPost[] = await getPosts();
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const tags: ITag[] = await getPosts();
  return (
    <div>
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/_static/landing/Vector.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at top center, rgba(255, 199, 114, 0.1) 0%, rgba(255, 199, 114, 0.2) 5%, rgba(255, 255, 255, 0) 50%)",
            transform: "scale(1.5)",
          }}
        ></div>
        <div className="relative z-20 gap-5 text-center">
          <div className="mb-4">
              <MaxWidthWrapper className="bg-white">
                <div className="rounded-xl p-0 md:p-4 lg:p-4 xl:p-4">
                  <BlogEmblaCarousel slides={posts} options={OPTIONS} />
                </div>
              </MaxWidthWrapper>
          </div>
        </div>
      </section>
      <div className="flex w-full flex-col flex-wrap justify-center gap-8 sm:flex-row">
        {posts.map((post, idx) => (
          <PostCard key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
