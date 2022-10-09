import { BaseURL } from "../../utils/baseurl";
import { NewsCard } from "../../components/newsCard.js";
import styles from "../../styles/pages.module.css";
import { PaginationTab } from "../../components/PaginationTab";

export default function Pages({ data }) {
  console.log(data);
  return (
    <>
      <div className={styles.page}>
        {data.map((post) => (
          <>
            <NewsCard
              key={post.id}
              title={post.title}
              date={post.published_at}
              postImage={post.featured_image_url}
              authorImage={post.user.profile_image}
              name={post.user.name}
              surname={post.user.surname}
            />
          </>
        ))}
      </div>
      <div className={styles.pagination}>
        <PaginationTab />
      </div>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pageid: "1" } },
      { params: { pageid: "2" } },
      { params: { pageid: "3" } },
    ],

    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${BaseURL}/posts/${params.pageid}.json`);
  const { data } = await res.json();
  return { props: { data } };
}
