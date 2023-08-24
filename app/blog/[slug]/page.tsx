// Revalidate data interval
export const revalidate = 1200;

// Typescript interface for Posts
interface Post {
  title: string;
  content: string;
  slug: string;
}

// Typescript interface for Props
interface Props {
  params: { slug: string };
}

// A webpage to display blog posts
export default async function BlogPostPage({ params }: Props) {

  // Fetch all posts from mock data content api
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  // Find the maching post with non-null assertion
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}