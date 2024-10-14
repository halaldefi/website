import Image from "next/image";
import { getPosts } from "@/actions/getPosts";
import { getTags } from "@/actions/getTags";
import { EmblaOptionsType } from "embla-carousel";

import PostCard, { IPost, ITag } from "@/components/layout/PostCard";
import BlogEmblaCarousel from "@/components/sections/BlogEmblaCarousal";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default async function FeaturedBlogs() {
  const posts: IPost[] = await getPosts();
  const tags: ITag[] = await getPosts();
//   Filter posts that have a tag with the name "Featured"
  const featuredPosts = posts.filter((post) =>
    post.featured == true
  ).slice(0, 3);

  return (
    <div className="py-14">
      <div className="text-center text-6xl font-semibold">Blog Highlights</div>
      <div className="mt-16 flex w-full flex-col flex-wrap justify-center gap-8 sm:flex-row">
        {featuredPosts.map((post, idx) => (
          <PostCard key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
