import { BaseURL } from "../utils/formatApi";
import { NewsCard } from "../components/newsCard.js";
export default function Posts({ posts }) {
  const data = posts.data;
  console.log(posts);
  return (
    <>
      {data.map((post) => (
        <NewsCard
          title={post.title}
          date={post.published_at}
          image={post.featured_image_url}
        />
      ))}
    </>
  );
}
export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${BaseURL}/posts/1.json`);
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}
