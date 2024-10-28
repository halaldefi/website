import { getPosts } from "@/actions/getPosts";
import PostCard, { IPost } from "@/components/layout/PostCard";
import { parseISO, compareDesc } from "date-fns";

export default async function FeaturedBlogs() {
  const posts: IPost[] = await getPosts();
  
  // Filter featured posts and sort by updated_at
  const sortedPosts = [...posts]
    .filter(post => post.featured) // Only keep featured posts
    .sort((a, b) => 
      compareDesc(
        parseISO(a.updated_at),
        parseISO(b.updated_at)
      )
    );

  return (
    <div className="bg-gray-50 py-14">
      <div className="text-center text-5xl font-semibold">Blog Highlights</div>
      <div className="mt-16 flex w-full flex-col flex-wrap justify-center gap-8 sm:flex-row">
        {sortedPosts.map((post, idx) => (
          <PostCard key={post.id || idx} data={post} />
        ))}
      </div>
    </div>
  );
}