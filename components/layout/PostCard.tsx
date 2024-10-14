import Image from "next/image";
import Link from "next/link";

import { Icons } from "../shared/icons";

export interface IPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt?: string;
  codeinjection_head: any;
  codeinjection_foot: any;
  custom_template: any;
  canonical_url: any;
  tags: ITag[];
  authors: Author[];
  primary_author: PrimaryAuthor;
  primary_tag?: PrimaryTag;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  comments: boolean;
  og_image: any;
  og_title: any;
  og_description: any;
  twitter_image: any;
  twitter_title: any;
  twitter_description: any;
  meta_title: any;
  meta_description: any;
  email_subject: any;
  frontmatter: any;
  feature_image_alt: any;
  feature_image_caption?: string;
}

export interface ITag {
  id: string;
  name: string;
  slug: string;
  description: any;
  feature_image: any;
  visibility: string;
  og_image: any;
  og_title: any;
  og_description: any;
  twitter_image: any;
  twitter_title: any;
  twitter_description: any;
  meta_title: any;
  meta_description: any;
  codeinjection_head: any;
  codeinjection_foot: any;
  canonical_url: any;
  accent_color: any;
  url: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  profile_image: any;
  cover_image: any;
  bio: any;
  website: any;
  location: any;
  facebook: any;
  twitter: any;
  meta_title: any;
  meta_description: any;
  url: string;
}

export interface PrimaryAuthor {
  id: string;
  name: string;
  slug: string;
  profile_image: any;
  cover_image: any;
  bio: any;
  website: any;
  location: any;
  facebook: any;
  twitter: any;
  meta_title: any;
  meta_description: any;
  url: string;
}

export interface PrimaryTag {
  id: string;
  name: string;
  slug: string;
  description: any;
  feature_image: any;
  visibility: string;
  og_image: any;
  og_title: any;
  og_description: any;
  twitter_image: any;
  twitter_title: any;
  twitter_description: any;
  meta_title: any;
  meta_description: any;
  codeinjection_head: any;
  codeinjection_foot: any;
  canonical_url: any;
  accent_color: any;
  url: string;
}

export default function PostCard({
  data,
  bgColor = "transparent",
}: {
  data: IPost;
  bgColor?: string;
}) {
  return (
    <div
      className="flex cursor-pointer flex-col rounded-lg p-3 sm:w-2/4 lg:w-2/5 xl:w-1/4"
      style={{ backgroundColor: bgColor }}
    >
      <Link href={data.url} className="grow">
        <div>
          <Image
            src={data.feature_image}
            alt={data.feature_image_alt ? data.feature_image_alt : ""}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="h-auto w-full rounded-lg"
          />
        </div>

        {/* Reading time and other info */}
        <div className="mt-3">
          <div className="flex items-center text-sm font-bold">
            <Icons.clock className="mr-3" />
            <span className="ml-2">{data.reading_time} Mins Read</span>
            <div className="ml-4"></div>
            {/* <Link href={data.authors[0].url}> */}
              <Icons.user className="size-4 text-gray-400" />{" "}
              <span className="ml-2">{data.authors[0].name}</span>
            {/* </Link> */}
          </div>
        </div>

        {/* Title */}
        <div className="mt-2 text-xl font-bold">{data.title}</div>

        {/* Excerpt */}
        {/* <div className="mt-2 line-clamp-2 text-justify text-sm text-gray-500">
          {data.excerpt}
        </div> */}
      </Link>

      {/* Author's name at the bottom */}
      {/* <Link href={`/blog/${data.slug}`}>
        <div className="mt-2 flex items-center text-justify text-sm font-bold">
          <Icons.user className="size-4 text-gray-400" />{" "}
          <span className="ml-2"> {data.authors[0].name} </span>
        </div>
      </Link> */}
    </div>
  );
}
