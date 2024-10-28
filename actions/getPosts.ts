"use server";

import { IPost } from "@/components/layout/PostCard";

export async function getPosts() {
  let posts;

  // const fields =
  //   "slug,title,feature_image,feature_image_alt,published_at,updated_at,excerpt,reading_time";
  const url = 'https://halal-defi.ghost.io'
  const key = 'd19290b537379ac5066539ff5d'
  const postsUrl = `${url}/ghost/api/content/posts/?key=${key}&include=tags,authors&filter=featured:true&limit=3`;

  const postsResponse = await fetch(postsUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return { data, status };
  });

  if (postsResponse.status != 200) {
    console.log(postsResponse.data.errors);
    return [];
  }
  posts = postsResponse.data.posts;

  if (posts == undefined) posts = [];

  // posts.map(
  //   (post: IPost) => (
  //     (post.published_at = post.published_at.split("T")[0]),
  //     (post.updated_at = post.updated_at.split("T")[0])
  //   ),
  // );

  return posts;
}
