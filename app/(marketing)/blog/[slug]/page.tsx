import Image from "next/image";
import { redirect } from "next/navigation";
import { getPostBySlug } from "@/actions/getPostBySlug";

import { IPost } from "@/components/layout/PostCard";

export default async function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post: IPost | undefined = await getPostBySlug(params.slug);
  if (!post) {
    redirect("/");
  }

  return (
    <div className="min-h-screen px-10 md:px-40">
      <div className="relative z-0 mx-auto my-10 aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {post.feature_image && (
          <Image
            src={post.feature_image}
            alt={post.feature_image_alt ? post.feature_image_alt : ""}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="h-auto w-full rounded-lg"
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        {/* title */}
        <div>
          <h1 className="px-4 text-center text-2xl font-bold md:text-4xl">
            {post.title}
          </h1>
        </div>

        {/* data and reading time */}
        <div className="flex items-center space-x-2">
          <p className="text-xs font-semibold md:text-sm">{post.updated_at}</p>
          <span>||</span>
          <p className="text-xs font-semibold md:text-sm">
            {post.reading_time} mins read
          </p>
        </div>
      </div>

      <div className="mt-5 border"></div>

      <article className="relative mx-auto w-full max-w-4xl text-white">
        <div className="prose mx-auto max-w-3xl py-3 text-justify dark:prose-invert prose-a:text-blue-500">
          {post.html && (
            <div
              dangerouslySetInnerHTML={{
                __html: post.html,
              }}
            ></div>
          )}
        </div>
      </article>
    </div>
  );
}
