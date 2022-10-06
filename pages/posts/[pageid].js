import { BaseURL } from "../../utils/formatApi";
import { NewsCard } from "../../components/newsCard.js";
export default function Posts({ posts }) {
  const data = posts.data;
  console.log(posts);
  return (
    <>
      {data.map((post) => (
        <>
          <NewsCard
            title={post.title}
            date={post.published_at}
            postImage={post.featured_image_url}
            authorImage={post.user.profile_image}
            name={post.user.name}
            surname={post.user.surname}
          />
        </>
      ))}
    </>
  );
}
export async function getStaticProps(context) {
  const { params } = context;

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${BaseURL}/posts/${params.id}`);
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}
// export async function getServerSideProps(pageContext) {
//   const pageNumber = pageContext.query.pageid;
// }
