"use server";

import { ITag } from "@/components/layout/PostCard";

export async function getTags() {
  const url = 'https://halal-defi.ghost.io'
  const key = 'd19290b537379ac5066539ff5d'
  const tagsUrl = `${url}/ghost/api/content/tags/?key=${key}`;

  const tagsResponse = await fetch(tagsUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return { data, status };
  });

  if (tagsResponse.status != 200) {
    console.log(tagsResponse.data.errors);
    return [];
  }
  let tags: ITag[] = tagsResponse.data.tags;

  if (tags == undefined) tags = [];

  return tags;
}
