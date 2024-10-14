"use server";

import { IPost } from "@/components/layout/PostCard";

export async function getPostBySlug(slug: string) {
  const url = 'https://halal-defi.ghost.io'
  const key = 'd19290b537379ac5066539ff5d'
  const postUrl = `${url}/ghost/api/content/posts/?key=${key}&include=tags,authors&order=published_at%20desc&filter=slug:${slug}`;

  const postResponse = await fetch(postUrl).then(
    async function (res) {
      const status = res.status;
      const data = await res.json();
      return { data, status };
    }
  );

  if (postResponse.status != 200) {
    console.log(postResponse.data.errors);
    return undefined;
  }
  const post: IPost | undefined =
    postResponse.data.posts[0];

  if (!post) {
    return undefined;
  }

  post.published_at = post.published_at.split("T")[0];
  post.updated_at = post.updated_at.split("T")[0];

  return post;
}
